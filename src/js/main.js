const hamburgerButton = document.querySelector('.menu__switcher--js');
const hamburgerIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.navigation');
const authorName = "Karol";

hamburgerButton.addEventListener('click', function () {
   menu.classList.toggle('navigation--visible');
   hamburgerIcon.classList.toggle('fa-bars');
   hamburgerIcon.classList.toggle('fa-times');
})

const welcomeGuest = (x) => console.log(`Witaj gościu! Nazywam się ${authorName} i to jest mój ćwiczeniowy homepage. Będę wdzięczny, gdy w wolne chwili zrobisz code review. 

88________________________________
_+880______________________________
_++88______________________________
_++88______________________________
__+880_________________________++__
__+888________________________+88__
__++880______________________+88___
__++888_____+++88__________+++8__
__++8888__+++8880++88____+++88___
__+++8888+++8880++8888__++888____
___++888++8888+++888888++888_____
___++88++8888++8888888++888______
___++++++888888888888888888_______
____++++++88888888888888888_______
____++++++++000888888888888______
_____+++++++000088888888888______
______+++++++00088888888888______
_______+++++++088888888888_______
_______+++++++088888888888_______
________+++++++8888888888________
________+++++++0088888888________
________++++++0088888888_________
`);

welcomeGuest(authorName);

