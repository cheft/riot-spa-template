riot.tag('store', '', function(opts) {this.fetch = function() {
  ajax({
    url: this.opts.url,
    success: (function(_this) {
      return function(data) {
        _this.result = JSON.parse(data);
        return _this.trigger('done');
      };
    })(this),
    error: (function(_this) {
      return function(error) {
        return _this.trigger('error');
      };
    })(this)
  });
  return this;
};

this.save = function() {
  return this;
};

});
