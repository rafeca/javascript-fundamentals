window.exercises['Functions']['Scope (closures)'] = function () {
  'use strict';

  var value;

  // Functions are closures
  var sum = function (/* ... */) {
    var total = 0;
    for (var i in arguments) {
      total += arguments[i];
    }
    console.log(value);
    return total;
  };
  value = sum(5, 7, 10, 2);

  // Functions are also objects
  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  var add5 = makeAdder(5);
  add5(10);

  // creating IIFEs to hide information
  (function() {
    var internalVariable = 'value';
  })();


  // IIFE example
  var countdown = (function() {
    var currentValue = 20;

    return function (number) {
      number = number || 0;
      currentValue -= number;
      return currentValue <= 0;
    };
  })();

  value = countdown(7);
  value = countdown(1);
  value = countdown(9);
  value = countdown(6);

  // Excercise!
  // ---------
  // Write the "expect" function:
  //
  // expect(5).to.eql(5); // returns true
  // expect(4).to.eql(5); // returns false
};
