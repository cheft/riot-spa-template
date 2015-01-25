(function() {
  var Data;

  Data = (function() {
    function Data(opts) {
      var i, opt, _i, _len;
      if (this.is(opts, 'Array')) {
        this.ids = {};
        for (i = _i = 0, _len = opts.length; _i < _len; i = ++_i) {
          opt = opts[i];
          if (!opt.id) {
            opt.id = i;
          }
          this.ids[opt.id] = i;
        }
        this.data = opts;
      } else {
        this.data = opts || {};
      }
    }

    Data.prototype.is = function(v, type) {
      return toString.apply(v) === ("[object " + type + "]");
    };

    Data.prototype.get = function(key) {
      if (this.is(this.data, 'Array')) {
        return new Data(this.data[this.ids[key]]);
      }
      return this.data[key];
    };

    Data.prototype.set = function(opts) {
      var p;
      if (this.is(this.data, 'Array')) {
        if (opts.id && this.data[this.ids[opts.id]]) {
          this.data[this.ids[opts.id]] = opts;
        } else {
          opts.id || (opts.id = this.data.length);
          this.ids[opts.id] = this.data.length;
          this.data.push(opts);
        }
      } else {
        for (p in opts) {
          this.data[p] = opts[p];
        }
      }
      return this;
    };

    Data.prototype.unset = function(key) {
      var d, i, ids, res, _i, _len, _ref;
      if (this.is(this.data, 'Array')) {
        res = [];
        ids = {};
        _ref = this.data;
        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
          d = _ref[i];
          if (d.id + '' === key + '') {
            continue;
          }
          res.push(d);
          ids[d.id] = i;
        }
        this.data = res;
        this.ids = ids;
      } else {
        delete this.data[key];
      }
      return this;
    };

    Data.prototype.clear = function() {
      this.ids = {};
      if (this.is(this.data('Array'))) {
        this.data = [];
      } else {
        this.data = {};
      }
      return this;
    };

    Data.prototype.fetch = function(opts) {};

    Data.prototype.save = function(opts) {};

    Data.prototype.destroy = function(opts) {};

    Data.prototype.sync = function() {};

    return Data;

  })();

}).call(this);
