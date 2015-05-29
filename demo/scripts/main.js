(function() {
  var app;

  require('./app/viewport/tag');

  require('./app/menu/tag');

  require('./app/ranking/tag');

  app = window.app = new Cheft.Application({
    urlRoot: 'http://10.10.51.118:3000/'
  });

  app.mount('viewport');

  app.router = new Cheft.Router(require('./router'));

  app.router.start();

}).call(this);
