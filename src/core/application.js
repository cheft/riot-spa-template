var application;

C.Application = application = (function() {
  function application() {}

  application.prototype.mount = function(tagName) {
    return this[tagName] = riot.mount(tagName)[0];
  };

  return application;

})();
