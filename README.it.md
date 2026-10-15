# SFNotes

**Un piccolo spazio flottante per tenere a portata di mano ciò che conta.** Salva testi, link, immagini e file sul desktop, poi ritrovali e copiali quando ti servono. Le note vengono salvate automaticamente sul dispositivo.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md)

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

## Come usare SFNotes

1. **Salva qualcosa:** copia testo, un link o un’immagine e premi `Ctrl+V` (Windows/Linux) o `⌘V` (macOS), oppure fai clic su **+**. Usa il menu **…** per aggiungere file.
2. **Ritrovalo:** cerca nel campo di ricerca oppure filtra con **Tutte**, **Testo**, **Link**, **Immagini** o **File**.
3. **Copialo:** fai clic su una nota per copiarla negli appunti. Tieni premuto `Shift` mentre fai clic per copiarla e rimuoverla da SFNotes.
4. **Gestisci una nota:** fai clic con il tasto destro (o usa il menu **⋮**) per copiare, tagliare o eliminare. Da qui puoi anche modificare le note di testo e i link.
5. **Personalizza l’app:** apri **Impostazioni** in basso a destra per cambiare tema, colore di evidenziazione, dimensione del testo, spaziatura, lingua e scorciatoie. Puoi anche mantenere la finestra in primo piano e attivare la numerazione.

In Impostazioni puoi configurare scorciatoie globali per salvare gli appunti e acquisire lo schermo, anche quando SFNotes è in secondo piano. macOS potrebbe chiedere il permesso di registrazione dello schermo al primo utilizzo.

## Funzionalità

- Anteprima di testi, link, immagini e file; numerazione facoltativa.
- Ricerca e filtri per tipo di nota.
- Temi chiaro, scuro e lavanda; tre colori di evidenziazione; dimensione del testo e spaziatura regolabili.
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
