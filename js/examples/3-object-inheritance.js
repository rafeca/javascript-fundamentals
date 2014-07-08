(function (global) {
  'use strict';

  global.exercises['Objects']['Inheritance'] = function () {
    var value;

    // Define Vehicle object
    var Vehicle = function (numWheels, hasMotor) {
      this.numWheels = numWheels;
      this.hasMotor = hasMotor;
    };
    // Add methods to its prototype
    Vehicle.prototype.accelerate = function () {
      return 'accelerating';
    };
    Vehicle.prototype.getInfo = function () {
      return {
        numWheels: this.numWheels,
        hasMotor: this.hasMotor
      };
    };

    // Define Car object
    var Car = function (numDoors, isElectric) {
      this.numDoors = numDoors;
      this.isElectric = isElectric;

      // call vehicle contructor
      Vehicle.call(this, 4, true);
    };

    // insert Vehicle prototype into Car prototype
    Car.prototype = Object.create(Vehicle.prototype);

    // Add methods to Car prototype
    Car.prototype.getInfo = function () {
      var info = Vehicle.prototype.getInfo.call(this);
      info.numDoors = this.numDoors;
      info.isElectric = this.isElectric;
      return info;
    };

    var myCar = new Car(3, true);
    value = myCar.numWheels;
    value = myCar.numDoors;

    value = myCar instanceof Car;
    value = myCar instanceof Vehicle;

    value = myCar.getInfo();
    console.log(value);
    myCar.accelerate();

    // Exercise:
    // ---------
    // create the Carrousel object
  };

})(this);
