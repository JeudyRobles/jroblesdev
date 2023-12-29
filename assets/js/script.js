/* Cuando hago CLICK .Header-button, .Header-nav TOGGLE 'isActive' */
var button = document.querySelector('.Header-button');
var nav = document.querySelector('.Header-nav');
button.addEventListener('click', function () {
    nav.classList.toggle('isActive');
});

// Definir los nombres de los archivos GIF
var gifActual = "../assets/img/cat.gif";
var nuevoGIF = "../assets/img/cat-animate.gif";

// Función para cambiar el GIF al hacer clic
function cambiarGIF() {
    var img = document.getElementById("image-cat");

    // Verificar qué GIF está actualmente mostrándose y cambiarlo al otro
    if (img.src.includes(gifActual)) {
        img.src = nuevoGIF;
    } else {
        img.src = gifActual;
    }
}