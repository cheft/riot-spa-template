var Storage;

Storage = (function() {
  function Storage(key) {
    this.key = key;
  }

  Storage.prototype.fetch = function() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  };

  Storage.prototype.save = function(data) {
    return localStorage.setItem(this.key, JSON.stringify(data));
  };

  return Storage;

})();
