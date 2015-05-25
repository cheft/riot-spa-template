cache = new Cheft.Cache 'todo'

module.exports =
    actions:
        init: ->
            @todos = cache.get()
            @list = @todos
            @links = [{label: 'All', name: 'all'}, {label: 'Active', name: 'active'}, {label: 'Completed', name: 'completed'}]

        didAdd: (e) ->
            if e.which is 13 and (value = e.target.value)
                @todos.push title: value.trim(), completed: false
                e.target.value = ''
                @trigger 'save'

        filtered: ->
            return @todos if @activeFilter is 'all'
            @todos.filter (t) => t.completed is (if @activeFilter is 'active' then false else true)

        toggleAll: (e) ->
            @todos.forEach (t) -> t.completed = e.target.checked
            @trigger 'save'
            true

        removeCompleted: (e) ->
            @todos = @todos.filter (t) -> !t.completed
            @trigger 'save'

        filter: (status) ->
            @activeFilter = status || 'all'
            @update()

    events:
        remove: (todo) ->
            @todos.forEach (t) =>
                @todos.splice(@todos.indexOf(t), 1) if todo is t
                @trigger 'save'

        save: ->
            cache.save @todos
            @update()

        update: (status) ->
            @remaining = (@todos.filter (t) -> !t.completed).length
            @allDone = @remaining is 0
