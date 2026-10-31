import { fitInfoSlider } from "./modules/infoSlider.js";

export const translations = {
  de: {
    heroSubtitle: "Frontend-Entwickler",
    navWhyMe: "Warum ich",
    navProjects: "Projekte",
    navContact: "Kontakt",
    whyHeading: "Warum ich?",
    locationIntro: "Ich lebe",
    locationDetails: "in München.",
    remoteIntro: "Ich arbeite auch",
    remoteDetails: "gerne Remote.",
    aboutBackground:
      "Durch meinen Hintergrund als Mediengestalter habe ich gelernt, in Layouts, Typografie und visueller Hierarchie zu denken. Meine Arbeit als Frontend-Entwickler ermöglicht es mir, diese Ideen im Code zum Leben zu erwecken.",
    aboutExperience:
      "Während meiner mehrjährigen Tätigkeit bei einer Agentur für Personalmarketing habe ich Print- und Online-Stellenanzeigen, responsive HTML-Vorlagen und Social-Media-Banner entworfen und umgesetzt, darunter auch barrierefreie Vorlagen, die strenge technische Anforderungen erfüllten. Die enge Zusammenarbeit mit der Kundenbetreuung unter hohem Zeitdruck hat mich gelehrt, strukturiert, zuverlässig und detailorientiert zu arbeiten.",
    aboutApproach:
      "Heute verbinde ich diese Erfahrung mit einem starken Fokus auf Frontend-Entwicklung und erstelle responsive, komponentenbasierte Webanwendungen mit sauberem, wartungsfreundlichem Code. Das Ergebnis: Benutzeroberflächen, die nicht nur technisch solide, sondern auch visuell einheitlich und benutzerfreundlich sind, da ich sowohl die Absichten der Designer als auch die Bedürfnisse der Entwickler verstehe.",
    letsTalk: "Lass uns reden",
    skillsHeading: "Meine Skills",
    learningHeading: "Ich lerne gerade",
    learningDescription:
      "Derzeit beschäftige ich mich intensiv mit Vue.js. Durch seinen schlanken, komponentenbasierten Ansatz ist es eine hervorragende Ergänzung zu meiner Angular-Erfahrung und eine beliebte Wahl für Projekte jeder Größe.",
    projectsHeading: "Meine Projekte",
    joinAboutHeading: "Über das Projekt",
    joinAbout:
      "Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise Kontakte und Kategorien zu, verfolge Teilaufgaben und halte das gesamte Team über Firebase auf dem Laufenden.",
    joinProcessHeading: "Wie ich meinen Arbeitsprozess organisiert habe",
    joinProcess:
      "Wir haben Features als kleine Tickets geplant und mit einem klaren Git-Workflow gearbeitet: ein Branch pro Feature oder Fix, ein Pull Request in den Main-Branch und eine Review durch mindestens ein Teammitglied vor dem Merge. Geteilte Design-Tokens und ein JS-Modul pro Seite hielten den Code konsistent.",
    joinTeamHeading: "Meine Erfahrung in der Gruppenarbeit",
    joinTeam:
      "Join wurde in einem Team aus vier Entwicklern gebaut. Regelmäßige Check-ins, Code-Reviews und klar aufgeteilte Verantwortlichkeiten haben mir beigebracht, früh zu kommunizieren, fremden Code zu verstehen und Merge-Konflikte gemeinsam zu lösen.",
    technologiesHeading: "Technologien",
    sharkieAboutHeading: "Über das Projekt",
    sharkieAbout:
      "Ein 2D-Jump-and-Run-Spiel auf objektorientierter Basis. Hilf Sharkie, Münzen und Gifttuben zu sammeln, Fische und Quallen zu bekämpfen und am Ende der Stufe den Killerwal zu besiegen.",
    sharkieProcessHeading: "Wie ich meinen Arbeitsprozess organisiert habe",
    sharkieProcess:
      "Ich habe das Spiel in Klassen mit klaren Aufgabenbereichen strukturiert, etwa ein gemeinsames bewegliches Objekt, die Spielfigur, Gegner, Statusleisten und die Welt. So konnte ich jedes Feature Schritt für Schritt bauen und testen – von Bewegung und Kollision bis zu Sounds und dem Endboss.",
    sharkieLearningHeading: "Was ich gelernt habe",
    sharkieLearning:
      "Sharkie hat mir objektorientierte Programmierung in JavaScript beigebracht: Vererbung, Spielschleifen, Kollisionserkennung und Sprite-Animationen auf dem Canvas. Außerdem habe ich gelernt, Sounds zu verwalten und Einstellungen wie Stummschalten in localStorage zu speichern.",
    pollAppAboutHeading: "Über das Projekt",
    pollAppAbout:
      "Eine Umfrage-App mit Angular und Supabase. Erstelle Umfragen mit mehreren Fragen, Einzel- oder Mehrfachauswahl, Kategorien und Enddatum, stimme ab und verfolge die Ergebnisse in Echtzeit.",
    pollAppProcessHeading: "Wie ich meinen Arbeitsprozess organisiert habe",
    pollAppProcess:
      "Ich habe mit dem Datenmodell in Supabase begonnen (Umfragen, Fragen, Optionen und Stimmen) und danach die App darum aufgebaut: eine Übersichtsseite, eine Detailseite und ein Erstellungsdialog. Geteilte Services und wiederverwendbare Komponenten hielten den Code sauber, und am Ende habe ich das responsive Design verfeinert.",
    pollAppLearningHeading: "Was ich gelernt habe",
    pollAppLearning:
      "PollApp war mein erstes größeres Angular-Projekt. Ich habe gelernt, mit Komponenten, Routing, Services und TypeScript-Interfaces zu arbeiten und ein Frontend mit einem echten Backend über Supabase inklusive Echtzeit-Updates zu verbinden.",
    reviewsHeading:
      "Brauchst du einen Teamplayer? Das sagen meine Kollegen über mich",
    reviewOneQuote:
      "„Louis hat in Zusammenarbeit mit den Teammitgliedern Inhalte entwickelt, formatiert und ausgeliefert. Er ist eine zuverlässige und freundliche Person.“",
    reviewTwoQuote:
      "„Louis ist eine zuverlässige und freundliche Person. Er arbeitet strukturiert und schreibt sauberen Code.“",
    reviewThreeQuote:
      "„Er ist ein vertrauenswürdiger Teamplayer und kommt gut mit Termindruck zurecht. Strukturierte Arbeit und sauberer Code.“",
    contactHeading: "Kontakt aufnehmen",
    contactIntroLineOne: "Lass uns gemeinsam etwas Großartiges erschaffen.",
    contactIntroLineTwo:
      "Schreib mir gerne, ich bin immer offen für neue Ideen und Möglichkeiten.",
    nameLabel: "Dein Name:",
    emailFieldLabel: "Deine E-Mail:",
    messageLabel: "Deine Nachricht:",
    privacyConsentBefore: "Ich habe die",
    privacyPolicyLink: "Datenschutzerklärung",
    privacyConsentAfter:
      "gelesen und stimme der Verarbeitung meiner Daten gemäß den Angaben zu.",
    sendButton: "Senden",
    nameRequired: "Bitte gib deinen Namen ein.",
    emailRequired: "Bitte gib deine E-Mail-Adresse ein.",
    messageRequired: "Bitte gib eine Nachricht ein.",
    emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
    privacyRequired: "Bitte akzeptiere die Datenschutzerklärung.",
    formSuccess: "Danke! Deine Nachricht wurde gesendet.",
    formError: "Etwas ist schiefgelaufen. Bitte versuche es später erneut.",
    footerLegal: "Impressum",
  },
  // English Inputs warnings
  en: {
    nameRequired: "Your name is required.",
    emailRequired: "Your e-mail is required.",
    messageRequired: "Your message is required.",
    emailInvalid: "Please enter a valid e-mail address.",
    privacyRequired: "Please accept the privacy policy.",
    formSuccess: "Thank you! Your message has been sent.",
    formError: "Something went wrong. Please try again later.",
    // Legal page (the German original lives in pages/legal.html)
    legalTranslationNote:
      "This English version is provided for convenience only. In case of any discrepancy, the German version shall prevail.",
    legalImprintTitle: "Legal Notice",
    legalImprintSubtitle:
      "Information pursuant to § 5 DDG (German Digital Services Act)",
    legalCountry: "Germany",
    legalContact: "Contact",
    legalPrivacyTitle: "Privacy Policy",
    legalController: "Controller",
    legalControllerIntro:
      "The controller within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:",
    legalRightsHeading: "Your rights as a data subject",
    legalRightsIntro:
      "Using the contact details provided, you may exercise the following rights under the EU General Data Protection Regulation (GDPR) at any time:",
    legalRightAccess:
      "access to the data stored about you and its processing (Art. 15 GDPR),",
    legalRightRectification:
      "rectification of inaccurate personal data (Art. 16 GDPR),",
    legalRightErasure: "erasure of the data stored about you (Art. 17 GDPR),",
    legalRightRestriction:
      "restriction of data processing where we are not yet allowed to delete your data due to legal obligations (Art. 18 GDPR),",
    legalRightObjection:
      "objection to the processing of your data by us (Art. 21 GDPR) and",
    legalRightPortability:
      "data portability, provided you have consented to the data processing or have concluded a contract with us (Art. 20 GDPR).",
    legalConsentWithdrawal:
      "If you have given us your consent, you may withdraw it at any time with effect for the future.",
    legalComplaint:
      "You may lodge a complaint with a supervisory authority at any time, e.g. the competent supervisory authority of the federal state in which you reside or the authority responsible for us as the controller.",
    legalAuthorityList:
      "A list of the supervisory authorities (for the non-public sector) including their addresses can be found at:",
    legalHosting:
      "This website is hosted by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany. The servers are located in Germany. Hetzner processes the data generated when visiting the website on our behalf (Art. 28 GDPR). No data is transferred to a third country.",
    legalActivitiesHeading: "Processing activities",
    legalVisitHeading:
      "Collection of general information when visiting our website",
    legalPurposeHeading: "Type and purpose of processing",
    legalVisitPurpose:
      "When you access our website, i.e. when you do not register or otherwise submit information, information of a general nature is collected automatically. This information (server log files) includes, for example, the type of web browser, the operating system used, the domain name of your internet service provider, your IP address and similar data.",
    legalVisitPurposeList:
      "In particular, it is processed for the following purposes:",
    legalVisitPurposeItem: "Ensuring a smooth connection to the website",
    legalVisitNoProfiling:
      "We do not use your data to draw conclusions about you as a person. However, we reserve the right to review the server log files retrospectively should there be concrete indications of unlawful use.",
    legalBasisInterestHeading: "Legal basis and legitimate interest",
    legalVisitBasis:
      "Processing is carried out in accordance with Art. 6(1)(f) GDPR on the basis of our legitimate interest in improving the stability and functionality of our website and in ensuring system security and detecting misuse.",
    legalRecipientsHeading: "Recipients",
    legalVisitRecipients:
      "The recipient of the data is our hosting provider Hetzner (see section “Hosting”), which acts as a processor.",
    legalStorageHeading: "Storage period",
    legalVisitStorage:
      "Data is stored in server log files in a form that allows the identification of the data subjects for a maximum of 4 days, unless a security-relevant event occurs (e.g. a DDoS attack).",
    legalVisitStorageIncident:
      "In the event of such an incident, server log files are stored until the security-relevant event has been eliminated and fully investigated.",
    legalProvisionHeading: "Mandatory or required provision of data",
    legalVisitProvision:
      "The provision of the aforementioned personal data is neither legally nor contractually required. Without the IP address, however, the service and functionality of our website cannot be guaranteed. In addition, individual services may be unavailable or restricted.",
    legalObjectionHeading: "Objection",
    legalObjectionReference:
      "Please see the information on your right to object under Art. 21 GDPR below.",
    legalContactingHeading: "Contacting us",
    legalContactPurposeForm:
      "Our website provides a contact form that can be used to get in touch electronically. If a user makes use of this option, the data entered in the form is transmitted to us and stored.",
    legalContactPurposeDataIntro:
      "In addition, the following data is stored at the time the message is sent:",
    legalContactIp: "IP address of the requesting device",
    legalContactDate: "Date and time of the request",
    legalContactPurposeEmail:
      "You can also contact us via the e-mail address provided. In this case, the user's personal data transmitted with the e-mail is stored. This includes the date and time the e-mail was sent, the e-mail address, IP addresses and information about the servers involved in the e-mail communication.",
    legalContactPurposeContent:
      "Regardless of the chosen means of communication, we collect the content of your request. Your data is stored for the purpose of communicating with you individually.",
    legalBasisHeading: "Legal basis",
    legalContactBasis:
      "The data is processed on the basis of a legitimate interest (Art. 6(1)(f) GDPR).",
    legalContactInterest:
      "Our legitimate interest in processing your data is to enable you to contact us easily.",
    legalContactPrecontract:
      "If you contact us to request a quote, the data is processed in order to carry out pre-contractual measures (Art. 6(1)(b) GDPR).",
    legalContactRecipients:
      "The contact form is processed via the server of our hosting provider Hetzner Online GmbH (Germany) and delivered by e-mail to our mailbox hosted there. Hetzner acts as a processor or technical service provider.",
    legalContactStorage:
      "Data is deleted once the purpose no longer applies after your request has been handled, at the latest.",
    legalContactRetention:
      "If a contractual relationship is established, we are subject to the statutory retention periods. These are generally 6 or 10 years for reasons of proper accounting and tax law requirements.",
    legalContactProvision:
      "The provision of your personal data is voluntary. However, we can only process your request if you provide us with the necessary data and the reason for your request.",
    legalCookies:
      "This website does not use cookies or any tracking or analytics services. Only your language setting is stored in your browser's local storage (see the following section).",
    legalLanguageStorageHeading: "Storage of your language setting",
    legalLanguageStorage:
      "When you change the language of the website, your choice is stored in your browser's local storage (localStorage) so that it is kept for your next visit. No personal data is transmitted to us in the process. This storage is strictly necessary for the function you requested (Section 25(2) No. 2 TDDDG, German Telecommunications Digital Services Data Protection Act). You can delete the entry at any time via your browser settings.",
    legalObjectionRightHeading:
      "Information about your right to object under Art. 21 GDPR",
    legalObjectionCaseHeading: "Right to object in individual cases",
    legalObjectionCase:
      "You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is based on Art. 6(1)(f) GDPR (data processing on the basis of a balancing of interests); this also applies to profiling based on this provision within the meaning of Art. 4(4) GDPR.",
    legalObjectionEffect:
      "If you object, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims.",
    legalObjectionRecipientHeading: "Recipient of an objection",
    legalChangesHeading: "Changes to our privacy policy",
    legalChanges:
      "We reserve the right to amend this privacy policy so that it always complies with current legal requirements or to reflect changes to our services, e.g. when introducing new services. The new privacy policy will then apply to your next visit.",
    legalQuestionsHeading: "Questions about data protection",
    legalQuestions:
      "If you have any questions about data protection, please send an e-mail to the controller named above.",
    legalCopyrightHeading: "Copyright notice",
    legalCreditBefore:
      "This privacy policy was created with the help of activeMind AG – the experts for",
    legalCreditLink: "external data protection officers",
  },
};

