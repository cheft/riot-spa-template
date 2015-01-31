riot.tag('user-list', '<div id="ctable_area"></div>', function(opts) {var ctable;

ctable = riot.mountTo(this.ctable_area, 'ctable', {
  columns: [
    {
      column: 'username',
      label: '用户名'
    }, {
      column: 'name',
      label: '姓名'
    }, {
      column: 'card',
      label: '身份证号'
    }, {
      column: 'sex',
      label: '性别'
    }, {
      column: 'age'
    }
  ],
  operates: [
    {
      operate: 'show',
      label: '查看',
      icon: 'glyphicon glyphicon-eye-open'
    }, {
      operate: 'edit',
      label: '编辑',
      icon: 'glyphicon glyphicon-edit'
    }, {
      operate: 'remove',
      label: '删除',
      icon: 'glyphicon glyphicon-trash'
    }
  ],
  store: 'data/data.json'
});

ctable.on('show edit remove', function(e, id) {
  console.log(e, id);
  return ctable.update();
});

});
