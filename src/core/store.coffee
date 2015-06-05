C.Store = class Store
    constructor: (@app, @tag, @options) ->
        @params = @options.params || {}
        @url = @options.url
        @data = @options.data or {}

    getParams: -> @params

    get : (obj) -> @ajax type: 'GET', url: @url, obj, 'geted'
    post: (obj) -> @ajax type: 'POST', url: @url, obj, 'posted'
    put : (obj) -> @ajax type: 'PUT', url: @url + '/' + obj.id, obj, 'puted'
    del : (obj) -> @ajax type: 'DELETE', url: @url + '/' + obj.id, obj, 'deleted'
    save: (obj) -> if @data.id then @put(obj) else @post(obj)

    ajax: (params, obj = {}, evt) ->
        self = @
        params.url = @app.urlRoot + params.url
        params.data = obj
        p = new C.Adapter.Promise()
        C.Adapter.ajax(params)
            .done (resp) ->
                self.set resp
                self.tag.trigger evt, 'success', resp
                self.tag.trigger 'saved', 'success', resp if evt is 'posted'
                p.resolve resp
            .fail (resp) ->
                self.tag.trigger evt, 'error', resp
                self.tag.trigger 'saved', 'error', resp if evt is 'posted'
                p.reject resp
        p.promise()

    set: (d) ->
        @data = if @options.root then d[@options.root] else d
        @

    clear: (trigger) ->
        @data = {}
        @

