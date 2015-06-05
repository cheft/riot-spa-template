(function() {
  var slice = [].slice;

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
      return root.Cheft = factory(root, root.riot);
    }
  })(window, function(root, riot) {
    var C, Cheft, Router, Store, application, escapeRegExp, extractParams, fn1, i, item, len, namedParam, optionalParam, routeToRegExp, router, splatParam, toString, types;
    C = Cheft = {
      version: '1.0.0'
    };
    toString = Object.prototype.toString;
    types = ['Function', 'Object', 'String', 'Array', 'Number', 'Boolean', 'Date', 'RegExp', 'Undefined', 'Null'];
    fn1 = function(item) {
      return C["is" + item] = function(obj) {
        return toString.call(obj) === ("[object " + item + "]");
      };
    };
    for (i = 0, len = types.length; i < len; i++) {
      item = types[i];
      fn1(item);
    }
    C.extend = function() {
      var j, key, len1, mixin, mixins, target, value;
      target = arguments[0], mixins = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (!target) {
        return target;
      }
      for (j = 0, len1 = mixins.length; j < len1; j++) {
        mixin = mixins[j];
        for (key in mixin) {
          value = mixin[key];
          target[key] = value;
        }
      }
      return target;
    };
    C.Application = application = (function() {
      function application(options) {
        this.options = options != null ? options : {};
        this.urlRoot = this.options.urlRoot || '';
      }

      application.prototype.mount = function(tagName) {
        var tag;
        this.tags = this.tags || {};
        tag = riot.mount(tagName)[0];
        this.tags[tagName] = tag;
        return this.currentTag = tag;
      };

      application.prototype.mixin = function(tag, obj) {
        var fn2, init, opt;
        init = function() {};
        if (obj.events) {
          init = obj.events.init || function() {};
          fn2 = function(item) {
            return tag.on(item, obj.events[item]);
          };
          for (item in obj.events) {
            fn2(item);
          }
        }
        if (obj.actions) {
          obj.actions.init = init;
          tag.mixin(obj.actions);
        }
        if (obj.store) {
          opt = {};
          if (C.isString(obj.store)) {
            opt.url = obj.store;
          } else if (C.isObject(obj.store)) {
            opt = obj.store;
          }
          return tag.store = new Store(app, tag, opt);
        }
      };

      return application;

    })();
    optionalParam = /\((.*?)\)/g;
    namedParam = /(\(\?)?:\w+/g;
    splatParam = /\*\w+/g;
    escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    routeToRegExp = function(route) {
      route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function(match, optional) {
        if (optional) {
          return match;
        } else {
          return '([^/?]+)';
        }
      }).replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    };
    extractParams = function(route, fragment) {
      var j, len1, p, params, results;
      params = route.exec(fragment).slice(1);
      results = [];
      for (j = 0, len1 = params.length; j < len1; j++) {
        p = params[j];
        results.push(decodeURIComponent(p) || null);
      }
      return results;
    };
    router = function(router, args) {
      var opts, path, r, ref, results, route, routes;
      opts = router.opts;
      routes = opts.routes;
      path = args.join('/');
      results = [];
      for (r in routes) {
        route = routeToRegExp(r);
        if (!route.test(path)) {
          continue;
        }
        if (C.isFunction(routes[r])) {
          results.push(routes[r].apply(router, extractParams(route, path)));
        } else {
          results.push((ref = opts[routes[r]]) != null ? ref.apply(router, extractParams(route, path)) : void 0);
        }
      }
      return results;
    };
    C.Router = Router = (function() {
      function Router(opts1) {
        this.opts = opts1;
      }

      Router.prototype.start = function() {
        riot.route.exec((function(_this) {
          return function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return router(_this, args);
          };
        })(this));
        riot.route((function(_this) {
          return function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return router(_this, args);
          };
        })(this));
        return riot.route.start();
      };

      Router.prototype.stop = function() {
        return riot.route.stop();
      };

      Router.prototype.go = function(hash) {
        return riot.route(hash);
      };

      Router.prototype.back = function() {
        return history.back();
      };

      Router.prototype.add = function(route, fn) {
        return this.opts.routes[route] = fn;
      };

      Router.prototype.remove = function(route) {
        return delete this.opts.routes[route];
      };

      return Router;

    })();
    C.Adapter = {
      Promise: {},
      ajax: {}
    };
    C.Store = Store = (function() {
      function Store(app1, tag1, options) {
        this.app = app1;
        this.tag = tag1;
        this.options = options;
        this.params = this.options.params || {};
        this.url = this.options.url;
        this.data = this.options.data || {};
      }

      Store.prototype.getParams = function() {
        return this.params;
      };

      Store.prototype.get = function(obj) {
        return this.ajax({
          type: 'GET',
          url: this.url
        }, obj, 'geted');
      };

      Store.prototype.post = function(obj) {
        return this.ajax({
          type: 'POST',
          url: this.url
        }, obj, 'posted');
      };

      Store.prototype.put = function(obj) {
        return this.ajax({
          type: 'PUT',
          url: this.url + '/' + obj.id
        }, obj, 'puted');
      };

      Store.prototype.del = function(obj) {
        return this.ajax({
          type: 'DELETE',
          url: this.url + '/' + obj.id
        }, obj, 'deleted');
      };

      Store.prototype.save = function(obj) {
        if (this.data.id) {
          return this.put(obj);
        } else {
          return this.post(obj);
        }
      };

      Store.prototype.ajax = function(params, obj, evt) {
        var p, self;
        if (obj == null) {
          obj = {};
        }
        self = this;
        params.url = this.app.urlRoot + params.url;
        params.data = obj;
        p = new C.Adapter.Promise();
        C.Adapter.ajax(params).done(function(resp) {
          self.set(resp);
          self.tag.trigger(evt, 'success', resp);
          if (evt === 'posted') {
            self.tag.trigger('saved', 'success', resp);
          }
          return p.resolve(resp);
        }).fail(function(resp) {
          self.tag.trigger(evt, 'error', resp);
          if (evt === 'posted') {
            self.tag.trigger('saved', 'error', resp);
          }
          return p.reject(resp);
        });
        return p.promise();
      };

      Store.prototype.set = function(d) {
        this.data = this.options.root ? d[this.options.root] : d;
        return this;
      };

      Store.prototype.clear = function(trigger) {
        this.data = {};
        return this;
      };

      return Store;

    })();
    return Cheft;
  });

}).call(this);
