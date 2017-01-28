$("document").ready(function () {

    var $input = $('input');
    var $addButton = $('#addButton');
    var $openItems = $('.openItems');
    var $doneItems = $('.doneItems');

    // Bei Klick auf Button
    $addButton.on('click', function() {
        var $inputValue = $input.val();

        //variante 1
        var $newListItem = $('<div class="content_aufgaben_1"></div>');
        var $divIcons    = $('<div class="icons"></div>');
        var $h2Text      = $('<h2></h2>');

        $newListItem.append($divIcons);
        $h2Text.text($inputValue);
        $newListItem.append($h2Text);

        // $newListItem.text($inputValue);
        $openItems.prepend($newListItem);

        var $listItem = $('.content_aufgaben_1');

        $listItem.on('click', function() {
            $(this).prependTo($doneItems);

        });
    });
});





