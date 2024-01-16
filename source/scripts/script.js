document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('butto');
    const paragrafo = document.querySelector('.paragrafo--none');

    document.querySelector('a[href="#Trailer"]').addEventListener('click', (e) => {
        e.preventDefault()

        setTimeout(function() {
            document.getElementById('Trailer').scrollIntoView({behavior: 'smooth'});;
        }, 1000)
    })

    window.addEventListener('scroll', () => {
        const shows = document.querySelector('.shows');
        const carousel = document.querySelector('.carousel');
        const alturaCarousel = carousel.clientHeight;
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > alturaCarousel) {
            shows.style.display = 'block';
        }

        if (posicaoAtual === 0) {
            shows.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        paragrafo.style.display = 'block';
        button.style.display = 'none';
    })
});