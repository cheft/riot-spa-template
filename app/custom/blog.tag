<blog>
    <div id="store_tag_area"></div>
    <div id="page_area"></div>

    <div class="row" each={data}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div class="pull-right">{time}</div>
    </div>

    @data = []
    store_tag = riot.mountTo @store_tag_area, 'StoreTag', url: 'src/utils/blog.json'
    store_tag.fetch()
    .on 'done', =>
        @data = store_tag.result
        @update()
    .on 'error', =>
        console.log 'error'
</blog>
