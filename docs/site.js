const owner = 'Salpeper';
const repository = 'sfnotes';
const latestReleasePage = `https://github.com/${owner}/${repository}/releases/latest`;
const fallbackVersion = '1.0.0';

const translations = {
  es: {
    pageTitle: 'SFNotes: aplicación de notas para escritorio | Windows, macOS y Linux', pageDescription: 'Aplicación gratuita de notas para el escritorio: guarda textos, enlaces, imágenes y archivos. Personaliza temas y controles. Descarga para Windows, macOS y Linux.',
    ogDescription: 'Un espacio flotante para guardar y recuperar lo que te importa. Gratis para Windows, macOS y Linux.', brandHome: 'SFNotes, inicio', mainNavigation: 'Navegación principal', languageLabel: 'Idioma',
    navFeatures: 'Funciones', navHow: 'Cómo funciona', navDownload: 'Descargar', heroEyebrow: 'UN ESPACIO PEQUEÑO PARA TUS GRANDES IDEAS', heroTitle: 'Lo que necesitas.<br /><span>Siempre a mano.</span>',
    heroDescription: 'Guarda textos, enlaces, imágenes y archivos en una nota flotante en tu escritorio. Encuéntralos y cópialos cuando vuelvas a necesitarlos.', heroDownload: 'Descargar SFNotes', heroDownloadDetail: 'Gratis para Windows, macOS y Linux', viewGithub: 'Ver en GitHub', privacy: 'Tus notas se guardan en tu dispositivo. Sin cuenta y sin sincronización en la nube.', previewLabel: 'Vista previa de SFNotes', screenshotAlt: 'Captura de SFNotes con notas de texto y enlaces', savedLinks: 'Enlaces guardados', alwaysAtHand: 'Siempre a mano', trustLabel: 'Compatibilidad y privacidad', platforms: 'Windows, macOS y Linux', localSave: 'Guardado local automático', freeOpenSource: 'Gratis y de código abierto',
    featuresEyebrow: 'MENOS BÚSQUEDAS, MÁS FLUIDEZ', featuresTitle: 'Todo lo importante,<br />en un mismo sitio.', featuresDescription: 'Un rincón discreto en el escritorio para esas cosas que siempre acabas buscando.', saveTitle: 'Guarda de todo', saveDescription: 'Textos, enlaces, imágenes y archivos en una lista rápida. Pega desde el portapapeles o añade archivos desde el menú.', text: 'Texto', links: 'Enlaces', images: 'Imágenes', files: 'Archivos', findTitle: 'Encuentra al instante', findDescription: 'Busca por contenido y filtra por tipo de nota para llegar rápido a lo que necesitas.', customizeTitle: 'A tu manera', customizeDescription: 'Elige entre ocho temas, ajusta los colores y oculta o mueve los controles para adaptar la ventana a tu gusto.',
    howEyebrow: 'ASÍ DE SENCILLO', howTitle: 'De tu portapapeles<br />a tus notas.', howDescription: 'SFNotes está pensado para guardar algo en segundos y volver a ello sin interrumpir lo que estabas haciendo.', stepOneTitle: 'Copia o pega', stepOneDescription: 'Usa el botón «+» o el atajo de teclado para guardar lo que tengas en el portapapeles.', stepTwoTitle: 'Encuéntralo', stepTwoDescription: 'Busca, filtra y organiza tus notas. Personaliza SFNotes desde Ajustes.', stepThreeTitle: 'Vuelve a usarlo', stepThreeDescription: 'Haz clic en una nota para copiarla de nuevo. Tus datos permanecen en tu dispositivo.',
    downloadEyebrow: 'LISTO CUANDO TÚ LO ESTÉS', downloadTitle: 'Hazle un hueco<br />en tu escritorio.', downloadDescription: 'Descarga SFNotes gratis. Elige tu sistema y empieza a guardar lo que te importa.', windowsDescription: 'Windows 10 y 11 · x64', macDescription: 'Intel y Apple Silicon', linuxDescription: 'AppImage, DEB y RPM · x64', downloadExe: 'Descargar .exe', downloadDmg: 'Descargar .dmg', downloadAppImage: 'Descargar AppImage', otherFormat: '¿Buscas otro formato?', allDownloads: 'Ver todas las descargas en GitHub', latestVersion: 'Versión más reciente', footerTagline: 'Una pequeña nota para tener cerca lo que importa.', sourceCode: 'Código fuente', downloads: 'Descargas', platformWindows: 'Windows', platformMacos: 'macOS', platformLinux: 'Linux', heroPlatformDownload: 'Descargar para {platform}', releaseDetail: 'Versión {version} · Descarga gratuita', heroRelease: 'Descargar SFNotes {version}', heroOther: 'Gratis para Windows, macOS y Linux'
  },
  en: {
    pageTitle: 'SFNotes: free desktop notes app for Windows, macOS and Linux', pageDescription: 'A free desktop notes app for saving text, links, images and files. Customize themes and controls. Download SFNotes for Windows, macOS or Linux.', ogDescription: 'A floating space to save and find what matters. Free for Windows, macOS and Linux.', brandHome: 'SFNotes, home', mainNavigation: 'Main navigation', languageLabel: 'Language',
    navFeatures: 'Features', navHow: 'How it works', navDownload: 'Download', heroEyebrow: 'A SMALL SPACE FOR YOUR BIG IDEAS', heroTitle: 'What you need.<br /><span>Always at hand.</span>', heroDescription: 'Keep texts, links, images and files in a floating note on your desktop. Find and copy them whenever you need them.', heroDownload: 'Download SFNotes', heroDownloadDetail: 'Free for Windows, macOS and Linux', viewGithub: 'View on GitHub', privacy: 'Your notes stay on your device. No account or cloud sync.', previewLabel: 'SFNotes preview', screenshotAlt: 'SFNotes screenshot with text notes and links', savedLinks: 'Saved links', alwaysAtHand: 'Always at hand', trustLabel: 'Compatibility and privacy', platforms: 'Windows, macOS and Linux', localSave: 'Automatic local saving', freeOpenSource: 'Free and open source',
    featuresEyebrow: 'LESS SEARCHING, MORE FLOW', featuresTitle: 'Everything important,<br />in one place.', featuresDescription: 'A quiet corner on your desktop for the things you are always looking for.', saveTitle: 'Save anything', saveDescription: 'Texts, links, images and files in a handy list. Paste from the clipboard or add files from the menu.', text: 'Text', links: 'Links', images: 'Images', files: 'Files', findTitle: 'Find it instantly', findDescription: 'Search by content and filter by note type to get to what you need quickly.', customizeTitle: 'Make it yours', customizeDescription: 'Choose from eight themes, adjust colors, and hide or move controls to make the window your own.',
    howEyebrow: "IT'S THAT SIMPLE", howTitle: 'From your clipboard<br />to your notes.', howDescription: 'SFNotes is made for saving something in seconds and coming back to it without interrupting your work.', stepOneTitle: 'Copy or paste', stepOneDescription: 'Use the “+” button or keyboard shortcut to save whatever is on your clipboard.', stepTwoTitle: 'Find it', stepTwoDescription: 'Search, filter and organize your notes. Customize SFNotes in Settings.', stepThreeTitle: 'Use it again', stepThreeDescription: 'Click a note to copy it again. Your data stays on your device.',
    downloadEyebrow: 'READY WHEN YOU ARE', downloadTitle: 'Make room for it<br />on your desktop.', downloadDescription: 'Download SFNotes for free. Choose your system and start saving what matters.', windowsDescription: 'Windows 10 and 11 · x64', macDescription: 'Intel and Apple Silicon', linuxDescription: 'AppImage, DEB and RPM · x64', downloadExe: 'Download .exe', downloadDmg: 'Download .dmg', downloadAppImage: 'Download AppImage', otherFormat: 'Looking for another format?', allDownloads: 'See all downloads on GitHub', latestVersion: 'Latest version', footerTagline: 'A little note to keep what matters close.', sourceCode: 'Source code', downloads: 'Downloads', platformWindows: 'Windows', platformMacos: 'macOS', platformLinux: 'Linux', heroPlatformDownload: 'Download for {platform}', releaseDetail: 'Version {version} · Free download', heroRelease: 'Download SFNotes {version}', heroOther: 'Free for Windows, macOS and Linux'
  },
  fr: {
    pageTitle: 'SFNotes : application de notes pour ordinateur, gratuite', pageDescription: 'Application gratuite de notes de bureau pour enregistrer textes, liens, images et fichiers. Téléchargez SFNotes pour Windows, macOS et Linux.', ogDescription: 'Un espace flottant pour garder et retrouver ce qui compte. Gratuit pour Windows, macOS et Linux.', brandHome: 'SFNotes, accueil', mainNavigation: 'Navigation principale', languageLabel: 'Langue',
    navFeatures: 'Fonctions', navHow: 'Mode d’emploi', navDownload: 'Télécharger', heroEyebrow: 'UN PETIT ESPACE POUR VOS GRANDES IDÉES', heroTitle: 'Ce qu’il vous faut.<br /><span>Toujours à portée de main.</span>', heroDescription: 'Gardez textes, liens, images et fichiers dans une note flottante sur votre bureau. Retrouvez-les et copiez-les quand vous en avez besoin.', heroDownload: 'Télécharger SFNotes', heroDownloadDetail: 'Gratuit pour Windows, macOS et Linux', viewGithub: 'Voir sur GitHub', privacy: 'Vos notes restent sur votre appareil. Sans compte ni synchronisation cloud.', previewLabel: 'Aperçu de SFNotes', screenshotAlt: 'Capture de SFNotes avec des notes et des liens', savedLinks: 'Liens enregistrés', alwaysAtHand: 'Toujours à portée de main', trustLabel: 'Compatibilité et confidentialité', platforms: 'Windows, macOS et Linux', localSave: 'Enregistrement local automatique', freeOpenSource: 'Gratuit et open source',
    featuresEyebrow: 'MOINS DE RECHERCHES, PLUS DE FLUIDITÉ', featuresTitle: 'Tout ce qui compte,<br />au même endroit.', featuresDescription: 'Un coin discret sur le bureau pour les choses que vous cherchez tout le temps.', saveTitle: 'Tout enregistrer', saveDescription: 'Textes, liens, images et fichiers dans une liste pratique. Collez depuis le presse-papiers ou ajoutez des fichiers depuis le menu.', text: 'Texte', links: 'Liens', images: 'Images', files: 'Fichiers', findTitle: 'Tout retrouver', findDescription: 'Recherchez par contenu et filtrez par type de note pour trouver rapidement ce qu’il vous faut.', customizeTitle: 'À votre façon', customizeDescription: 'Choisissez parmi huit thèmes, réglez les couleurs et masquez ou déplacez les commandes selon vos envies.',
    howEyebrow: 'C’EST TOUT SIMPLE', howTitle: 'Du presse-papiers<br />à vos notes.', howDescription: 'SFNotes permet d’enregistrer en quelques secondes et de retrouver vos éléments sans interrompre votre travail.', stepOneTitle: 'Copiez ou collez', stepOneDescription: 'Utilisez le bouton « + » ou le raccourci clavier pour enregistrer le contenu du presse-papiers.', stepTwoTitle: 'Retrouvez-le', stepTwoDescription: 'Recherchez, filtrez et organisez vos notes. Personnalisez SFNotes dans les paramètres.', stepThreeTitle: 'Réutilisez-le', stepThreeDescription: 'Cliquez sur une note pour la copier à nouveau. Vos données restent sur votre appareil.',
    downloadEyebrow: 'PRÊT QUAND VOUS L’ÊTES', downloadTitle: 'Faites-lui une place<br />sur votre bureau.', downloadDescription: 'Téléchargez SFNotes gratuitement. Choisissez votre système et gardez ce qui compte.', windowsDescription: 'Windows 10 et 11 · x64', macDescription: 'Intel et Apple Silicon', linuxDescription: 'AppImage, DEB et RPM · x64', downloadExe: 'Télécharger .exe', downloadDmg: 'Télécharger .dmg', downloadAppImage: 'Télécharger AppImage', otherFormat: 'Vous cherchez un autre format ?', allDownloads: 'Voir tous les téléchargements sur GitHub', latestVersion: 'Dernière version', footerTagline: 'Une petite note pour garder l’essentiel près de vous.', sourceCode: 'Code source', downloads: 'Téléchargements', platformWindows: 'Windows', platformMacos: 'macOS', platformLinux: 'Linux', heroPlatformDownload: 'Télécharger pour {platform}', releaseDetail: 'Version {version} · Téléchargement gratuit', heroRelease: 'Télécharger SFNotes {version}', heroOther: 'Gratuit pour Windows, macOS et Linux'
  },
  de: {
    pageTitle: 'SFNotes: kostenlose Notiz-App für den Desktop', pageDescription: 'Kostenlose Desktop-Notiz-App für Texte, Links, Bilder und Dateien. Lade SFNotes für Windows, macOS und Linux herunter und passe Designs und Bedienelemente an.', ogDescription: 'Ein schwebender Ort, um Wichtiges zu speichern und wiederzufinden. Kostenlos für Windows, macOS und Linux.', brandHome: 'SFNotes, Startseite', mainNavigation: 'Hauptnavigation', languageLabel: 'Sprache',
    navFeatures: 'Funktionen', navHow: 'So funktioniert’s', navDownload: 'Herunterladen', heroEyebrow: 'EIN KLEINER ORT FÜR DEINE GROSSEN IDEEN', heroTitle: 'Was du brauchst.<br /><span>Immer griffbereit.</span>', heroDescription: 'Speichere Texte, Links, Bilder und Dateien in einer schwebenden Notiz auf deinem Desktop. Finde und kopiere sie, wenn du sie brauchst.', heroDownload: 'SFNotes herunterladen', heroDownloadDetail: 'Kostenlos für Windows, macOS und Linux', viewGithub: 'Auf GitHub ansehen', privacy: 'Deine Notizen bleiben auf deinem Gerät. Kein Konto und keine Cloud-Synchronisierung.', previewLabel: 'SFNotes-Vorschau', screenshotAlt: 'SFNotes-Bildschirmfoto mit Textnotizen und Links', savedLinks: 'Gespeicherte Links', alwaysAtHand: 'Immer griffbereit', trustLabel: 'Kompatibilität und Datenschutz', platforms: 'Windows, macOS und Linux', localSave: 'Automatische lokale Speicherung', freeOpenSource: 'Kostenlos und Open Source',
    featuresEyebrow: 'WENIGER SUCHEN, BESSER IM FLUSS', featuresTitle: 'Alles Wichtige<br />an einem Ort.', featuresDescription: 'Ein unauffälliger Platz auf deinem Desktop für Dinge, nach denen du oft suchst.', saveTitle: 'Alles speichern', saveDescription: 'Texte, Links, Bilder und Dateien in einer praktischen Liste. Füge Inhalte aus der Zwischenablage oder Dateien über das Menü hinzu.', text: 'Text', links: 'Links', images: 'Bilder', files: 'Dateien', findTitle: 'Sofort wiederfinden', findDescription: 'Suche nach Inhalten und filtere nach Notiztyp, um schnell zu finden, was du brauchst.', customizeTitle: 'Ganz nach deinem Geschmack', customizeDescription: 'Wähle aus acht Designs, passe Farben an und blende Steuerelemente aus oder verschiebe sie.',
    howEyebrow: 'GANZ EINFACH', howTitle: 'Aus der Zwischenablage<br />in deine Notizen.', howDescription: 'Mit SFNotes speicherst du Inhalte in Sekunden und findest sie wieder, ohne deine Arbeit zu unterbrechen.', stepOneTitle: 'Kopieren oder einfügen', stepOneDescription: 'Speichere den Inhalt der Zwischenablage mit der „+“-Schaltfläche oder einer Tastenkombination.', stepTwoTitle: 'Wiederfinden', stepTwoDescription: 'Suche, filtere und organisiere deine Notizen. Passe SFNotes in den Einstellungen an.', stepThreeTitle: 'Weiterverwenden', stepThreeDescription: 'Klicke auf eine Notiz, um sie erneut zu kopieren. Deine Daten bleiben auf deinem Gerät.',
    downloadEyebrow: 'BEREIT, WENN DU ES BIST', downloadTitle: 'Schaffe Platz dafür<br />auf deinem Desktop.', downloadDescription: 'Lade SFNotes kostenlos herunter. Wähle dein System und speichere, was wichtig ist.', windowsDescription: 'Windows 10 und 11 · x64', macDescription: 'Intel und Apple Silicon', linuxDescription: 'AppImage, DEB und RPM · x64', downloadExe: '.exe herunterladen', downloadDmg: '.dmg herunterladen', downloadAppImage: 'AppImage herunterladen', otherFormat: 'Du suchst ein anderes Format?', allDownloads: 'Alle Downloads auf GitHub ansehen', latestVersion: 'Neueste Version', footerTagline: 'Eine kleine Notiz, damit Wichtiges in deiner Nähe bleibt.', sourceCode: 'Quellcode', downloads: 'Downloads', platformWindows: 'Windows', platformMacos: 'macOS', platformLinux: 'Linux', heroPlatformDownload: 'Für {platform} herunterladen', releaseDetail: 'Version {version} · Kostenloser Download', heroRelease: 'SFNotes {version} herunterladen', heroOther: 'Kostenlos für Windows, macOS und Linux'
  },
  it: {
    pageTitle: 'SFNotes: app gratuita di note per desktop', pageDescription: 'App gratuita per salvare testi, link, immagini e file sul desktop. Scarica SFNotes per Windows, macOS e Linux e personalizza temi e controlli.', ogDescription: 'Uno spazio fluttuante per salvare e ritrovare ciò che conta. Gratis per Windows, macOS e Linux.', brandHome: 'SFNotes, home', mainNavigation: 'Navigazione principale', languageLabel: 'Lingua',
    navFeatures: 'Funzioni', navHow: 'Come funziona', navDownload: 'Scarica', heroEyebrow: 'UN PICCOLO SPAZIO PER LE TUE GRANDI IDEE', heroTitle: 'Quello che ti serve.<br /><span>Sempre a portata di mano.</span>', heroDescription: 'Salva testi, link, immagini e file in una nota fluttuante sul desktop. Ritrovali e copiali quando ti servono.', heroDownload: 'Scarica SFNotes', heroDownloadDetail: 'Gratis per Windows, macOS e Linux', viewGithub: 'Vedi su GitHub', privacy: 'Le tue note restano sul tuo dispositivo. Nessun account e nessuna sincronizzazione cloud.', previewLabel: 'Anteprima di SFNotes', screenshotAlt: 'Schermata di SFNotes con note di testo e link', savedLinks: 'Link salvati', alwaysAtHand: 'Sempre a portata di mano', trustLabel: 'Compatibilità e privacy', platforms: 'Windows, macOS e Linux', localSave: 'Salvataggio locale automatico', freeOpenSource: 'Gratis e open source',
    featuresEyebrow: 'MENO RICERCHE, PIÙ FLUIDITÀ', featuresTitle: 'Tutto ciò che conta,<br />in un unico posto.', featuresDescription: 'Un angolo discreto sul desktop per le cose che cerchi sempre.', saveTitle: 'Salva tutto', saveDescription: 'Testi, link, immagini e file in un elenco pratico. Incolla dagli appunti o aggiungi file dal menu.', text: 'Testo', links: 'Link', images: 'Immagini', files: 'File', findTitle: 'Trova subito', findDescription: 'Cerca per contenuto e filtra per tipo di nota per trovare rapidamente ciò che ti serve.', customizeTitle: 'Come piace a te', customizeDescription: 'Scegli tra otto temi, regola i colori e nascondi o sposta i controlli per adattare la finestra ai tuoi gusti.',
    howEyebrow: 'È SEMPLICISSIMO', howTitle: 'Dagli appunti<br />alle tue note.', howDescription: 'SFNotes ti permette di salvare qualcosa in pochi secondi e ritrovarlo senza interrompere quello che stavi facendo.', stepOneTitle: 'Copia o incolla', stepOneDescription: 'Usa il pulsante «+» o la scorciatoia da tastiera per salvare ciò che hai negli appunti.', stepTwoTitle: 'Ritrovalo', stepTwoDescription: 'Cerca, filtra e organizza le tue note. Personalizza SFNotes nelle impostazioni.', stepThreeTitle: 'Riutilizzalo', stepThreeDescription: 'Fai clic su una nota per copiarla di nuovo. I tuoi dati restano sul dispositivo.',
    downloadEyebrow: 'PRONTO QUANDO LO SEI TU', downloadTitle: 'Fagli spazio<br />sul desktop.', downloadDescription: 'Scarica SFNotes gratis. Scegli il tuo sistema e inizia a salvare ciò che conta.', windowsDescription: 'Windows 10 e 11 · x64', macDescription: 'Intel e Apple Silicon', linuxDescription: 'AppImage, DEB e RPM · x64', downloadExe: 'Scarica .exe', downloadDmg: 'Scarica .dmg', downloadAppImage: 'Scarica AppImage', otherFormat: 'Cerchi un altro formato?', allDownloads: 'Vedi tutti i download su GitHub', latestVersion: 'Ultima versione', footerTagline: 'Una piccola nota per tenere vicino ciò che conta.', sourceCode: 'Codice sorgente', downloads: 'Download', platformWindows: 'Windows', platformMacos: 'macOS', platformLinux: 'Linux', heroPlatformDownload: 'Scarica per {platform}', releaseDetail: 'Versione {version} · Download gratuito', heroRelease: 'Scarica SFNotes {version}', heroOther: 'Gratis per Windows, macOS e Linux'
  },
  pt: {
    pageTitle: 'SFNotes: aplicação gratuita de notas para computador', pageDescription: 'Aplicação gratuita para guardar textos, links, imagens e ficheiros no ambiente de trabalho. Transfira o SFNotes para Windows, macOS e Linux e personalize temas e controlos.', ogDescription: 'Um espaço flutuante para guardar e encontrar o que importa. Grátis para Windows, macOS e Linux.', brandHome: 'SFNotes, início', mainNavigation: 'Navegação principal', languageLabel: 'Idioma',
    navFeatures: 'Funcionalidades', navHow: 'Como funciona', navDownload: 'Transferir', heroEyebrow: 'UM PEQUENO ESPAÇO PARA AS SUAS GRANDES IDEIAS', heroTitle: 'O que precisa.<br /><span>Sempre à mão.</span>', heroDescription: 'Guarde textos, links, imagens e ficheiros numa nota flutuante no ambiente de trabalho. Encontre-os e copie-os quando precisar.', heroDownload: 'Transferir SFNotes', heroDownloadDetail: 'Grátis para Windows, macOS e Linux', viewGithub: 'Ver no GitHub', privacy: 'As suas notas ficam no seu dispositivo. Sem conta nem sincronização na nuvem.', previewLabel: 'Pré-visualização do SFNotes', screenshotAlt: 'Captura do SFNotes com notas de texto e links', savedLinks: 'Links guardados', alwaysAtHand: 'Sempre à mão', trustLabel: 'Compatibilidade e privacidade', platforms: 'Windows, macOS e Linux', localSave: 'Gravação local automática', freeOpenSource: 'Grátis e de código aberto',
    featuresEyebrow: 'MENOS PESQUISAS, MAIS FLUIDEZ', featuresTitle: 'Tudo o que importa,<br />num só lugar.', featuresDescription: 'Um canto discreto no ambiente de trabalho para aquilo que está sempre a procurar.', saveTitle: 'Guarde tudo', saveDescription: 'Textos, links, imagens e ficheiros numa lista prática. Cole da área de transferência ou adicione ficheiros pelo menu.', text: 'Texto', links: 'Links', images: 'Imagens', files: 'Ficheiros', findTitle: 'Encontre num instante', findDescription: 'Pesquise pelo conteúdo e filtre por tipo de nota para encontrar rapidamente o que precisa.', customizeTitle: 'À sua maneira', customizeDescription: 'Escolha entre oito temas, ajuste as cores e oculte ou mova os controlos para personalizar a janela.',
    howEyebrow: 'É ASSIM TÃO SIMPLES', howTitle: 'Da área de transferência<br />às suas notas.', howDescription: 'O SFNotes permite guardar algo em segundos e voltar a encontrar sem interromper o que estava a fazer.', stepOneTitle: 'Copie ou cole', stepOneDescription: 'Use o botão «+» ou o atalho de teclado para guardar o que está na área de transferência.', stepTwoTitle: 'Encontre', stepTwoDescription: 'Pesquise, filtre e organize as suas notas. Personalize o SFNotes nas definições.', stepThreeTitle: 'Use novamente', stepThreeDescription: 'Clique numa nota para a copiar novamente. Os seus dados ficam no dispositivo.',
    downloadEyebrow: 'PRONTO QUANDO ESTIVER', downloadTitle: 'Abra espaço<br />no seu ambiente de trabalho.', downloadDescription: 'Transfira o SFNotes gratuitamente. Escolha o seu sistema e comece a guardar o que importa.', windowsDescription: 'Windows 10 e 11 · x64', macDescription: 'Intel e Apple Silicon', linuxDescription: 'AppImage, DEB e RPM · x64', downloadExe: 'Transferir .exe', downloadDmg: 'Transferir .dmg', downloadAppImage: 'Transferir AppImage', otherFormat: 'Procura outro formato?', allDownloads: 'Ver todas as transferências no GitHub', latestVersion: 'Versão mais recente', footerTagline: 'Uma pequena nota para manter por perto o que importa.', sourceCode: 'Código-fonte', downloads: 'Transferências', platformWindows: 'Windows', platformMacos: 'macOS', platformLinux: 'Linux', heroPlatformDownload: 'Transferir para {platform}', releaseDetail: 'Versão {version} · Transferência gratuita', heroRelease: 'Transferir SFNotes {version}', heroOther: 'Grátis para Windows, macOS e Linux'
  }
};

