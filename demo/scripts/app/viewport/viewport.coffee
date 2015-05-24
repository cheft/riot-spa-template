module.exports =
    show: (tag) ->
        @container.setAttribute('riot-tag', tag)
        app.mount(tag)
