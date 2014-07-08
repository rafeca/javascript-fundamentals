(function (global) {
  'use strict';

  global.exercises['Asynchronism']['callbacks'] = function () {
    var delay = function (message, timeout, callback) {
      setTimeout(function () {
        callback(null, message);
      }, timeout);
    };

    delay('hello, world!', 1000, function (err, message) {
      if (err) {
        return;
      }
      console.log(message);
    });
  };

})(this);
