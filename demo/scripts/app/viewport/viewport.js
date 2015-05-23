(function() {
  module.exports = {
    init: function() {
      return app.viewport = this;
    },
    show: function(tag) {
      this.container.setAttribute('riot-tag', tag);
      return riot.mount(tag);
    }
  };

}).call(this);
