#!/usr/bin/node
// Fetches and lists the title for all movies by using a URL


$(document).ready(function () {
  $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data) {
    const movies = data.results;
    for (let i = 0; i < movies.length; i++) {
      $('UL#list_movies').append(`<li> + ${movies[i].title} + </li>`);
    }
  });
});