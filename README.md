# Portfolio – Louis Juchem

Persönliche Portfolio-Website von Louis Juchem, Frontend Developer aus München. Die Seite stellt mich, meine Skills und meine Projekte vor und bietet ein Kontaktformular.

**Live:** [louis-juchem.de](https://louis-juchem.de)

## Inhalt der Seite

- **Hero** – Name, Rolle und Portraitbild
- **Why me** – kurze Vorstellung mit animiertem Info-Slider (Standort, Remote-Arbeit)
- **Skills** – Angular, TypeScript, JavaScript, HTML, CSS, REST-API, Supabase, Git, Material Design, Scrum sowie das Thema, das ich gerade lerne (Vue.js)
- **Projects** – Tab-Ansicht mit drei Projekten (siehe unten)
- **Reviews** – Feedback von Kolleginnen und Kollegen
- **Contact** – Kontaktformular mit Validierung
- **Legal notice** – Impressum und Datenschutzerklärung (`pages/legal.html`)

### Projekte

| Projekt | Beschreibung | Technik | Live | Code |
|---|---|---|---|---|
| **Join** | Kanban-Aufgabenmanager mit Drag-and-Drop, Kontakten, Kategorien und Teilaufgaben | HTML, CSS, JavaScript, Firebase | [Demo](https://join.louis-juchem.de) | [GitHub](https://github.com/Louisjuc/join-louis) |
| **Sharkie** | Objektorientiertes 2D-Jump-and-Run-Spiel | HTML, CSS, JavaScript | [Demo](https://sharkie.louis-juchem.de) | [GitHub](https://github.com/Louisjuc/Sharkie) |
| **PollApp** | Umfrage-App mit Einzel-/Mehrfachauswahl, Kategorien, Enddatum und Live-Ergebnissen | Angular, TypeScript, CSS, Supabase | [Demo](https://pollapp.louis-juchem.de) | [GitHub](https://github.com/Louisjuc/PollApp) |

## Features

- **Responsive** – optimiert für Desktop, Tablet und Smartphone (Breakpoints bei 1200, 900 und 500 px), mobile Burger-Navigation
- **Zweisprachig** – Umschaltung zwischen Deutsch und Englisch ohne Neuladen der Seite
- **Kontaktformular**
  - Validierung im Browser (Pflichtfelder, gültiger Name, E-Mail-Format, Datenschutz-Checkbox) mit Fehlermeldungen pro Feld
  - Absenden per `fetch` ohne Seiten-Reload, mit Lade-, Erfolgs- und Fehlerzustand
  - Serverseitige Prüfung in PHP (Format und Länge der Eingaben)
  - Spamschutz über ein unsichtbares Honeypot-Feld
- **Barrierearme Formularfehler** – `aria-invalid` und `aria-describedby` für Screenreader

## Technik

Die Seite kommt ohne Framework und ohne Build-Schritt aus:

- HTML5
- CSS (aufgeteilt in Variablen, Layout und Komponenten)
- JavaScript als ES-Module
- PHP für den Mailversand des Kontaktformulars
- Lokal eingebundene Schriften: Anta und Josefin Sans

## Lokal starten

Da das JavaScript als ES-Modul geladen wird, funktioniert die Seite nicht per Doppelklick auf `index.html` (`file://`). Sie muss über einen lokalen Webserver laufen.

**Ohne Kontaktformular** (reine Ansicht):

```bash
git clone https://github.com/Louisjuc/Portfolio.git
cd Portfolio
python3 -m http.server 8000
```

**Mit Kontaktformular** (PHP erforderlich):

```bash
php -S localhost:8000
```

Danach im Browser `http://localhost:8000` öffnen. Alternativ funktioniert die VS-Code-Erweiterung „Live Server“ (ohne PHP).

> Hinweis: Damit lokal tatsächlich Mails verschickt werden, muss PHP für den Mailversand (`mail()`) konfiguriert sein. Auf einem normalen Webhosting ist das in der Regel bereits der Fall.

## Kontaktformular einrichten

Die Empfängeradresse liegt bewusst nicht im Repository. So wird sie eingerichtet:

1. `api/config.example.php` nach `api/config.php` kopieren
2. In `config.php` die eigene Adresse eintragen:

   ```php
   $siteEmail = "kontakt@deine-domain.de";
   ```

`api/config.php` steht in der `.gitignore` und wird nicht mit hochgeladen. Fehlt die Datei, antwortet das Backend mit „Server not configured“.

## Projektstruktur

```
Portfolio/
├── index.html                 Einstiegspunkt mit allen Sektionen
├── pages/
│   └── legal.html             Impressum und Datenschutz
├── css/
│   ├── variables.css          Farben, Abstände, @font-face
│   ├── layout.css             Grundlayout, Hero, Navigation, Typografie, Info-Slider
│   └── components.css         Buttons, Icon-Grid, Tabs, Reviews, Formular
├── js/
│   ├── main.js                Initialisiert die Module, mobile Navigation
│   ├── translation.js         Texte DE/EN und Sprachumschaltung
│   └── modules/
│       ├── tabs.js            Tab-Umschaltung der Projekte
│       ├── infoSlider.js      Breitenberechnung für den animierten Info-Slider
│       └── contacts.js        Validierung und Versand des Kontaktformulars
├── api/
│   ├── contact_form_mail.php  Prüft die Eingaben und verschickt die Mail
│   └── config.example.php     Vorlage für config.php (Empfängeradresse)
└── assets/
    ├── fonts/                 Anta, Josefin Sans
    ├── icons/                 Skill- und Kontakt-Icons
    └── img/                   Bilder, Screenshots und Grafiken
```

## Lizenz

Der Code (HTML, CSS, JavaScript, PHP) steht unter der [MIT-Lizenz](LICENSE).

Davon ausgenommen sind Fotos, Texte und alle persönlichen Inhalte – insbesondere das Portraitbild unter `assets/img/`. Dafür gilt: alle Rechte vorbehalten.

## Schriften

Anta und Josefin Sans stehen unter der SIL Open Font License, nicht unter der MIT-Lizenz. Die Lizenztexte liegen jeweils als `OFL.txt` im Schriftordner unter `assets/fonts/`.

## Kontakt

Louis Juchem – louis.juchem@web.de
