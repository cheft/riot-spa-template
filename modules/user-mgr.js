riot.tag('user-mgr', '<div id="grid_area"></div>', function(opts) {var grid;

grid = riot.mountTo(this.grid_area, 'grid', {
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
      icon: ''
    }, {
      operate: 'edit',
      label: '编辑',
      icon: ''
    }, {
      operate: 'remove',
      label: '删除',
      icon: ''
    }
  ],
  data: [
    {
      age: 16,
      card: "88xx88xx",
      name: "cheft",
      sex: "男",
      username: "赵子龙"
    }, {
      age: 33,
      card: "77xx88xx",
      name: "song",
      sex: "男",
      username: "关云长"
    }, {
      age: 16,
      card: "88xx88xx",
      name: "cheft",
      sex: "男",
      username: "诸葛孔明"
    }, {
      age: 33,
      card: "77xx88xx",
      name: "song",
      sex: "男",
      username: "张翼德"
    }
  ]
});

grid.on('remove', function(id) {
  console.log(id);
  grid.data.splice(id, 1);
  return grid.update();
});

});
