<StoreTag>

    @fetch = ->
        $.ajax
            url: @opts.url
            success: (data) =>
                @result = data
                @trigger 'done'
            error: (error) => @trigger 'error'
        @

    @save = -> @
</StoreTag>
