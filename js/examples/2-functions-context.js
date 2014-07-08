(function (global) {
  //'use strict';

  global.exercises['Functions']['Context (this)'] = function () {
    var value;

    var calcFullName = function (separator) {
      return this.firstName + separator + this.lastName;
    };

    // Direct invocation
    value = calcFullName(' ');

    // Using call/apply
    var user = {
      firstName: 'John',
      lastName: 'Doe'
    };
    value = calcFullName.call(user, ' ');
    value = calcFullName.apply(user, [' ']);

    // Using "bind"
    var calcUserFullName = calcFullName.bind(user);
    calcUserFullName(' ');

    user.calcFullName = calcFullName;

    // calling an object's function
    value = user.calcFullName(' ');

    // Using constructor
    value = new calcFullName(' ');

    // Exercise:
    // ---------
    // Implement the simple bind function that takes two arguments:
    // function and object to bind
    // and returns the bound function
    //
    // var myBoundFn = bindFunction(myFn, context);
  };

})(this);
