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
    // Create a function that prints a number every second.
    // printNumbers();
    //
    // will print 0, 1, 2, 3, 4, 5, ...
  };

})(this);
