<blog>
    <div id="store_area"></div>
    <div id="page_area"></div>

    <div class="row" each={data}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div class="pull-right">{time}</div>
    </div>

    @data = []
    store = riot.mountTo @store_area, 'store', url: 'data/blog.json'
    store.fetch()
    .on 'done', =>
        @data = store.result
        @update()
    .on 'error', =>
        console.log 'error'

</blog>
