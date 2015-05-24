module.exports =
    actions:
        init: ->
            @todoTag = @parent

        toEdit: (e) ->
            @editing = true
            @editor.value = @t.title

        didEdit: (e) ->
            if e.which is 13 or e.which is 0
                @editing = false
                @t.title = value.trim() if (value = e.target.value)
                @todoTag.trigger 'save'

        toRemove: -> @todoTag.trigger 'remove', @t

        toggleTodo: ->
            @t.completed = !@t.completed
            @todoTag.trigger 'save'
            true

    events:
        updated: -> @editor.focus() if @editing
