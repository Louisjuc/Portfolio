# Portfolio – Louis Juchem

Persönliche Portfolio-Website von Louis Juchem, Frontend Developer aus München. Die Seite stellt mich, meine Skills und meine Projekte vor.

**Live ansehen:** [louis-juchem.de](https://louis-juchem.de)

## Projekte

| Projekt | Beschreibung | Technik | Live | Code |
|---|---|---|---|---|
| **Join** | Kanban-Aufgabenmanager mit Drag-and-Drop, Kontakten, Kategorien und Teilaufgaben | HTML, CSS, JavaScript, Firebase | [Demo](https://join.louis-juchem.de) | [GitHub](https://github.com/Louisjuc/join-louis) |
| **Sharkie** | Objektorientiertes 2D-Jump-and-Run-Spiel | HTML, CSS, JavaScript | [Demo](https://sharkie.louis-juchem.de) | [GitHub](https://github.com/Louisjuc/Sharkie) |
| **PollApp** | Umfrage-App mit Einzel-/Mehrfachauswahl, Kategorien, Enddatum und Live-Ergebnissen | Angular, TypeScript, CSS, Supabase | [Demo](https://pollapp.louis-juchem.de) | [GitHub](https://github.com/Louisjuc/PollApp) |

## Skills

Angular · TypeScript · JavaScript · HTML · CSS · REST-API · Supabase · Git · Material Design · Scrum

Aktuell lerne ich **Vue.js**.

## Umsetzung dieser Seite

Die Seite ist bewusst ohne Framework und ohne Build-Schritt gebaut: HTML, CSS, JavaScript als ES-Module und PHP für den Mailversand.

- **Responsive** von 320 px bis Desktop, mit mobiler Burger-Navigation
- **Zweisprachig**: Deutsch und Englisch, umschaltbar ohne Neuladen
- **Kontaktformular** mit Validierung im Browser und auf dem Server, Absenden ohne Seiten-Reload und Spamschutz per Honeypot
- **Barrierearm**: Formularfehler werden über `aria-invalid` und `aria-describedby` auch Screenreadern angezeigt
- **Keine Zugangsdaten im Repository**: Die Empfängeradresse liegt in einer eigenen `config.php`, die nicht eingecheckt ist (Vorlage: `api/config.example.php`)

## Lizenz

Der Code steht unter der [MIT-Lizenz](LICENSE). Ausgenommen sind Fotos, Texte und persönliche Inhalte, insbesondere das Portraitbild: Dafür sind alle Rechte vorbehalten. Die Schriften Anta und Josefin Sans stehen unter der SIL Open Font License (`assets/fonts/`).

## Kontakt

Louis Juchem – louis.juchem@web.de · [louis-juchem.de](https://louis-juchem.de)
