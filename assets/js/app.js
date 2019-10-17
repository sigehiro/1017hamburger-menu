(function() {
  'use strict';
  document.querySelector('.hamburger__icon').addEventListener('click',function() {
      var child;
      document.body.classList.toggle('background--blur');
      this.parentNode.nextElementSibling.classList.toggle('menu--on');
      child = this.childNodes[1].classList;
      if (child.contains('hamburger__icon--to-arrow')) {
        child.remove('hamburger__icon--to-arrow');
        child.add('hamburger__icon--from-arrow');
      } else {
        child.remove('hamburger__icon--from-arrow');
        child.add('hamburger__icon--to-arrow');
      }
    });
}());