const showcaseTranslations = {
  es: {
    navScreenshots: 'Capturas', showcaseEyebrow: 'MIRA CÓMO FUNCIONA', showcaseTitle: 'Todo lo que necesitas,<br />a simple vista.', showcaseDescription: 'Explora algunas pantallas de SFNotes y descubre cómo se adapta a tu forma de guardar y encontrar cosas.',
    galleryFilterTitle: 'Encuentra cada cosa', galleryFilterDescription: 'Filtra tus notas por texto, enlaces, imágenes o archivos para llegar rápido a lo que buscas.', galleryFilterAlt: 'Notas filtradas para mostrar solo enlaces',
    galleryActionsTitle: 'Acciones al momento', galleryActionsDescription: 'Copia, edita, corta o elimina una nota desde su menú.', galleryActionsAlt: 'Menú de acciones de una nota',
    galleryThemesTitle: 'Elige tu aspecto', galleryThemesDescription: 'Prueba ocho temas y cambia el color de resaltado para darle tu estilo.', galleryThemesAlt: 'Ajustes con temas y colores de resaltado',
    galleryControlsTitle: 'Personaliza los controles', galleryControlsDescription: 'Muestra u oculta búsqueda, filtros, contador y botones. Decide dónde colocar los controles.', galleryControlsAlt: 'Ajustes para mostrar u ocultar funciones y cambiar su posición',
    galleryDarkTitle: 'También en oscuro', galleryDarkDescription: 'El tema Medianoche ofrece una apariencia oscura para trabajar con poca luz.', galleryDarkAlt: 'SFNotes con el tema oscuro Medianoche',
    galleryEditTitle: 'Edita tus notas', galleryEditDescription: 'Abre una nota para cambiar su contenido y guarda los cambios en este dispositivo.', galleryEditAlt: 'Editor para modificar el contenido de una nota'
  },
  en: {
    navScreenshots: 'Screenshots', showcaseEyebrow: 'SEE HOW IT WORKS', showcaseTitle: 'Everything you need,<br />at a glance.', showcaseDescription: 'Take a look inside SFNotes and see how it fits the way you save and find things.',
    galleryFilterTitle: 'Find things quickly', galleryFilterDescription: 'Filter notes by text, links, images or files to get to what you need.', galleryFilterAlt: 'Notes filtered to show links only',
    galleryActionsTitle: 'Quick note actions', galleryActionsDescription: 'Copy, edit, cut or delete a note from its menu.', galleryActionsAlt: 'A note action menu',
    galleryThemesTitle: 'Choose your look', galleryThemesDescription: 'Try eight themes and change the highlight color to make it yours.', galleryThemesAlt: 'Settings with themes and highlight colors',
    galleryControlsTitle: 'Customize the controls', galleryControlsDescription: 'Show or hide search, filters, the counter and buttons. Choose where controls appear.', galleryControlsAlt: 'Settings to show or hide features and change their positions',
    galleryDarkTitle: 'A dark option too', galleryDarkDescription: 'The Midnight theme offers a darker look for working in low light.', galleryDarkAlt: 'SFNotes using the Midnight dark theme',
    galleryEditTitle: 'Edit your notes', galleryEditDescription: 'Open a note to change its content and save your changes on this device.', galleryEditAlt: 'Editor for changing a note’s content'
  },
  fr: {
    navScreenshots: 'Captures', showcaseEyebrow: 'DÉCOUVREZ SON FONCTIONNEMENT', showcaseTitle: 'Tout ce qu’il vous faut,<br />en un coup d’œil.', showcaseDescription: 'Découvrez quelques écrans de SFNotes et voyez comment l’application s’adapte à votre façon de conserver et retrouver vos éléments.',
    galleryFilterTitle: 'Retrouvez vos éléments', galleryFilterDescription: 'Filtrez les notes par texte, liens, images ou fichiers pour trouver rapidement ce que vous cherchez.', galleryFilterAlt: 'Notes filtrées pour afficher uniquement les liens',
    galleryActionsTitle: 'Des actions rapides', galleryActionsDescription: 'Copiez, modifiez, coupez ou supprimez une note depuis son menu.', galleryActionsAlt: 'Menu des actions d’une note',
    galleryThemesTitle: 'Choisissez votre apparence', galleryThemesDescription: 'Essayez huit thèmes et changez la couleur de surbrillance selon vos envies.', galleryThemesAlt: 'Réglages des thèmes et des couleurs de surbrillance',
    galleryControlsTitle: 'Personnalisez les commandes', galleryControlsDescription: 'Affichez ou masquez la recherche, les filtres, le compteur et les boutons. Choisissez leur emplacement.', galleryControlsAlt: 'Réglages pour afficher, masquer ou déplacer des fonctions',
    galleryDarkTitle: 'Un thème sombre aussi', galleryDarkDescription: 'Le thème Minuit propose une apparence sombre pour travailler avec peu de lumière.', galleryDarkAlt: 'SFNotes avec le thème sombre Minuit',
    galleryEditTitle: 'Modifiez vos notes', galleryEditDescription: 'Ouvrez une note pour modifier son contenu et enregistrer les changements sur cet appareil.', galleryEditAlt: 'Éditeur du contenu d’une note'
  },
  de: {
    navScreenshots: 'Einblicke', showcaseEyebrow: 'SO FUNKTIONIERT ES', showcaseTitle: 'Alles Wichtige<br />auf einen Blick.', showcaseDescription: 'Sieh dir SFNotes an und entdecke, wie die App dich beim Speichern und Wiederfinden unterstützt.',
    galleryFilterTitle: 'Alles schnell finden', galleryFilterDescription: 'Filtere Notizen nach Text, Links, Bildern oder Dateien und finde schneller, wonach du suchst.', galleryFilterAlt: 'Notizen, gefiltert auf Links',
    galleryActionsTitle: 'Schnelle Aktionen', galleryActionsDescription: 'Kopiere, bearbeite, schneide aus oder lösche eine Notiz über ihr Menü.', galleryActionsAlt: 'Menü mit Notizaktionen',
    galleryThemesTitle: 'Wähle dein Design', galleryThemesDescription: 'Probiere acht Designs aus und passe die Hervorhebungsfarbe an.', galleryThemesAlt: 'Einstellungen für Designs und Hervorhebungsfarben',
    galleryControlsTitle: 'Steuerelemente anpassen', galleryControlsDescription: 'Blende Suche, Filter, Zähler und Schaltflächen ein oder aus. Lege ihre Position fest.', galleryControlsAlt: 'Einstellungen zum Ein- und Ausblenden und Verschieben von Funktionen',
    galleryDarkTitle: 'Auch dunkel verfügbar', galleryDarkDescription: 'Das Mitternacht-Design bietet eine dunkle Ansicht für wenig Licht.', galleryDarkAlt: 'SFNotes im dunklen Mitternacht-Design',
    galleryEditTitle: 'Notizen bearbeiten', galleryEditDescription: 'Öffne eine Notiz, ändere ihren Inhalt und speichere die Änderungen auf diesem Gerät.', galleryEditAlt: 'Editor zum Ändern des Inhalts einer Notiz'
  },
  it: {
    navScreenshots: 'Immagini', showcaseEyebrow: 'SCOPRI COME FUNZIONA', showcaseTitle: 'Tutto quello che serve,<br />a colpo d’occhio.', showcaseDescription: 'Dai un’occhiata a SFNotes e scopri come si adatta al tuo modo di salvare e ritrovare le cose.',
    galleryFilterTitle: 'Trova tutto rapidamente', galleryFilterDescription: 'Filtra le note per testo, link, immagini o file e raggiungi subito ciò che cerchi.', galleryFilterAlt: 'Note filtrate per mostrare solo i link',
    galleryActionsTitle: 'Azioni rapide', galleryActionsDescription: 'Copia, modifica, taglia o elimina una nota dal suo menu.', galleryActionsAlt: 'Menu delle azioni di una nota',
    galleryThemesTitle: 'Scegli il tuo stile', galleryThemesDescription: 'Prova otto temi e cambia il colore di evidenziazione come preferisci.', galleryThemesAlt: 'Impostazioni dei temi e dei colori di evidenziazione',
    galleryControlsTitle: 'Personalizza i controlli', galleryControlsDescription: 'Mostra o nascondi ricerca, filtri, conteggio e pulsanti. Scegli dove posizionare i controlli.', galleryControlsAlt: 'Impostazioni per mostrare, nascondere o spostare le funzioni',
    galleryDarkTitle: 'Disponibile anche scuro', galleryDarkDescription: 'Il tema Mezzanotte offre un aspetto scuro per lavorare con poca luce.', galleryDarkAlt: 'SFNotes con il tema scuro Mezzanotte',
    galleryEditTitle: 'Modifica le note', galleryEditDescription: 'Apri una nota per modificarne il contenuto e salvare i cambiamenti su questo dispositivo.', galleryEditAlt: 'Editor per modificare il contenuto di una nota'
  },
  pt: {
    navScreenshots: 'Imagens', showcaseEyebrow: 'VEJA COMO FUNCIONA', showcaseTitle: 'Tudo o que precisa,<br />num relance.', showcaseDescription: 'Explore alguns ecrãs do SFNotes e veja como se adapta à sua forma de guardar e encontrar coisas.',
    galleryFilterTitle: 'Encontre tudo rapidamente', galleryFilterDescription: 'Filtre notas por texto, links, imagens ou ficheiros para encontrar rapidamente o que procura.', galleryFilterAlt: 'Notas filtradas para mostrar apenas links',
    galleryActionsTitle: 'Ações rápidas', galleryActionsDescription: 'Copie, edite, corte ou elimine uma nota através do menu.', galleryActionsAlt: 'Menu de ações de uma nota',
    galleryThemesTitle: 'Escolha o seu visual', galleryThemesDescription: 'Experimente oito temas e altere a cor de destaque ao seu gosto.', galleryThemesAlt: 'Definições de temas e cores de destaque',
    galleryControlsTitle: 'Personalize os controlos', galleryControlsDescription: 'Mostre ou oculte a pesquisa, os filtros, o contador e os botões. Escolha onde ficam os controlos.', galleryControlsAlt: 'Definições para mostrar, ocultar ou mover funcionalidades',
    galleryDarkTitle: 'Também em modo escuro', galleryDarkDescription: 'O tema Meia-noite oferece um visual escuro para trabalhar com pouca luz.', galleryDarkAlt: 'SFNotes com o tema escuro Meia-noite',
    galleryEditTitle: 'Edite as suas notas', galleryEditDescription: 'Abra uma nota, altere o seu conteúdo e guarde as mudanças neste dispositivo.', galleryEditAlt: 'Editor para alterar o conteúdo de uma nota'
  }
};
for (const language of Object.keys(showcaseTranslations)) Object.assign(translations[language], showcaseTranslations[language]);

