window.exercises['Functions']['Introduction'] = function () {
  'use strict';

  var value;

  // Basic function
  function shout(sentence) {
    return sentence + '!!';
  }
  value = shout('Come on');

  // assigning a function to a variable
  var ask = function (sentence) {
    return sentence + '?';
  };
  value = ask('can I have some tea');

  // passing around functions
  var arrayMap = function (array, fn) {
    var out = [];
    for (var i = 0; i < array.length; i++) {
      var value = fn(array[i]);
      out.push(value);
    }
    return out;
  };

  value = arrayMap([3, 4, 6], function (element) {
    return element * 2;
  });
  // Note: this is similar to the array.map() method

  // Undefined number of arguments
  var sum = function (/* ... */) {
    var total = 0;
    for (var i in arguments) {
      total += arguments[i];
    }
    return total;
  };
  value = sum(5, 7, 10, 2);

  // Exercice!
  // ---------
  // var multiplePush = function (array /*,...*/) {
  //   //...
  // };
  //
  // value = multiplePush(['first', 'second'], 'third', 'fourth');
  //
  // write the "multiplePush" function that returns:
  // 'first', 'second', 'third', 'fourth']
};
