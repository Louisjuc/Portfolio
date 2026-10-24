import { t } from "../translation.js";

/** @type {string} Backend endpoint that sends the contact mail. */
const ENDPOINT = "api/contact_form_mail.php";

/**
 * Initializes the contact form: keeps the submit button in sync with the
 * form's validity and sends the form via fetch instead of a page reload.
 * Does nothing if no `.form__mail` element exists on the page.
 * @returns {void}
 */
export function initContactForm() {
  const form = document.querySelector(".form__mail");
  if (!form) return;

  updateSubmitState(form);
  form.addEventListener("input", () => updateSubmitState(form));
  form.addEventListener("change", () => updateSubmitState(form));
  initFieldValidation(form);

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    sendForm(form);
  });
}

/**
 * Shows an error below each required field once the user leaves it empty:
 * text fields are checked on blur, the checkbox when it gets unchecked.
 * An existing error disappears as soon as the field becomes valid again.
 * @param {HTMLFormElement} form - The form whose required fields are watched.
 * @returns {void}
 */
function initFieldValidation(form) {
  form.querySelectorAll("[required]").forEach(watchField);

  form.addEventListener("reset", () => {
    form.querySelectorAll(".is-invalid").forEach(clearFieldError);
  });
}

/**
 * Validates a single required field: the checkbox on change, text fields
 * on blur and – once an error is shown – on every input.
 * @param {HTMLInputElement | HTMLTextAreaElement} field - The field to watch.
 * @returns {void}
 */
function watchField(field) {
  if (field.type === "checkbox") {
    field.addEventListener("change", () => validateField(field));
    return;
  }
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("input", () => {
    if (field.classList.contains("is-invalid")) validateField(field);
  });
}

/**
 * Checks a single field and shows or removes its error message.
 * @param {HTMLInputElement | HTMLTextAreaElement} field - The field to check.
 * @returns {void}
 */
function validateField(field) {
  if (field.checkValidity()) clearFieldError(field);
  else showFieldError(field, getErrorMessage(field));
}

/**
 * Returns the error message matching the field's current validity state,
 * in the currently active language.
 * @param {HTMLInputElement | HTMLTextAreaElement} field - An invalid field.
 * @returns {string}
 */
function getErrorMessage(field) {
  if (field.type === "checkbox") return t("privacyRequired");
  if (field.validity.typeMismatch) return t("emailInvalid");
  return t(`${field.name}Required`);
}

/**
 * Marks the field red and shows the message below it, creating the
 * message element on first use.
 * @param {HTMLInputElement | HTMLTextAreaElement} field - The invalid field.
 * @param {string} message - Error text to show.
 * @returns {void}
 */
function showFieldError(field, message) {
  const container = field.closest("label, .policy");
  let error = container.querySelector(".form__error");
  if (!error) {
    error = document.createElement("span");
    error.className = "form__error";
    error.id = `${field.name || field.id}-error`;
    container.append(error);
  }
  error.textContent = message;
  field.classList.add("is-invalid");
  field.setAttribute("aria-invalid", "true");
  field.setAttribute("aria-describedby", error.id);
}

/**
 * Removes the red border and the error message from the field.
 * @param {HTMLInputElement | HTMLTextAreaElement} field - The field to reset.
 * @returns {void}
 */
function clearFieldError(field) {
  field.closest("label, .policy").querySelector(".form__error")?.remove();
  field.classList.remove("is-invalid");
  field.removeAttribute("aria-invalid");
  field.removeAttribute("aria-describedby");
}

/**
 * Sends the form data as JSON to {@link ENDPOINT} and shows a success or
 * error message. Resets the form on success.
 * @param {HTMLFormElement} form - The contact form to send.
 * @returns {Promise<void>}
 */
async function sendForm(form) {
  setButtonLoading(form, true);
  showStatus(form, "");
  try {
    await postContact(Object.fromEntries(new FormData(form)));
    form.reset();
    showStatus(form, t("formSuccess"), "success");
  } catch {
    showStatus(form, t("formError"), "error");
  } finally {
    setButtonLoading(form, false);
    updateSubmitState(form);
  }
}

/**
 * Posts the contact data as JSON to {@link ENDPOINT}.
 * @param {Record<string, FormDataEntryValue>} data - The form values.
 * @returns {Promise<void>}
 * @throws {Error} If the request fails or the backend reports no success.
 */
async function postContact(data) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      message: data.message,
      website: data.website ?? "", // honeypot, stays empty for humans
    }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) throw new Error(result.error);
}
/**
 * Disables the submit button while any required field is missing or invalid.
 * Skipped while the form is being sent.
 * @param {HTMLFormElement} form - The form whose submit button is updated.
 * @returns {void}
 */
function updateSubmitState(form) {
  const button = form.querySelector('[type="submit"]');
  if (!button || button.dataset.loading) return;
  button.disabled = !form.checkValidity();
}

/**
 * Switches the form's submit button between its loading and normal state.
 * @param {HTMLFormElement} form - The form whose submit button is updated.
 * @param {boolean} isLoading - Whether the form is currently being sent.
 * @returns {void}
 */
function setButtonLoading(form, isLoading) {
  const button = form.querySelector('[type="submit"]');
  if (!button) return;
  button.disabled = isLoading;
  if (isLoading) button.dataset.loading = "true";
  else delete button.dataset.loading;
}

/**
 * Shows a status message below the form, creating the element on first use.
 * @param {HTMLFormElement} form - The form to show the message in.
 * @param {string} text - Message text; an empty string clears the message.
 * @param {"success" | "error"} [type] - Message type, stored in `data-type` for styling.
 * @returns {void}
 */
function showStatus(form, text, type) {
  let status = form.querySelector(".form__status");
  if (!status) {
    status = document.createElement("p");
    status.className = "form__status";
    status.setAttribute("role", "status");
    form.append(status);
  }
  status.textContent = text;
  status.dataset.type = type ?? "";
}
