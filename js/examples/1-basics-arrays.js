window.exercises['Language basics']['Arrays'] = function () {
  'use strict';

  var array = [];
  var value;
  var anotherArray;

  // an array never equals null
  value = (array == null);
  value = (array === null);

  // an array is an object
  value = (typeof array);

  // how to check that a variable is an array
  value = (array instanceof Array);
  value = (Array.isArray(array));

  value = array.length;

  array.push('item');

  value = array.length;

  array = ['first', 'second', 'third', 'fourth'];

  // methods to add/remove items to an array
  value = array.unshift('pre-first');
  value = array.push('fifth');

  value = array.pop();
  value = array.shift();

  // searching for an item in an array
  value = array.indexOf('third');

  // adding items in the middle of an array
  array.splice(value, 0, '2.3', '2.6');

  // removing items in the middle of an array
  array.splice(value, 2);

  // replace items in the middle of an array
  array.splice(value, 2, 'second!', 'third!');

  // create a new array from another array
  anotherArray = array.slice(1, 3);
  // note: array.splice() copies the array

  // array to string
  value = array.join(', ');

  value += ', fifth';

  // string to array
  value = value.split(', ');

  // iterate over array items
  for (var key = 0; key < array.length; key++) {
    array[key] = array[key] + '?';
  }

  // iterate over array items
  for (key in array) {
    array[key] = array[key].substring(0, array[key].length - 1);
  }

  // exercise
  // --------
  // given an array, remove all the null elements
  // example: input = ['item', 32, null, undefined, '', 0, 'string'];
  // output = ['item', 32, undefined, '', 0, 'string'];
};
