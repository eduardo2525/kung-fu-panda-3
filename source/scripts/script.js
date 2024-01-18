document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('butto');
    const paragrafo = document.querySelector('.paragrafo--none');
    

    document.querySelector('a[href="#Trailer"]').addEventListener('click', (e) => {
        e.preventDefault()

        setTimeout(function() {
            document.getElementById('Trailer').scrollIntoView({behavior: 'smooth'});;
        }, 1000)
    })

    button.addEventListener('click', () => {
        paragrafo.style.display = 'block';
        button.style.display = 'none';
    })
});
