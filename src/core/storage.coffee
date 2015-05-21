class Storage
    constructor: (@key) ->
    fetch: -> JSON.parse localStorage.getItem(@key) || '[]'
    save: (data) -> localStorage.setItem @key, JSON.stringify(data)
