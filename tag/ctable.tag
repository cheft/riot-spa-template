<ctable>
    <div id="store_area"></div>
    <div id="search_area"></div>
    <div id="page_area"></div>
    <table class="table table-striped">
        <tr>
            <th width="5%"> # </th>
            <th width="15%">操作</th>
            <th each={opts.columns}>
                {label || column}
            </th>
        </tr>
        <tr each={d, i in data}>
            <td> {i + 1} </td>
            <td><span each={parent.opts.operates}>{item.parent = parent.item}<a onclick={parent.parent.event}
            id="{operate + parent.i}" class="{icon}" href="javascript: void 0" title="{label}"></a> </span></td>
            <td each={parent.opts.columns}>
                {parent.d[column]}
            </td>
        </tr>
    </table>

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

    @on 'unmount', ->
        console.log 'table unmount...'

</ctable>
