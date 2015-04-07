﻿'use strict';

var EventService = function () {
    var self = this;

    self.Search = function (term, onSuccess, onError) {

        // onSuccess({
        //    Items: [{ Title: term, Url:'/url' }, { Title: 'title 2', Url: '/url' },{ Title: term, Url:'/url' }, { Title: 'title 2', Url: '/url' }]
        //});
        // return;

        // check local storage first
        var localObj = window.app.LocalStorage.Get(term);
        if (localObj) {
            return onSuccess(localObj);
        }

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
                    window.app.LocalStorage.Store({ Key: term, Data: data });

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