# SFNotes

**A small floating space for the things you want to keep close.** Save text, links, images, and files on your desktop, then find and copy them again when you need them. Your notes are saved automatically on your device.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md)

## Screenshots

This screenshot shows SFNotes running as a desktop app. Open **Settings** at the bottom right to change the language, appearance, and shortcuts.

![SFNotes main notes window](docs/images/notes-main.png)

## Get started

Download the latest installer for your system from [GitHub Releases](https://github.com/Salpeper/sfnotes/releases).

### Windows 10/11

1. Open the latest release and download the asset ending in `Setup.exe` or `.exe`.
2. Run it and follow the installer. You can choose where to install SFNotes.
3. Open **SFNotes** from the Start menu.

This version is not code-signed. If SmartScreen appears, confirm the file came from this repository, then choose **More info → Run anyway**.

### macOS (Intel and Apple Silicon)

1. Download the `.dmg` file from the latest release.
2. Open it and drag **SFNotes** to **Applications**.
3. Eject the disk image and open SFNotes from Applications.

SFNotes is not signed or notarized yet. If macOS blocks it, go to **System Settings → Privacy & Security**, scroll to Security, and choose **Open Anyway** for SFNotes. This option appears after the first attempt to open the app.

### Linux (x64)

Choose a package from the latest release's **Assets**. AppImage works on most distributions; DEB and RPM packages are also available.

**AppImage:**

```bash
chmod +x SFNotes-*.AppImage
./SFNotes-*.AppImage
```

**Debian, Ubuntu, and derivatives:** `sudo apt install ./SFNotes-*.deb`\
**Fedora:** `sudo dnf install ./SFNotes-*.rpm`\
**openSUSE:** `sudo zypper install ./SFNotes-*.rpm`

If AppImage reports that FUSE is missing, install a compatible FUSE 2 package or use the DEB/RPM package for your distribution. Floating-window and workspace behavior on Linux depends on your desktop environment and window manager.

## How to use SFNotes

1. **Save something:** copy text, a link, or an image and press `Ctrl+V` (Windows/Linux) or `⌘V` (macOS), or click the **+** button. Use the **…** menu to add files.
2. **Find it:** use the search field to search note contents, or choose **All**, **Text**, **Links**, **Images**, or **Files** to filter the list.
3. **Copy it back:** click a note to copy it to the clipboard. Hold `Shift` while clicking to copy and remove it from SFNotes.
4. **Manage a note:** right-click a note (or use its **⋮** menu) to copy, cut, or delete it. Text and link notes can also be edited from this menu.
5. **Make SFNotes yours:** open **Settings** at the bottom right to change the theme, accent color, text size, note spacing, language, and keyboard shortcuts. You can also choose whether the window stays on top and whether notes are numbered.

You can set global shortcuts for saving clipboard contents and capturing the screen in Settings. They work while SFNotes is in the background. macOS may ask for screen-recording permission the first time you capture the screen.

## Features

- Previews for text, links, images, and files, with optional numbering.
- Search and filters by note type.
- Light, dark, and lavender themes; three accent colors; adjustable text size and spacing.
- English, Spanish, French, German, Italian, and Portuguese interface languages.
- Optional always-on-top behavior and automatic local saving.
- Update checks in **Settings → Updates** in installed versions.

## Your data

SFNotes stores notes and preferences on this device. Note content is saved in `snippets.json` in Electron's application data folder for your user. Notes are not uploaded to GitHub or synced between devices; this repository contains the application source code.

## Build from source

You need [Node.js](https://nodejs.org/) and npm. Clone this repository, then run:

```bash
npm ci
npm run desktop:dev
```

To package for the current system:

```bash
npm run dist:linux    # Linux: AppImage, DEB, and RPM
npm run dist:windows  # Windows: NSIS installer
npm run dist:mac      # macOS: universal DMG and ZIP
```

Packages are written to `release/`. Build macOS packages on macOS and Windows packages on Windows. GitHub Actions uses a native runner for each platform and publishes packages when a `vX.Y.Z` tag is pushed.

## Compatibility notes

- Windows supports keeping SFNotes above other windows; showing it across all virtual desktops is not available through Electron.
- macOS supports always-on-top and all workspaces. Automatic updates require Apple signing, which current builds do not have.
- On Linux, workspaces and window positioning depend on the desktop environment. Wayland compositors may restrict window placement and size.
- Current installers target x64 on Windows/Linux and universal (Intel + Apple Silicon) on macOS.
- Cutting an image copies it to the clipboard and removes it from SFNotes; it does not alter the source file.

## Built with

[Electron](https://www.electronjs.org/) · [React](https://react.dev/) · [Vite](https://vite.dev/) · [electron-builder](https://www.electron.build/) · [Lucide](https://lucide.dev/)
