riot.tag('todo', '<style type="text/css"> .completed { text-decoration: line-through; color: #ccc; } </style> <div> <h3 class=\'alert alert-info\'>{title}</h3> <ul class="list-group"> <li each="{items}" class="list-group-item"> <a href="javascript:void 0" onclick="{parent.remove}" class="glyphicon glyphicon-trash"></a> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input name="input" onkeyup="{edit}" class="form-group form-control"> <button class="btn btn-success" __disabled="{!text}"> 添加 <i className=\'glyphicon glyphicon-plus\'></form>第&nbsp; {items.length + 1} 个</button> </form> </div>', function(opts) {this.title = '任务列表';

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

this.list();

});
