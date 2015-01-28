<todo>
  <h3>{ opts.title }</h3>
  <ul>
    <li each={ items.filter(filter) }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
      </label>
    </li>
  </ul>
  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Add #{ items.filter(filter).length + 1 }</button>
  </form>

  @items = opts.items

  edit (e) ->
    @text = e.target.value

  @add = (e) ->
    if @text
      @items.push title: @text
      @text = @input.value = ''

  @filter = (item) ->
    !item.hidden

  @toggle = (e) ->
    item = e.item
    item.done = !item.done
    true

</todo>
