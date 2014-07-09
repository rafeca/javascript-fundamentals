(function (global, $) {
  'use strict';

  global.exercises['The DOM']['jQuery'] = function () {

    // get elements by query selector
    var container = $('#exercises');

    // get elements inside another element
    var links = container.find('a');

    // get attributes of an element
    console.log(container.attr('id'));
    console.log(links.html());

    // modify attributes of an element
    container.attr('name', 'cont');
    container.attr({
      name: 'cont',
      title: 'this is the container'
    });

    // modify multiple elements at the same time
    links.text('LINK!');
    links.html('<strong>LINK!</strong>');

    // capture events
    links.on('click', function (evt) {
      console.log(this, evt);
    });

    // access real DOM element
    console.log(links.get(0));

    // remove all event listeners
    links.off('click');

    // event delegation
    $('#exercises').on('click', 'h2', function () {
      console.log('clicked on the title!');
    });

    // ajax requests
    $.getJSON('https://api.spotify.com/v1/tracks/7Bxv0WL7UC6WwQpk9TzdMJ', function (data) {
      console.log(data);
    });

    // exercise:
    // ---------
    // Print the number of links that each section has in the section title
    // For example, the first section title should be:
    // "Language basics (3)"
  };
})(window, window.jQuery);
