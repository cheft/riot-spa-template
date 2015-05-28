C.Request =
    url: (model) ->
        options = model.app.options
        urls = [options.urlRoot]
        urls.push model.module.options.urlPrefix if model.module.options.urlPrefix
        urls.push model.module.name
        base = model.url or ''
        base = base.apply model if D.isFunction base

        while base.indexOf('../') is 0
            urls.pop()
            base = base.slice 3

        urls.push base if base
        urls.push model.data.id if model.data.id
        if options.urlSuffix
            urls.push urls.pop() + options.urlSuffix
        compose urls...

    get: (model, options) -> @ajax type: 'GET', model, model.getParams(), options
    post: (model, options) -> @ajax type: 'POST', model, model.data, options
    put: (model, options) -> @ajax type: 'PUT', model, model.data, options
    del: (model, options) -> @ajax type: 'DELETE', model, model.data, options
    save: (model, options) -> if model.data.id then @put(model, options) else @post(model, options)

    ajax: (params, model, data, options = {}) ->
        url = @url model
        params = D.extend params, options
        data = D.extend data, options.data
        params.url = url
        params.data = data
        model.Promise.chain A.ajax(params), (resp) ->
            model.set resp
            model.changed()
            model
