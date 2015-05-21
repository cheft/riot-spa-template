module.exports =
    init: ->
        @todoTag = @parent.parent
        @todo = @parent.t
        @on 'updated', ->  @editor.focus() if @editing

    toEdit: (e) ->
        @editing = true
        @editor.value = @todo.title

    didEdit: (e) ->
        if e.which is 13 or e.which is 0
            @editing = false
            @todo.title = value.trim() if (value = e.target.value)
            @todoTag.trigger 'save'

    toRemove: -> @todoTag.trigger 'remove', @todo

    toggleTodo: ->
        @todo.completed = !@todo.completed
        @todoTag.trigger 'save'
        true
