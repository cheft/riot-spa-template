var c, cheft, idCounter, item, toString, types, _fn, _i, _len,
  __slice = [].slice;

c = cheft = {
  version: '1.0.0'
};

idCounter = 0;

toString = Object.prototype.toString;

types = ['Function', 'Object', 'String', 'Array', 'Number', 'Boolean', 'Date', 'RegExp', 'Undefined', 'Null'];

_fn = function(item) {
  return c["is" + item] = function(obj) {
    return toString.call(obj) === ("[object " + item + "]");
  };
};
for (_i = 0, _len = types.length; _i < _len; _i++) {
  item = types[_i];
  _fn(item);
}

c.extend = function() {
  var key, mixin, mixins, target, value, _j, _len1;
  target = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  if (!target) {
    return target;
  }
  for (_j = 0, _len1 = mixins.length; _j < _len1; _j++) {
    mixin = mixins[_j];
    for (key in mixin) {
      value = mixin[key];
      target[key] = value;
    }
  }
  return target;
};

c.uniqueId = function(prefix) {
  return (prefix ? prefix : '') + ++idCounter;
};

c.Router = Router;

c.Storage = Storage;

window.c = c;
