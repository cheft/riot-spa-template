<ListTag>
    <div id="store_tag_area"></div>
    <div class="row list-panel" each={d, i in data}>
        <div class="col-sm-3 list-buttons"><a each={parent.opts.buttons} onclick={parent.parent.event} id="{button + parent.i}"
         class="list-btn btn {icon}" href="javascript: void 0" title="{label}"></a><span class="pull-right">{i + 1}</span></div>
        <div class="col-sm-{12 / (parent.parent.opts.col / span) || 12 / parent.parent.opts.col}" each={parent.opts.fields}>
            <label class="control-label">{label || name}  </label>&nbsp; {parent.d[name]}
        </div>
    </div>

    @data = opts.data if opts.data

    if opts.store
        store_tag = riot.mountTo @store_tag_area, 'StoreTag', url: opts.store
        store_tag.fetch()
        .on 'done', =>
            @data = store_tag.result
            @update()
        .on 'error', =>
            console.log 'error'

    @event = (e) => @trigger e.item.name, e.target.id.replace e.item.name, ''

</ListTag>
