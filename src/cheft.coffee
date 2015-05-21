c = cheft = version: '0.1'

idCounter = 0
toString = Object.prototype.toString
types = [
    'Function', 'Object', 'String', 'Array', 'Number'
    'Boolean', 'Date', 'RegExp', 'Undefined', 'Null'
]

for item in types
    do (item) -> c["is#{item}"] = (obj) -> toString.call(obj) is "[object #{item}]"

c.extend = (target, mixins...) ->
    return target unless target
    target[key] = value for key, value of mixin for mixin in mixins
    target

c.uniqueId = (prefix) -> (if prefix then prefix else '') + ++idCounter

# @include core/router.coffee

optionalParam = /\((.*?)\)/g;
namedParam    = /(\(\?)?:\w+/g;
splatParam    = /\*\w+/g;
escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

_routeToRegExp = (route) ->
    route = route.replace escapeRegExp, '\\$&'
        .replace optionalParam, '(?:$1)?'
        .replace namedParam, (match, optional) -> if optional then match else '([^/?]+)'
        .replace splatParam, '([^?]*?)'
    new RegExp '^' + route + '(?:\\?([\\s\\S]*))?$'

_extractParameters = (route, fragment) ->
    params = route.exec(fragment).slice(1)
    decodeURIComponent(p) || null for p in params

_router = (router, args) ->
    opts = router.opts
    routes = opts.routes
    path = args.join '/'
    for r of routes
        route = _routeToRegExp(r)
        continue unless route.test path
        opts[routes[r]]?.apply router, _extractParameters(route, path)

class Router
    constructor: (opts) ->
        @opts = opts

    start: ->
        riot.route.exec (args...) => _router @, args
        riot.route (args...) => _router @, args

c.Router = Router
window.c = c
# exports.cheft = cheft
