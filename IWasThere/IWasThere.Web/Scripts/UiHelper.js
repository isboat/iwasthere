'use strict';

var UiHelper = function () {
    var self = this;

    self.Render = function (template, data) {
        var source = $(template).html();
        var template = Handlebars.compile(source);

        var html = template(data);

        return html;
    };
};

window.app.UI = new UiHelper();