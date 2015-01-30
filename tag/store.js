riot.tag('store', '<span></span>', function(opts) {if (this.opts.url) {
  ajax({
    url: this.opts.url,
    success: (function(_this) {
      return function(data) {
        _this.result = JSON.parse(data);
        return _this.trigger('list');
      };
    })(this)
  });
}

});