const supportedLanguages = Object.keys(translations);
const languageSelect = document.querySelector('#language-select');
let activeLanguage = 'es';
let currentRelease = null;
document.querySelector('#year').textContent = new Date().getFullYear();

function detectPlatform() {
  const platform = `${navigator.userAgent} ${navigator.platform}`.toLowerCase();
  if (platform.includes('win')) return 'windows';
  if (platform.includes('mac')) return 'macos';
  if (platform.includes('linux')) return 'linux';
  return null;
}

function findAsset(assets, platform) {
  if (platform === 'windows') return assets.find((asset) => /SFNotes-Setup-.*\.exe$/i.test(asset.name));
  if (platform === 'macos') return assets.find((asset) => /universal\.dmg$/i.test(asset.name)) || assets.find((asset) => /universal-mac\.zip$/i.test(asset.name));
  if (platform === 'linux') return assets.find((asset) => /x86_64\.AppImage$/i.test(asset.name)) || assets.find((asset) => /amd64\.deb$/i.test(asset.name));
  return null;
}

function setLanguage(language) {
  activeLanguage = supportedLanguages.includes(language) ? language : 'en';
  const copy = translations[activeLanguage];
  document.documentElement.lang = activeLanguage;
  languageSelect.value = activeLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.alt = copy[element.dataset.i18nAlt];
  });
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.pageDescription;
  document.querySelector('meta[property="og:title"]').content = copy.pageTitle;
  document.querySelector('meta[property="og:description"]').content = copy.ogDescription;
  try { localStorage.setItem('sfnotes-language', activeLanguage); } catch { /* Storage may be disabled. */ }
  renderRelease();
}

