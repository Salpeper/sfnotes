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

## Manual de uso completo

Este manual aparece después de las instrucciones de descarga e instalación para que puedas instalar SFNotes primero y consultar después todas sus funciones.

### Añadir textos, enlaces, imágenes y archivos

- **Textos y enlaces:** copia un texto o una dirección web desde cualquier aplicación y pulsa `Ctrl+V` en Windows/Linux o `⌘V` en macOS. SFNotes reconoce las direcciones web y las muestra como enlaces. También puedes pulsar el botón **+** para guardar lo que haya en el portapapeles.
- **Imágenes:** copia una imagen y pégala con el mismo atajo o con el botón **+**. SFNotes guarda una vista previa y permite volver a copiarla.
- **Archivos:** abre el menú **…** de la esquina superior derecha y elige **Añadir archivo**. Puedes seleccionar uno o varios. Copiar archivos al portapapeles y pegarlos también puede funcionar según el sistema operativo.
- **Capturas de pantalla:** configura el atajo global de captura en **Ajustes → Atajos de teclado**. El predeterminado es `Ctrl+Shift+S` en Windows/Linux y `⌘⇧S` en macOS. Selecciona el área que quieras capturar y la imagen se añadirá a las notas. macOS puede pedir permiso de Grabación de pantalla.
- **Atajo global del portapapeles:** permite guardar lo que haya copiado aunque SFNotes esté en segundo plano. Se configura en **Ajustes → Atajos de teclado**; el predeterminado es `Ctrl+Shift+V` o `⌘⇧V`.

### Buscar y copiar elementos

- Escribe en el campo de búsqueda para encontrar contenido. Pulsa `Ctrl+F` o `⌘F` para enfocarlo.
- Filtra con **Todas**, **Texto**, **Enlaces**, **Imágenes** y **Archivos**. La búsqueda y los filtros se combinan.
- Haz clic en una nota para copiar su contenido al portapapeles. En una nota de archivo se copia la referencia al archivo; en una imagen, se copia la imagen.
- Mantén `Shift` mientras haces clic para copiar el elemento y quitarlo de la lista.

### Editar y organizar notas

- Haz clic derecho en una nota o pulsa su botón **⋮** para abrir las acciones. Puedes **Copiar**, **Cortar** o **Eliminar**. **Cortar** copia el contenido y elimina la nota de SFNotes.
- Elige **Editar texto** en el menú para modificar una nota de texto o un enlace; después, guarda los cambios. También puedes hacer clic con el botón central sobre estas notas para abrir el editor.
- El botón **…** de la barra superior contiene acciones de la aplicación: **Añadir archivo**, opciones para fijar la ventana, **Ajustes** y **Cerrar SFNotes**.
- Las notas aparecen numeradas de forma predeterminada. Puedes desactivar la numeración en Ajustes.

### Cambiar la apariencia y el comportamiento

Abre **Ajustes** abajo a la derecha para:

- Elegir el tema claro, oscuro o lavanda y el color de resaltado amarillo, azul o verde.
- Cambiar el tamaño del texto y el espacio entre notas.
- Elegir español, inglés, francés, alemán, italiano o portugués.
- Decidir si SFNotes se mantiene encima de otras ventanas y si se fija al iniciar.
- Activar o desactivar la numeración.
- Cambiar los atajos para pegar, buscar, guardar el portapapeles globalmente, capturar la pantalla y cerrar paneles. Los atajos globales funcionan con SFNotes en segundo plano; el sistema operativo puede reservar algunas combinaciones.
- Buscar actualizaciones en **Ajustes → Actualizaciones**. Las versiones instaladas las buscan al abrirse; cuando haya una actualización lista, pulsa **Reiniciar e instalar**.

SFNotes guarda automáticamente tus notas y preferencias en este dispositivo. Cerrar la ventana no elimina tus notas.

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
