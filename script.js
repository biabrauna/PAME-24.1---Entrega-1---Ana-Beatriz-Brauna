const footer = document.querySelector('footer');

window.revelar = ScrollReveal({
    distance: '30px',
    duration: 700,
    reset: true,
    origin: 'bottom'
});

revelar.reveal('.footer');