function renderRelease() {
  const copy = translations[activeLanguage];
  const release = currentRelease;
  const version = (release?.tag_name || '').replace(/^v/, '') || fallbackVersion;
  document.querySelector('#release-note span:last-child').textContent = version;

  for (const platform of ['windows', 'macos', 'linux']) {
    const asset = release && findAsset(release.assets || [], platform);
    const link = document.querySelector(`[data-asset="${platform}"]`);
    if (link) link.href = asset?.browser_download_url || release?.html_url || latestReleasePage;
  }

  const currentPlatform = detectPlatform();
  const heroLink = document.querySelector('#hero-download');
  const heroAsset = currentPlatform && release && findAsset(release.assets || [], currentPlatform);
  document.querySelectorAll('.download-card').forEach((card) => card.classList.remove('suggested'));
  if (heroAsset) {
    heroLink.href = heroAsset.browser_download_url;
    document.querySelector('#hero-download-label').textContent = copy.heroPlatformDownload.replace('{platform}', copy[`platform${currentPlatform[0].toUpperCase()}${currentPlatform.slice(1)}`]);
    document.querySelector('#hero-download-detail').textContent = copy.releaseDetail.replace('{version}', version);
    document.querySelector(`[data-platform="${currentPlatform}"]`)?.classList.add('suggested');
  } else if (release) {
    heroLink.href = release.html_url || latestReleasePage;
    document.querySelector('#hero-download-label').textContent = copy.heroRelease.replace('{version}', version);
    document.querySelector('#hero-download-detail').textContent = copy.heroOther;
  } else {
    heroLink.href = latestReleasePage;
    document.querySelector('#hero-download-label').textContent = copy.heroDownload;
    document.querySelector('#hero-download-detail').textContent = copy.heroDownloadDetail;
  }
}

const languageFromPath = location.pathname.match(/\/(en|fr|de|it|pt)\/?$/)?.[1];
const initialLanguage = languageFromPath || 'es';
languageSelect.addEventListener('change', () => {
  const siteRoot = location.pathname.replace(/(?:en|fr|de|it|pt)\/?$/, '');
  const destination = `${siteRoot}${languageSelect.value === 'es' ? '' : `${languageSelect.value}/`}${location.hash}`;
  location.assign(destination);
});
setLanguage(initialLanguage);

fetch(`https://api.github.com/repos/${owner}/${repository}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } })
  .then((response) => {
    if (!response.ok) throw new Error('Release lookup failed');
    return response.json();
  })
  .then((release) => { currentRelease = release; renderRelease(); })
  .catch(() => renderRelease());
