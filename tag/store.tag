<store>

    @fetch = ->
        ajax
            url: @opts.url
            success: (data) =>
                @result = JSON.parse data
                @trigger 'done'
            error: (error) => @trigger 'error'
        @

    @save = -> @
</store>
