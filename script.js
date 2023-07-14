// Animación cabecera secciones
anime({
    targets: 'h1',
    backgroundColor: '#11038c',
    duration: 400,
    width: '100%', // -> from '28px' to '100%',
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