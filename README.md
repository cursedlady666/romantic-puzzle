# Rompecabezas de Poemas - Para Nosotros

Este proyecto es una página web interactiva donde cada pieza de un rompecabezas revela una parte de tu historia de amor a través de un poema. Al final, se forma la foto completa de ustedes dos.

## 🛠️ Cómo Personalizarlo

### 1. Cambiar la Foto
Actualmente el rompecabezas usa una imagen de prueba llamada `placeholder.svg`. Para poner tu foto:

1.  Busca la foto que quieras usar (recomendamos una imagen vertical o cuadrada, de buena calidad, por ejemplo **1000px de ancho x 1200px de alto**).
2.  Guárdala en la misma carpeta donde están estos archivos (junto a `index.html`).
3.  Abre el archivo `script.js` con un editor de texto (como Bloc de Notas).
4.  Busca la línea que dice:
    ```javascript
    piece.style.backgroundImage = "url('placeholder.svg')"; // CAMBIAR POR TU FOTO
    ```
    (Está aproximadamente en la línea 220, o puedes presionar `Ctrl + F` y buscar "CAMBIAR POR TU FOTO").
5.  Cambia `placeholder.svg` por el nombre de tu foto (ejemplo: `mifoto.jpg`).
    ```javascript
    piece.style.backgroundImage = "url('mifoto.jpg')";
    ```
6.  ¡Guarda el archivo y listo!

### 2. Escribir tus Poemas
Tienes 30 piezas, así que necesitas 30 pequeños textos o estrofas.

1.  Abre el archivo `script.js`.
2.  Al principio verás una lista llamada `poems`:
    ```javascript
    const poems = [
        {
            id: 1,
            title: "Poema 1: El Comienzo",
            stanza1: "En este espacio escribes la primera estrofa,",
            stanza2: "aquí va la segunda parte de tu sentir,",
            stanza3: "y cierras con la tercera estrofa llena de amor.",
            legend: "Lo que sentí al verte por primera vez."
        },
        // ...
    ];
    ```
3.  Reemplaza el texto entre comillas con tus propias palabras.
4.  Copia y pega el bloque `{ ... },` tantas veces como necesites hasta tener 30 poemas (del id 1 al 30).
    *   **Importante**: Asegúrate de que cada bloque tenga una coma al final, excepto el último.

### 3. Probarlo
Simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador web (Chrome, Edge, Safari, etc.).

## 📤 Cómo Compartirlo
Para que tu novio pueda verlo desde su celular:

Opción A (Más fácil):
1.  Sube todos los archivos (`index.html`, `style.css`, `script.js` y tu foto) a una carpeta en Google Drive o Dropbox.
2.  Compártele la carpeta (aunque esto no lo abrirá como web directamente, sino como archivos).

Opción B (Recomendada - GitHub Pages o Netlify):
1.  Si sabes usar GitHub, sube este código a un repositorio y activa GitHub Pages.
2.  O usa **Netlify Drop**: Ve a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la carpeta con tus archivos. Te dará un enlace web que puedes enviarle por WhatsApp.

## ❤️ Detalles
- El progreso se guarda automáticamente en el navegador. Si cierra la página y vuelve, las piezas resueltas seguirán ahí.
- Hay un botón "Reiniciar Historia" al final para empezar de cero.
- ¡Disfruten su historia!
