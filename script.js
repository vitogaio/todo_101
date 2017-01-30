$("document").ready(function () {

    // FIND SOMETHING - Find the HTML-Element
            var $input = $('input');
            var $addButton = $('#addButton');
            var $openItems = $('.openItems');
            var $doneItems = $('.doneItems');

    // Click the button
            $addButton.on('click', function() {
            var $inputValue = $input.val();


    // DO SOMETHING = Elements to be added
            var $newListItem = $('<div class="content_aufgaben_1"></div>');
            var $divIcons    = $('<div class="icons"></div>');
            var $h2Text      = $('<h2></h2>');

    // DO SOMETHING = Elements to be added


        $newListItem.append($divIcons);

     // Append «the Value» to variable Text
            $h2Text.text($inputValue);

     // Append Text to the Div
            $newListItem.append($h2Text);

     // Append new item on top(first Item)
            $openItems.prepend($newListItem);

        var $listItem = $('.content_aufgaben_1');


     // Append work done to «doneItems»
            $listItem.on('click', function() {
                $(this).prependTo($doneItems);
                $(this).css('background-color', '$color-lightgrey');
                $(this).css('opacity', '0.3');

        });
    });
});

