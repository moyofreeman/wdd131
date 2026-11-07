const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuButton.classList.toggle('open');

    
    if (menuButton.classList.contains('open')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});