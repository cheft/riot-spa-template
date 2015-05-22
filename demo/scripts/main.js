(function() {
  var r;

  require('./app/todo/tag');

  require('./app/test/tag');

  r = new C.Router(require('./router'));

  r.start();

}).call(this);
