(function (global) {
  'use strict';

  global.exercises['The DOM']['Event Listeners'] = function () {

    var topOfTheWindow = window.scrollY < 100;

    var handleScroll = function () {
      if (window.scrollY < 100 && !topOfTheWindow) {
        topOfTheWindow = true;
        console.log('going to the top of the window');
      } else if (window.scrollY >= 100 && topOfTheWindow) {
        topOfTheWindow = false;
        console.log('going to the bottom of the window');
      }
    };

    document.addEventListener('scroll', handleScroll);

    setTimeout(function() {
      console.log('removing event listener...');
      document.removeEventListener('scroll', handleScroll);
    }, 10000);

    // Exercise
    // --------
    // Implement a function that captures all the click events
    // on any link element of the page and instead of executing
    // the corresponding code, it prints the href attribute in the console
  };
})(window);
