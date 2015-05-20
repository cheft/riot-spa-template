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

c.flux = (self, tag) ->
    for a of self.actions
        do (a) -> tag[a] = (e) -> self.actions[a].call(self, e, tag)
    for s of self.stores
        do (s) -> tag[s] = self.stores[s]

# @include core/router.coffee
window.c = c
# exports.cheft = cheft
