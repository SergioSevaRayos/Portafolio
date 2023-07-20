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
    duration: 1000,
    easing: 'easeOutQuad'
});
strokeDashoffset: [anime.setDashoffset, 0]