/**
 * Returns the text for the given key in the currently active language.
 * Falls back to English if the document language is not supported.
 * @param {string} key - Key from {@link translations}.
 * @returns {string}
 */
export function t(key) {
  const lang =
    document.documentElement.lang in translations
      ? document.documentElement.lang
      : "en";
  return translations[lang][key];
}

/**
 * Determines the initial language, in this order of priority:
 * `?lang=` URL parameter, language saved in localStorage, browser language.
 * @returns {string} "de" or "en"
 */
export function getInitialLang() {
  const url = new URLSearchParams(location.search).get("lang");
  const browser = navigator.language.startsWith("de") ? "de" : "en";
  return [url, localStorage.getItem("lang"), browser].find(
    (l) => l in translations,
  );
}

/**
 * Applies the language: updates all `[data-i18n]` texts, the `lang`
 * attribute, the URL and the toggle button label.
 * Does not touch localStorage, see {@link toggleLanguage}.
 * The original English text from the HTML is stored on the first call
 * and used as a fallback when no translation exists.
 * @param {string} lang - "de" or "en"
 * @returns {void}
 */
export function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.dataset.i18nEn ??= el.textContent;
    el.textContent = translations[lang][el.dataset.i18n] ?? el.dataset.i18nEn;
  });
  document.documentElement.lang = lang;
  history.replaceState(null, "", `?lang=${lang}`);
  document.getElementById("lang-toggle").textContent =
    lang === "de" ? "EN" : "DE";
  fitInfoSlider();
}

/**
 * Switches to the other language and saves the choice in localStorage.
 * Saving only happens here, on an explicit click, so the storage counts as
 * requested by the user (§ 25 Abs. 2 Nr. 2 TDDDG) and needs no consent.
 * @returns {void}
 */
function toggleLanguage() {
  const lang = document.documentElement.lang === "de" ? "en" : "de";
  localStorage.setItem("lang", lang);
  setLanguage(lang);
}

/**
 * Registers the click handler on the language toggle button and applies
 * the initial language without saving it.
 * @returns {void}
 */
export function initLanguage() {
  document
    .getElementById("lang-toggle")
    .addEventListener("click", toggleLanguage);
  setLanguage(getInitialLang());
}
