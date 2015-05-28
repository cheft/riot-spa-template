(function() {
  module.exports = {
    actions: {
      init: function() {
        return this.list = [
          {
            title: 'test11111'
          }, {
            title: 'test22222'
          }
        ];
      },
      test: function() {
        return console.log('111');
      }
    }
  };

}).call(this);
