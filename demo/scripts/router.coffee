module.exports =
    routes:
        'hello/:id/:name': 'hello'
        'test/p:id': 'test'
        'path/*path': 'path'
        'aa': -> console.log 'aaaaaaa'
        '': -> console.log 'root'
        '/': -> console.log '/'

    hello: (id, name) ->
        console.log 'hello' + id + 'name=' + name

    test: (id) ->
        console.log "test#{id}"

    path: (path) ->
        console.log path
