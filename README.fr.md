# SFNotes

**Un petit espace flottant pour garder l’essentiel à portée de main.** Enregistrez du texte, des liens, des images et des fichiers sur votre bureau, puis retrouvez-les et copiez-les quand vous en avez besoin. Vos notes sont automatiquement enregistrées sur votre appareil.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md)

## Captures d’écran

Cette capture montre SFNotes en application de bureau. Ouvrez **Réglages** en bas à droite pour changer la langue, l’apparence et les raccourcis.

![Fenêtre principale de SFNotes](docs/images/notes-main.png)

## Télécharger et installer

Téléchargez la dernière version pour votre système depuis [GitHub Releases](https://github.com/Salpeper/sfnotes/releases).

### Windows 10/11

1. Ouvrez la dernière version et téléchargez le fichier se terminant par `Setup.exe` ou `.exe`.
2. Lancez l’installateur et suivez les étapes. Vous pouvez choisir le dossier d’installation.
3. Ouvrez **SFNotes** depuis le menu Démarrer.

Cette version n’est pas signée. Si SmartScreen s’affiche, vérifiez que le fichier vient de ce dépôt, puis choisissez **Plus d’informations → Exécuter quand même**.

### macOS (Intel et Apple Silicon)

1. Téléchargez le fichier `.dmg` de la dernière version.
2. Ouvrez-le et faites glisser **SFNotes** vers **Applications**.
3. Éjectez l’image disque et ouvrez SFNotes depuis Applications.

SFNotes n’est pas encore signée ni notarisée. Si macOS la bloque, ouvrez **Réglages Système → Confidentialité et sécurité**, descendez jusqu’à Sécurité et choisissez **Ouvrir quand même** pour SFNotes. Cette option apparaît après la première tentative d’ouverture.

### Linux (x64)

Les formats AppImage, DEB et RPM se trouvent dans les **Assets** de la dernière version. AppImage convient à la plupart des distributions.

**AppImage :**

```bash
chmod +x SFNotes-*.AppImage
./SFNotes-*.AppImage
```

**Debian, Ubuntu et dérivées :** `sudo apt install ./SFNotes-*.deb`  
**Fedora :** `sudo dnf install ./SFNotes-*.rpm`  
**openSUSE :** `sudo zypper install ./SFNotes-*.rpm`

Si AppImage signale l’absence de FUSE, installez un paquet compatible FUSE 2 ou utilisez le paquet DEB/RPM de votre distribution. Le comportement des fenêtres flottantes et des espaces de travail dépend de l’environnement de bureau et du gestionnaire de fenêtres.

## Guide complet d’utilisation

Ce guide vient après les instructions de téléchargement et d’installation afin que vous puissiez d’abord installer SFNotes, puis découvrir toutes ses fonctions.

### Ajouter du texte, des liens, des images et des fichiers

- **Texte et liens :** copiez du texte ou une adresse Web depuis une application, puis appuyez sur `Ctrl+V` sous Windows/Linux ou `⌘V` sous macOS. SFNotes reconnaît les adresses Web et les classe comme liens. Vous pouvez aussi cliquer sur **+** pour enregistrer le contenu actuel du presse-papiers.
- **Images :** copiez une image et collez-la avec le même raccourci ou le bouton **+**. SFNotes enregistre un aperçu et permet de la recopier ensuite.
- **Fichiers :** ouvrez le menu **…** en haut à droite et choisissez **Ajouter un fichier**. Vous pouvez en sélectionner un ou plusieurs. Le collage de fichiers copiés peut aussi fonctionner selon le système.
- **Captures d’écran :** configurez le raccourci global dans **Réglages → Raccourcis clavier**. Par défaut, il s’agit de `Ctrl+Shift+S` sous Windows/Linux et `⌘⇧S` sous macOS. Sélectionnez la zone à capturer ; l’image est ajoutée aux notes. macOS peut demander l’autorisation d’enregistrement de l’écran.
- **Raccourci global du presse-papiers :** il enregistre le contenu copié même lorsque SFNotes est en arrière-plan. Configurez-le dans **Réglages → Raccourcis clavier** ; par défaut, c’est `Ctrl+Shift+V` ou `⌘⇧V`.

### Rechercher et copier des éléments

- Saisissez du texte dans le champ de recherche. Appuyez sur `Ctrl+F` ou `⌘F` pour y placer le curseur.
- Filtrez avec **Toutes**, **Texte**, **Liens**, **Images** et **Fichiers**. La recherche et les filtres se combinent.
- Cliquez sur une note pour copier son contenu dans le presse-papiers. Pour une note de fichier, SFNotes copie la référence du fichier ; pour une image, il copie l’image.
- Maintenez `Shift` en cliquant pour copier l’élément et le retirer de la liste.

### Modifier et organiser les notes

- Faites un clic droit sur une note ou cliquez sur son bouton **⋮** pour ouvrir les actions : **Copier**, **Couper** ou **Supprimer**. **Couper** copie le contenu puis retire la note de SFNotes.
- Choisissez **Modifier le texte** dans le menu pour modifier une note textuelle ou un lien, puis enregistrez. Un clic avec le bouton central ouvre aussi l’éditeur pour ces notes.
- Le bouton **…** de la barre supérieure donne accès aux actions de l’application : **Ajouter un fichier**, les options d’épinglage, **Réglages** et **Fermer SFNotes**.
- Les notes sont numérotées par défaut. Vous pouvez désactiver cette option dans les réglages.

### Modifier l’apparence et le comportement

Ouvrez **Réglages** en bas à droite pour :

- Choisir le thème clair, sombre ou lavande et une couleur d’accent jaune, bleue ou verte.
- Régler la taille du texte et l’espacement des notes.
- Choisir l’anglais, l’espagnol, le français, l’allemand, l’italien ou le portugais.
- Garder SFNotes au-dessus des autres fenêtres et choisir de l’épingler au démarrage.
- Activer ou désactiver la numérotation.
- Modifier les raccourcis de collage, de recherche, d’enregistrement global du presse-papiers, de capture d’écran et de fermeture des panneaux. Les raccourcis globaux fonctionnent lorsque SFNotes est en arrière-plan ; le système peut réserver certaines combinaisons.
- Rechercher des mises à jour dans **Réglages → Mises à jour**. Les versions installées vérifient les mises à jour au démarrage ; lorsqu’une mise à jour est prête, choisissez **Redémarrer et installer**.

SFNotes enregistre automatiquement vos notes et préférences sur cet appareil. Fermer la fenêtre ne supprime pas vos notes.

## Fonctionnalités

- Aperçu du texte, des liens, des images et des fichiers ; numérotation facultative.
- Recherche et filtres par type de note.
- Thèmes clair, sombre et lavande ; trois couleurs de surbrillance ; taille du texte et espacement réglables.
- Interface en anglais, espagnol, français, allemand, italien et portugais.
- Fenêtre toujours au premier plan en option et enregistrement local automatique.
- Recherche des mises à jour depuis **Réglages → Mises à jour** dans les versions installées.

## Vos données

SFNotes conserve les notes et les préférences sur cet appareil. Le contenu est enregistré dans `snippets.json`, dans le dossier de données Electron de votre utilisateur. Les notes ne sont ni envoyées sur GitHub ni synchronisées entre appareils ; ce dépôt contient le code source de l’application.

## Compiler depuis les sources

Vous avez besoin de [Node.js](https://nodejs.org/) et npm. Clonez ce dépôt puis exécutez :

```bash
npm ci
npm run desktop:dev
```

Pour créer un paquet pour le système actuel :

```bash
npm run dist:linux    # Linux : AppImage, DEB et RPM
npm run dist:windows  # Windows : installateur NSIS
npm run dist:mac      # macOS : DMG et ZIP universels
```

Les paquets sont créés dans `release/`. Compilez les versions macOS sur macOS et Windows sur Windows. GitHub Actions utilise un runner natif par système et publie les paquets lors de l’envoi d’une étiquette `vX.Y.Z`.

## Compatibilité

- Windows permet de garder SFNotes au-dessus des autres fenêtres ; Electron ne permet pas de l’afficher automatiquement sur tous les bureaux virtuels.
- macOS prend en charge le premier plan et l’affichage sur tous les espaces. Les mises à jour automatiques nécessitent une signature Apple, absente des versions actuelles.
- Sous Linux, le placement et les espaces de travail dépendent de l’environnement. Les compositeurs Wayland peuvent limiter la position et la taille.
- Les installateurs actuels ciblent x64 sur Windows/Linux et une version universelle (Intel + Apple Silicon) sur macOS.
- Couper une image la copie dans le presse-papiers et la retire de SFNotes sans modifier le fichier source.

## Technologies

[Electron](https://www.electronjs.org/) · [React](https://react.dev/) · [Vite](https://vite.dev/) · [electron-builder](https://www.electron.build/) · [Lucide](https://lucide.dev/)
