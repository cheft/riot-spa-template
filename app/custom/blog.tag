<blog>
    <div id="store_tag_area"></div>

    <div show={mode == 'detail'}>
        <h3>{title}</h3>
        <p id={detail(this)}></p>
    </div>

    <div show={parent.mode == 'list'} class="row" each={data}>
        <h3>{title}</h3>
        <p id={parent.marked(this)}></p>
        <div class="pull-right">
            {new Date(time).getFullYear()}年 {new Date(time).getMonth() + 1}月 {new Date(time).getDate()}日
            {new Date(time).getHours()}:{new Date(time).getMinutes()}:{new Date(time).getSeconds()}
        </div>
    </div>

    @on 'mount', =>
        if location.hash.indexOf('/') is -1
            @mode = 'list'
            @marked = (e) ->
                e['{parent.marked(this)}'].innerHTML = marked(e.content.substr(0, 200)) + '<br /><a href="#blog/' + e.id + '">阅读全文</a>'
                'content' + e.id

            @update()
            @data = []
            # url: 'blogs'
            store_tag = riot.mountTo @store_tag_area, 'StoreTag', url: 'src/utils/blog.json'

            store_tag.fetch()
            .on 'done', =>
                @data = store_tag.result
                riot.blogData = @data
                @update()
            .on 'error', =>
                console.log 'error'
        else
            @mode = 'detail'
            @detail = (e) ->
                e['{detail(this)}'].innerHTML = marked(e.content) + '<br /><a href="#blog">返回列表</a>'
                'detail' + e.id
            id = location.hash.split('/')[1]
            return @update(b) for b in riot.blogData when b.id + '' is id if riot.blogData
</blog>
