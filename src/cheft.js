(function() {
  var __slice = [].slice;

  (function(root, factory) {
    var riot;
    if (typeof define === 'function' && define.amd) {
      return define(['riot'], function(riot) {
        return factory(root, riot);
      });
    } else if (typeof exports === 'object') {
      riot = require('riot');
      return module.exports = factory(root, riot);
    } else {
      return root.Cheft = factory(root, riot);
    }
  })(window, function(root, riot) {
    var C, Cheft, idCounter, item, toString, types, _fn, _i, _len;
    C = Cheft = {
      version: '1.0.0'
    };
    idCounter = 0;
    toString = Object.prototype.toString;
    types = ['Function', 'Object', 'String', 'Array', 'Number', 'Boolean', 'Date', 'RegExp', 'Undefined', 'Null'];
    _fn = function(item) {
      return C["is" + item] = function(obj) {
        return toString.call(obj) === ("[object " + item + "]");
      };
    };
    for (_i = 0, _len = types.length; _i < _len; _i++) {
      item = types[_i];
      _fn(item);
    }
    C.extend = function() {
      var key, mixin, mixins, target, value, _j, _len1;
      target = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (!target) {
        return target;
      }
      for (_j = 0, _len1 = mixins.length; _j < _len1; _j++) {
        mixin = mixins[_j];
        for (key in mixin) {
          value = mixin[key];
          target[key] = value;
        }
      }
      return target;
    };
    C.uniqueId = function(prefix) {
      return (prefix ? prefix : '') + ++idCounter;
    };
    C.mixin = function(tag, obj) {
      var _results;
      if (obj.actions) {
        tag.mixin(obj.actions);
      }
      if (!obj.events) {
        return;
      }
      _results = [];
      for (item in obj.events) {
        _results.push((function(item) {
          return tag.on(item, obj.events[item]);
        })(item));
      }
      return _results;
    };
    return Cheft;
  });

}).call(this);
