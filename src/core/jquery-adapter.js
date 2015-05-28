(function() {
  var __slice = [].slice;

  (function(root, factory) {
    var $, D;
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'cheftjs'], function($, C) {
        return factory(root, $, C);
      });
    } else if (typeof exports === 'object') {
      $ = require('jquery');
      D = require('cheftjs');
      return factory(root, $, C);
    } else {
      return factory(root, $, Cheftjs);
    }
  })(window, function(root, $, C) {
    var Promise;
    Promise = (function() {
      Promise.resolve = function(data) {
        if (data && data.promise) {
          return data.promise();
        }
        return new Promise(function(resolve) {
          return resolve(data);
        });
      };

      Promise.reject = function(data) {
        if (data && data.promise) {
          return data.promise();
        }
        return new Promise(function(resolve, reject) {
          return reject(data);
        });
      };

      Promise.all = function(args) {
        return new Promise(function(re, rj) {
          return $.when.apply($, args).then(function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return re(args);
          }, function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return rj(args);
          });
        });
      };

      function Promise(fn) {
        this.deferred = $.Deferred();
        setTimeout((function(_this) {
          return function() {
            return fn($.proxy(_this.deferred.resolve, _this.deferred), $.proxy(_this.deferred.reject, _this.deferred));
          };
        })(this), 1);
      }

      Promise.prototype.then = function() {
        var args, _ref;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return (_ref = this.deferred).then.apply(_ref, args);
      };

      Promise.prototype.promise = function() {
        return this.deferred.promise();
      };

      Promise.prototype["catch"] = function(fn) {
        return this.deferred.fail(fn);
      };

      return Promise;

    })();
    return C.extend(C.Adapter, {
      ajax: $.ajax,
      Promise: root.Promise || Promise
    });
  });

}).call(this);
