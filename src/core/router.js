(function() {
  var Router, escapeRegExp, extractParams, namedParam, optionalParam, routeToRegExp, router, splatParam,
    __slice = [].slice;

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
    var p, params, _i, _len, _results;
    params = route.exec(fragment).slice(1);
    _results = [];
    for (_i = 0, _len = params.length; _i < _len; _i++) {
      p = params[_i];
      _results.push(decodeURIComponent(p) || null);
    }
    return _results;
  };

  router = function(router, args) {
    var opts, path, r, route, routes, _ref, _results;
    opts = router.opts;
    routes = opts.routes;
    path = args.join('/');
    _results = [];
    for (r in routes) {
      route = routeToRegExp(r);
      if (!route.test(path)) {
        continue;
      }
      if (C.isFunction(routes[r])) {
        _results.push(routes[r].apply(router, extractParams(route, path)));
      } else {
        _results.push((_ref = opts[routes[r]]) != null ? _ref.apply(router, extractParams(route, path)) : void 0);
      }
    }
    return _results;
  };

  C.Router = Router = (function() {
    function Router(opts) {
      this.opts = opts;
    }

    Router.prototype.start = function() {
      riot.route.exec((function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return router(_this, args);
        };
      })(this));
      riot.route((function(_this) {
        return function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
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

}).call(this);
