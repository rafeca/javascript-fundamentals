(function (global) {
  'use strict';

  global.exercises['The DOM']['Element Manipulation'] = function () {

    // get elements
    var container = document.getElementById('exercises');
    container.style['background-color'] = 'grey';

    var sections = container.children;

    for (var i = 0; i < sections.length; i++) {
      var title = sections[i].querySelector('h2');
      var numItems = sections[i].querySelectorAll('a').length;

      title.textContent += ' (' + numItems + ')';
    }

    container.style['background-color'] = 'transparent';

    // Exercise
    // --------
    // Add the section title in each button. For example the first button
    // should have the following text: "Primitive Types (Language Basics)"
  };
})(window);
