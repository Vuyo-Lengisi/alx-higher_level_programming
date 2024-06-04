#!/usr/bin/node
// Updates the text of the <header> element to New Header!!! when the user clicks

$('DIV#update_header').on('click',function () {
    $('header').text('New Header!!!');
  });