riot.tag('blog', '<div id="store_area"></div> <div id="page_area"></div> <div class="row" each="{data}"> <h3>{title}</h3> <p>{content}</p> <div class="pull-right">{time}</div> </div>', function(opts) {var store;

this.data = [];

store = riot.mountTo(this.store_area, 'store', {
  url: 'data/blog.json'
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

});
