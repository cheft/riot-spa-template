optionalParam = /\((.*?)\)/g;
namedParam    = /(\(\?)?:\w+/g;
splatParam    = /\*\w+/g;
escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

_routeToRegExp = (route) ->
    route = route.replace escapeRegExp, '\\$&'
        .replace optionalParam, '(?:$1)?'
        .replace namedParam, (match, optional) ->
            if optional then match else '([^/?]+)'
        .replace splatParam, '([^?]*?)'
    new RegExp '^' + route + '(?:\\?([\\s\\S]*))?$'

_extractParams = (route, fragment) ->
    params = route.exec(fragment).slice(1)
    decodeURIComponent(p) || null for p in params

_router = (router, args) ->
    opts = router.opts
    routes = opts.routes
    path = args.join '/'
    for r of routes
        route = _routeToRegExp(r)
        continue unless route.test path
        if c.isFunction(routes[r])
            routes[r].apply router, _extractParams(route, path)
        else
            opts[routes[r]]?.apply router, _extractParams(route, path)

class Router
    constructor: (opts) ->
        @opts = opts

    start: ->
        riot.route.exec (args...) => _router @, args
        riot.route (args...) => _router @, args
        riot.route.start()

    stop: -> riot.route.stop()

    to: (hash) -> riot.route hash

    add: (route, fn) -> @opts.routes[route] = fn

    remove: (route) -> delete @opts.routes[route]
