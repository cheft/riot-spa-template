storage = new C.Storage 'todo'

module.exports =
    actions:
        init: ->
            @todos = storage.fetch()
            @links = [{label: 'All', name: 'all'}, {label: 'Active', name: 'active'}, {label: 'Completed', name: 'completed'}]

        didAdd: (e) ->
            if e.which is 13 and (value = e.target.value)
                @todos.push title: value.trim(), completed: false
                e.target.value = ''
                @trigger 'save'

        filtered: ->
            # return @todos if @activeFilter is 'all'
            # @todos.filter (t) => t.completed is (if @activeFilter is 'active' then false else true)
            @todos

        toggleAll: (e) ->
            console.log 'all'
            @todos.forEach (t) -> t.completed = e.target.checked
            @trigger 'save'
            true

        removeCompleted: (e) ->
            @todos = @todos.filter (t) -> !t.completed
            @trigger 'save'

    events:
        remove: (todo) ->
            @todos.forEach (t) =>
                @todos.splice(@todos.indexOf(t), 1) if todo is t
                @trigger 'save'

        save: ->
            storage.save @todos
            @update()

        update: ->
            @remaining = (@todos.filter (t) -> !t.completed).length
            @allDone = @remaining is 0
