module.exports =
    routes:
        '':  'home'
        'start/:id': 'start'
        'start/todos/:status': 'filterTodo'

        'hello/:id/:name': 'hello'
        'test/p:id': 'test'
        'path/*path': 'path'
        'aa': -> console.log 'aaaaaaa'

    start: (id) -> app.tags.viewport.show(id)

    home: -> app.tags.viewport.show('ranking')

    filterTodo: (status) ->
        app.tags.viewport.show('todo') unless app.tags.todo
        app.tags.todo.filter status

    hello: (id, name) -> console.log 'hello' + id + 'name=' + name

    test: (id) -> console.log "test#{id}"

    path: (path) -> console.log path
