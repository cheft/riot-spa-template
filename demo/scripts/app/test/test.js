(function() {
  module.exports = {
    stores: {
      todos: {}
    },
    actions: {
      init: function() {
        this.title1 = '1111111';
        this.title2 = '2222222';
        this.title3 = '3333333';
        return this.trigger('remove');
      },
      test1: function(e) {
        return console.log('test1');
      },
      test2: function() {
        return console.log('test2');
      },
      fill: function(e) {
        return this.title1 = e.target.value;
      }
    },
    events: {
      mount: function() {
        return console.log('mount');
      },
      update: function() {
        return console.log('update');
      },
      updated: function() {
        return console.log('updated');
      },
      unmount: function() {
        return console.log('unmount');
      },
      remove: function() {
        return console.log('remove');
      }
    }
  };

}).call(this);
