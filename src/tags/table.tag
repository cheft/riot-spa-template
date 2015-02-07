<TableTag>
    <div id="store_tag_area"></div>
    <table class="table table-striped">
        <tr>
            <th width="5%"> # </th>
            <th each={opts.fields}>
                {label || name}
            </th>
            <th width="15%">操作 (bug)</th>
        </tr>
        <tr each={d, i in data}>
            <td> {i + 1} </td>
            <td each={parent.opts.fields}>
                {parent.d[name]}
            </td>
            <td><span each={parent.opts.buttons}>{item.parent = parent.item}<a onclick={parent.parent.event}
            id="{name + parent.i}" class="{icon}" href="javascript: void 0" title="{label}"></a> </span></td>
        </tr>
    </table>

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
</TableTag>
