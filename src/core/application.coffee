C.Application = class application
    constructor: (@options = {}) ->
        @urlRoot = @options.urlRoot || ''
        @contentType = @options.contentType || 'application/x-www-form-urlencoded'
        @router = new C.Router @options.router
        riot.observable @

    start: ->
        @container = @mount @options.container
        @router.start()

    mount: (tagName) ->
        @tags = @tags || {}
        tag = riot.mount(tagName)[0]
        @tags[tagName] = tag
        @currentTag = tag
        tag

    mixin: (tag, obj) ->
        init = ->
        if obj.events
            init = obj.events.init || ->
            for item of obj.events
                do (item) -> tag.on item, obj.events[item]
        if obj.actions
            obj.actions.init = init
            tag.mixin obj.actions
        if obj.store
            opt = {}
            if C.isString(obj.store)
                opt.url = obj.store
            else if C.isObject(obj.store)
                opt = obj.store
            tag.store = new Store app, tag, opt
