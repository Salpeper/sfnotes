import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Check, Clipboard, Copy, File as FileIcon, Image as ImageIcon,
  Link as LinkIcon, MoreHorizontal, MoreVertical, Pin, PinOff, Plus, Search,
  Pencil, Power, RefreshCw, Settings as SettingsIcon, Scissors, Trash2, X
} from 'lucide-react';
import appIcon from './assets/sfnotes-icon.png';
import './style.css';

const starter = [
  { id: 'a1', type: 'url', value: 'https://www.are.na/', title: 'Are.na — collect and connect ideas' },
  { id: 'a2', type: 'text', value: 'Las buenas ideas no siempre llegan cuando estás sentado frente al escritorio. Captúralas aquí y vuelve a ellas cuando las necesites.' },
  { id: 'a3', type: 'text', value: 'SFNotes: un pequeño espacio para guardar lo que importa.' }
];

const supportedLanguages = [
  ['es', 'Español'], ['en', 'English'], ['fr', 'Français'],
  ['de', 'Deutsch'], ['it', 'Italiano'], ['pt', 'Português']
];

function detectLanguage() {
  const locale = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return supportedLanguages.some(([code]) => code === locale) ? locale : 'es';
}

const translations = {
  es: {
    search: 'Buscar en todas las notas', notes: 'Notas', note: 'nota', notesPlural: 'notas', all: 'Todas', text: 'Texto', links: 'Enlaces', images: 'Imágenes', files: 'Archivos', addFile: 'Añadir archivo', filterNotes: 'Filtrar notas', typeLink: 'Enlace', typeImage: 'Imagen', typeText: 'Texto',
    noMatches: 'No hay notas con ese filtro.', empty: 'Pega algo para guardarlo aquí.', copyHint: 'Pulsa para copiar', imageSaved: 'Imagen guardada', imagePasted: 'Imagen pegada',
    searchTitle: 'Buscar', pasteTitle: 'Pegar del portapapeles', moreTitle: 'Más opciones', pasteAdded: 'Añadido a Notas', nothingToPaste: 'No hay nada que pegar', clipboardError: 'No se pudo leer el portapapeles', copied: 'Copiado', cut: 'Copiado y quitado de Notas', copyError: 'No se pudo copiar', copyAction: 'Copiar', cutAction: 'Cortar', deleteAction: 'Eliminar', editAction: 'Editar texto', typeFile: 'Archivo', shiftClick: '⇧ + clic',
    pinned: 'Fijada', pin: 'Fijar en escritorio', unpin: 'Desfijar ventana', pinWindow: 'Fijar ventana', closeApp: 'Cerrar SFNotes', settings: 'Ajustes', closeSettings: 'Cerrar ajustes',
    appearance: 'APARIENCIA', theme: 'Tema', light: 'Claro', dark: 'Oscuro', lavender: 'Lavanda', mint: 'Menta', ocean: 'Océano', rose: 'Rosa', sand: 'Arena', midnight: 'Medianoche', accent: 'Color de resaltado', yellow: 'Amarillo', blue: 'Azul', green: 'Verde', orange: 'Naranja', purple: 'Morado', pink: 'Rosa', red: 'Rojo', teal: 'Turquesa',
    reading: 'LECTURA', fontSize: 'Tamaño de texto', fontHelp: 'Elige el tamaño de las notas', small: 'Pequeño', medium: 'Medio', large: 'Grande', density: 'Densidad de notas', densityHelp: 'Espacio entre fragmentos', comfortable: 'Cómoda', compact: 'Compacta',
    behavior: 'COMPORTAMIENTO', customize: 'PERSONALIZAR INTERFAZ', showSearch: 'Mostrar búsqueda', showFilters: 'Mostrar filtros', showCounter: 'Mostrar contador de notas', showPinButton: 'Mostrar botón de fijar', showAddButton: 'Mostrar botón de añadir', addPosition: 'Posición del botón añadir', pinPosition: 'Posición del botón fijar', addTop: 'Barra superior', addBottom: 'Barra inferior', pinOnStart: 'Fijar al iniciar', pinHelp: 'Mantener la nota sobre otras ventanas', showNumbers: 'Mostrar numeración', numbersHelp: 'Identificar notas de un vistazo', language: 'Idioma', shortcutsTitle: 'ATAJOS DE TECLADO', shortcutPaste: 'Guardar portapapeles en SFNotes', shortcutSearch: 'Buscar', shortcutGlobalPaste: 'Guardar portapapeles (global)', shortcutScreenshot: 'Capturar pantalla (global)', shortcutClose: 'Cerrar paneles', pressKeys: 'Pulsa teclas…', unavailable: 'No disponible', shortcutHelp: 'Los atajos globales funcionan aunque SFNotes esté en segundo plano. macOS puede pedir permiso para capturar la pantalla.',
    localData: 'Tus notas y preferencias se guardan en este dispositivo.', updates: 'ACTUALIZACIONES', checkUpdates: 'Buscar actualizaciones', checkingUpdates: 'Buscando actualizaciones…', updateAvailable: 'Actualización encontrada. Descargando…', downloadingUpdate: 'Descargando actualización: {percent} %', updateReady: 'Actualización lista para instalar', upToDate: 'Tienes la última versión', updateError: 'No se pudo comprobar si hay actualizaciones', updateUnsupported: 'Las actualizaciones estarán disponibles en la versión instalada', restartUpdate: 'Reiniciar e instalar', editNote: 'EDITAR NOTA', yourText: 'Tu texto', savedLocal: 'Guardado en este dispositivo', save: 'Guardar', changesSaved: 'Cambios guardados'
  },
  en: {
    search: 'Search all notes', notes: 'Notes', note: 'note', notesPlural: 'notes', all: 'All', text: 'Text', links: 'Links', images: 'Images', files: 'Files', addFile: 'Add file', filterNotes: 'Filter notes', typeLink: 'Link', typeImage: 'Image', typeText: 'Text',
    noMatches: 'No notes match this filter.', empty: 'Paste something to save it here.', copyHint: 'Click to copy', imageSaved: 'Saved image', imagePasted: 'Pasted image',
    searchTitle: 'Search', pasteTitle: 'Paste from clipboard', moreTitle: 'More options', pasteAdded: 'Added to Notes', nothingToPaste: 'Nothing to paste', clipboardError: 'Could not read clipboard', copied: 'Copied', cut: 'Copied and removed from Notes', copyError: 'Could not copy', copyAction: 'Copy', cutAction: 'Cut', deleteAction: 'Delete', editAction: 'Edit text', typeFile: 'File', shiftClick: '⇧ + click',
    pinned: 'Pinned', pin: 'Pin to desktop', unpin: 'Unpin window', pinWindow: 'Pin window', closeApp: 'Close SFNotes', settings: 'Settings', closeSettings: 'Close settings',
    appearance: 'APPEARANCE', theme: 'Theme', light: 'Light', dark: 'Dark', lavender: 'Lavender', mint: 'Mint', ocean: 'Ocean', rose: 'Rose', sand: 'Sand', midnight: 'Midnight', accent: 'Highlight color', yellow: 'Yellow', blue: 'Blue', green: 'Green', orange: 'Orange', purple: 'Purple', pink: 'Pink', red: 'Red', teal: 'Teal',
    reading: 'READING', fontSize: 'Text size', fontHelp: 'Choose note text size', small: 'Small', medium: 'Medium', large: 'Large', density: 'Note spacing', densityHelp: 'Space between notes', comfortable: 'Comfortable', compact: 'Compact',
    behavior: 'BEHAVIOR', customize: 'CUSTOMIZE INTERFACE', showSearch: 'Show search', showFilters: 'Show filters', showCounter: 'Show note count', showPinButton: 'Show pin button', showAddButton: 'Show add button', addPosition: 'Add button position', pinPosition: 'Pin button position', addTop: 'Top bar', addBottom: 'Bottom bar', mint: 'Mint', ocean: 'Ocean', rose: 'Rose', sand: 'Sand', midnight: 'Midnight', pinOnStart: 'Pin on startup', pinHelp: 'Keep the note above other windows', showNumbers: 'Show numbering', numbersHelp: 'Identify notes at a glance', language: 'Language', shortcutsTitle: 'KEYBOARD SHORTCUTS', shortcutPaste: 'Save clipboard to SFNotes', shortcutSearch: 'Search', shortcutGlobalPaste: 'Save clipboard (global)', shortcutScreenshot: 'Capture screen (global)', shortcutClose: 'Close panels', pressKeys: 'Press keys…', unavailable: 'Unavailable', shortcutHelp: 'Global shortcuts work while SFNotes is in the background. macOS may ask for permission to capture the screen.',
    localData: 'Your notes and preferences are saved on this device.', updates: 'UPDATES', checkUpdates: 'Check for updates', checkingUpdates: 'Checking for updates…', updateAvailable: 'Update found. Downloading…', downloadingUpdate: 'Downloading update: {percent}%', updateReady: 'Update ready to install', upToDate: 'You’re up to date', updateError: 'Could not check for updates', updateUnsupported: 'Updates are available in the installed version', restartUpdate: 'Restart and install', editNote: 'EDIT NOTE', yourText: 'Your text', savedLocal: 'Saved on this device', save: 'Save', changesSaved: 'Changes saved'
  },
  fr: {
    search: 'Rechercher dans les notes', notes: 'Notes', note: 'note', notesPlural: 'notes', all: 'Toutes', text: 'Texte', links: 'Liens', images: 'Images', files: 'Fichiers', addFile: 'Ajouter un fichier', filterNotes: 'Filtrer les notes', typeLink: 'Lien', typeImage: 'Image', typeText: 'Texte',
    noMatches: 'Aucune note pour ce filtre.', empty: 'Collez un élément pour l’enregistrer ici.', copyHint: 'Cliquer pour copier', imageSaved: 'Image enregistrée', imagePasted: 'Image collée',
    searchTitle: 'Rechercher', pasteTitle: 'Coller depuis le presse-papiers', moreTitle: 'Plus d’options', pasteAdded: 'Ajouté aux notes', nothingToPaste: 'Rien à coller', clipboardError: 'Impossible de lire le presse-papiers', copied: 'Copié', cut: 'Copié et retiré des notes', copyError: 'Impossible de copier', copyAction: 'Copier', cutAction: 'Couper', deleteAction: 'Supprimer', editAction: 'Modifier le texte', typeFile: 'Fichier', shiftClick: '⇧ + clic',
    pinned: 'Épinglée', pin: 'Épingler sur le bureau', unpin: 'Désépingler la fenêtre', pinWindow: 'Épingler la fenêtre', closeApp: 'Fermer SFNotes', settings: 'Réglages', closeSettings: 'Fermer les réglages',
    appearance: 'APPARENCE', theme: 'Thème', light: 'Clair', dark: 'Sombre', lavender: 'Lavande', accent: 'Couleur de surbrillance', yellow: 'Jaune', blue: 'Bleu', green: 'Vert', orange: 'Orange', purple: 'Violet', pink: 'Rose', red: 'Rouge', teal: 'Turquoise',
    reading: 'LECTURE', fontSize: 'Taille du texte', fontHelp: 'Choisir la taille du texte', small: 'Petite', medium: 'Moyenne', large: 'Grande', density: 'Espacement des notes', densityHelp: 'Espace entre les notes', comfortable: 'Aéré', compact: 'Compact',
    behavior: 'COMPORTEMENT', customize: 'PERSONNALISER L’INTERFACE', showSearch: 'Afficher la recherche', showFilters: 'Afficher les filtres', showCounter: 'Afficher le nombre de notes', showPinButton: 'Afficher le bouton épingler', showAddButton: 'Afficher le bouton ajouter', addPosition: 'Position du bouton ajouter', pinPosition: 'Position du bouton épingler', addTop: 'Barre supérieure', addBottom: 'Barre inférieure', mint: 'Menthe', ocean: 'Océan', rose: 'Rose', sand: 'Sable', midnight: 'Minuit', pinOnStart: 'Épingler au démarrage', pinHelp: 'Garder la note au-dessus des fenêtres', showNumbers: 'Afficher les numéros', numbersHelp: 'Repérer les notes rapidement', language: 'Langue', shortcutsTitle: 'RACCOURCIS CLAVIER', shortcutPaste: 'Enregistrer le presse-papiers dans SFNotes', shortcutSearch: 'Rechercher', shortcutGlobalPaste: 'Enregistrer le presse-papiers (global)', shortcutScreenshot: 'Capturer l’écran (global)', shortcutClose: 'Fermer les panneaux', pressKeys: 'Appuyez sur des touches…', unavailable: 'Indisponible', shortcutHelp: 'Les raccourcis globaux fonctionnent lorsque SFNotes est en arrière-plan. macOS peut demander l’autorisation de capturer l’écran.',
    localData: 'Vos notes et préférences sont enregistrées sur cet appareil.', updates: 'MISES À JOUR', checkUpdates: 'Rechercher des mises à jour', checkingUpdates: 'Recherche des mises à jour…', updateAvailable: 'Mise à jour trouvée. Téléchargement…', downloadingUpdate: 'Téléchargement : {percent} %', updateReady: 'Mise à jour prête à installer', upToDate: 'Vous avez la dernière version', updateError: 'Impossible de rechercher des mises à jour', updateUnsupported: 'Les mises à jour sont disponibles dans la version installée', restartUpdate: 'Redémarrer et installer', editNote: 'MODIFIER LA NOTE', yourText: 'Votre texte', savedLocal: 'Enregistré sur cet appareil', save: 'Enregistrer', changesSaved: 'Modifications enregistrées'
  },
  de: {
    search: 'Notizen durchsuchen', notes: 'Notizen', note: 'Notiz', notesPlural: 'Notizen', all: 'Alle', text: 'Text', links: 'Links', images: 'Bilder', files: 'Dateien', addFile: 'Datei hinzufügen', filterNotes: 'Notizen filtern', typeLink: 'Link', typeImage: 'Bild', typeText: 'Text',
    noMatches: 'Keine Notizen für diesen Filter.', empty: 'Füge etwas ein, um es hier zu speichern.', copyHint: 'Zum Kopieren klicken', imageSaved: 'Gespeichertes Bild', imagePasted: 'Eingefügtes Bild',
    searchTitle: 'Suchen', pasteTitle: 'Aus Zwischenablage einfügen', moreTitle: 'Weitere Optionen', pasteAdded: 'Zu Notizen hinzugefügt', nothingToPaste: 'Nichts zum Einfügen', clipboardError: 'Zwischenablage konnte nicht gelesen werden', copied: 'Kopiert', cut: 'Kopiert und aus Notizen entfernt', copyError: 'Kopieren nicht möglich', copyAction: 'Kopieren', cutAction: 'Ausschneiden', deleteAction: 'Löschen', editAction: 'Text bearbeiten', typeFile: 'Datei', shiftClick: '⇧ + Klick',
    pinned: 'Angeheftet', pin: 'Am Desktop anheften', unpin: 'Fenster lösen', pinWindow: 'Fenster anheften', closeApp: 'SFNotes schließen', settings: 'Einstellungen', closeSettings: 'Einstellungen schließen',
    appearance: 'ERSCHEINUNGSBILD', theme: 'Design', light: 'Hell', dark: 'Dunkel', lavender: 'Lavendel', accent: 'Hervorhebungsfarbe', yellow: 'Gelb', blue: 'Blau', green: 'Grün', orange: 'Orange', purple: 'Lila', pink: 'Rosa', red: 'Rot', teal: 'Türkis',
    reading: 'LESEN', fontSize: 'Textgröße', fontHelp: 'Textgröße der Notizen wählen', small: 'Klein', medium: 'Mittel', large: 'Groß', density: 'Notizabstand', densityHelp: 'Abstand zwischen Notizen', comfortable: 'Locker', compact: 'Kompakt',
    behavior: 'VERHALTEN', customize: 'OBERFLÄCHE ANPASSEN', showSearch: 'Suche anzeigen', showFilters: 'Filter anzeigen', showCounter: 'Notizanzahl anzeigen', showPinButton: 'Anheften-Schaltfläche anzeigen', showAddButton: 'Hinzufügen-Schaltfläche anzeigen', addPosition: 'Position der Hinzufügen-Schaltfläche', pinPosition: 'Position der Anheften-Schaltfläche', addTop: 'Obere Leiste', addBottom: 'Untere Leiste', mint: 'Mint', ocean: 'Ozean', rose: 'Rosa', sand: 'Sand', midnight: 'Mitternacht', pinOnStart: 'Beim Start anheften', pinHelp: 'Notiz über anderen Fenstern halten', showNumbers: 'Nummerierung anzeigen', numbersHelp: 'Notizen schnell erkennen', language: 'Sprache', shortcutsTitle: 'TASTATURKÜRZEL', shortcutPaste: 'Zwischenablage in SFNotes speichern', shortcutSearch: 'Suchen', shortcutGlobalPaste: 'Zwischenablage speichern (global)', shortcutScreenshot: 'Bildschirm aufnehmen (global)', shortcutClose: 'Fenster schließen', pressKeys: 'Tasten drücken…', unavailable: 'Nicht verfügbar', shortcutHelp: 'Globale Tastenkürzel funktionieren, während SFNotes im Hintergrund läuft. macOS kann um Erlaubnis zur Bildschirmaufnahme bitten.',
    localData: 'Notizen und Einstellungen werden auf diesem Gerät gespeichert.', updates: 'UPDATES', checkUpdates: 'Nach Updates suchen', checkingUpdates: 'Suche nach Updates…', updateAvailable: 'Update gefunden. Wird heruntergeladen…', downloadingUpdate: 'Update wird geladen: {percent} %', updateReady: 'Update kann installiert werden', upToDate: 'Du bist auf dem neuesten Stand', updateError: 'Updates konnten nicht gesucht werden', updateUnsupported: 'Updates sind in der installierten Version verfügbar', restartUpdate: 'Neu starten und installieren', editNote: 'NOTIZ BEARBEITEN', yourText: 'Dein Text', savedLocal: 'Auf diesem Gerät gespeichert', save: 'Speichern', changesSaved: 'Änderungen gespeichert'
  },
  it: {
    search: 'Cerca in tutte le note', notes: 'Note', note: 'nota', notesPlural: 'note', all: 'Tutte', text: 'Testo', links: 'Link', images: 'Immagini', files: 'File', addFile: 'Aggiungi file', filterNotes: 'Filtra le note', typeLink: 'Link', typeImage: 'Immagine', typeText: 'Testo',
    noMatches: 'Nessuna nota per questo filtro.', empty: 'Incolla qualcosa per salvarlo qui.', copyHint: 'Fai clic per copiare', imageSaved: 'Immagine salvata', imagePasted: 'Immagine incollata',
    searchTitle: 'Cerca', pasteTitle: 'Incolla dagli appunti', moreTitle: 'Altre opzioni', pasteAdded: 'Aggiunto alle Note', nothingToPaste: 'Niente da incollare', clipboardError: 'Impossibile leggere gli appunti', copied: 'Copiato', cut: 'Copiato e rimosso dalle Note', copyError: 'Impossibile copiare', copyAction: 'Copia', cutAction: 'Taglia', deleteAction: 'Elimina', editAction: 'Modifica testo', typeFile: 'File', shiftClick: '⇧ + clic',
    pinned: 'Fissata', pin: 'Fissa sul desktop', unpin: 'Sblocca finestra', pinWindow: 'Fissa finestra', closeApp: 'Chiudi SFNotes', settings: 'Impostazioni', closeSettings: 'Chiudi impostazioni',
    appearance: 'ASPETTO', theme: 'Tema', light: 'Chiaro', dark: 'Scuro', lavender: 'Lavanda', accent: 'Colore di evidenziazione', yellow: 'Giallo', blue: 'Blu', green: 'Verde', orange: 'Arancione', purple: 'Viola', pink: 'Rosa', red: 'Rosso', teal: 'Turchese',
    reading: 'LETTURA', fontSize: 'Dimensione testo', fontHelp: 'Scegli la dimensione del testo', small: 'Piccolo', medium: 'Medio', large: 'Grande', density: 'Spaziatura note', densityHelp: 'Spazio tra le note', comfortable: 'Ampia', compact: 'Compatta',
    behavior: 'COMPORTAMENTO', customize: 'PERSONALIZZA INTERFACCIA', showSearch: 'Mostra ricerca', showFilters: 'Mostra filtri', showCounter: 'Mostra conteggio note', showPinButton: 'Mostra pulsante di fissaggio', showAddButton: 'Mostra pulsante aggiungi', addPosition: 'Posizione pulsante aggiungi', pinPosition: 'Posizione pulsante fissaggio', addTop: 'Barra superiore', addBottom: 'Barra inferiore', mint: 'Menta', ocean: 'Oceano', rose: 'Rosa', sand: 'Sabbia', midnight: 'Mezzanotte', pinOnStart: 'Fissa all’avvio', pinHelp: 'Mantieni la nota sopra le altre finestre', showNumbers: 'Mostra numerazione', numbersHelp: 'Riconosci le note a colpo d’occhio', language: 'Lingua', shortcutsTitle: 'SCORCIATOIE DA TASTIERA', shortcutPaste: 'Salva gli appunti in SFNotes', shortcutSearch: 'Cerca', shortcutGlobalPaste: 'Salva gli appunti (globale)', shortcutScreenshot: 'Cattura schermo (globale)', shortcutClose: 'Chiudi pannelli', pressKeys: 'Premi i tasti…', unavailable: 'Non disponibile', shortcutHelp: 'Le scorciatoie globali funzionano anche quando SFNotes è in background. macOS potrebbe chiedere il permesso di catturare lo schermo.',
    localData: 'Note e preferenze sono salvate su questo dispositivo.', updates: 'AGGIORNAMENTI', checkUpdates: 'Cerca aggiornamenti', checkingUpdates: 'Ricerca aggiornamenti…', updateAvailable: 'Aggiornamento trovato. Download…', downloadingUpdate: 'Download aggiornamento: {percent} %', updateReady: 'Aggiornamento pronto da installare', upToDate: 'È già installata la versione più recente', updateError: 'Impossibile cercare aggiornamenti', updateUnsupported: 'Gli aggiornamenti sono disponibili nella versione installata', restartUpdate: 'Riavvia e installa', editNote: 'MODIFICA NOTA', yourText: 'Il tuo testo', savedLocal: 'Salvato su questo dispositivo', save: 'Salva', changesSaved: 'Modifiche salvate'
  },
  pt: {
    search: 'Pesquisar em todas as notas', notes: 'Notas', note: 'nota', notesPlural: 'notas', all: 'Todas', text: 'Texto', links: 'Links', images: 'Imagens', files: 'Ficheiros', addFile: 'Adicionar ficheiro', filterNotes: 'Filtrar notas', typeLink: 'Link', typeImage: 'Imagem', typeText: 'Texto',
    noMatches: 'Nenhuma nota neste filtro.', empty: 'Cole algo para guardar aqui.', copyHint: 'Clique para copiar', imageSaved: 'Imagem guardada', imagePasted: 'Imagem colada',
    searchTitle: 'Pesquisar', pasteTitle: 'Colar da área de transferência', moreTitle: 'Mais opções', pasteAdded: 'Adicionado às Notas', nothingToPaste: 'Nada para colar', clipboardError: 'Não foi possível ler a área de transferência', copied: 'Copiado', cut: 'Copiado e removido das Notas', copyError: 'Não foi possível copiar', copyAction: 'Copiar', cutAction: 'Cortar', deleteAction: 'Eliminar', editAction: 'Editar texto', typeFile: 'Ficheiro', shiftClick: '⇧ + clique',
    pinned: 'Fixada', pin: 'Fixar no ambiente de trabalho', unpin: 'Desafixar janela', pinWindow: 'Fixar janela', closeApp: 'Fechar SFNotes', settings: 'Definições', closeSettings: 'Fechar definições',
    appearance: 'APARÊNCIA', theme: 'Tema', light: 'Claro', dark: 'Escuro', lavender: 'Lavanda', accent: 'Cor de realce', yellow: 'Amarelo', blue: 'Azul', green: 'Verde', orange: 'Laranja', purple: 'Roxo', pink: 'Rosa', red: 'Vermelho', teal: 'Turquesa',
    reading: 'LEITURA', fontSize: 'Tamanho do texto', fontHelp: 'Escolha o tamanho do texto', small: 'Pequeno', medium: 'Médio', large: 'Grande', density: 'Espaçamento das notas', densityHelp: 'Espaço entre notas', comfortable: 'Confortável', compact: 'Compacto',
    behavior: 'COMPORTAMENTO', customize: 'PERSONALIZAR INTERFACE', showSearch: 'Mostrar pesquisa', showFilters: 'Mostrar filtros', showCounter: 'Mostrar contagem de notas', showPinButton: 'Mostrar botão fixar', showAddButton: 'Mostrar botão adicionar', addPosition: 'Posição do botão adicionar', pinPosition: 'Posição do botão fixar', addTop: 'Barra superior', addBottom: 'Barra inferior', mint: 'Menta', ocean: 'Oceano', rose: 'Rosa', sand: 'Areia', midnight: 'Meia-noite', pinOnStart: 'Fixar ao iniciar', pinHelp: 'Manter a nota sobre outras janelas', showNumbers: 'Mostrar numeração', numbersHelp: 'Identificar notas rapidamente', language: 'Idioma', shortcutsTitle: 'ATALHOS DE TECLADO', shortcutPaste: 'Guardar área de transferência no SFNotes', shortcutSearch: 'Pesquisar', shortcutGlobalPaste: 'Guardar área de transferência (global)', shortcutScreenshot: 'Capturar ecrã (global)', shortcutClose: 'Fechar painéis', pressKeys: 'Prima as teclas…', unavailable: 'Indisponível', shortcutHelp: 'Os atalhos globais funcionam quando o SFNotes está em segundo plano. O macOS poderá pedir autorização para capturar o ecrã.',
    localData: 'As notas e preferências ficam guardadas neste dispositivo.', updates: 'ATUALIZAÇÕES', checkUpdates: 'Procurar atualizações', checkingUpdates: 'A procurar atualizações…', updateAvailable: 'Atualização encontrada. A transferir…', downloadingUpdate: 'A transferir atualização: {percent} %', updateReady: 'Atualização pronta para instalar', upToDate: 'Tem a versão mais recente', updateError: 'Não foi possível procurar atualizações', updateUnsupported: 'As atualizações estão disponíveis na versão instalada', restartUpdate: 'Reiniciar e instalar', editNote: 'EDITAR NOTA', yourText: 'O seu texto', savedLocal: 'Guardado neste dispositivo', save: 'Guardar', changesSaved: 'Alterações guardadas'
  }
};

