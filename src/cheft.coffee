((root, factory) ->
    if typeof define is 'function' and define.amd
        define ['riot'], (riot) ->
            factory root, riot
    else if typeof exports is 'object'
        riot = require('riot')
        module.exports = factory root, riot
    else
        root.Cheft = factory root, root.riot
) window, (root, riot) ->
    C = Cheft = version: '1.0.7'
    C.riot = riot

    toString = Object.prototype.toString
    types = [
        'Function', 'Object', 'String', 'Array', 'Number'
        'Boolean', 'Date', 'RegExp', 'Undefined', 'Null'
    ]

    for item in types
        do (item) -> C["is#{item}"] = (obj) -> toString.call(obj) is "[object #{item}]"

    C.extend = (target, mixins...) ->
        return target unless target
        target[key] = value for key, value of mixin for mixin in mixins
        target

    # @include core/application.coffee
    # @include core/router.coffee
    # @include core/adapter.coffee
    # @include core/store.coffee

    Cheft
