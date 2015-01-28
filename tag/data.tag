<data>
    <span></span>

    if @opts.url
        ajax
            # async: false
            url: @opts.url
            success: (data) =>
                @result = JSON.parse data
                @trigger('list')
</data>
