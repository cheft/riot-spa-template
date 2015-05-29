C.Application = class application
    constructor: (@options = {}) ->
        @urlRoot = @options.urlRoot || ''

    mount: (tagName) ->
        @tags = @tags || {}
        tag = riot.mount(tagName)[0]
        @tags[tagName] = tag
        @currentTag = tag

    mixin: (tag, obj) ->
        tag.mixin obj.actions if obj.actions
        if obj.events
            for item of obj.events
                do (item) -> tag.on item, obj.events[item]
        if obj.stores
            swap = {}
            for item of obj.stores
                obj.stores[item].url = @urlRoot + (obj.stores[item].url || item)
                store = new Store tag, obj.stores[item]
                swap[item] = store
            C.extend tag, swap
