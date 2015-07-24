C.Store = class Store
    constructor: (@app, @tag, @options) ->
        @url = @options.url
        @data = @options.data or {}
        @params = @options.params || {}
        delete @options.url
        delete @options.data
        delete @options.params

    get : (data = {}) -> @ajax type: 'GET', url: (if data.id then @url + '/' + data.id else @url), data, 'geted'
    post: (data = {}) -> @ajax type: 'POST', url: @url, data, 'posted'
    put : (data = {}) -> @ajax type: 'PUT', url: @url + '/' + data.id, data, 'puted'
    del : (data = {}) -> @ajax type: 'DELETE', url: @url + '/' + data.id, data, 'deleted'
    save: (data = {}) -> if data.id then @put(data) else @post(data)

    ajax: (opts, data, evt) ->
        self = @
        opts.contentType = @app.contentType
        config = C.extend opts, @options
        config.url = @app.urlRoot + config.url
        appendUrl = ''
        appendUrl += p + '=' + @params[p] + '&' for p of @params
        config.url += '?' + appendUrl.substring(0, appendUrl.length - 1) if appendUrl isnt ''
        config.data = data
        @app.trigger 'ajax', config
        p = new C.Adapter.Promise()
        C.Adapter.ajax(config)
            .done (resp) ->
                self.set resp if evt is 'geted'
                self.tag.trigger evt, resp, 'success'
                if evt is 'posted' or evt is 'puted'
                    self.tag.trigger 'saved', resp, 'success' 
                self.app.trigger 'ajaxed', resp, 'success'
                p.resolve resp
            .fail (resp) ->
                self.tag.trigger evt, resp, 'error'
                if evt is 'posted' or evt is 'puted'
                    self.tag.trigger 'saved', resp, 'error' 
                self.app.trigger 'ajaxed', resp, 'error'
                p.reject resp
        p.promise()

    set: (d) ->
        @data = if @options.root then d[@options.root] else d
        @

    clear: ->
        @data = {}
        @

