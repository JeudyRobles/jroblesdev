/* Cuando hago CLICK .Header-button, .Header-nav TOGGLE 'isActive' */
var button = document.querySelector('.Header-button');
var nav = document.querySelector('.Header-nav');
button.addEventListener('click', function () {
    nav.classList.toggle('isActive');
});

// Definir los nombres de los archivos GIF
var gifActual = "../img/cat.gif";
var nuevoGIF = "../img/cat-animate.gif";

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

//Boton ir arriba aparezca cuando haga scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
      document.querySelector('.up-page').style.display = 'block';
    } else {
      document.querySelector('.up-page').style.display = 'none';
    }
};

//EMAILJS

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_amtzllg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});