# SFNotes

**Un pequeño espacio flotante para tener a mano lo que te importa.** Guarda textos, enlaces, imágenes y archivos en el escritorio, y encuéntralos y cópialos cuando los necesites. Tus notas se guardan automáticamente en el dispositivo.

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Português](README.pt.md)

## Capturas de pantalla

Esta captura muestra SFNotes como aplicación de escritorio. Abre **Ajustes** abajo a la derecha para cambiar el idioma, la apariencia y los atajos.

![Ventana principal de SFNotes](docs/images/notes-main.png)

## Descargar e instalar

Descarga el instalador más reciente para tu sistema desde [GitHub Releases](https://github.com/Salpeper/sfnotes/releases).

### Windows 10/11

1. Abre la versión más reciente y descarga el archivo que termina en `Setup.exe` o `.exe`.
2. Ejecuta el instalador y sigue los pasos. Puedes elegir la carpeta de instalación.
3. Abre **SFNotes** desde el menú Inicio.

Esta versión no está firmada. Si aparece SmartScreen, comprueba que el archivo procede de este repositorio y selecciona **Más información → Ejecutar de todas formas**.

### macOS (Intel y Apple Silicon)

1. Descarga el archivo `.dmg` de la versión más reciente.
2. Ábrelo y arrastra **SFNotes** a **Aplicaciones**.
3. Expulsa la imagen de disco y abre SFNotes desde Aplicaciones.

SFNotes aún no está firmada ni notarizada. Si macOS la bloquea, ve a **Ajustes del Sistema → Privacidad y seguridad**, baja hasta Seguridad y pulsa **Abrir igualmente** para SFNotes. Esta opción aparece después del primer intento de apertura.

### Linux (x64)

En **Assets** de la versión más reciente encontrarás AppImage, DEB y RPM. AppImage funciona en la mayoría de distribuciones.

**AppImage:**

```bash
chmod +x SFNotes-*.AppImage
./SFNotes-*.AppImage
```

**Debian, Ubuntu y derivados:** `sudo apt install ./SFNotes-*.deb`  
**Fedora:** `sudo dnf install ./SFNotes-*.rpm`  
**openSUSE:** `sudo zypper install ./SFNotes-*.rpm`

Si AppImage indica que falta FUSE, instala un paquete compatible con FUSE 2 o usa el paquete DEB/RPM de tu distribución. El comportamiento de ventanas flotantes y escritorios depende del entorno gráfico y el gestor de ventanas.

## Cómo utilizar SFNotes

1. **Guarda algo:** copia un texto, enlace o imagen y pulsa `Ctrl+V` (Windows/Linux) o `⌘V` (macOS), o pulsa el botón **+**. Usa el menú **…** para añadir archivos.
2. **Encuéntralo:** busca por contenido en el campo de búsqueda o filtra con **Todas**, **Texto**, **Enlaces**, **Imágenes** o **Archivos**.
3. **Cópialo:** haz clic en una nota para copiarla al portapapeles. Mantén `Shift` mientras haces clic para copiarla y quitarla de SFNotes.
4. **Gestiona una nota:** haz clic derecho (o pulsa su menú **⋮**) para copiar, cortar o eliminarla. Desde ese menú también puedes editar textos y enlaces.
5. **Personaliza la aplicación:** abre **Ajustes** abajo a la derecha para cambiar el tema, el color de resaltado, el tamaño del texto, el espacio entre notas, el idioma y los atajos. También puedes mantener la ventana encima de otras y activar la numeración.

En Ajustes puedes configurar atajos globales para guardar el portapapeles y capturar la pantalla, incluso cuando SFNotes está en segundo plano. macOS puede pedir permiso de Grabación de pantalla la primera vez.

## Funciones

- Vista previa de textos, enlaces, imágenes y archivos, con numeración opcional.
- Búsqueda y filtros por tipo de nota.
- Temas claro, oscuro y lavanda; tres colores de resaltado; tamaño de texto y espaciado ajustables.
- Interfaz en español, inglés, francés, alemán, italiano y portugués.
- Ventana siempre visible opcional y guardado automático local.
- Búsqueda de actualizaciones desde **Ajustes → Actualizaciones** en las versiones instaladas.

## Tus datos

SFNotes guarda las notas y preferencias en este dispositivo. El contenido se almacena en `snippets.json`, dentro de la carpeta de datos de Electron de tu usuario. Las notas no se suben a GitHub ni se sincronizan entre dispositivos; este repositorio contiene el código de la aplicación.

## Compilar desde el código fuente

Necesitas [Node.js](https://nodejs.org/) y npm. Clona el repositorio y ejecuta:

```bash
npm ci
npm run desktop:dev
```

Para empaquetar en el sistema actual:

```bash
npm run dist:linux    # Linux: AppImage, DEB y RPM
npm run dist:windows  # Windows: instalador NSIS
npm run dist:mac      # macOS: DMG y ZIP universales
```

Los paquetes se guardan en `release/`. Compila para macOS en macOS y para Windows en Windows. GitHub Actions usa un runner nativo para cada sistema y publica paquetes al subir una etiqueta `vX.Y.Z`.

## Compatibilidad

- Windows permite mantener SFNotes encima de otras ventanas; Electron no permite mostrarla automáticamente en todos los escritorios virtuales.
- macOS admite fijar la ventana y mostrarla en todos los espacios de trabajo. Las actualizaciones automáticas requieren la firma de Apple, que las compilaciones actuales no tienen.
- En Linux, el posicionamiento y los espacios de trabajo dependen del entorno. Los compositores Wayland pueden restringir la posición y el tamaño.
- Los instaladores actuales son x64 para Windows/Linux y universales (Intel + Apple Silicon) para macOS.
- Cortar una imagen la copia al portapapeles y la quita de SFNotes; no modifica el archivo de origen.

## Tecnología

[Electron](https://www.electronjs.org/) · [React](https://react.dev/) · [Vite](https://vite.dev/) · [electron-builder](https://www.electron.build/) · [Lucide](https://lucide.dev/)
