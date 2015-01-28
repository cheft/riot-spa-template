<data>
    <div></div>

    if @opts.url
        ajax
            # async: false
            url: @opts.url
            success: (data) =>
                @value = JSON.parse data
                @trigger('ajax')
</data>
