(function() {
  module.exports = {
    actions: {
      init: function() {
        return this.todoTag = this.parent;
      },
      toEdit: function(e) {
        this.editing = true;
        return this.editor.value = this.t.title;
      },
      didEdit: function(e) {
        var value;
        if (e.which === 13 || e.which === 0) {
          this.editing = false;
          if ((value = e.target.value)) {
            this.t.title = value.trim();
          }
          return this.todoTag.trigger('save');
        }
      },
      toRemove: function() {
        return this.todoTag.trigger('remove', this.t);
      },
      toggleTodo: function() {
        this.t.completed = !this.t.completed;
        this.todoTag.trigger('save');
        return true;
      }
    },
    events: {
      updated: function() {
        if (this.editing) {
          return this.editor.focus();
        }
      }
    }
  };

}).call(this);
