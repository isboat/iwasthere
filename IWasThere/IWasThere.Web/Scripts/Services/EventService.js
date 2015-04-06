'use strict'

var EventService = function () {
    var self = this;

    self.Search = function (term, onSuccess, onError) {

         onSuccess({
            Items: [{ Title: term, Url:'/url' }, { Title: 'title 2', Url: '/url' }]
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