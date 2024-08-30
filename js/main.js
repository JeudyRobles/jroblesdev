// Evita que el navegador recuerde la posición de desplazamiento anterior
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  };
}


//Boton ir arriba aparezca cuando haga scroll
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
      document.querySelector('.up-page').style.display = 'block';
    } else {
      document.querySelector('.up-page').style.display = 'none';
    }
};

/*Animacion para el menu*/
window.sr = ScrollReveal();
sr.reveal('.Header', {
  duration: 3000,
  origin: 'bottom',
  distance: '-100px'
});

/*Animacion que sale a la derecha de la pantalla*/

window.sr = ScrollReveal();
sr.reveal('.Text-Banner',{
  duration: 3500,
  origin: 'right',
  distance: '-1000px'
});

/*Animacion que sale a la del boton de la pantalla para el marquee*/

window.sr = ScrollReveal();
sr.reveal('.Section-marquee',{
  duration: 1500,
  origin: 'bottom',
  distance: '-10px'
});

/*Animacion que sale como creeper(de la nada) con var*/

var nodeArray = [
  document.querySelector('#About-me'),
  document.querySelector('#My-works'),
  document.querySelector('.Contact'),
  document.querySelector('.Footer')
]

window.sr = ScrollReveal();
sr.reveal(nodeArray,{
  duration: 3500,
  origin: 'bottom',
  distance: '10%'
});


/*Animacion que sale como creeper(de la nada) con var*/

var nodeArray = [
  document.querySelector('.proyect-container'),
]

window.sr = ScrollReveal();
sr.reveal(nodeArray,{
  duration: 3500,
  origin: 'right',
  distance: '5%'
});

var nodeArray = [
  document.querySelector('.proyect-container-sr'),
  document.querySelector('.info-me')
]

window.sr = ScrollReveal();
sr.reveal(nodeArray,{
  duration: 3500,
  origin: 'left',
  distance: '5%'
});