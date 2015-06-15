var c = require('cheftjs');
var $ = window.$ = require('jquery');
c.Adapter = {Promise: $.Deferred, ajax: $.ajax};

var app = window.app = new c.Application({
    urlRoot      : 'localhost:3000/data',
    container    : 'viewport',
    router       : require('./router')
});

window.onload = function() {
    app.start();
}