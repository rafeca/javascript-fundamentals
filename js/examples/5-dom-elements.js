(function (global) {
  'use strict';

  global.exercises['The DOM']['Element Manipulation'] = function () {

    // get elements
    var container = document.getElementById('exercises');
    container.style['background-color'] = 'grey';

    console.log(container);

    var links = container.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      var title = links[i].textContent;
      console.log(title);
    }

    setTimeout(function () {
      container.style['background-color'] = 'transparent';
    }, 10000);

    // Exercise
    // --------
    // Print the number of links that each section has in the section title
    // For example, the first section title should be:
    // "Language basics (3)"
    //
  };
})(window);
