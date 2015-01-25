tag = '
    <h3>{title}</h3>
    <ul>
        <li each="{items}">
            <a href="javascript:void 0" onclick={parent.remove}> x </a>
            <label class="{completed: done}">
                <input type="checkbox" __checked="{done}" onclick="{parent.toggle}">{title}
            </label>
        </li>
    </ul>
    <form onsubmit="{add}">
        <input name="input" onkeyup="{edit}">
        <button __disabled="{!text}">Add {items.length + 1}</button>
    </form>
'

riot.tag 'todo', tag, () ->
    @title = 'TEST'
    @todo = new Data [title: 'test']

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
