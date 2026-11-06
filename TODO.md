# TODO – Feedback (Review 2)

## Muss angepasst werden

- [x] **Hero-Section auf `100vh` (bzw. `100dvh`)**
  - Der erste Bereich inkl. Pfeil nach unten soll komplett im Viewport sichtbar sein (mobile).
  - Mobil: Abstand (`main`-gap) über dem Hero entfernt, Nav fest auf `--nav-height`, Bild per `max-height: 40svh` an die Bildschirmhöhe gekoppelt.
- [ ] **Mobile Navigation liegt über dem Hero-Bild**
  - Beim Klick auf den Burger-Button überlagert die Navigation das Bild. Mit dem Design abgleichen und anpassen.
- [x] **„Why me“-Animation unter die Überschrift setzen (mobile)**
  - Aktuell steht die Animation nach dem Umbruch unter dem Text. Sie soll direkt unter der Headline „Why me?“ stehen – so wie in den anderen Sektionen auch.
  - Falls die aktuelle Position bewusst gewählt wurde: Begründung an den Reviewer schreiben.
- [x] **Kontaktformular: Layout-Shift durch Feedback-Meldung verhindern**
  - Beim Absenden erscheint die Feedback-Meldung und verschiebt den Button / den Rest des Formulars.
  - Lösung: Platz für die Meldung immer reservieren, z. B. mit `visibility: hidden` statt `display: none` (Text unsichtbar, Platz bleibt erhalten).

## Optional / Tipps

- [ ] **Einheitliche Abstände zwischen den Sektionen (Desktop)**
  - Abstand vom vorherigen Element bis zur nächsten Headline überall gleich (z. B. jeweils 100px).
  - Prüfen, woher die unterschiedlichen Margins kommen (Headline-Margin + Section-Padding) – an manchen Stellen wirkt der Abstand größer.
- [ ] **Kurz sichtbares „DE“ beim Verkleinern prüfen**
  - Im Responsive-Tool ist beim Verkleinern kurz „DE“ oben zu sehen, das dann wegspringt. Kein echtes User-Problem, aber Ursache prüfen.
- [ ] **Kontakt-Bereich: Elemente in einer Linie mit der E-Mail ausrichten**
  - Kleiner Feinschliff, damit die Elemente bündig mit der E-Mail-Adresse sind.

## Kein Handlungsbedarf

- Abstand/Verschiebung bei 320px durch die Animation tritt nur im Responsive-Tool auf, auf echten Endgeräten nicht → kann so bleiben.
- Leichtes Herausragen eines Elements in der Skills-/Projekt-Sektion ist laut Reviewer nicht schlimm.
- E-Mail-Versand funktioniert.
