const navToggleIcon = document.querySelector('.nav__toggle-icon');
const navbarMiddle = document.querySelector('.navbar-middle');
const navActive = document.querySelectorAll('.navbar-middle__item');

navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('nav__toggle-icon--open');
    navbarMiddle.classList.toggle('menu--open');
    // cover.classList.toggle('cover--show');
})

// navActive.forEach(nav =>{
//     nav.addEventListener('click',()=>{
//         nav.classList.remove('active-nav')
//         nav.classList.add('active-nav')
//     })
// })