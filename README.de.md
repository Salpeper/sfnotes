# SFNotes

**Ein kleiner, schwebender Ort für alles, was du griffbereit behalten möchtest.** Speichere Texte, Links, Bilder und Dateien auf deinem Desktop und finde und kopiere sie bei Bedarf wieder. Deine Notizen werden automatisch auf diesem Gerät gespeichert.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md)

## Screenshots

Dieser Screenshot zeigt SFNotes als Desktop-App. Unter **Einstellungen** unten rechts kannst du Sprache, Darstellung und Tastenkürzel ändern.

![SFNotes-Hauptfenster](docs/images/notes-main.png)

## Herunterladen und installieren

Lade die aktuelle Version für dein System von [GitHub Releases](https://github.com/Salpeper/sfnotes/releases) herunter.

### Windows 10/11

1. Öffne die neueste Version und lade die Datei mit der Endung `Setup.exe` oder `.exe` herunter.
2. Starte den Installer und folge den Schritten. Du kannst den Installationsordner wählen.
3. Öffne **SFNotes** über das Startmenü.

Diese Version ist nicht signiert. Wenn SmartScreen erscheint, prüfe, ob die Datei aus diesem Repository stammt, und wähle **Weitere Informationen → Trotzdem ausführen**.

### macOS (Intel und Apple Silicon)

1. Lade die `.dmg`-Datei der neuesten Version herunter.
2. Öffne sie und ziehe **SFNotes** in den Ordner **Programme**.
3. Wirf das Image aus und starte SFNotes aus dem Programme-Ordner.

SFNotes ist noch nicht signiert oder notarisiert. Wenn macOS die App blockiert, öffne **Systemeinstellungen → Datenschutz & Sicherheit**, scrolle zum Abschnitt Sicherheit und wähle für SFNotes **Dennoch öffnen**. Die Option erscheint nach dem ersten Öffnungsversuch.

### Linux (x64)

AppImage-, DEB- und RPM-Pakete findest du unter **Assets** der neuesten Version. AppImage eignet sich für die meisten Distributionen.

**AppImage:**

```bash
chmod +x SFNotes-*.AppImage
./SFNotes-*.AppImage
```

**Debian, Ubuntu und Derivate:** `sudo apt install ./SFNotes-*.deb`  
**Fedora:** `sudo dnf install ./SFNotes-*.rpm`  
**openSUSE:** `sudo zypper install ./SFNotes-*.rpm`

Wenn AppImage meldet, dass FUSE fehlt, installiere ein kompatibles FUSE-2-Paket oder verwende das DEB/RPM-Paket deiner Distribution. Das Verhalten schwebender Fenster und Arbeitsflächen hängt von der Desktopumgebung und dem Fenstermanager ab.

## Vollständige Anleitung

Diese Anleitung steht nach dem Download- und Installationsabschnitt, damit du SFNotes zuerst einrichten und anschließend alle Funktionen kennenlernen kannst.

### Texte, Links, Bilder und Dateien hinzufügen

- **Texte und Links:** Kopiere Text oder eine Webadresse aus einer beliebigen App und drücke unter Windows/Linux `Ctrl+V` oder unter macOS `⌘V`. SFNotes erkennt Webadressen automatisch als Links. Mit **+** speicherst du ebenfalls den aktuellen Inhalt der Zwischenablage.
- **Bilder:** Kopiere ein Bild und füge es mit derselben Tastenkombination oder über **+** ein. SFNotes speichert eine Vorschau und kann das Bild später wieder kopieren.
- **Dateien:** Öffne das Menü **…** oben rechts und wähle **Datei hinzufügen**. Du kannst eine oder mehrere Dateien auswählen. Das Einfügen kopierter Dateien kann je nach Betriebssystem ebenfalls funktionieren.
- **Bildschirmaufnahmen:** Lege das globale Tastenkürzel unter **Einstellungen → Tastenkürzel** fest. Standardmäßig ist es `Ctrl+Shift+S` unter Windows/Linux und `⌘⇧S` unter macOS. Wähle den aufzunehmenden Bereich; das Bild wird deinen Notizen hinzugefügt. macOS kann um die Berechtigung zur Bildschirmaufnahme bitten.
- **Globales Zwischenablage-Kürzel:** Damit speicherst du den aktuellen Zwischenablageinhalt, während SFNotes im Hintergrund läuft. Stelle es unter **Einstellungen → Tastenkürzel** ein; Standard ist `Ctrl+Shift+V` oder `⌘⇧V`.

### Gespeicherte Elemente finden und kopieren

- Gib einen Suchbegriff in das Suchfeld ein. Mit `Ctrl+F` oder `⌘F` springst du direkt dorthin.
- Filtere mit **Alle**, **Text**, **Links**, **Bilder** und **Dateien**. Suche und Filter lassen sich kombinieren.
- Klicke auf eine Notiz, um ihren Inhalt in die Zwischenablage zu kopieren. Bei einer Dateinotiz kopiert SFNotes den Dateiverweis, bei einem Bild die Bilddaten.
- Halte beim Klicken `Shift` gedrückt, um das Element zu kopieren und aus der Liste zu entfernen.

### Notizen bearbeiten und verwalten

- Ein Rechtsklick auf eine Notiz oder ein Klick auf **⋮** öffnet **Kopieren**, **Ausschneiden** und **Löschen**. **Ausschneiden** kopiert den Inhalt und entfernt die Notiz aus SFNotes.
- Wähle **Text bearbeiten**, um Text- oder Linknotizen zu ändern und anschließend zu speichern. Ein Klick mit der mittleren Maustaste öffnet für diese Notizen ebenfalls den Editor.
- Über **…** oben erreichst du **Datei hinzufügen**, Anheften, **Einstellungen** und **SFNotes schließen**.
- Notizen sind standardmäßig nummeriert. Du kannst die Nummerierung in den Einstellungen ausschalten.

### Darstellung und Verhalten ändern

Öffne **Einstellungen** unten rechts, um:

- Das helle, dunkle oder lavendelfarbene Design und einen gelben, blauen oder grünen Akzent zu wählen.
- Textgröße und Abstand zwischen Notizen einzustellen.
- Englisch, Spanisch, Französisch, Deutsch, Italienisch oder Portugiesisch auszuwählen.
- SFNotes über anderen Fenstern zu halten und das Anheften beim Start festzulegen.
- Die Nummerierung ein- oder auszuschalten.
- Tastenkürzel für Einfügen, Suche, globales Speichern der Zwischenablage, Bildschirmaufnahmen und das Schließen von Bedienfeldern zu ändern. Globale Kürzel funktionieren im Hintergrund; manche Kombinationen können vom Betriebssystem belegt sein.
- Unter **Einstellungen → Updates** nach Aktualisierungen zu suchen. Installierte Versionen prüfen beim Start; sobald ein Update bereit ist, wähle **Neu starten und installieren**.

SFNotes speichert Notizen und Einstellungen automatisch auf diesem Gerät. Wenn du das Fenster schließt, bleiben deine Notizen erhalten.

## Funktionen

- Vorschau für Texte, Links, Bilder und Dateien; Nummerierung optional.
- Suche und Filter nach Notiztyp.
- Helle, dunkle und lavendelfarbene Designs; drei Akzentfarben; anpassbare Textgröße und Abstände.
- Oberfläche auf Englisch, Spanisch, Französisch, Deutsch, Italienisch und Portugiesisch.
- Optional immer im Vordergrund; automatische lokale Speicherung.
- Updatesuche unter **Einstellungen → Updates** in installierten Versionen.

## Deine Daten

SFNotes speichert Notizen und Einstellungen auf diesem Gerät. Der Inhalt liegt in `snippets.json` im Electron-Datenordner deines Benutzerkontos. Notizen werden weder zu GitHub hochgeladen noch zwischen Geräten synchronisiert; dieses Repository enthält den Anwendungscode.

## Aus dem Quellcode erstellen

Du benötigst [Node.js](https://nodejs.org/) und npm. Klone das Repository und führe Folgendes aus:

```bash
npm ci
npm run desktop:dev
```

Pakete für das aktuelle System erstellen:

```bash
npm run dist:linux    # Linux: AppImage, DEB und RPM
npm run dist:windows  # Windows: NSIS-Installer
npm run dist:mac      # macOS: universelle DMG- und ZIP-Dateien
```

Die Pakete erscheinen in `release/`. Erstelle macOS-Pakete auf macOS und Windows-Pakete auf Windows. GitHub Actions verwendet native Runner und veröffentlicht Pakete, wenn ein Tag `vX.Y.Z` gepusht wird.

## Kompatibilität

- Unter Windows kann SFNotes über anderen Fenstern bleiben; Electron kann das Fenster nicht automatisch auf allen virtuellen Desktops anzeigen.
- macOS unterstützt „Immer im Vordergrund“ und alle Arbeitsflächen. Automatische Updates erfordern eine Apple-Signatur, die den aktuellen Builds fehlt.
- Unter Linux hängen Positionierung und Arbeitsflächen von der Desktopumgebung ab. Wayland-Compositoren können Position und Größe beschränken.
- Die aktuellen Installer zielen auf x64 unter Windows/Linux und Universal (Intel + Apple Silicon) unter macOS.
- Beim Ausschneiden eines Bildes wird es in die Zwischenablage kopiert und aus SFNotes entfernt; die Quelldatei bleibt unverändert.

## Verwendete Technologien

[Electron](https://www.electronjs.org/) · [React](https://react.dev/) · [Vite](https://vite.dev/) · [electron-builder](https://www.electron.build/) · [Lucide](https://lucide.dev/)