const defaultSettings = {
  theme: 'light', accent: 'yellow', fontSize: 'medium', density: 'comfortable',
  pinOnStart: true, showNumbers: true, showSearch: true, showFilters: true,
  showCounter: true, showPinButton: true, showAddButton: true, addPosition: 'bottom', pinPosition: 'bottom', language: detectLanguage(),
  shortcuts: { paste: 'CommandOrControl+V', search: 'CommandOrControl+F', globalPaste: 'CommandOrControl+Shift+V', screenshot: 'CommandOrControl+Shift+S', close: 'Escape' }
};

function readSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('sfnotes-settings')) || {};
    return { ...defaultSettings, ...saved, shortcuts: { ...defaultSettings.shortcuts, ...saved.shortcuts } };
  }
  catch { return defaultSettings; }
}

const identify = (value) => /^(https?:\/\/|www\.)/i.test(value.trim()) ? 'url' : 'text';
const languageOptions = supportedLanguages;

function shortcutMatches(event, accelerator) {
  if (!accelerator) return false;
  const parts = accelerator.split('+');
  const key = parts.at(-1).toLowerCase();
  const mac = navigator.platform.includes('Mac');
  const commandOrControl = parts.includes('CommandOrControl');
  const wantsCtrl = parts.includes('Ctrl') || (commandOrControl && !mac);
  const wantsMeta = parts.includes('Meta') || (commandOrControl && mac);
  const eventKey = event.key === ' ' ? 'space' : event.key.toLowerCase();
  return eventKey === key && event.ctrlKey === wantsCtrl && event.metaKey === wantsMeta && event.shiftKey === parts.includes('Shift') && event.altKey === parts.includes('Alt');
}

