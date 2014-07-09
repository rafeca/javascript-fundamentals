(function (global) {
  'use strict';

  global.exercises['Objects']['Inheritance'] = function () {

    // Define Vehicle object
    var Vehicle = function (numWheels) {
      this.numWheels = numWheels;
    };

    // Add methods to its prototype
    Vehicle.prototype.accelerate = function () {
      console.log('accelerating with my ' + this.numWheels + ' wheels');
    };

    var myCar = new Vehicle(4);
    console.log(myCar.numWheels);

    console.log(myCar instanceof Vehicle);

    myCar.accelerate();

    // Exercise:
    // ---------
    // create a Countdown object:
    // var countdown = new Countdown(10);
    //
    // countdown.reduce(2); => false
    // countdown.reduce(4); => false
    // countdown.reduce(4); => true
  };

})(this);
