'use strict';

var EventController = function () {
    var self = this;
    var eventSvc = window.app.EventService;

    /*************** BEGIN: Event binding *****************/

    $(document).ready(function () {
        
        $('#searchBox').keyup(function () {
            var text = $(this).val();
            if (text.length > 4) {
                self.Search(text);
            }
        });
    });

    /*************** END: Event binding *****************/


    /************** BEGIN: Service requests **************/

    self.Search = function (term) {
        eventSvc.Search(
            term,
            function (data) {
                var text = window.app.UI.Render('#EventSearchResponseItem_Templ', data);
                $('#results').html(text);
            },
            function () { }
            );
    };

    self.Search = function (term) {
        eventSvc.Search(
            term,
            function (data) {
                var text = window.app.UI.Render('#EventSearchResponseItem_Templ', data);
                $('#results').html(text);
            },
            function () { }
            );
    };

    self.GetEventPosts = function () {

        var req = {
            EventId: 1,
            take: 10
        };

        eventSvc.GetEventPosts(
            req,
            function (data) {
                var text = window.app.UI.Render('#EventPosts_Templ', data);
                $('.eventPosts ul').append(text);
            },
            function () { }
            );
    };

    /************** END: Service requests **************/
};

window.app.EventController = new EventController();