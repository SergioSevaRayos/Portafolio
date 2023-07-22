// Animación cabecera secciones
anime({
    targets: 'h1',
    backgroundColor: '#000000',
    boxShadow: '0px 0px 10px white', /* Sombras en todos los lados de color blanco */

    duration: 400,
    width: '100%', // -> desde '28px' hasta '100%'
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
});

// Animación formulario
anime({
    targets: '#contact-form',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad'
});

// Animación proyectos
anime({
    targets: '.projects-container',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'easeOutQuad'
});
strokeDashoffset: [anime.setDashoffset, 0]

function toggleText() {
  var divElement = document.getElementById("hidden-div");
  var currentOpacity = parseFloat(window.getComputedStyle(divElement).opacity);

  if (currentOpacity === 0) {
    divElement.style.display = "block";
    setTimeout(function() {
      divElement.style.opacity = 1;
    }, 10); // Pequeño retardo para que la transición funcione correctamente
  } else {
    divElement.style.opacity = 0;
    setTimeout(function() {
      divElement.style.display = "none";
    }, 500); // Tiempo de transición de 0.5 segundos
  }
}


  