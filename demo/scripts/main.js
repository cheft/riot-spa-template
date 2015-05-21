(function() {
  var r, router;

  router = {
    routes: {
      'hello/:id/:name': 'hello',
      'test/p:id': 'test',
      'path/*path': 'path'
    },
    hello: function(id, name) {
      return console.log('hello' + id + 'name=' + name);
    },
    test: function(id) {
      return console.log("test" + id);
    },
    path: function(path) {
      return console.log(path);
    }
  };

  r = new c.Router(router);

  r.start();

}).call(this);
