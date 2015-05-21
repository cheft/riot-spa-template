(function() {
  module.exports = {
    title1: 'ttt4455',
    title2: 'ppps',
    title3: 'tttt3',
    init: function() {
      return this.on('mount', function() {
        return console.log('mount');
      });
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
  };

}).call(this);
