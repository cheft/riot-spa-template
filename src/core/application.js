(function() {
  var application;

  C.Application = application = (function() {
    function application() {}

    application.prototype.mount = function(tagName) {
      var tag;
      this.tags = this.tags || {};
      tag = riot.mount(tagName)[0];
      this.tags[tagName] = tag;
      return this.currentTag = tag;
    };

    return application;

  })();

}).call(this);
