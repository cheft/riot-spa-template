(function() {
  module.exports = {
    routes: {
      '': 'home',
      'start/:id': 'start',
      'start/todos/:status': 'filterTodo',
      'hello/:id/:name': 'hello',
      'test/p:id': 'test',
      'path/*path': 'path',
      'aa': function() {
        return console.log('aaaaaaa');
      }
    },
    start: function(id) {
      return app.tags.viewport.show(id);
    },
    home: function() {
      return app.tags.viewport.show('todo');
    },
    filterTodo: function(status) {
      if (!app.tags.todo) {
        app.tags.viewport.show('todo');
      }
      return app.tags.todo.filter(status);
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
