#!/usr/bin/node
// Toggles the class of the header element when clicked

$('DIV#toggle_header').on('click',function(){
    $('header').toggleClass('red green');

});