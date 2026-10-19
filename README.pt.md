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

## Manual de utilização completo

Este manual surge depois das instruções de transferência e instalação para que possa instalar primeiro o SFNotes e consultar depois todas as funcionalidades.

### Adicionar textos, ligações, imagens e ficheiros

- **Textos e ligações:** copie texto ou um endereço web de qualquer aplicação e prima `Ctrl+V` no Windows/Linux ou `⌘V` no macOS. O SFNotes reconhece endereços web como ligações. Também pode clicar no botão **+** para guardar o conteúdo atual da área de transferência.
- **Imagens:** copie uma imagem e cole-a com o mesmo atalho ou com o botão **+**. O SFNotes guarda uma pré-visualização e permite copiá-la novamente mais tarde.
- **Ficheiros:** abra o menu **…** no canto superior direito e escolha **Adicionar ficheiro**. Pode selecionar um ou vários ficheiros. Colar ficheiros copiados também poderá funcionar, consoante o sistema operativo.
- **Capturas de ecrã:** configure o atalho global em **Definições → Atalhos de teclado**. Por predefinição, é `Ctrl+Shift+S` no Windows/Linux e `⌘⇧S` no macOS. Selecione a área a capturar e a imagem será adicionada às notas. O macOS poderá pedir autorização para gravar o ecrã.
- **Atalho global da área de transferência:** guarda o conteúdo copiado mesmo quando o SFNotes está em segundo plano. Configure-o em **Definições → Atalhos de teclado**; por predefinição, é `Ctrl+Shift+V` ou `⌘⇧V`.

### Encontrar e copiar elementos guardados

- Escreva no campo de pesquisa para encontrar conteúdo nas notas. Prima `Ctrl+F` ou `⌘F` para focar o campo.
- Filtre por **Todas**, **Texto**, **Ligações**, **Imagens** e **Ficheiros**. A pesquisa e os filtros podem ser usados em conjunto.
- Clique numa nota para copiar o conteúdo para a área de transferência. Numa nota de ficheiro, o SFNotes copia a referência ao ficheiro; numa imagem, copia a imagem.
- Mantenha `Shift` premido enquanto clica para copiar o elemento e removê-lo da lista.

### Editar e organizar notas

- Clique com o botão direito numa nota ou no botão **⋮** para abrir as ações **Copiar**, **Cortar** ou **Eliminar**. **Cortar** copia o conteúdo e remove a nota do SFNotes.
- Escolha **Editar texto** para alterar uma nota de texto ou ligação e guarde as alterações. O clique com o botão do meio também abre o editor para estas notas.
- O menu **…** inclui ações de ficheiros e fixação. O botão de energia ao lado fecha o SFNotes; nas Definições, o botão de energia fecha a aplicação e a **X** fecha as Definições.
- As notas são numeradas por predefinição. Pode desativar a numeração nas definições.

### Alterar o aspeto e o comportamento

Abra **Definições** no canto inferior direito para:

- Escolher entre oito temas e oito cores de realce, ocultar controlos e mover os botões adicionar e fixar entre as barras.
- Ajustar o tamanho do texto e o espaçamento entre notas.
- Escolher inglês, espanhol, francês, alemão, italiano ou português.
- Manter o SFNotes acima das outras janelas e decidir se fica fixo ao iniciar.
- Ativar ou desativar a numeração.
- Alterar os atalhos para colar, pesquisar, guardar globalmente a área de transferência, capturar o ecrã e fechar painéis. Os atalhos globais funcionam em segundo plano; o sistema operativo poderá reservar algumas combinações.
- Procurar atualizações em **Definições → Atualizações**. As versões instaladas verificam atualizações ao iniciar; quando estiver pronta uma atualização, escolha **Reiniciar e instalar**.

O SFNotes guarda automaticamente as notas e preferências neste dispositivo. Fechar a janela não elimina as notas.

## Funcionalidades

- Pré-visualização de textos, ligações, imagens e ficheiros; numeração opcional.
- Pesquisa e filtros por tipo de nota.
- Oito temas, oito cores de realce e controlos personalizáveis para pesquisa, filtros, contagem e botões.
- Janela redimensionável até 260 × 280 píxeis.
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
