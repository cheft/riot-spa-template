var c = require('cheftjs');
var $ = window.$ = require('jquery');
c.Adapter = {Promise: $.Deferred, ajax: $.ajax};

var app = window.app = new c.Application({
    urlRoot: 'http://localhost:3000/',
    container: 'viewport',
    router: require('./router')
});

app.analysis = function(url) {
    // baidu
    window._hmt = [];
    window._hmt.push(['_trackPageview', '/' + url]);
    (function() {
      var hm = document.createElement('script');
      hm.src = '//hm.baidu.com/hm.js?ecfd047a98f492c156ac1441ed6e45df';
      var s = document.getElementsByTagName('script')[0]; 
      s.parentNode.insertBefore(hm, s);
    })();

    // google
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-64305601-1', 'auto');
    ga('send', 'pageview', url);
}

$(function() {
    app.start();
});
