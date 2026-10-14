# SFNotes

SFNotes es una nota flotante para guardar textos, enlaces, imágenes y archivos en el escritorio. Los elementos se numeran y muestran una vista previa para que puedas encontrar y volver a copiar lo que necesitas. El contenido se guarda automáticamente en el dispositivo.

La aplicación está hecha con Electron, React y Vite. Hay paquetes instalables para Windows, macOS y Linux (x64). En Linux se publican AppImage, DEB y RPM para cubrir la mayoría de distribuciones.

## Descargar e instalar

Las versiones listas para instalar están en [Releases de SFNotes](https://github.com/Salpeper/sfnotes/releases).

### Windows 10/11

1. Abre [Releases](https://github.com/Salpeper/sfnotes/releases) y entra en la versión más reciente.
2. En **Assets**, descarga el instalador cuyo nombre termina en `Setup.exe` o `.exe`.
3. Abre el archivo descargado y sigue el asistente. Puedes elegir la carpeta de instalación.
4. Inicia **SFNotes** desde el menú Inicio.

El instalador no lleva firma de código en esta versión. Si Windows muestra SmartScreen, comprueba que el archivo procede de este repositorio y elige **Más información** → **Ejecutar de todas formas**.

### macOS (Intel y Apple Silicon)

1. En la versión más reciente de [Releases](https://github.com/Salpeper/sfnotes/releases), descarga el archivo `.dmg`.
2. Abre el DMG y arrastra **SFNotes** a **Applications/Aplicaciones**.
3. Expulsa la imagen de disco y abre SFNotes desde Aplicaciones.

La aplicación no está firmada ni notarizada por Apple todavía. Si macOS impide abrirla, ve a **Ajustes del Sistema → Privacidad y seguridad**, baja hasta la sección Seguridad y pulsa **Abrir igualmente** para SFNotes; confirma después **Abrir**. Esta opción aparece tras el primer intento de apertura.

### Linux

En **Assets** de la versión más reciente, descarga el formato adecuado para tu distribución. Los paquetes publicados son para Linux x64.

**AppImage (recomendado para la mayoría de distribuciones):**

1. Descarga el archivo `.AppImage`.
2. Abre una terminal en la carpeta de descargas y ejecuta:

   ```bash
   chmod +x SFNotes-*.AppImage
   ./SFNotes-*.AppImage
   ```

**Debian, Ubuntu y derivados:** descarga el `.deb` y, desde la carpeta de descargas, instala con:

```bash
sudo apt install ./SFNotes-*.deb
```

**Fedora:** descarga el `.rpm` y ejecuta:

```bash
sudo dnf install ./SFNotes-*.rpm
```

**openSUSE:** descarga el `.rpm` y ejecuta:

```bash
sudo zypper install ./SFNotes-*.rpm
```

Si el AppImage indica que falta FUSE, instala el paquete FUSE 2 compatible con tu distribución o usa el paquete DEB/RPM correspondiente. La integración de ventanas flotantes y espacios de trabajo en Linux puede variar según el entorno gráfico y el gestor de ventanas.

## Funciones

- Pega texto, enlaces, imágenes o archivos desde el portapapeles con `Ctrl+V` en Windows/Linux y `⌘V` en macOS, o usa el botón **Pegar**. También puedes añadir archivos desde el menú de opciones.
- Cada elemento aparece numerado y con una vista previa: texto recortado, dominio del enlace o miniatura de imagen.
- Haz clic izquierdo para copiar un elemento al portapapeles.
- Usa `Shift` + clic izquierdo para copiar y quitar el elemento de SFNotes.
- Haz clic derecho sobre un elemento para copiarlo, cortarlo o eliminarlo.
- Abre el menú de una nota de texto o enlace y pulsa **Editar texto** para modificarla.
- Busca fragmentos por su contenido y filtra por texto, enlaces, imágenes o archivos.
- Configura desde Ajustes los atajos de pegar, buscar, capturar pantalla y añadir el portapapeles desde cualquier aplicación. En macOS, la primera captura puede requerir permiso de Grabación de pantalla.
- Personaliza la apariencia con temas claro, oscuro o lavanda, color de acento, tamaño de texto y densidad.
- Cambia el idioma entre español, inglés, francés, alemán, italiano y portugués.
- SFNotes busca actualizaciones al abrirse. En **Ajustes → Actualizaciones** puedes comprobarlo manualmente; si hay una nueva versión, se descarga y puedes reiniciar para instalarla.
- Fija la ventana para mantenerla encima de otras ventanas y, cuando el sistema lo permita, mostrarla en todos los espacios de trabajo.
- Los fragmentos se guardan automáticamente y se restauran al volver a abrir la aplicación.

## Cómo se publican las versiones

GitHub Actions prepara y publica automáticamente instaladores y metadatos de actualización para Windows, macOS y Linux cuando se publica una etiqueta con el formato `vX.Y.Z` (por ejemplo, `v0.2.0`). Para publicar una versión nueva:

1. Actualiza el campo `version` de `package.json` y `package-lock.json` al mismo número, por ejemplo `0.2.0`.
2. Confirma y sube esos cambios a la rama principal.
3. Crea y sube la etiqueta correspondiente:

   ```bash
   git tag v0.2.0
   git push origin v0.2.0
   ```

4. En GitHub, abre la pestaña **Actions** y espera a que termine el flujo **Build and publish release**.
5. Abre **Releases** y comprueba que la nueva versión incluye los instaladores de los tres sistemas.

## Instalación para desarrollo

Necesitas [Node.js](https://nodejs.org/) y npm. Clona el repositorio y ejecuta:

```bash
npm ci
npm run desktop:dev
```

Para compilar y empaquetar en el sistema actual (usa el comando correspondiente):

```bash
npm run dist:linux    # Linux: AppImage portátil
npm run dist:windows  # Windows: instalador NSIS
npm run dist:mac      # macOS: DMG y ZIP universales
```

Los archivos resultantes aparecen en `release/`. El empaquetado de macOS debe ejecutarse en macOS, y el de Windows en Windows. El flujo de GitHub Actions usa un runner nativo para cada sistema y añade también los paquetes DEB y RPM de Linux.

## Guardado de datos

SFNotes guarda el contenido en `snippets.json` dentro de la carpeta de datos de la aplicación de Electron para el usuario actual. El texto, imágenes, enlaces y rutas locales de archivos guardados no se suben a GitHub ni se sincronizan entre dispositivos: el repositorio contiene el código de la aplicación.

## Compatibilidad y límites

- **Windows:** la ventana puede mantenerse encima de otras ventanas. Electron no ofrece mostrarla automáticamente en todos los escritorios virtuales de Windows.
- **macOS:** Electron permite mantenerla encima y mostrarla en todos los espacios de trabajo.
- **Actualizaciones en macOS:** Apple exige que la aplicación esté firmada para instalar actualizaciones automáticas. Las compilaciones actuales aún no están firmadas ni notarizadas.
- **Linux:** fijarla en todos los espacios de trabajo depende del entorno de escritorio y del gestor de ventanas. En Wayland, el compositor puede restringir el posicionamiento y el tamaño de la ventana.
- Las versiones instalables actuales son para arquitecturas x64 en Windows/Linux y universales (Intel + Apple Silicon) en macOS.
- La función de cortar una imagen la copia al portapapeles y la quita de SFNotes; no modifica el archivo de origen.

Consulta la [documentación de Electron sobre ventanas](https://www.electronjs.org/docs/latest/api/browser-window) para más detalles sobre las diferencias entre sistemas.

## Tecnología

- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [electron-builder](https://www.electron.build/)
- [Lucide](https://lucide.dev/) para iconos
