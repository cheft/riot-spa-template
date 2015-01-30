<store>
    <span></span>

    if @opts.url
        ajax
            url: @opts.url
            success: (data) =>
                @result = JSON.parse data
                @trigger('list')
</store>
