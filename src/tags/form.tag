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
        data[i.name] = i.value for i in @form.querySelectorAll('input')
        data[t.name] = t.value for t in @form.querySelectorAll('textarea')
        data

    @setData = (data) =>
        for name, value of data
            input = @form.querySelector("input[name=#{name}]")
            input.value = value if input

            textarea = @form.querySelector("textarea[name=#{name}]")
            textarea.innerHTML = value if textarea

</FormTag>
