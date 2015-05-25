(function() {
  var cache;

  cache = new Cheft.Cache('todo');

  module.exports = {
    actions: {
      init: function() {
        this.todos = cache.get();
        this.list = this.todos;
        return this.links = [
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
        if (this.activeFilter === 'all') {
          return this.todos;
        }
        return this.todos.filter((function(_this) {
          return function(t) {
            return t.completed === (_this.activeFilter === 'active' ? false : true);
          };
        })(this));
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
      },
      filter: function(status) {
        this.activeFilter = status || 'all';
        return this.update();
      }
    },
    events: {
      remove: function(todo) {
        return this.todos.forEach((function(_this) {
          return function(t) {
            if (todo === t) {
              _this.todos.splice(_this.todos.indexOf(t), 1);
            }
            return _this.trigger('save');
          };
        })(this));
      },
      save: function() {
        cache.save(this.todos);
        return this.update();
      },
      update: function(status) {
        this.remaining = (this.todos.filter(function(t) {
          return !t.completed;
        })).length;
        return this.allDone = this.remaining === 0;
      }
    }
  };

}).call(this);
