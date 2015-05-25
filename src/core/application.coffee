C.Application = class application
    mount: (tagName) ->
        @tags = @tags || {}
        tag = riot.mount(tagName)[0]
        @tags[tagName] = tag
        @currentTag = tag
