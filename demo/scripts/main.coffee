router =
    routes:
        'hello/:id/:name': 'hello'
        'test/p:id': 'test'
        'path/*path': 'path'

    hello: (id, name) ->
        console.log 'hello' + id + 'name=' + name

    test: (id) ->
        console.log "test#{id}"

    path: (path) ->
        console.log path

r = new c.Router(router)
r.start()
