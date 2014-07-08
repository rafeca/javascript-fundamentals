window.exercises['Language basics']['Objects'] = function () {
  'use strict';

  var object = {};
  var value;

  // an object never equals null
  value = (object == null);
  value = (object === null);

  // dot notation
  object.name = 'John';

  // bracket notation
  value = object['name'];
  object['surname'] = 'Doe';

  // Iterating in objects
  for (var key in object) {
    object[key] = object[key] + '.';
  }

  // nested objects: they can be created using JSON notation
  object = {
    name: 'John',
    surname: 'Doe',
    address: {
      'first line': 'Random street',
      number: 123
    },
    'phone numbers': [
      '+44111111111',
      '+44222222222'
    ]
  };

  // Everything is an object
  var array = [3, 4, 63];

  // you can add custom properties to any object
  array.name = 'my array';

  // object properties are not show in regular for loops
  for (key = 0; key < array.length; key++) {
    console.log(array[key]);
  }

  // properties are shown in for in loops
  for (key in array) {
    console.log(array[key]);
  }

  // Exercise:
  // ---------
  // given an object, create an array with all the object keys
};
