C.Cache = class Cache
    constructor: (@key, @session) ->
        @cache = localStorage
        @cache = sessionStorage if @session

    get: -> JSON.parse @cache.getItem(@key) || '[]'

    save: (data) -> @cache.setItem @key, JSON.stringify(data)
