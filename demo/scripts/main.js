(function() {
  var r;

  require('./app/todo/tag');

  r = new c.Router(require('./router'));

  r.start();

}).call(this);
