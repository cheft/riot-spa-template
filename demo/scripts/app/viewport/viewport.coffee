module.exports =

    init: ->
        app.viewport = @

    show: (tag) ->
        @container.setAttribute('riot-tag', tag)
        riot.mount(tag)
