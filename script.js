
    // Taskliste mittels Array erstellen = Objekt
var taskliste = [
    {"erledigt": false, "caption": "Kehrricht entsorgen", "id": 1},
    {"erledigt": true,  "caption": "Auto in Garage", "id": 2},
    {"erledigt": false, "caption": "Tomaten schneiden", "id": 3},
    {"erledigt": true,  "caption": "Fenster reinigen", "id": 4}
];


    $("document").ready(function () {
    // FIND SOMETHING - Find the HTML-Element
        var $input     = $('input');
        var $addButton = $('#addButton');
        var $openItems = $('.openItems');
        var $doneItems = $('.doneItems');

    // APPEND each task to either openItems or to doneItems
    taskliste.forEach(function (meineAufgabe) {

        if (!meineAufgabe.erledigt) {
            $openItems.append(createItem(meineAufgabe.caption, meineAufgabe.id));
        } else {
            $doneItems.append(createItem(meineAufgabe.caption, meineAufgabe.id));
        }
    });


    // CLICK the + button
    $addButton.on('click', function() {
    // IF the input value is not empty ...
        if ($input.val() !== "") {
    // PREPEND an OpenItems to the list using the function createItem
            $openItems.prepend(createItem($input.val()));
    // EMPTY the input field on click
            $input.val('');
        }
    });


    //Im LocalStorage speichern
        function save



    // APPEND work done to «doneItems»

    var $openItems = $('.openItems');
    $openItems.on('click', '.task', function() {
        $(this).prependTo($doneItems);
        $(this).css({
            'background-color': '$color-lightgrey',
            'opacity': '0.3'
        });
    });


    /**
     * Erstellt ein item für einen Task
     * @param caption
     * @returns {*|jQuery|HTMLElement}
     */
    function createItem(caption, id) {
        var $newListItem = $('<div class="task" data-taskid="' +  id + '"></div>');
        var $h2Text = $('<h2></h2>');
        var $faClock = $("<i class='fa fa-clock-o'></i>");
        var $faTag = $("<i class='fa fa-tag'></i>");


        // PUT the input value (caption) into the «h2-Element»
        $h2Text.text(caption);
        // APPEND Text to the «div class ...</div>»
        $newListItem.append($h2Text);

        // APPEND the Awesome Icons
        $newListItem.append($faClock);
        $newListItem.append($faTag);
        return $newListItem;
    }
});
