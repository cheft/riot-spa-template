optionalParam = /\((.*?)\)/g;
namedParam    = /(\(\?)?:\w+/g;
splatParam    = /\*\w+/g;
escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

routeToRegExp = (route) ->
    route = route.replace escapeRegExp, '\\$&'
        .replace optionalParam, '(?:$1)?'
        .replace namedParam, (match, optional) ->
            if optional then match else '([^/?]+)'
        .replace splatParam, '([^?]*?)'
    new RegExp '^' + route + '(?:\\?([\\s\\S]*))?$'

extractParams = (route, fragment) ->
    params = route.exec(fragment).slice(1)
    decodeURIComponent(p) || null for p in params

router = (router, args) ->
    opts = router.opts
    routes = opts.routes
    path = args.join '/'
    for r of routes
        route = routeToRegExp(r)
        continue unless route.test path
        if C.isFunction(routes[r])
            routes[r].apply router, extractParams(route, path)
        else
            opts[routes[r]]?.apply router, extractParams(route, path)

C.Router = class Router
    constructor: (@opts) ->

    start: ->
        riot.route.exec (args...) => router @, args
        riot.route (args...) => router @, args
        riot.route.start()

    stop: -> riot.route.stop()

    go: (hash) -> riot.route hash

    back: -> history.back()

    add: (route, fn) -> @opts.routes[route] = fn

    remove: (route) -> delete @opts.routes[route]
