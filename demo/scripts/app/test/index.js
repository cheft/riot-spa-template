(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
riot.tag('hello', '<h1>hello</h1>', function(opts) {

});
},{}],2:[function(require,module,exports){
require('../hello/tag');
riot.tag('test', '<hello></hello><world></world> <h3 onclick="{test1}">{title1}</h3> <h3 onclick="{test2}">{title2}</h3> <h3 onclick="{test3}">{title3}</h3> <input type="text" onkeyup="{fill}" onfocus="{test1}">', function(opts) {
        this.mixin(require('./test'));
    
});
riot.tag('world', '<h1>world</h1>', function(opts) {

});
},{"../hello/tag":1,"./test":3}],3:[function(require,module,exports){
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

},{}]},{},[2])