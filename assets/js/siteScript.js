const menuBurguer = document.getElementById('menu');

menuBurguer.addEventListener('click', () => {
    const option = document.querySelector('.hamburguer');

    if (option.style.display == 'none') {
        option.style.display = 'block';
    } else {
        option.style.display = 'none';
    }
});
// AAAAAAAAAAAAAAA