function recordedShortcut(event) {
  const parts = [];
  if (event.ctrlKey || event.metaKey) parts.push('CommandOrControl');
  if (event.altKey) parts.push('Alt');
  if (event.shiftKey) parts.push('Shift');
  if (!['Control', 'Meta', 'Alt', 'Shift'].includes(event.key)) parts.push(event.key === ' ' ? 'Space' : event.key.length === 1 ? event.key.toUpperCase() : event.key);
  return parts.length > 1 || parts[0] === 'Escape' ? parts.join('+') : '';
}

function App() {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sfnotes-items')) || starter; }
    catch { return starter; }
  });
  const [loaded, setLoaded] = useState(!window.sfnotes);
  const [settings, setSettings] = useState(readSettings);
  const [recordingShortcut, setRecordingShortcut] = useState('');
  const [globalShortcutStatus, setGlobalShortcutStatus] = useState({});
  const t = translations[settings.language] || translations.es;
  const uiLabel = (key) => t[key] || translations.es[key];
  const searchShortcut = (window.sfnotes?.platform || (navigator.platform.includes('Mac') ? 'darwin' : 'other')) === 'darwin' ? '⌘ F' : 'Ctrl F';
  const [pinned, setPinned] = useState(() => readSettings().pinOnStart);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [edit, setEdit] = useState(null);
  const [itemMenu, setItemMenu] = useState(null);
  const [appMenu, setAppMenu] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [updateStatus, setUpdateStatus] = useState({ status: 'idle' });
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (!window.sfnotes) return;
    let alive = true;
    (async () => {
      try {
        const saved = await window.sfnotes.readItems();
        if (alive && saved) setItems(saved);
      } catch (error) { console.error('No se pudieron cargar las notas', error); }
      finally { if (alive) setLoaded(true); }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem('sfnotes-items', JSON.stringify(items));
    window.sfnotes?.saveItems(items);
  }, [items, loaded]);

  useEffect(() => { localStorage.setItem('sfnotes-settings', JSON.stringify(settings)); }, [settings]);
  useEffect(() => { if (loaded) window.sfnotes?.setPinned(settings.pinOnStart); }, [loaded]);
  useEffect(() => {
    if (!loaded || !window.sfnotes?.setShortcuts) return;
    window.sfnotes.setShortcuts(settings.shortcuts).then(setGlobalShortcutStatus).catch(() => setGlobalShortcutStatus({}));
  }, [loaded, settings.shortcuts]);
  useEffect(() => window.sfnotes?.onUpdateStatus?.(setUpdateStatus), []);
  useEffect(() => window.sfnotes?.onShortcutAction?.((action) => {
    if (action === 'paste') paste();
    if (action === 'screenshot') window.sfnotes.captureScreen().then((image) => add('image', image)).catch(() => notify(t.clipboardError));
  }), [settings.language]);

  useEffect(() => {
    if (!recordingShortcut) return;
    const record = (event) => {
      event.preventDefault(); event.stopPropagation();
      if (['Control', 'Meta', 'Alt', 'Shift'].includes(event.key)) return;
      const accelerator = recordedShortcut(event);
      if (!accelerator) return;
      setSettings((old) => ({ ...old, shortcuts: { ...old.shortcuts, [recordingShortcut]: accelerator } }));
      setRecordingShortcut('');
    };
    window.addEventListener('keydown', record, true);
    return () => window.removeEventListener('keydown', record, true);
  }, [recordingShortcut]);

  useEffect(() => {
    if (!itemMenu && !appMenu) return;
    const close = () => { setItemMenu(null); setAppMenu(false); };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [itemMenu, appMenu]);

  const notify = (message) => { setToast(message); setTimeout(() => setToast(''), 1600); };
  const add = (kind, value) => {
    if (!value) return;
    setItems((old) => [{ id: crypto.randomUUID(), type: kind, value }, ...old]);
    notify(t.pasteAdded);
  };

  const addFiles = async () => {
    const paths = await window.sfnotes?.chooseFiles();
    paths?.forEach((file) => add('file', file));
  };

  const paste = async () => {
    try {
      const clip = window.sfnotes ? await window.sfnotes.readClipboard() : null;
      if (clip?.kind === 'image' || clip?.kind === 'url' || clip?.kind === 'text') {
        add(clip.kind === 'text' ? identify(clip.value) : clip.kind, clip.value);
        return;
      }
      if (clip?.kind === 'files' && clip.value.length) {
        clip.value.forEach((file) => add('file', file));
        return;
      }
      const text = await navigator.clipboard.readText();
      if (text) add(identify(text), text);
      else notify(t.nothingToPaste);
    } catch {
      try {
        const text = await navigator.clipboard.readText();
        if (text) add(identify(text), text);
        else notify(t.nothingToPaste);
      } catch { notify(t.clipboardError); }
    }
  };

  useEffect(() => {
    const key = (event) => {
      const target = event.target;
      const typing = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
      if (shortcutMatches(event, settings.shortcuts.paste) && !edit && !typing) {
        event.preventDefault(); paste();
      }
      if (shortcutMatches(event, settings.shortcuts.search)) {
        event.preventDefault(); searchRef.current?.focus();
      }
      if (shortcutMatches(event, settings.shortcuts.close)) { setSettingsOpen(false); setEdit(null); setItemMenu(null); setAppMenu(false); }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [settings.shortcuts, edit]);

  const copy = async (item, cut = false) => {
    try {
      if (window.sfnotes) await window.sfnotes.writeClipboard({ kind: item.type, value: item.value });
      else await navigator.clipboard.writeText(item.value);
      if (cut) setItems((old) => old.filter((entry) => entry.id !== item.id));
      notify(cut ? t.cut : t.copied);
    } catch { notify(t.copyError); }
  };

  const togglePin = () => {
    const next = !pinned;
    setPinned(next);
    window.sfnotes?.setPinned(next);
  };

  const setPreference = (key, value) => setSettings((old) => ({ ...old, [key]: value }));
  const toggleUiPreference = (key) => {
    if (key === 'showFilters' && settings.showFilters) setFilter('all');
    setPreference(key, !settings[key]);
  };
  const checkForUpdates = async () => {
    try {
      const result = await window.sfnotes?.checkForUpdates();
      if (result?.status === 'unsupported') setUpdateStatus(result);
    } catch { setUpdateStatus({ status: 'error' }); }
  };
  const visibleItems = items.filter((item) => {
    const matchesQuery = item.value.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (filter === 'all' || item.type === filter);
  });

  return (
    <main className="window" data-theme={settings.theme} data-accent={settings.accent} data-size={settings.fontSize} data-density={settings.density}>
      <header className="topbar">
        <div className="brand"><span className="brandmark"><img src={appIcon} alt="" /></span><b>SFNotes</b></div>
        <div className="top-actions">
          {settings.showSearch && <button className="round-button" title={t.searchTitle} onClick={() => searchRef.current?.focus()}><Search size={16} /></button>}
          {settings.showPinButton && settings.pinPosition === 'top' && <button className="round-button" title={pinned ? t.unpin : t.pin} onClick={togglePin}>{pinned ? <Pin size={15} /> : <PinOff size={15} />}</button>}
          {settings.showAddButton && settings.addPosition === 'top' && <button className="round-button" title={t.pasteTitle} onClick={paste}><Plus size={18} /></button>}
          <button className="round-button" title={t.moreTitle} onClick={(event) => { event.stopPropagation(); setAppMenu(!appMenu); }}><MoreHorizontal size={18} /></button>
          <button className="round-button close-app-button" title={t.closeApp} aria-label={t.closeApp} onClick={() => window.sfnotes?.close()}><Power size={16} /></button>
        </div>
      </header>

      <section className="notes-view">
        {settings.showSearch && <label className="search-field"><Search size={15} /><input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} /><kbd>{searchShortcut}</kbd></label>}
        <div className="section-heading"><h1>{t.notes}</h1>{settings.showCounter && <span>{items.length} {items.length === 1 ? t.note : t.notesPlural}</span>}</div>
        {settings.showFilters && <nav className="filters" aria-label={t.filterNotes}>
          {[['all', t.all], ['text', t.text], ['url', t.links], ['image', t.images], ['file', t.files]].map(([value, label]) => (
            <button key={value} className={filter === value ? 'selected' : ''} onClick={() => setFilter(value)}>{label}</button>
          ))}
        </nav>}

        <section className="notes-list">
          {visibleItems.map((item, index) => (
            <article
              className={`note-card ${item.type === 'image' ? 'note-image' : item.type === 'file' ? 'note-file' : ''}`}
              key={item.id}
              onClick={() => copy(item)}
              onContextMenu={(event) => { event.preventDefault(); setItemMenu({ id: item.id, x: event.clientX, y: event.clientY }); }}
              onMouseDown={(event) => { if (event.button === 1) { event.preventDefault(); setEdit(item); } }}
              onClickCapture={(event) => { if (event.shiftKey) { event.stopPropagation(); copy(item, true); } }}
            >
              <div className="note-meta">
                {settings.showNumbers && <span className="note-number">{String(items.indexOf(item) + 1).padStart(2, '0')}</span>}
                <span>{item.type === 'url' ? t.typeLink : item.type === 'image' ? t.typeImage : item.type === 'file' ? t.typeFile : t.typeText}</span>
                <button className="note-more" title={t.moreTitle} onClick={(event) => { event.stopPropagation(); setItemMenu({ id: item.id, x: event.clientX, y: event.clientY }); }}><MoreVertical size={15} /></button>
              </div>
              {item.type === 'image' ? (
                <div className="image-preview"><img src={item.value} alt={t.imageSaved} /><div><h3>{t.imageSaved}</h3><p>{t.imagePasted}</p></div></div>
              ) : item.type === 'file' ? (
                <div className="link-preview"><span className="link-mark"><FileIcon size={15} /></span><div><h3>{item.value.split(/[\\/]/).pop()}</h3><p>{item.value}</p></div></div>
              ) : item.type === 'url' ? (
                <div className="link-preview">
                  <span className="link-mark"><LinkIcon size={15} /></span>
                  <div><h3>{item.title || (() => { try { return new URL(item.value).hostname.replace(/^www\./, ''); } catch { return item.value; } })()}</h3><p>{item.value}</p></div>
                </div>
              ) : (
                <p className="note-preview">{item.value.length > 150 ? `${item.value.slice(0, 150).trim()}…` : item.value}</p>
              )}
              <span className="copy-label"><Copy size={12} /> {t.copyHint}</span>
            </article>
          ))}
          {visibleItems.length === 0 && <div className="empty-state">{items.length ? t.noMatches : t.empty}</div>}
        </section>
      </section>

      <footer className="bottom-bar">
        {settings.showPinButton && settings.pinPosition === 'bottom' ? <button className={`footer-action ${pinned ? 'is-pinned' : ''}`} onClick={togglePin}><span className="footer-icon">{pinned ? <Pin size={15} /> : <PinOff size={15} />}</span>{pinned ? t.pinned : t.pin}</button> : <span />}
        {settings.showAddButton && settings.addPosition === 'bottom' ? <button className="new-note-button" title={t.pasteTitle} onClick={paste}><Plus size={20} /></button> : <span />}
        <button className="footer-action settings-action" onClick={() => setSettingsOpen(true)}><SettingsIcon size={15} /><span>{t.settings}</span></button>
      </footer>

      {appMenu && <div className="app-menu" onClick={(event) => event.stopPropagation()}>
        <button onClick={() => { addFiles(); setAppMenu(false); }}><FileIcon size={14} /> {t.addFile}</button>
        <button onClick={() => { togglePin(); setAppMenu(false); }}>{pinned ? <PinOff size={14} /> : <Pin size={14} />}{pinned ? t.unpin : t.pinWindow}</button>
        <button onClick={() => { setSettingsOpen(true); setAppMenu(false); }}><SettingsIcon size={14} /> {t.settings}</button>
        <button onClick={() => window.sfnotes?.close()}><Power size={14} /> {t.closeApp}</button>
      </div>}

      {itemMenu && <div className="context-menu" style={{ left: Math.min(itemMenu.x, window.innerWidth - 178), top: Math.min(itemMenu.y, window.innerHeight - 151) }} onClick={(event) => event.stopPropagation()}>
        <button onClick={() => { const item = items.find((entry) => entry.id === itemMenu.id); if (item) copy(item); setItemMenu(null); }}><Copy size={14} /> {t.copyAction}</button>
        {items.find((entry) => entry.id === itemMenu.id && ['text', 'url'].includes(entry.type)) && <button onClick={() => { const item = items.find((entry) => entry.id === itemMenu.id); if (item) setEdit(item); setItemMenu(null); }}><Pencil size={14} /> {t.editAction}</button>}
        <button onClick={() => { const item = items.find((entry) => entry.id === itemMenu.id); if (item) copy(item, true); setItemMenu(null); }}><Scissors size={14} /> {t.cutAction} <small>{t.shiftClick}</small></button>
        <button className="danger" onClick={() => { setItems((old) => old.filter((entry) => entry.id !== itemMenu.id)); setItemMenu(null); }}><Trash2 size={14} /> {t.deleteAction}</button>
      </div>}

      {settingsOpen && <div className="settings-backdrop" onClick={() => setSettingsOpen(false)}>
        <section className="settings-panel" onClick={(event) => event.stopPropagation()}>
          <header className="settings-header"><button className="back-button" title={t.closeSettings} onClick={() => setSettingsOpen(false)} aria-label={t.closeSettings}><X size={17} /></button><h2>{t.settings}</h2><button className="back-button close-app-button" title={t.closeApp} aria-label={t.closeApp} onClick={() => window.sfnotes?.close()}><Power size={16} /></button></header>
          <div className="settings-content">
            <p className="settings-label">{t.appearance}</p>
            <h3>{t.theme}</h3>
            <div className="theme-options">
              {[['light', t.light], ['dark', t.dark], ['lavender', t.lavender], ['mint', uiLabel('mint')], ['ocean', uiLabel('ocean')], ['rose', uiLabel('rose')], ['sand', uiLabel('sand')], ['midnight', uiLabel('midnight')]].map(([value, label]) => (
                <button key={value} className={`theme-option theme-${value} ${settings.theme === value ? 'chosen' : ''}`} onClick={() => setPreference('theme', value)}>
                  <span className="theme-swatch"><i /><i /></span><span>{label}</span>{settings.theme === value && <span className="theme-check"><Check size={11} /></span>}
                </button>
              ))}
            </div>

            <h3>{t.accent}</h3>
            <div className="accent-options" role="group" aria-label={t.accent}>
              {[['yellow', t.yellow], ['blue', t.blue], ['green', t.green], ['orange', t.orange], ['purple', t.purple], ['pink', t.pink], ['red', t.red], ['teal', t.teal]].map(([value, label]) => (
                <button key={value} aria-label={label} title={label} className={`accent-dot accent-${value} ${settings.accent === value ? 'chosen' : ''}`} onClick={() => setPreference('accent', value)}>{settings.accent === value && <Check size={13} />}</button>
              ))}
            </div>

            <div className="settings-divider" />
            <p className="settings-label">{uiLabel('customize')}</p>
            {['showSearch', 'showFilters', 'showCounter', 'showPinButton', 'showAddButton'].map((key) => <button className="toggle-row" key={key} onClick={() => toggleUiPreference(key)}><span><b>{uiLabel(key)}</b></span><i className={`switch ${settings[key] ? 'on' : ''}`} /></button>)}
            <div className="setting-row"><div><b>{uiLabel('addPosition')}</b></div><select value={settings.addPosition} onChange={(event) => setPreference('addPosition', event.target.value)}><option value="top">{uiLabel('addTop')}</option><option value="bottom">{uiLabel('addBottom')}</option></select></div>
            <div className="setting-row"><div><b>{uiLabel('pinPosition')}</b></div><select value={settings.pinPosition} onChange={(event) => setPreference('pinPosition', event.target.value)}><option value="top">{uiLabel('addTop')}</option><option value="bottom">{uiLabel('addBottom')}</option></select></div>

            <div className="settings-divider" />
            <p className="settings-label">{t.reading}</p>
            <div className="setting-row"><div><b>{t.fontSize}</b><span>{t.fontHelp}</span></div><select value={settings.fontSize} onChange={(event) => setPreference('fontSize', event.target.value)}><option value="small">{t.small}</option><option value="medium">{t.medium}</option><option value="large">{t.large}</option></select></div>
            <div className="setting-row"><div><b>{t.density}</b><span>{t.densityHelp}</span></div><select value={settings.density} onChange={(event) => setPreference('density', event.target.value)}><option value="comfortable">{t.comfortable}</option><option value="compact">{t.compact}</option></select></div>

            <div className="settings-divider" />
            <div className="setting-row language-row"><div><b>{t.language}</b></div><select value={settings.language} onChange={(event) => setPreference('language', event.target.value)}>{languageOptions.map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select></div>

            <div className="settings-divider" />
            <p className="settings-label">{t.behavior}</p>
            <button className="toggle-row" onClick={() => { const next = !settings.pinOnStart; setPreference('pinOnStart', next); setPinned(next); window.sfnotes?.setPinned(next); }}><span><b>{t.pinOnStart}</b><small>{t.pinHelp}</small></span><i className={`switch ${settings.pinOnStart ? 'on' : ''}`} /></button>
            <button className="toggle-row" onClick={() => setPreference('showNumbers', !settings.showNumbers)}><span><b>{t.showNumbers}</b><small>{t.numbersHelp}</small></span><i className={`switch ${settings.showNumbers ? 'on' : ''}`} /></button>
            <div className="settings-divider" />
            <p className="settings-label">{t.shortcutsTitle}</p>
            <div className="shortcut-list">
              {[
                ['paste', t.shortcutPaste], ['search', t.shortcutSearch],
                ['globalPaste', t.shortcutGlobalPaste], ['screenshot', t.shortcutScreenshot], ['close', t.shortcutClose]
              ].map(([key, label]) => <div className="shortcut-row" key={key}>
                <span>{label}{(key === 'globalPaste' || key === 'screenshot') && globalShortcutStatus[key === 'globalPaste' ? 'paste' : key] === false && <small className="shortcut-error"> · {t.unavailable}</small>}</span>
                <button onClick={() => setRecordingShortcut(key)}>{recordingShortcut === key ? t.pressKeys : settings.shortcuts[key].replace('CommandOrControl', navigator.platform.includes('Mac') ? '⌘' : 'Ctrl')}</button>
              </div>)}
            </div>
            <p className="settings-note">{t.shortcutHelp}</p>
            <p className="settings-label">{t.updates}</p>
            <div className="setting-row update-row">
              <div><b>{t.checkUpdates}</b><span>{updateStatus.status === 'checking' ? t.checkingUpdates : updateStatus.status === 'available' ? t.updateAvailable : updateStatus.status === 'downloading' ? t.downloadingUpdate.replace('{percent}', updateStatus.percent) : updateStatus.status === 'downloaded' ? t.updateReady : updateStatus.status === 'not-available' ? t.upToDate : updateStatus.status === 'error' ? t.updateError : updateStatus.status === 'unsupported' ? t.updateUnsupported : ''}</span></div>
              <button className="update-button" disabled={['checking', 'available', 'downloading'].includes(updateStatus.status)} onClick={() => updateStatus.status === 'downloaded' ? window.sfnotes?.installUpdate() : checkForUpdates()}>
                {updateStatus.status === 'downloaded' ? t.restartUpdate : <><RefreshCw size={13} className={updateStatus.status === 'checking' || updateStatus.status === 'downloading' ? 'spinning' : ''} />{t.checkUpdates}</>}
              </button>
            </div>
            <p className="settings-note"><Clipboard size={13} /> {t.localData}</p>
          </div>
        </section>
      </div>}

      {edit && <div className="edit-backdrop" onClick={() => setEdit(null)}><div className="edit-panel" onClick={(event) => event.stopPropagation()}>
        <div className="edit-header"><div><span>{t.editNote}</span><h2>{t.yourText}</h2></div><button className="back-button" onClick={() => setEdit(null)} aria-label={t.closeApp}><X size={17} /></button></div>
        <textarea autoFocus defaultValue={edit.value} ref={inputRef} />
        <div className="edit-footer"><span>{t.savedLocal}</span><button onClick={() => { const value = inputRef.current.value; setItems((old) => old.map((item) => item.id === edit.id ? { ...item, value, type: identify(value) } : item)); setEdit(null); notify(t.changesSaved); }}>{t.save}</button></div>
      </div></div>}

      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
