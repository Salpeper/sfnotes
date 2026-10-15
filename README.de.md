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

## SFNotes verwenden

1. **Etwas speichern:** Kopiere Text, einen Link oder ein Bild und drücke `Ctrl+V` (Windows/Linux) oder `⌘V` (macOS), oder klicke auf **+**. Über das Menü **…** kannst du Dateien hinzufügen.
2. **Wiederfinden:** Suche im Suchfeld oder filtere nach **Alle**, **Text**, **Links**, **Bilder** oder **Dateien**.
3. **Kopieren:** Klicke auf eine Notiz, um sie in die Zwischenablage zu kopieren. Halte beim Klicken `Shift` gedrückt, um sie zu kopieren und aus SFNotes zu entfernen.
4. **Notizen verwalten:** Rechtsklick (oder Menü **⋮**) bietet Kopieren, Ausschneiden und Löschen. Text- und Linknotizen lassen sich dort auch bearbeiten.
5. **Anpassen:** Öffne **Einstellungen** unten rechts, um Design, Akzentfarbe, Textgröße, Notizabstand, Sprache und Tastenkürzel festzulegen. Dort kannst du auch das Fenster im Vordergrund halten und die Nummerierung ein- oder ausschalten.

In den Einstellungen kannst du globale Tastenkürzel zum Speichern der Zwischenablage und für Bildschirmaufnahmen festlegen. Sie funktionieren auch, wenn SFNotes im Hintergrund läuft. macOS fragt bei der ersten Bildschirmaufnahme eventuell nach einer Berechtigung.

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
