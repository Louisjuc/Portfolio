# Portfolio – Louis Juchem

Persönliche Portfolio-Website von Louis Juchem, Frontend Developer aus München. Die Seite stellt mich, meine Skills und meine Projekte vor.

> **Status:** in Arbeit – Texte und Projektinhalte sind teilweise noch Platzhalter.

## Inhalt der Seite

- **Hero** – Name, Rolle und Portraitbild
- **Why me** – kurze Vorstellung und Standort
- **Skills** – Angular, TypeScript, JavaScript, HTML, CSS, REST-API, Supabase, Git, Material Design, Scrum
- **Projects** – Tab-Ansicht mit den Projekten Join, Sharkie und Pokedex

## Technik

Die Seite kommt ohne Framework und ohne Build-Schritt aus:

- HTML5
- CSS (aufgeteilt in Variablen, Layout und Komponenten)
- JavaScript als ES-Module
- Lokal eingebundene Schriften: Anta und Josefin Sans

## Lokal starten

Da das JavaScript als ES-Modul geladen wird, funktioniert die Seite nicht per Doppelklick auf `index.html` (`file://`). Sie muss über einen lokalen Webserver laufen, zum Beispiel:

```bash
git clone <repository-url>
cd Portfolio
python3 -m http.server 8000
```

Danach im Browser `http://localhost:8000` öffnen. Alternativ funktioniert die VS-Code-Erweiterung „Live Server“.

## Projektstruktur

```
Portfolio/
├── index.html            Einstiegspunkt mit allen Sektionen
├── css/
│   ├── variables.css     Farben, Abstände, @font-face
│   ├── layout.css        Grundlayout, Hero, Navigation, Typografie
│   └── components.css    Buttons, Icon-Grid, Tabs, Media Queries
├── js/
│   ├── main.js           Initialisiert die Module
│   └── modules/
│       └── tabs.js       Tab-Umschaltung der Projekte
└── assets/
    ├── fonts/            Anta, Josefin Sans
    ├── icons/            Skill-Icons
    └── img/              Bilder und Grafiken
```

## Lizenz

Der Code (HTML, CSS, JavaScript) steht unter der [MIT-Lizenz](LICENSE).

Davon ausgenommen sind Fotos, Texte und alle persönlichen Inhalte – insbesondere das Portraitbild unter `assets/img/`. Dafür gilt: alle Rechte vorbehalten.

## Schriften

Anta und Josefin Sans stehen unter der SIL Open Font License, nicht unter der MIT-Lizenz. Die Lizenztexte liegen jeweils als `OFL.txt` im Schriftordner unter `assets/fonts/`.

## Kontakt

Louis Juchem – louis.juchem@web.de
