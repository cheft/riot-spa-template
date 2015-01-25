(function() {
  var tag;

  tag = '<h3>{title}</h3> <ul> <li each="{items}"> <a href="javascript:void 0" onclick={parent.remove}> x </a> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}">{title} </label> </li> </ul> <form onsubmit="{add}"> <input name="input" onkeyup="{edit}"> <button __disabled="{!text}">Add {items.length + 1}</button> </form>';

  riot.tag('todo', tag, function() {
    this.title = 'TEST';
    this.todo = new Data([
      {
        title: 'test'
      }
    ]);
    this.list = function() {
      this.items = this.todo.data;
      return this.text = this.input.value = "";
    };
    this.add = (function(_this) {
      return function(e) {
        if (!_this.text) {
          return;
        }
        _this.todo.set({
          title: _this.text
        });
        return _this.list();
      };
    })(this);
    this.edit = function(e) {
      return this.text = e.target.value;
    };
    this.toggle = function(e) {
      e.item.done = !e.item.done;
      return true;
    };
    this.remove = (function(_this) {
      return function(e) {
        _this.todo.unset(e.item.id);
        return _this.list();
      };
    })(this);
    return this.list();
  });

}).call(this);
