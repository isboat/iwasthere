'use strict';

var EventController = function () {
    var self = this;
    var eventSvc = window.app.EventService;

    $(document).ready(function () {
        
        $('#searchBox').keyup(function () {
            var text = $(this).val();
            if (text.length > 4) {
                self.Search(text);
            }
        });
    });

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
};

window.app.EventController = new EventController();