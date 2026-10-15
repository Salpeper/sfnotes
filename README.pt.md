# SFNotes

**Um pequeno espaço flutuante para ter à mão o que é importante.** Guarde textos, ligações, imagens e ficheiros no ambiente de trabalho e volte a encontrá-los e copiá-los quando precisar. As notas são guardadas automaticamente neste dispositivo.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md)

## Capturas de ecrã

Esta captura mostra o SFNotes como aplicação de ambiente de trabalho. Abra **Definições** no canto inferior direito para alterar o idioma, o aspeto e os atalhos.

![Janela principal do SFNotes](docs/images/notes-main.png)

## Transferir e instalar

Transfira a versão mais recente para o seu sistema em [GitHub Releases](https://github.com/Salpeper/sfnotes/releases).

### Windows 10/11

1. Abra a versão mais recente e transfira o ficheiro terminado em `Setup.exe` ou `.exe`.
2. Execute o instalador e siga os passos. Pode escolher a pasta de instalação.
3. Abra o **SFNotes** no menu Iniciar.

Esta versão não está assinada. Se aparecer o SmartScreen, confirme que o ficheiro vem deste repositório e escolha **Mais informações → Executar mesmo assim**.

### macOS (Intel e Apple Silicon)

1. Transfira o ficheiro `.dmg` da versão mais recente.
2. Abra-o e arraste o **SFNotes** para **Aplicações**.
3. Ejete a imagem de disco e abra o SFNotes em Aplicações.

O SFNotes ainda não está assinado nem autenticado pela Apple. Se o macOS bloquear a aplicação, abra **Definições do Sistema → Privacidade e Segurança**, desça até Segurança e escolha **Abrir mesmo assim** para o SFNotes. Esta opção aparece após a primeira tentativa de abertura.

### Linux (x64)

Os pacotes AppImage, DEB e RPM estão nos **Assets** da versão mais recente. O AppImage funciona na maioria das distribuições.

**AppImage:**

```bash
chmod +x SFNotes-*.AppImage
./SFNotes-*.AppImage
```

**Debian, Ubuntu e derivados:** `sudo apt install ./SFNotes-*.deb`  
**Fedora:** `sudo dnf install ./SFNotes-*.rpm`  
**openSUSE:** `sudo zypper install ./SFNotes-*.rpm`

Se o AppImage indicar que falta o FUSE, instale um pacote compatível com FUSE 2 ou utilize o pacote DEB/RPM da sua distribuição. O comportamento das janelas flutuantes e dos espaços de trabalho depende do ambiente de trabalho e do gestor de janelas.

## Como utilizar o SFNotes

1. **Guarde algo:** copie texto, uma ligação ou uma imagem e prima `Ctrl+V` (Windows/Linux) ou `⌘V` (macOS), ou clique no botão **+**. Use o menu **…** para adicionar ficheiros.
2. **Encontre-o:** pesquise no campo de pesquisa ou filtre por **Todas**, **Texto**, **Ligações**, **Imagens** ou **Ficheiros**.
3. **Copie-o:** clique numa nota para a copiar para a área de transferência. Mantenha `Shift` premido enquanto clica para a copiar e remover do SFNotes.
4. **Faça a gestão das notas:** clique com o botão direito (ou use o menu **⋮**) para copiar, cortar ou eliminar. Também pode editar notas de texto e ligações neste menu.
5. **Personalize a aplicação:** abra **Definições** no canto inferior direito para alterar o tema, a cor de realce, o tamanho do texto, o espaçamento, o idioma e os atalhos. Também pode manter a janela no topo e ativar a numeração.

Nas Definições, pode configurar atalhos globais para guardar o conteúdo da área de transferência e capturar o ecrã, mesmo quando o SFNotes está em segundo plano. O macOS poderá pedir autorização para gravar o ecrã na primeira captura.

## Funcionalidades

- Pré-visualização de textos, ligações, imagens e ficheiros; numeração opcional.
- Pesquisa e filtros por tipo de nota.
- Temas claro, escuro e lavanda; três cores de realce; tamanho do texto e espaçamento ajustáveis.
- Interface em inglês, espanhol, francês, alemão, italiano e português.
- Janela sempre no topo opcional e gravação local automática.
- Verificação de atualizações em **Definições → Atualizações** nas versões instaladas.

## Os seus dados

O SFNotes guarda as notas e preferências neste dispositivo. O conteúdo fica em `snippets.json`, na pasta de dados do Electron do seu utilizador. As notas não são enviadas para o GitHub nem sincronizadas entre dispositivos; este repositório contém o código-fonte da aplicação.

## Compilar a partir do código-fonte

Precisa de [Node.js](https://nodejs.org/) e npm. Clone este repositório e execute:

```bash
npm ci
npm run desktop:dev
```

Para criar pacotes para o sistema atual:

```bash
npm run dist:linux    # Linux: AppImage, DEB e RPM
npm run dist:windows  # Windows: instalador NSIS
npm run dist:mac      # macOS: DMG e ZIP universais
```

Os pacotes são criados em `release/`. Compile os pacotes macOS em macOS e os de Windows em Windows. O GitHub Actions utiliza um runner nativo para cada sistema e publica os pacotes quando é enviado um marcador `vX.Y.Z`.

## Compatibilidade

- No Windows, o SFNotes pode ficar acima das outras janelas; o Electron não permite mostrá-lo automaticamente em todos os ambientes de trabalho virtuais.
- O macOS suporta manter a janela no topo e mostrá-la em todos os espaços. As atualizações automáticas requerem assinatura da Apple, que as versões atuais ainda não têm.
- No Linux, o posicionamento e os espaços de trabalho dependem do ambiente. Os compositores Wayland podem restringir a posição e o tamanho.
- Os instaladores atuais destinam-se a x64 no Windows/Linux e são universais (Intel + Apple Silicon) no macOS.
- Cortar uma imagem copia-a para a área de transferência e remove-a do SFNotes; não altera o ficheiro original.

## Tecnologias

[Electron](https://www.electronjs.org/) · [React](https://react.dev/) · [Vite](https://vite.dev/) · [electron-builder](https://www.electron.build/) · [Lucide](https://lucide.dev/)
