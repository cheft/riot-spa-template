<list>
    <style type="text/css">
        .list-panel {
            background-color: #edeff1;
            padding: 5px 10px;
            margin-bottom: 10px;
            border-radius: 6px;
        }

        .list-btn {
            padding: 5px;
        }

        .list-operates {
            background-color: #34495e;
            margin: -5px -10px;
            # border-radius: 6px;
            color: #48c9b0;
        }
    </style>

    <div id="store_area"></div>
    <div id="search_area"></div>
    <div id="page_area"></div>
    <div class="row list-panel" each={d, i in data}>
        <div class="col-sm-3 list-operates"><a each={parent.opts.operates} onclick={parent.parent.event} id="{operate + parent.i}"
         class="list-btn btn {icon}" href="javascript: void 0" title="{label}"></a><span class="pull-right">{i + 1}</span></div>
        <div class="col-sm-{12 / (parent.parent.opts.col / span) || 12 / parent.parent.opts.col}" each={parent.opts.columns}>
            <label class="control-label">{label || column}  </label>&nbsp; {parent.d[column]}
        </div>
    </div>

    @data = opts.data if opts.data

    if opts.store
        store = riot.mountTo @store_area, 'store', url: opts.store
        store.fetch()
        .on 'done', =>
            @data = store.result
            @update()
        .on 'error', =>
            console.log 'error'

    @event = (e) => @trigger e.item.operate, e.target.id.replace e.item.operate, ''

</list>
