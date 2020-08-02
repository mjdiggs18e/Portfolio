const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul');
const menu = document.querySelector('.social-icons');

menu.addEventListener('click', () => {
    nav.classList.toggle('activew');
    ul.classList.toggle('activelink');
})