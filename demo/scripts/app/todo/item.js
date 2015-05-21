(function() {
  module.exports = {
    init: function() {
      this.todoTag = this.parent.parent;
      this.todo = this.parent.t;
      return this.on('updated', function() {
        if (this.editing) {
          return this.editor.focus();
        }
      });
    },
    toEdit: function(e) {
      this.editing = true;
      return this.editor.value = this.todo.title;
    },
    didEdit: function(e) {
      var value;
      if (e.which === 13 || e.which === 0) {
        this.editing = false;
        if ((value = e.target.value)) {
          this.todo.title = value.trim();
        }
        return this.todoTag.trigger('save');
      }
    },
    toRemove: function() {
      return this.todoTag.trigger('remove', this.todo);
    },
    toggleTodo: function() {
      this.todo.completed = !this.todo.completed;
      this.todoTag.trigger('save');
      return true;
    }
  };

}).call(this);
