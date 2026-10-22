import { fitInfoSlider } from "./modules/infoSlider.js";

export const translations = {
  de: {
    pageTitle: "Portfolio",
    heroTitle: "Louis Juchem",
    heroSubtitle: "Frontend-Entwickler",
    navWhyMe: "Warum ich",
    navSkills: "Skills",
    navProjects: "Projekte",
    navContact: "Kontakt",
    whyHeading: "Warum ich?",
    locationIntro: "Ich wohne",
    locationDetails: "in München.",
    remoteIntro: "Ich bin bereit,",
    remoteDetails: "im Homeoffice zu arbeiten.",
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
      "Aus persönlichem Interesse beschäftige ich mich derzeit intensiv mit Vue.js, um meine Fähigkeiten zu erweitern. Durch seinen schlanken, komponentenbasierten Ansatz ist es eine hervorragende Ergänzung zu meiner Angular-Erfahrung und eine beliebte Wahl für Projekte jeder Größe.",
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
      "Sharkie hat mir objektorientierte Programmierung in JavaScript beigebracht: Vererbung, Spielschleifen, Kollisionserkennung und Sprite-Animationen auf dem Canvas. Außerdem habe ich gelernt, Sounds zu verwalten und Einstellungen wie Stumm-Schalten in localStorage zu speichern.",
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
    reviewerName: "Marlin Juchem",
    reviewerCompany: "DLR",
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
    emailLabel: "E-Mail:",
    contactEmail: "louis.juchem@web.de",
    phoneLabel: "Tel:",
    contactPhone: "+49 00000",
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
  },
  en: {
    pageTitle: "Portfolio",
    heroTitle: "Louis Juchem",
    heroSubtitle: "Frontend Developer",
    navWhyMe: "Why me",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    whyHeading: "Why me?",
    locationIntro: "I am",
    locationDetails: "located in Munich.",
    remoteIntro: "I am",
    remoteDetails: "open to working remotely.",
    aboutBackground:
      "My background as a media designer taught me to think in layouts, typography and visual hierarchy. My work as a frontend developer lets me bring those ideas to life in code.",
    aboutExperience:
      "Over several years in a recruitment marketing agency, I designed and built print and online job ads, responsive HTML templates and social media banners, including accessible templates that met strict technical requirements. Working closely with client services under tight deadlines taught me to stay structured, reliable and detail-oriented.",
    aboutApproach:
      "Today, I combine this experience with a strong focus on frontend development, building responsive, component-based web applications with clean, maintainable code. The result: interfaces that are not only technically solid, but also visually consistent and easy to use, because I know what designers intend and what developers need.",
    letsTalk: "Let's Talk",
    skillsHeading: "My Skills",
    learningHeading: "I am currently learning",
    learningDescription:
      "Out of personal interest, I’m currently diving into Vue.js to expand my skill set. Its lightweight, component-based approach makes it a great complement to my Angular experience and a popular choice for projects of any size.",
    projectsHeading: "My Projects",
    joinAboutHeading: "About the Project",
    joinAbout:
      "Task manager inspired by the Kanban system. Create and organize tasks with drag and drop, assign contacts and categories, track subtasks and keep the whole team in sync via Firebase.",
    joinProcessHeading: "How I have organised my work process",
    joinProcess:
      "We planned features as small tickets and worked with a clear Git workflow: one branch per feature or fix, a pull request to main and a review by at least one teammate before merging. Shared design tokens and one JS module per page kept the code consistent.",
    joinTeamHeading: "My group work experience",
    joinTeam:
      "Join was built in a team of four developers. Regular check-ins, code reviews and clearly split responsibilities taught me how to communicate early, read other people's code and solve merge conflicts together.",
    technologiesHeading: "Technologies",
    sharkieAboutHeading: "About the Project",
    sharkieAbout:
      "A 2D jump-and-run game based on an object-oriented approach. Help Sharkie collect coins and poison bottles, fight fish and jellyfish and defeat the killer whale at the end of the level.",
    sharkieProcessHeading: "How I have organised my work process",
    sharkieProcess:
      "I structured the game into classes with clear responsibilities, such as a shared movable object, the character, enemies, status bars and the world. That way I could build and test each feature step by step, from movement and collisions to sounds and the endboss fight.",
    sharkieLearningHeading: "What I have learned",
    sharkieLearning:
      "Sharkie taught me object-oriented programming in JavaScript: inheritance, game loops, collision detection and sprite animation on the canvas. I also learned how to manage sounds and save settings like mute in localStorage.",
    pollAppAboutHeading: "About the Project",
    pollAppAbout:
      "A survey app built with Angular and Supabase. Create surveys with multiple questions, single or multiple choice answers, categories and an end date, then vote and watch the results update in real time.",
    pollAppProcessHeading: "How I have organised my work process",
    pollAppProcess:
      "I started with the data model in Supabase (surveys, questions, options and votes) and then built the app around it: an overview page, a detail page and a create dialog. Shared services and reusable components kept the code clean, and I finished by refining the responsive design.",
    pollAppLearningHeading: "What I have learned",
    pollAppLearning:
      "PollApp was my first larger Angular project. I learned to work with components, routing, services and TypeScript interfaces, and to connect a frontend to a real backend with Supabase including real-time updates.",
    reviewsHeading: "Need a team player? Here’s what my colleagues say about me",
    reviewerName: "Marlin Juchem",
    reviewerCompany: "DLR",
    reviewOneQuote:
      "“Louis had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.”",
    reviewTwoQuote:
      "“Louis is a reliable and friendly person. He works in a structured way and writes clear code.”",
    reviewThreeQuote:
      "“He is a trustworthy team player and can cope with the stress of deadlines. Structured work and clear code.”",
    contactHeading: "Contact me",
    contactIntroLineOne: "Let’s build something great together.",
    contactIntroLineTwo:
      "Feel free to reach out, I’m always open to new ideas and opportunities.",
    emailLabel: "E-Mail:",
    contactEmail: "louis.juchem@web.de",
    phoneLabel: "Tel:",
    contactPhone: "+49 00000",
    nameLabel: "Your Name:",
    emailFieldLabel: "Your E-mail:",
    messageLabel: "Your Message:",
    privacyConsentBefore: "I’ve read the",
    privacyPolicyLink: "privacy policy",
    privacyConsentAfter: "and agree to the processing of my data as outlined.",
    sendButton: "Send",
    nameRequired: "Your name is required.",
    emailRequired: "Your e-mail is required.",
    messageRequired: "Your message is required.",
    emailInvalid: "Please enter a valid e-mail address.",
    privacyRequired: "Please accept the privacy policy.",
    formSuccess: "Thank you! Your message has been sent.",
    formError: "Something went wrong. Please try again later.",
  },
};

