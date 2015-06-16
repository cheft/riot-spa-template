var c = require('cheftjs');
var $ = window.$ = require('jquery');
c.Adapter = {Promise: $.Deferred, ajax: $.ajax};

var app = window.app = new c.Application({
    urlRoot      : 'http://localhost:3000/',
    container    : 'viewport',
    router       : require('./router')
});

$(function() {
    app.start();
});