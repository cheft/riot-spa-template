((root, factory) ->
    if typeof define is 'function' and define.amd
        define ['jquery', 'cheftjs'], ($, C) ->
            factory root, $, C
    else if typeof exports is 'object'
        $ = require 'jquery'
        D = require 'cheftjs'
        factory root, $, C
    else
        factory root, $, Cheftjs
) window, (root, $, C) ->

    class Promise
        @resolve: (data) ->
            return data.promise() if data and data.promise
            return new Promise((resolve) ->
                resolve(data)
            )
        @reject: (data) ->
            return data.promise() if data and data.promise
            return new Promise((resolve, reject) ->
                reject(data)
            )
        @all: (args) ->
            new Promise (re, rj) ->
                $.when(args...).then (args...) ->
                    re args
                , (args...) ->
                    rj args

        constructor: (fn) ->
            @deferred = $.Deferred()
            setTimeout =>
                fn($.proxy(@deferred.resolve, @deferred), $.proxy(@deferred.reject, @deferred))
            , 1

        then: (args...) ->
            @deferred.then args...

        promise: -> @deferred.promise()

        catch: (fn) ->
            @deferred.fail(fn)

    C.extend C.Adapter,
        ajax: $.ajax
        Promise: root.Promise or Promise
