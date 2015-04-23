'use strict';

var EventService = function () {
    var self = this;

    self.Search = function (term, onSuccess, onError) {
        
        /* check local storage first

        var localObj = window.app.LocalStorage.Get(term);

        if (localObj) {
            var expiration = new Date(localObj.Time).getSeconds() - new Date().getSeconds();
            return onSuccess(localObj);
        }
        */
        var obj = {
            SearchTerm: term
        };

        $.ajax({
            url: '/Event/Search',
            type: 'POST',
            data: obj,
            success: function (data) {
                if (data && !data.IsError) {

                    // store locally
                    //window.app.LocalStorage.Store({ Key: term, CacheObj: { Data: data, Time: new Date().toJSON() } });

                    onSuccess(data);
                }
            },
            error: onError
        });
    };

    self.GetEventPosts = function (request, onSuccess, onError) {
        
        $.ajax({
            url: '/Event/GetEventPosts',
            type: 'POST',
            data: request,
            success: function(data) {
                if (data && !data.IsError) {
                    onSuccess(data);
                }
            },
            error: onError
        });
    }
};

window.app.EventService = new EventService();