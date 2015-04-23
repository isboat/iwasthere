'use strict';

var EventController = function () {
    var self = this;
    var eventSvc = window.app.EventService;

    /************** BEGIN: Service requests **************/
    
    self.Search = function (term) {

        if (!term) {
            return;
        }

        eventSvc.Search(
            term,
            function (data) {
                var text = window.app.UI.Render('#EventSearchResponseItem_Templ', data);
                $('#results').html(text);
            },
            function () { }
            );
    };

    self.GetEventPosts = function (eventId, take) {

        if (!eventId || !take) {
            return;
        }

        var req = {
            EventId: eventId,
            Take: take
        };

        eventSvc.GetEventPosts(
            req,
            function (data) {
                var text = window.app.UI.Render('#EventPosts_Templ', data);
                $('.eventPosts').append(text);
            },
            function () { }
            );
    };

    /************** END: Service requests **************/
};

window.app.EventController = new EventController();