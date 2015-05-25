module.exports =
    actions:
        show: (tag) ->
            @container.setAttribute('riot-tag', tag)
            app.mount(tag)
