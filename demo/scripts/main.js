(function() {
  var app;

  require('./app/viewport/tag');

  require('./app/menu/tag');

  require('./app/todo/tag');

  require('./app/test/tag');

  app = window.app = {};

  riot.mount('viewport');

  app.router = new C.Router(require('./router'));

  app.router.start();

}).call(this);
