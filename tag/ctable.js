riot.tag('ctable', '<div id="store_area"></div> <div id="search_area"></div> <div id="page_area"></div> <table class="table table-striped"> <tr> <th width="5%"> # </th> <th each="{opts.columns}"> {label || column} </th> <th width="15%">操作 (bug)</th> </tr> <tr each="{d, i in data}"> <td> {i + 1} </td> <td each="{parent.opts.columns}"> {parent.d[column]} </td> <td><span each="{parent.opts.operates}">{item.parent = parent.item}<a onclick="{parent.parent.event}" id="{operate + parent.i}" class="{icon}" href="javascript: void 0" title="{label}"></a> </span></td> </tr> </table>', function(opts) {var store;

if (opts.data) {
  this.data = opts.data;
}

if (opts.store) {
  store = riot.mountTo(this.store_area, 'store', {
    url: opts.store
  });
  store.fetch().on('done', (function(_this) {
    return function() {
      _this.data = store.result;
      return _this.update();
    };
  })(this)).on('error', (function(_this) {
    return function() {
      return console.log('error');
    };
  })(this));
}

this.event = (function(_this) {
  return function(e) {
    return _this.trigger(e.item.operate, e.target.id.replace(e.item.operate, ''));
  };
})(this);

this.on('unmount', function() {
  return console.log('table unmount...');
});

});
