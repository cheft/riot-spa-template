<blog>
    <div id="store_tag_area"></div>

    <div show={mode == 'detail'} class="blog">
        <h1 class="title">{title}</h1>
        <div class="pull-right">
            {new Date(time).getFullYear()}年 {new Date(time).getMonth() + 1}月 {new Date(time).getDate()}日
            {new Date(time).getHours()}:{new Date(time).getMinutes()}:{new Date(time).getSeconds()}
        </div>
        <br />
        <p id={detail(this)}></p>
    </div>

    <div show={parent.mode == 'list'} class="row" each={data}>
        <h1 class="title">{title}</h1>
        <div class="pull-right">
            {new Date(time).getFullYear()}年 {new Date(time).getMonth() + 1}月 {new Date(time).getDate()}日
            {new Date(time).getHours()}:{new Date(time).getMinutes()}:{new Date(time).getSeconds()}
        </div>
        <br />
        <p id={parent.marked(this)}></p>
    </div>

    render = =>
        if location.hash.indexOf('/') is -1
            @marked = (e) ->
                e['{parent.marked(this)}'].innerHTML = marked(e.content.substr(0, 200)) + '<br /><a href="#blog/' + e.id + '">阅读全文</a>'
                'content' + e.id
            @update mode: 'list'
        else
            @detail = (e) ->
                e['{detail(this)}'].innerHTML = marked(e.content) + '<br /><a href="#blog"> 返回</a>'
                'detail' + e.id
            @mode = 'detail'
            id = location.hash.split('/')[1]
            @update(b) for b in @data when b.id + '' is id if @data

    @on 'mount', =>
        # url: 'blogs'
        store_tag = riot.mountTo @store_tag_area, 'StoreTag', url: 'src/utils/blog.json'
        store_tag.fetch()
        .on 'done', =>
            @data = store_tag.result
            render()
        .on 'error', =>
            console.log 'error'

    @on 'updated', ->
        $(@root).find('p img').addClass('img-responsive')
        $(@root).find('p table').addClass('table table-striped')
        $(@root).find('pre code').addClass('prettyprint linenums')
        prettyPrint()
</blog>
