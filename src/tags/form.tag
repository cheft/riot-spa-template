<FormTag>
    <form id="form">
        <div class="row">
            <div class="col-sm-{12 / (parent.opts.col / span) || 12 / parent.opts.col} form-group" each={opts.fields}>
                <label for="{name}" class="control-label">{parent.opts.hiddenLabel ? '' : label}</label>
                <input if={type !== 'textarea'} type={type || 'text'} class="form-control" id="{name}" name="{name}"
                placeholder="{parent.opts.hiddenPh ? '' : (placeholder || label)}" />
                <textarea if={type === 'textarea'} type={type || 'text'} class="form-control" id="{name}" name="{name}"
                placeholder="{parent.opts.hiddenPh ? '' : (placeholder || label)}" rows="{rows || 3}"></textarea>
            </div>
        </div>
    </form>

    @reset = -> @form.reset()

    @getData = =>
        data = {}
        data[item.name] = item.value for item in $('form').serializeArray() when item.value
        data

    @setData = (data) =>
        for name, value of data
            input = $("#form input[name=#{name}]")
            input.val(value) if input

            textarea = $("#form textarea[name=#{name}]")
            textarea.val(value) if textarea

</FormTag>
