(function (global) {
  'use strict';

  global.exercises['Asynchronism']['setTimeout'] = function () {
    var value;

    // Asynchronous code in JS
    value = setTimeout(function () {
      console.log('world!');
    }, 500);
    console.log('Hello');

    value = setInterval(function () {
      console.log('ping!!');
    }, 1000);

    setTimeout(function () {
      clearInterval(value);
    }, 20000);

    // Exercise:
    // ---------
    // Create a function called printItems that accepts an array and
    // prints an item of the array every second.
  };

})(this);
