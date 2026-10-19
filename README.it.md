# SFNotes

**Un piccolo spazio flottante per tenere a portata di mano ciò che conta.** Salva testi, link, immagini e file sul desktop, poi ritrovali e copiali quando ti servono. Le note vengono salvate automaticamente sul dispositivo.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md) · [Sito web](https://salpeper.github.io/sfnotes/)

## Screenshot

Questo screenshot mostra SFNotes come applicazione desktop. Apri **Impostazioni** in basso a destra per cambiare lingua, aspetto e scorciatoie.

![Finestra principale di SFNotes](docs/images/notes-main.png)

## Scaricare e installare

Scarica l’ultima versione per il tuo sistema da [GitHub Releases](https://github.com/Salpeper/sfnotes/releases).

### Windows 10/11

1. Apri l’ultima versione e scarica il file che termina in `Setup.exe` o `.exe`.
2. Avvia il programma di installazione e segui i passaggi. Puoi scegliere la cartella di installazione.
3. Apri **SFNotes** dal menu Start.

Questa versione non è firmata. Se compare SmartScreen, verifica che il file provenga da questo repository e scegli **Ulteriori informazioni → Esegui comunque**.

### macOS (Intel e Apple Silicon)

1. Scarica il file `.dmg` dell’ultima versione.
2. Aprilo e trascina **SFNotes** in **Applicazioni**.
3. Espelli l’immagine disco e avvia SFNotes da Applicazioni.

SFNotes non è ancora firmata né autenticata da Apple. Se macOS la blocca, vai in **Impostazioni di Sistema → Privacy e sicurezza**, scorri fino a Sicurezza e scegli **Apri comunque** per SFNotes. L’opzione appare dopo il primo tentativo di apertura.

### Linux (x64)

I pacchetti AppImage, DEB e RPM sono disponibili negli **Assets** dell’ultima versione. AppImage è adatto alla maggior parte delle distribuzioni.

**AppImage:**

```bash
chmod +x SFNotes-*.AppImage
./SFNotes-*.AppImage
```

**Debian, Ubuntu e derivate:** `sudo apt install ./SFNotes-*.deb`  
**Fedora:** `sudo dnf install ./SFNotes-*.rpm`  
**openSUSE:** `sudo zypper install ./SFNotes-*.rpm`

Se AppImage segnala che manca FUSE, installa un pacchetto compatibile con FUSE 2 oppure usa il pacchetto DEB/RPM della tua distribuzione. Il comportamento delle finestre flottanti e degli spazi di lavoro dipende dall’ambiente desktop e dal gestore di finestre.

## Guida completa all’uso

Questa guida segue le istruzioni per il download e l’installazione, così puoi prima installare SFNotes e poi consultare tutte le sue funzioni.

### Aggiungere testi, link, immagini e file

- **Testi e link:** copia un testo o un indirizzo web da qualsiasi app e premi `Ctrl+V` su Windows/Linux oppure `⌘V` su macOS. SFNotes riconosce gli indirizzi web e li classifica come link. Puoi anche fare clic su **+** per salvare il contenuto corrente degli appunti.
- **Immagini:** copia un’immagine e incollala con la stessa scorciatoia o con il pulsante **+**. SFNotes ne salva un’anteprima e consente di ricopiarla in seguito.
- **File:** apri il menu **…** in alto a destra e scegli **Aggiungi file**. Puoi selezionare uno o più file. Anche incollare file copiati può funzionare, a seconda del sistema operativo.
- **Catture dello schermo:** configura la scorciatoia globale in **Impostazioni → Scorciatoie da tastiera**. Quella predefinita è `Ctrl+Shift+S` su Windows/Linux e `⌘⇧S` su macOS. Seleziona l’area da catturare e l’immagine verrà aggiunta alle note. macOS potrebbe chiedere il permesso di registrare lo schermo.
- **Scorciatoia globale degli appunti:** salva il contenuto copiato anche quando SFNotes è in secondo piano. Configurala in **Impostazioni → Scorciatoie da tastiera**; la combinazione predefinita è `Ctrl+Shift+V` o `⌘⇧V`.

### Trovare e copiare gli elementi salvati

- Digita nel campo di ricerca per trovare il contenuto delle note. Premi `Ctrl+F` o `⌘F` per portare lì il cursore.
- Filtra con **Tutte**, **Testo**, **Link**, **Immagini** e **File**. Ricerca e filtri si combinano.
- Fai clic su una nota per copiarne il contenuto negli appunti. Per una nota di file, SFNotes copia il riferimento al file; per un’immagine, copia l’immagine.
- Tieni premuto `Shift` mentre fai clic per copiare l’elemento e rimuoverlo dall’elenco.

### Modificare e organizzare le note

- Fai clic con il tasto destro su una nota o sul pulsante **⋮** per aprire le azioni **Copia**, **Taglia** o **Elimina**. **Taglia** copia il contenuto e rimuove la nota da SFNotes.
- Scegli **Modifica testo** per modificare una nota di testo o un link e salva le modifiche. Anche il clic con il pulsante centrale apre l’editor per queste note.
- Il menu **…** contiene le azioni per file e fissaggio. Il pulsante di accensione accanto chiude SFNotes; nelle impostazioni, il pulsante di accensione chiude l’app e la **X** chiude le impostazioni.
- Le note sono numerate per impostazione predefinita. Puoi disattivare la numerazione nelle impostazioni.

### Cambiare aspetto e comportamento

Apri **Impostazioni** in basso a destra per:

- Scegliere tra otto temi e otto colori di evidenziazione, nascondere controlli e spostare i pulsanti aggiungi e fissa tra le barre.
- Regolare la dimensione del testo e la spaziatura tra le note.
- Scegliere inglese, spagnolo, francese, tedesco, italiano o portoghese.
- Mantenere SFNotes sopra le altre finestre e decidere se fissarla all’avvio.
- Attivare o disattivare la numerazione.
- Modificare le scorciatoie per incollare, cercare, salvare globalmente gli appunti, catturare lo schermo e chiudere i pannelli. Le scorciatoie globali funzionano in background; il sistema operativo potrebbe riservare alcune combinazioni.
- Cercare aggiornamenti in **Impostazioni → Aggiornamenti**. Le versioni installate li verificano all’avvio; quando un aggiornamento è pronto, scegli **Riavvia e installa**.

SFNotes salva automaticamente note e preferenze su questo dispositivo. Chiudere la finestra non elimina le note.

## Funzionalità

- Anteprima di testi, link, immagini e file; numerazione facoltativa.
- Ricerca e filtri per tipo di nota.
- Otto temi, otto colori di evidenziazione e controlli personalizzabili per ricerca, filtri, conteggio e pulsanti.
- Finestra ridimensionabile fino a 260 × 280 pixel.
- Interfaccia in inglese, spagnolo, francese, tedesco, italiano e portoghese.
- Finestra sempre in primo piano opzionale e salvataggio locale automatico.
- Controllo degli aggiornamenti in **Impostazioni → Aggiornamenti** nelle versioni installate.

## I tuoi dati

SFNotes salva note e preferenze su questo dispositivo. I contenuti sono in `snippets.json`, nella cartella dati di Electron del tuo utente. Le note non vengono caricate su GitHub né sincronizzate tra dispositivi; questo repository contiene il codice sorgente dell’applicazione.

## Compilare dal codice sorgente

Servono [Node.js](https://nodejs.org/) e npm. Clona il repository ed esegui:

```bash
npm ci
npm run desktop:dev
```

Per creare i pacchetti per il sistema corrente:

```bash
npm run dist:linux    # Linux: AppImage, DEB e RPM
npm run dist:windows  # Windows: installer NSIS
npm run dist:mac      # macOS: DMG e ZIP universali
```

I pacchetti vengono creati in `release/`. Compila i pacchetti macOS su macOS e quelli Windows su Windows. GitHub Actions usa un runner nativo per ogni sistema e pubblica i pacchetti quando viene inviato un tag `vX.Y.Z`.

## Compatibilità

- Windows permette di mantenere SFNotes sopra le altre finestre; Electron non consente di mostrarla automaticamente su tutti i desktop virtuali.
- macOS supporta la finestra in primo piano e tutti gli spazi di lavoro. Gli aggiornamenti automatici richiedono la firma Apple, assente nelle build attuali.
- Su Linux, posizionamento e spazi di lavoro dipendono dall’ambiente desktop. I compositor Wayland possono limitare posizione e dimensioni.
- Gli installer attuali sono x64 per Windows/Linux e universali (Intel + Apple Silicon) per macOS.
- Tagliare un’immagine la copia negli appunti e la rimuove da SFNotes senza modificare il file originale.

## Tecnologie

[Electron](https://www.electronjs.org/) · [React](https://react.dev/) · [Vite](https://vite.dev/) · [electron-builder](https://www.electron.build/) · [Lucide](https://lucide.dev/)
