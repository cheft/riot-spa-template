(function() {
  var storage;

  storage = new C.Storage('todo');

  module.exports = {
    actions: {
      init: function() {
        this.todos = storage.fetch();
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
        return this.todos;
      },
      toggleAll: function(e) {
        console.log('all');
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
        storage.save(this.todos);
        return this.update();
      },
      update: function() {
        this.remaining = (this.todos.filter(function(t) {
          return !t.completed;
        })).length;
        return this.allDone = this.remaining === 0;
      }
    }
  };

}).call(this);
