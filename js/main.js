!function(_){var X={};function f(n){if(X[n])return X[n].exports;var r=X[n]={i:n,l:!1,exports:{}};return _[n].call(r.exports,r,r.exports,f),r.l=!0,r.exports}f.m=_,f.c=X,f.d=function(_,X,n){f.o(_,X)||Object.defineProperty(_,X,{enumerable:!0,get:n})},f.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},f.t=function(_,X){if(1&X&&(_=f(_)),8&X)return _;if(4&X&&"object"==typeof _&&_&&_.__esModule)return _;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:_}),2&X&&"string"!=typeof _)for(var r in _)f.d(n,r,function(X){return _[X]}.bind(null,r));return n},f.n=function(_){var X=_&&_.__esModule?function(){return _.default}:function(){return _};return f.d(X,"a",X),X},f.o=function(_,X){return Object.prototype.hasOwnProperty.call(_,X)},f.p="",f(f.s=0)}([function(module,exports){eval("const hamburgerButton = document.querySelector('.menu__switcher--js');\r\nconst hamburgerIcon = document.querySelector('.fa-bars');\r\nconst menu = document.querySelector('.navigation');\r\nconst authorName = \"Karol\";\r\n\r\nhamburgerButton.addEventListener('click', function () {\r\n   menu.classList.toggle('navigation--visible');\r\n   hamburgerIcon.classList.toggle('fa-bars');\r\n   hamburgerIcon.classList.toggle('fa-times');\r\n})\r\n\r\nconst welcomeGuest = (x) => console.log(`Witaj gościu! Nazywam się ${authorName} i to jest mój ćwiczeniowy homepage. Będę wdzięczny, gdy w wolne chwili zrobisz code review. \r\n\r\n88________________________________\r\n_+880______________________________\r\n_++88______________________________\r\n_++88______________________________\r\n__+880_________________________++__\r\n__+888________________________+88__\r\n__++880______________________+88___\r\n__++888_____+++88__________+++8__\r\n__++8888__+++8880++88____+++88___\r\n__+++8888+++8880++8888__++888____\r\n___++888++8888+++888888++888_____\r\n___++88++8888++8888888++888______\r\n___++++++888888888888888888_______\r\n____++++++88888888888888888_______\r\n____++++++++000888888888888______\r\n_____+++++++000088888888888______\r\n______+++++++00088888888888______\r\n_______+++++++088888888888_______\r\n_______+++++++088888888888_______\r\n________+++++++8888888888________\r\n________+++++++0088888888________\r\n________++++++0088888888_________\r\n`);\r\n\r\nwelcomeGuest(authorName);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxxRUFBcUUsV0FBVzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFtYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3N3aXRjaGVyLS1qcycpO1xyXG5jb25zdCBoYW1idXJnZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWJhcnMnKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbmNvbnN0IGF1dGhvck5hbWUgPSBcIkthcm9sXCI7XHJcblxyXG5oYW1idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbi0tdmlzaWJsZScpO1xyXG4gICBoYW1idXJnZXJJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ZhLWJhcnMnKTtcclxuICAgaGFtYnVyZ2VySWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdmYS10aW1lcycpO1xyXG59KVxyXG5cclxuY29uc3Qgd2VsY29tZUd1ZXN0ID0gKHgpID0+IGNvbnNvbGUubG9nKGBXaXRhaiBnb8WbY2l1ISBOYXp5d2FtIHNpxJkgJHthdXRob3JOYW1lfSBpIHRvIGplc3QgbcOzaiDEh3dpY3plbmlvd3kgaG9tZXBhZ2UuIELEmWTEmSB3ZHppxJljem55LCBnZHkgdyB3b2xuZSBjaHdpbGkgenJvYmlzeiBjb2RlIHJldmlldy4gXHJcblxyXG44OF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbl8rODgwX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbl8rKzg4X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbl8rKzg4X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbl9fKzg4MF9fX19fX19fX19fX19fX19fX19fX19fX18rK19fXHJcbl9fKzg4OF9fX19fX19fX19fX19fX19fX19fX19fXys4OF9fXHJcbl9fKys4ODBfX19fX19fX19fX19fX19fX19fX19fKzg4X19fXHJcbl9fKys4ODhfX19fXysrKzg4X19fX19fX19fXysrKzhfX1xyXG5fXysrODg4OF9fKysrODg4MCsrODhfX19fKysrODhfX19cclxuX18rKys4ODg4KysrODg4MCsrODg4OF9fKys4ODhfX19fXHJcbl9fXysrODg4Kys4ODg4KysrODg4ODg4Kys4ODhfX19fX1xyXG5fX18rKzg4Kys4ODg4Kys4ODg4ODg4Kys4ODhfX19fX19cclxuX19fKysrKysrODg4ODg4ODg4ODg4ODg4ODg4X19fX19fX1xyXG5fX19fKysrKysrODg4ODg4ODg4ODg4ODg4ODhfX19fX19fXHJcbl9fX18rKysrKysrKzAwMDg4ODg4ODg4ODg4OF9fX19fX1xyXG5fX19fXysrKysrKyswMDAwODg4ODg4ODg4ODhfX19fX19cclxuX19fX19fKysrKysrKzAwMDg4ODg4ODg4ODg4X19fX19fXHJcbl9fX19fX18rKysrKysrMDg4ODg4ODg4ODg4X19fX19fX1xyXG5fX19fX19fKysrKysrKzA4ODg4ODg4ODg4OF9fX19fX19cclxuX19fX19fX18rKysrKysrODg4ODg4ODg4OF9fX19fX19fXHJcbl9fX19fX19fKysrKysrKzAwODg4ODg4ODhfX19fX19fX1xyXG5fX19fX19fXysrKysrKzAwODg4ODg4ODhfX19fX19fX19cclxuYCk7XHJcblxyXG53ZWxjb21lR3Vlc3QoYXV0aG9yTmFtZSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);