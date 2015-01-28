riot.tag('user-mgr', '<div id="data_area"></div> <div id="grid_area"></div>', function(opts) {var data, grid;

grid = riot.mountTo(this.grid_area, 'grid', {
  schema: [
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
  ]
});

data = riot.mountTo(this.data_area, 'data', {
  url: 'data/data.json'
});

riot.observable(data);

data.on('list', (function(_this) {
  return function() {
    grid.data = data.result;
    return grid.update();
  };
})(this));

});
