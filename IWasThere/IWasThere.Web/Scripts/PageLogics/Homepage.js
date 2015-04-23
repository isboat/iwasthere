'use strict';

/*************** BEGIN: Event binding *****************/

$(document).ready(function () {

    var searchTerm = $('#searchBox').val();
    if (searchTerm) {
        window.app.EventController.Search(searchTerm);
    }

    $('#searchBox').keyup(function () {
        var text = $(this).val();
        if (text.length > 4) {
            window.app.EventController.Search(text);
        }
    });
});

/*************** END: Event binding *****************/