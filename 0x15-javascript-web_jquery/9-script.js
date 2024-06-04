#!/usr/bin/node
// Fetches from url and displays the value of hello

$(document).ready(function () {
    $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function (data) {
      $('#hello').text(data.hello);
    });
  });