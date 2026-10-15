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

## Complete user guide

The guide is below the download and installation instructions so you can install SFNotes first and then follow each feature in the app.

### Add text, links, images, and files

- **Text and links:** copy text or a web address in any app, then press `Ctrl+V` on Windows/Linux or `⌘V` on macOS. SFNotes recognizes web addresses and labels them as links. You can also click the **+** button to save the current clipboard contents.
- **Images:** copy an image and paste it with the same shortcut or **+** button. SFNotes stores a preview and lets you copy the image back later.
- **Files:** use the **…** menu in the top right and choose **Add file**. You can select one or several files. Copying files to the clipboard and pasting them may also work depending on the operating system.
- **Screen captures:** configure the global screen-capture shortcut in **Settings → Keyboard Shortcuts**. The default is `Ctrl+Shift+S` on Windows/Linux and `⌘⇧S` on macOS. Select the area to capture; the resulting image is added to your notes. macOS may request Screen Recording permission.
- **Global clipboard shortcut:** the global save-clipboard shortcut can add the current clipboard while SFNotes is in the background. Configure it in **Settings → Keyboard Shortcuts**; the default is `Ctrl+Shift+V` or `⌘⇧V`.

### Find and copy saved items

- Type into the search field to find matching content in your notes. Press `Ctrl+F` or `⌘F` to focus it.
- Use **All**, **Text**, **Links**, **Images**, and **Files** to filter the list by content type. Search and filters work together.
- Click a note to copy its contents to the clipboard. For a file note, SFNotes copies the file reference; for an image, it copies the image.
- Hold `Shift` while clicking a note to copy it and remove it from the list.

### Edit and organize notes

- Right-click a note or click its **⋮** button to open its actions. Choose **Copy**, **Cut**, or **Delete**. **Cut** copies the content and removes the note from SFNotes.
- Choose **Edit text** in the menu for a text or link note, make your changes, then save them. You can also middle-click a text or link note to open the editor.
- The **…** button in the top bar opens app actions, including **Add file**, pin controls, **Settings**, and **Close SFNotes**.
- Notes are numbered in the list by default. Turn numbering off in Settings if you prefer.

### Change the appearance and behavior

Open **Settings** at the bottom right to:

- Choose the light, dark, or lavender theme and a yellow, blue, or green accent color.
- Set text size and the spacing between notes.
- Choose English, Spanish, French, German, Italian, or Portuguese.
- Decide whether to keep SFNotes above other windows, including whether it should pin on startup.
- Turn note numbering on or off.
- Change shortcuts for pasting, searching, global clipboard saving, screen capture, and closing panels. Global shortcuts work while SFNotes is in the background; the operating system may reserve some combinations.
- Check for updates in **Settings → Updates**. Installed versions check at startup; when an update is ready, use **Restart and install**.

SFNotes saves notes and preferences automatically on this device. Closing the window does not delete your notes.

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
