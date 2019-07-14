const hamburgerButton = document.querySelector('.menu__switcher--js');
const hamburgerIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', function () {
   menu.classList.toggle('navigation--visible');
   hamburgerIcon.classList.toggle('fa-bars');
   hamburgerIcon.classList.toggle('fa-times');
})