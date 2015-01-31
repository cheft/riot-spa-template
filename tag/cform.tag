<cform>
    <form>
        <div class="container">
            <div class="row">
                <div class="col-sm-{12 / (parent.opts.col / span) || 12 / parent.opts.col} form-group" each={opts.fields}>
                    <label for="{name}" class="control-label">{parent.opts.hiddenLabel ? '' : label}</label>
                    <input if={type !== 'textarea'} type={type || 'text'} class="form-control" id="{name}" name="{name}"
                    placeholder="{parent.opts.hiddenPh ? '' : (placeholder || label)}" />
                    <textarea if={type === 'textarea'} type={type || 'text'} class="form-control" id="{name}" name="{name}"
                    placeholder="{parent.opts.hiddenPh ? '' : (placeholder || label)}" rows="{rows || 3}"></textarea>
                </div>
            </div>
        </div>
    </form>

    @getData = ->
        console.log 1

    @setFormDate = ->
        console.log 2

</cform>