/**
 * Liefert den Text zum Key in der aktuell gesetzten Sprache.
 * @param {string} key - Key aus {@link translations}
 * @returns {string}
 */
export function t(key) {
  const lang = document.documentElement.lang in translations
    ? document.documentElement.lang
    : "en";
  return translations[lang][key];
}

/**
 * Ermittelt die Startsprache: URL, gespeichert, Browser.
 * @returns {string} "de" oder "en"
 */
export function getInitialLang() {
  const url = new URLSearchParams(location.search).get("lang");
  const browser = navigator.language.startsWith("de") ? "de" : "en";
  return [url, localStorage.getItem("lang"), browser].find(
    (l) => l in translations,
  );
}

/**
 * Setzt Sprache, Texte und Button.
 * @param {string} lang - "de" oder "en"
 */
export function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  history.replaceState(null, "", `?lang=${lang}`);
  document.getElementById("lang-toggle").textContent =
    lang === "de" ? "EN" : "DE";
  fitInfoSlider();
}

/**
 * Registriert den Toggle-Button und setzt die Startsprache.
 */
export function initLanguage() {
  document
    .getElementById("lang-toggle")
    .addEventListener("click", () =>
      setLanguage(document.documentElement.lang === "de" ? "en" : "de"),
    );
  setLanguage(getInitialLang());
}
