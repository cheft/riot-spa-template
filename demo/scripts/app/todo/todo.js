(function() {
  var storage;

  storage = new c.Storage('todo');

  module.exports = {
    init: function() {
      this.todos = storage.fetch();
      this.links = [
        {
          label: 'All',
          name: 'all'
        }, {
          label: 'Active',
          name: 'active'
        }, {
          label: 'Completed',
          name: 'completed'
        }
      ];
      this.on('remove', function(todo) {
        return this.todos.forEach((function(_this) {
          return function(t) {
            if (todo === t) {
              _this.todos.splice(_this.todos.indexOf(t), 1);
            }
            return _this.trigger('save');
          };
        })(this));
      });
      this.on('save', function() {
        storage.save(this.todos);
        return this.update();
      });
      return this.on('update', function() {
        this.remaining = (this.todos.filter(function(t) {
          return !t.completed;
        })).length;
        return this.allDone = this.remaining === 0;
      });
    },
    didAdd: function(e) {
      var value;
      if (e.which === 13 && (value = e.target.value)) {
        this.todos.push({
          title: value.trim(),
          completed: false
        });
        e.target.value = '';
        return this.trigger('save');
      }
    },
    filtered: function() {
      return this.todos;
    },
    toggleAll: function(e) {
      this.todos.forEach(function(t) {
        return t.completed = e.target.checked;
      });
      this.trigger('save');
      return true;
    },
    removeCompleted: function(e) {
      this.todos = this.todos.filter(function(t) {
        return !t.completed;
      });
      return this.trigger('save');
    }
  };

}).call(this);
