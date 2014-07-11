(function (global, $) {
  'use strict';

  global.exercises['The DOM']['jQuery'] = function () {

    // get elements by query selector
    var container = $('#exercises');

    var sections = container.find('li');

    // get elements inside a list of elements
    var links = sections.find('a');

    console.log(links.length);

    // get attributes of an element
    console.log(container.attr('id'));

    // modify attributes of an element
    container.attr('name', 'cont');
    container.attr({
      name: 'cont',
      title: 'this is the container'
    });

    // modify multiple elements at the same time
    links.css('background-color', 'red');

    // capture events on multiple elements at the same time
    links.on('click', function (evt) {
      console.log(this, evt);
    });

    links.each(function (key, link) {
      console.log(key, link);
    });

    // access real DOM element
    console.log(links.get(0));

    // remove all event listeners from multiple elements
    links.off('click');

    // event delegation
    $('#exercises').on('click', 'h2', function () {
      console.log('clicked on the title!');
    });

    var exercises = $('#exercises')
      .find('a')
      .first()
      .addClass('active')
      .text('Yo!')
      .siblings()
      .removeClass('active')
      .parents('#exercises');

    console.log(exercises);

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
