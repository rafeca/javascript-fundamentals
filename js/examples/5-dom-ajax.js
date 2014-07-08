(function (global) {
  'use strict';

  global.exercises['The DOM']['AJAX Requests'] = function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.spotify.com/v1/tracks/7Bxv0WL7UC6WwQpk9TzdMJ');

    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          var response = JSON.parse(this.response);
          console.log('onreadystatechange response', response);
        }
      }
    };

    xhr.onload = function () {
      if (this.status === 200) { // the result is OK
        var response = JSON.parse(this.response);
        console.log('onload response', response);
      }
    };

    // send the request
    xhr.send();

    // for sending JSON data through a POST request, you can do:
    //
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify(dataObject));
  };
})(window);
