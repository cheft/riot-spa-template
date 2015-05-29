var application;

C.Application = application = (function() {
  function application(options) {
    this.options = options != null ? options : {};
    this.urlRoot = this.options.urlRoot || '';
  }

  application.prototype.mount = function(tagName) {
    var tag;
    this.tags = this.tags || {};
    tag = riot.mount(tagName)[0];
    this.tags[tagName] = tag;
    return this.currentTag = tag;
  };

  application.prototype.mixin = function(tag, obj) {
    var item, store, swap, _fn;
    if (obj.actions) {
      tag.mixin(obj.actions);
    }
    if (obj.events) {
      _fn = function(item) {
        return tag.on(item, obj.events[item]);
      };
      for (item in obj.events) {
        _fn(item);
      }
    }
    if (obj.stores) {
      swap = {};
      for (item in obj.stores) {
        obj.stores[item].url = this.urlRoot + (obj.stores[item].url || item);
        store = new Store(tag, obj.stores[item]);
        swap[item] = store;
      }
      return C.extend(tag, swap);
    }
  };

  return application;

})();
