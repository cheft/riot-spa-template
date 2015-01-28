riot.tag('data', '<div></div>', function(opts) {if (this.opts.url) {
  ajax({
    url: this.opts.url,
    success: (function(_this) {
      return function(data) {
        _this.value = JSON.parse(data);
        return _this.trigger('ajax');
      };
    })(this)
  });
}

});
