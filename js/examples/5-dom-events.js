(function (global) {
  'use strict';

  global.exercises['The DOM']['Event Listeners'] = function () {

    var handleScroll = function () {
      if (window.scrollY < 500) {
        document.body.style.background = '#006600';
      } else if (window.scrollY >= 500) {
        document.body.style.background = 'transparent';
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
    // on any link element of the page and prints the href attribute
    // in the console.
    //
    // advanced step: also, when clicking on a link, disable any behaviour
  };
})(window);
