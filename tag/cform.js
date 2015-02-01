riot.tag('cform', '<form id="form"> <div class="row"> <div class="col-sm-{12 / (parent.opts.col / span) || 12 / parent.opts.col} form-group" each="{opts.fields}"> <label for="{name}" class="control-label">{parent.opts.hiddenLabel ? \'\' : label}</label> <input if="{type !== \'textarea\'}" type="{type || \'text\'}" class="form-control" id="{name}" name="{name}" placeholder="{parent.opts.hiddenPh ? \'\' : (placeholder || label)}"> <textarea if="{type === \'textarea\'}" type="{type || \'text\'}" class="form-control" id="{name}" name="{name}" placeholder="{parent.opts.hiddenPh ? \'\' : (placeholder || label)}" rows="{rows || 3}"></textarea> </div> </div> </form>', function(opts) {this.reset = function() {
  return this.form.reset();
};

this.getData = (function(_this) {
  return function() {
    var data, i, t, _i, _j, _len, _len1, _ref, _ref1;
    data = {};
    _ref = _this.form.querySelectorAll('input');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      data[i.name] = i.value;
    }
    _ref1 = _this.form.querySelectorAll('textarea');
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      t = _ref1[_j];
      data[t.name] = t.value;
    }
    return data;
  };
})(this);

this.setData = (function(_this) {
  return function(data) {
    var input, name, textarea, value, _results;
    _results = [];
    for (name in data) {
      value = data[name];
      input = _this.form.querySelector("input[name=" + name + "]");
      if (input) {
        input.value = value;
      }
      textarea = _this.form.querySelector("textarea[name=" + name + "]");
      if (textarea) {
        _results.push(textarea.innerHTML = value);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };
})(this);

});
