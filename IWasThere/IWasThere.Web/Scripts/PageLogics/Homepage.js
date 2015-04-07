'use strict';

/*************** BEGIN: Event binding *****************/

$(document).ready(function () {

    $('#searchBox').keyup(function () {
        var text = $(this).val();
        if (text.length > 4) {
            window.app.EventController.Search(text);
        }
    });
});

/*************** END: Event binding *****************/