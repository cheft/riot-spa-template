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
    var C, Cache, Cheft, Router, application, escapeRegExp, extractParams, fn1, i, idCounter, item, len, namedParam, optionalParam, routeToRegExp, router, splatParam, toString, types;
    C = Cheft = {
      version: '1.0.0'
    };
    idCounter = 0;
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
    C.uniqueId = function(prefix) {
      return (prefix ? prefix : '') + ++idCounter;
    };
    C.mixin = function(tag, obj) {
      var results;
      if (obj.actions) {
        tag.mixin(obj.actions);
      }
      if (!obj.events) {
        return;
      }
      results = [];
      for (item in obj.events) {
        results.push((function(item) {
          return tag.on(item, obj.events[item]);
        })(item));
      }
      return results;
    };
    C.Application = application = (function() {
      function application() {}

      application.prototype.mount = function(tagName) {
        var tag;
        this.tags = this.tags || {};
        tag = riot.mount(tagName)[0];
        this.tags[tagName] = tag;
        return this.currentTag = tag;
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

      Router.prototype.to = function(hash) {
        return riot.route(hash);
      };

      Router.prototype.add = function(route, fn) {
        return this.opts.routes[route] = fn;
      };

      Router.prototype.remove = function(route) {
        return delete this.opts.routes[route];
      };

      return Router;

    })();
    C.Cache = Cache = (function() {
      function Cache(key1, session) {
        this.key = key1;
        this.session = session;
        this.cache = localStorage;
        if (this.session) {
          this.cache = sessionStorage;
        }
      }

      Cache.prototype.get = function() {
        return JSON.parse(this.cache.getItem(this.key) || '[]');
      };

      Cache.prototype.save = function(data) {
        return this.cache.setItem(this.key, JSON.stringify(data));
      };

      return Cache;

    })();
    C.Adapter = {
      Promise: null,
      ajax: null
    };
    C.Request = {
      url: function(model) {
        var base, options, urls;
        options = model.app.options;
        urls = [options.urlRoot];
        if (model.module.options.urlPrefix) {
          urls.push(model.module.options.urlPrefix);
        }
        urls.push(model.module.name);
        base = model.url || '';
        if (D.isFunction(base)) {
          base = base.apply(model);
        }
        while (base.indexOf('../') === 0) {
          urls.pop();
          base = base.slice(3);
        }
        if (base) {
          urls.push(base);
        }
        if (model.data.id) {
          urls.push(model.data.id);
        }
        if (options.urlSuffix) {
          urls.push(urls.pop() + options.urlSuffix);
        }
        return compose.apply(null, urls);
      },
      get: function(model, options) {
        return this.ajax({
          type: 'GET'
        }, model, model.getParams(), options);
      },
      post: function(model, options) {
        return this.ajax({
          type: 'POST'
        }, model, model.data, options);
      },
      put: function(model, options) {
        return this.ajax({
          type: 'PUT'
        }, model, model.data, options);
      },
      del: function(model, options) {
        return this.ajax({
          type: 'DELETE'
        }, model, model.data, options);
      },
      save: function(model, options) {
        if (model.data.id) {
          return this.put(model, options);
        } else {
          return this.post(model, options);
        }
      },
      ajax: function(params, model, data, options) {
        var url;
        if (options == null) {
          options = {};
        }
        url = this.url(model);
        params = D.extend(params, options);
        data = D.extend(data, options.data);
        params.url = url;
        params.data = data;
        return model.Promise.chain(A.ajax(params), function(resp) {
          model.set(resp);
          model.changed();
          return model;
        });
      }
    };
    return Cheft;
  });

}).call(this);
