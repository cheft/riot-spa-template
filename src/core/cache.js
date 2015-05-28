(function() {
  var Cache;

  C.Cache = Cache = (function() {
    function Cache(key, session) {
      this.key = key;
      this.session = session;
      this.cache = localStorage;
      if (this.session) {
        this.cache = sessionStorage;
      }
    }

    Cache.prototype.get = function() {
      return JSON.parse(this.cache.getItem(this.key) || '[]');
    };

    Cache.prototype.save = function(data) {
      return this.cache.setItem(this.key, JSON.stringify(data));
    };

    return Cache;

  })();

}).call(this);
