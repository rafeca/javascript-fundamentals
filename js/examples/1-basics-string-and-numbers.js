window.exercises['Language basics']['Primitive Types'] = function () {
  'use strict';

  var string = 'this is a string';
  var number = 100;
  var bool = true;

  // checking the primitive type of variables
  // typeof returns a string!
  console.log('typeof string:', typeof 'string');
  console.log('typeof number:', typeof 10);
  console.log('typeof bool:', typeof false);
  console.log('typeof null:', typeof null);
  console.log('typeof undefined:', typeof undefined);

  // concatenating strings
  string += ', a quite long string';

  // methods on strings
  string = string.toUpperCase();
  string = string.substring(10, 16);

  // math metods: random number between 0-99
  number = Math.floor(Math.random() * 100);

  // converting a string to an int
  number = parseInt('013', 10);
  number = parseFloat('118.32');

  // converting an int to a string
  string = number + '';

  // comparisons: equality
  bool = (0 == '');
  bool = (false == '');
  bool = (null == undefined);
  bool = (null == undefined);
  bool = (33 == '33');

  // comparisons: identity
  bool = (0 === '');
  bool = (false === '');
  bool = (null === undefined);
  bool = (null === undefined);
  bool = (33 === '33');

  bool = !!'string';
  bool = !!'';

  bool = !!37;
  bool = !!0;
  bool = !!null;
}
