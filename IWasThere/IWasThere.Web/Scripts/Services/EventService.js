'use strict'

var EventService = function () {
    var self = this;

    self.Search = function (term, onSuccess, onError) {

         onSuccess({
            Items: [{ Title: term }, { Title: 'title 2' }]
        });
         return;

        $.ajax({
            url: '',
            method: 'POST',
            success: function (data) {
                if (data) {
                    onSuccess(data);
                }
            },
            error: onError
        });
    };
};

window.app.EventService = new EventService();