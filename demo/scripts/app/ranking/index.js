(function() {
  module.exports = {
    stores: {
      ranking: {}
    },
    actions: {
      remove: function(e) {
        this.ranking.del({
          id: e.item.id
        }).done((function(_this) {
          return function() {
            return _this.trigger('refresh');
          };
        })(this));
        e.preventUpdate = true;
        return e.stopPropagation();
      },
      add: function(e) {
        var obj;
        obj = {
          phone: '13316463321',
          number: 1,
          date: '2016-02-02'
        };
        this.ranking.save(obj).done((function(_this) {
          return function() {
            return _this.trigger('refresh');
          };
        })(this));
        return e.preventUpdate = true;
      },
      edit: function(e) {
        var obj;
        obj = {
          id: e.item.id,
          phone: '133xxxx0000',
          number: 50,
          date: '2016-xx-xx'
        };
        this.ranking.save(obj).done((function(_this) {
          return function() {
            return _this.trigger('refresh');
          };
        })(this));
        return e.preventUpdate = true;
      }
    },
    events: {
      mount: function() {
        return this.trigger('refresh');
      },
      update: function() {
        return console.log('update');
      },
      refresh: function() {
        return this.ranking.get().done((function(_this) {
          return function() {
            return _this.update();
          };
        })(this));
      }
    }
  };

}).call(this);
