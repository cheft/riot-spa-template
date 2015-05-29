C.Store = class Store
    constructor: (@app, @tag, @options) ->
        @params = C.extend {}, @options.params
        @url = @options.url
        @data = @options.data or {}

    getParams: -> @params

    get: (obj) ->
        p = new C.Adapter.Promise()
        @ajax(type: 'GET', url: @url, obj)
            .done (resp) =>
                this.set resp
                p.resolve(resp)
            .fail (resp) ->
                p.reject(resp)
        p.promise()

    post: (obj) -> @ajax type: 'POST', url: @url,obj
    put: (obj) -> @ajax type: 'PUT', url: @url + '/' + obj.id,obj
    del: (obj) -> @ajax type: 'DELETE', url: @url + '/' + obj.id,obj
    save: (obj) -> if @data.id then @put(obj) else @post(obj)

    ajax: (params, obj = {}) ->
        params.url = @app.urlRoot + params.url
        params.data = obj
        p = new C.Adapter.Promise()
        C.Adapter.ajax(params)

    set: (d) ->
        @data = if @options.root then d[@options.root] else d
        @

    clear: (trigger) ->
        @data = {}
        @
