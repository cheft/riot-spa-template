(function() {
  module.exports = {
    routes: {
      '': 'home',
      '/': 'home',
      'start/:id': 'start',
      'hello/:id/:name': 'hello',
      'test/p:id': 'test',
      'path/*path': 'path',
      'aa': function() {
        return console.log('aaaaaaa');
      }
    },
    start: function(id) {
      return app.viewport.show(id);
    },
    home: function() {
      return app.viewport.show('todo');
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

}).call(this);
