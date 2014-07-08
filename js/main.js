(function(global) {
  'use strict';

  var clickHandler = function (evt) {
    evt.preventDefault();

    var href = this.getAttribute('href');

    if (href.substr(1) in window) {
      window[href.substr(1)]();
    }
  };

  global.exercises = {
    'Language basics': {},
    'Functions': {},
    'Objects': {},
    'Asynchronism': {},
    'The DOM': {},
    'Playground': {}
  };

  var anchors = global.document.getElementsByTagName('a');

  [].slice.call(anchors).forEach(function (anchor) {
    anchor.addEventListener('click', clickHandler.bind(anchor));
  });

  window.addEventListener('load', function () {
    var list, title, btn;

    for (var i in global.exercises) {
      list = document.createElement('li');

      title = document.createElement('h2');
      title.innerText = i;
      list.appendChild(title);

      for (var j in global.exercises[i]) {
        btn = document.createElement('a');
        btn.textContent = j;
        btn.href = '';
        (function(i, j) {
          btn.addEventListener('click', function (evt) {
            evt.preventDefault();
            global.exercises[i][j]();
          });
        })(i, j);
        list.appendChild(btn);
      }

      document.getElementById('exercises').appendChild(list);
    }
  });
})(this);
