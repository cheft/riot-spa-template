<todo>
    <style type="text/css">
        .completed {
          text-decoration: line-through;
          color: #ccc;
        }

    </style>
    <div>
        <h3 class='alert alert-info'>{title}</h3>
        <ul class="list-group">
            <li each="{items}" class="list-group-item">
                <a href="javascript:void 0" onclick={parent.remove} class="glyphicon glyphicon-trash"></a>
                <label class="{completed: done}">
                    <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title}
                </label>
            </li>
        </ul>
        <form onsubmit="{add}">
            <input name="input" onkeyup="{edit}" class="form-group form-control">
            <button class="btn btn-success" __disabled="{!text}"> 添加 第&nbsp; {items.length + 1} 个</button>
        </form>
    </div>

    @title = '任务列表'
    @todo = new Data [title: '学习 Riot.js 框架']

    @list = ->
        @items = @todo.data
        @text = @input.value = ""

    @add = (e) =>
        return unless @text
        @todo.set title: @text
        @list()

    @edit = (e) -> @text = e.target.value

    @toggle = (e) ->
        e.item.done = !e.item.done
        true

    @remove = (e) =>
        @todo.unset e.item.id
        @list()

    @list()
</todo>
