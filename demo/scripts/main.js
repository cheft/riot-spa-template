(function() {
  var app, router;

  require('./app/viewport/tag');

  require('./app/menu/tag');

  require('./app/ranking/tag');

  app = window.app = new Cheft.Application();

  app.mount('viewport');

  router = new Cheft.Router(require('./router'));

  router.start();

}).call(this);
