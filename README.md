# SFNotes

SFNotes es una nota flotante para capturar y tener a mano textos, enlaces e imágenes mientras trabajas. Su objetivo es que puedas consultar varios fragmentos de un vistazo sin editar accidentalmente el contenido.

La maqueta inicial de la nueva apariencia está en [mockups/iphone-notes-concept.png](mockups/iphone-notes-concept.png).

La aplicación está construida con Electron, React y Vite. El proyecto está preparado para Windows, macOS y Linux; aún es un prototipo y falta empaquetarlo y probarlo de forma nativa en cada sistema.

## Funciones

- Pega texto, enlaces o imágenes desde el portapapeles con `Ctrl+V` en Windows/Linux y `⌘V` en macOS, o usa el botón **Pegar**.
- Cada elemento aparece numerado y con una vista previa: texto recortado, dominio del enlace o miniatura de imagen.
- Haz clic izquierdo para copiar un elemento al portapapeles.
- Usa `Shift` + clic izquierdo para copiar y quitar el elemento de SFNotes.
- Haz clic derecho sobre un elemento para copiarlo, cortarlo o eliminarlo.
- Haz clic con la rueda del ratón sobre un texto para abrir el editor.
- Busca fragmentos por su contenido.
- Filtra la lista por texto, enlaces o imágenes.
- Personaliza la apariencia con temas claro, oscuro o lavanda; elige un color de acento, tamaño de texto y densidad.
- Cambia el idioma de la interfaz entre español, inglés, francés, alemán, italiano y portugués.
- Configura si la ventana debe iniciarse fijada y si se muestran los números de las notas.
- Fija la ventana para mantenerla sobre otras ventanas y, cuando el sistema lo permita, mostrarla en todos los espacios de trabajo.
- Los fragmentos se guardan automáticamente al añadir, editar o borrar; al volver a abrir la aplicación se restauran.

## Instalación para desarrollo

Necesitas [Node.js](https://nodejs.org/) y npm. Clona el repositorio y ejecuta:

```bash
npm install
npm run desktop:dev
```

Esto inicia Vite y abre la aplicación de escritorio con Electron. Para compilar la interfaz web:

```bash
npm run build
```

Para abrir la aplicación Electron después de compilar:

```bash
npm run desktop
```

## Guardado de datos

SFNotes guarda el contenido en un archivo `snippets.json` dentro de la carpeta de datos de la aplicación de Electron para el usuario actual. En desarrollo se usa la carpeta de datos que Electron asigna a SFNotes en ese dispositivo. El texto e imágenes guardados no se suben a GitHub ni se sincronizan entre dispositivos: el repositorio contiene el código de la aplicación.

## Compatibilidad y límites actuales

- **Windows:** la ventana puede mantenerse encima de otras ventanas. Electron no ofrece mostrarla automáticamente en todos los escritorios virtuales de Windows.
- **macOS:** Electron permite mantenerla encima y mostrarla en todos los espacios de trabajo.
- **Linux:** Electron ofrece fijar la ventana en todos los espacios de trabajo; el resultado depende del entorno de escritorio y del gestor de ventanas. En esta prueba con Hyprland sobre Wayland, la aplicación abrió, pero el compositor la organizó como una ventana en mosaico, ignoró el tamaño solicitado y no confirmó que se fijara en todos los espacios. En Wayland el posicionamiento y el cambio de tamaño también pueden estar restringidos.
- El pegado admite imágenes y texto. Aún no hay gestión especializada de archivos adjuntos ni empaquetadores instalables para cada sistema.
- La función de cortar una imagen la copia al portapapeles y la quita de SFNotes; no modifica el archivo de origen.

Consulta la [documentación de Electron sobre ventanas](https://www.electronjs.org/docs/latest/api/browser-window) para más detalles sobre las diferencias entre sistemas.

## Tecnología

- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Lucide](https://lucide.dev/) para iconos
