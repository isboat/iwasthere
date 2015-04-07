'use strict';

var LocalStorage = function() {
    var self = this;

    self.Store = function(obj) {
        if (obj && obj.Key) {
            window.localStorage.setItem(obj.Key, JSON.stringify(obj.Data));
        }
    };

    self.Get = function(key) {
        if (key) {
            return JSON.parse(window.localStorage.getItem(key));
        }
    };

    self.Remove = function(key) {
        if (key) {
            var exist = window.localStorage.getItem(key);

            if (exist) {
                window.localStorage.removeItem(key);
            }
        }
    };
};

window.app.LocalStorage = new LocalStorage();