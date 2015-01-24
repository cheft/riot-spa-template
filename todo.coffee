tag = '
    <h3>{title}</h3>
    <ul>
        <li each="{items}">
            <label class="{completed: done}"></label>
            <input type="checkbox" __checked="{done}" onclick="{parent.toggle}">
            <span onclick="{parent.edited}" style="display: {!edited}">{title}</span>
            <input value="{title}" onenter="{parent.update}" type="{hidden: !edited}"/>
        </li>
    </ul>
    <form onsubmit="{add}">
        <input name="input" onkeyup="{edit}">
        <button __disabled="{!text}">Add {items.length + 1}</button>
    </form>
'

riot.tag 'todo', tag, (opts) ->
    @disabled = true
    @items = opts.items || []
    @title = opts.title

    @add = (e) ->
        return unless @text
        @items.push title: @text, edited: false
        @text = @input.value = ""

    @edit = (e) -> @text = e.target.value

    @edited = (e, a) ->
        console.log e, a, 111

    @update = (e, a) ->
        console.log e, a, 222

    @toggle = (e) -> 
        e.item.done = !e.item.done
        true
