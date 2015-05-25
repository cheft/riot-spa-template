(function() {
  module.exports = {
    actions: {
      show: function(tag) {
        this.container.setAttribute('riot-tag', tag);
        return app.mount(tag);
      }
    }
  };

}).call(this);
