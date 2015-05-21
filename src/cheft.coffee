c = cheft = version: '1.0.0'

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
# @include core/storage.coffee
c.Router = Router
c.Storage = Storage
window.c = c
# exports.cheft = cheft
