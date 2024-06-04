#!/usr/bin/node
// Adds a <li> element to a list when the user clicks 
$('DIV#add_item').on('click', function(){
    const list_element = "<li>Item</li>";
    $('UL.my_list').append(list_element);
})