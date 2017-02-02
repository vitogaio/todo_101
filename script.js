$("document").ready(function () {

    // FIND SOMETHING - Find the HTML-Element
            var $input     = $('input');
            var $addButton = $('#addButton');
            var $openItems = $('.openItems');
            var $doneItems = $('.doneItems');

    // CLICK the button
            $addButton.on('click', function() {
    // ADD the input value to a variable
            var $inputValue = $input.val();
    // DO SOMETHING = Elements to be added
            var $newListItem = $('<div class="new_content"></div>');
            var $divIcons    = $('<div class="icons"></div>');
            var $h2Text      = $('<h2></h2>');


    // PUT the input value into the «h2-Element»
            $h2Text.text($inputValue);
    // APPEND Text to the «div class ...</div>»
            $newListItem.append($h2Text);
    // APPEND div to openDIV
            $newListItem.append($divIcons);
    // APPEND new item on top(first Item)
            $openItems.prepend($newListItem);


        var $listItem = $('.content_aufgaben_1');

     // APPEND work done to «doneItems»
            $listItem.on('click', function() {
                $(this).prependTo($doneItems);
                $(this).css('background-color', '$color-lightgrey');
                $(this).css('opacity', '0.3');

        });
    });
});
