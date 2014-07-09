(function (global) {
  'use strict';

  global.exercises['Functions']['Context (this)'] = function () {
    var value;

    var myFunction = function () {
      console.log(this);
    };

    // Direct invocation
    value = myFunction();

    // Using call/apply
    var obj = {
      param: 'hey'
    };
    value = myFunction.call(obj, '');
    value = myFunction.apply(obj, ['']);

    // Using "bind"
    var myBoundFn = myFunction.bind(obj);
    myBoundFn();

    obj.myFunction = myFunction;

    // calling an object's function
    value = obj.myFunction();

    // Using constructor
    value = new myFunction();

    // Exercise:
    // ---------
    // Having the following function:
    //
    // var printFullName = function (separator) {
    //  console.log(this.firstName + separator + this.lastName);
    // };
    //
    // call the function in a way that it prints "John Doe"
  };

})(this);
