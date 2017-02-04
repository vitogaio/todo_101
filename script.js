$("document").ready(function () {

    // FIND SOMETHING - Find the HTML-Element
    var $input = $('input');
    var $addButton = $('#addButton');
    var $openItems = $('.openItems');
    var $doneItems = $('.doneItems');


    // CLICK the button
    $addButton.on('click', function () {
        // ADD the input value to a variable
        var $inputValue = $input.val();
        if ($input.val() !== "") {
            // DO SOMETHING = Elements to be added
            var $newListItem = $('<div class="task"></div>');
            var $divIcons = $('<div class="icons"></div>');
            var $h2Text = $('<h2></h2>');
            var $faClock = $("<i class='fa fa-clock-o'></i>");
            var $faTag = $("<i class='fa fa-tag'></i>");

            // PUT the input value into the «h2-Element»
            $h2Text.text($inputValue);
            // APPEND Text to the «div class ...</div>»
            $newListItem.append($h2Text);

            /*
             ====================================================
             // APPEND div to openDIV
             $newListItem.append($divIcons);
             ====================================================
             */

            // APPEND the Awesome Icons
            $newListItem.append($faClock);
            $newListItem.append($faTag);

            // APPEND new item on top(first Item)
            $openItems.prepend($newListItem);
            // Empty the input field on click
            $input.val('');
        }

    });
    var $openItems = $('.openItems');

    // APPEND work done to «doneItems»
    $openItems.on('click', '.task', function () {
        $(this).prependTo($doneItems);
        $(this).css({
            'background-color': '$color-lightgrey',
            'opacity': '0.3'
        });

    });


});

