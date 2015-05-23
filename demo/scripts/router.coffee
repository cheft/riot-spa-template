module.exports =
    routes:
        '':  'home'
        '/': 'home'
        'start/:id': 'start'
        
        'hello/:id/:name': 'hello'
        'test/p:id': 'test'
        'path/*path': 'path'
        'aa': -> console.log 'aaaaaaa'

    hello: (id, name) ->
        console.log 'hello' + id + 'name=' + name

    test: (id) ->
        console.log "test#{id}"

    path: (path) ->
        console.log path

    start: (id) ->
        app.viewport.show(id)

    home: ->
        app.viewport.show('todo')
