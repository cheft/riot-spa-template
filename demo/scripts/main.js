(function() {
  var app, router;

  require('./app/viewport/tag');

  require('./app/menu/tag');

  require('./app/hello/tag');

  require('./app/todo/tag');

  require('./app/test/tag');

  app = window.app = new C.Application();

  app.mount('viewport');

  router = new C.Router(require('./router'));

  router.start();

}).call(this);
