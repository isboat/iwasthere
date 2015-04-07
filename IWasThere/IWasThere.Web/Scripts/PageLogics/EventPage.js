'use strict';

/*************** BEGIN: Event binding *****************/

$(document).ready(function () {

    var eventId = $('#eventid').attr('data-eventid');
    if (eventId !== '') {
        window.app.EventController.GetEventPosts(eventId, 10);
    }

});

/*************** END: Event binding *****************/