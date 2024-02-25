const navToggleIcon = document.querySelector('.nav__toggle-icon');
const sidebar = document.querySelector('.leftside');
const navActive = document.querySelectorAll('.navbar-middle__item');

navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('nav__toggle-icon--open');
    sidebar.classList.toggle('menu--show');
    // cover.classList.toggle('cover--show');
})