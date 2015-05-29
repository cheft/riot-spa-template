(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
riot.tag('menu', '', function(opts) {
});
},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
riot.tag('ranking', '<div class="ui-tooltips ui-tooltips-vip"> <div class="ui-tooltips-cnt ui-border-b">好基友推荐排行榜</div> </div> <button class="ui-btn-lg" ontouchstart="{add}">增加一行</button> <ul class="ui-grid-trisect grid-header"> <li> 手机号 </li> <li> 推荐人数 </li> <li> 日期 </li> </ul> <ul class="ui-list ui-list-text ui-border-tb"> <li class="ui-border-t" each="{ranking.data}" ontouchstart="{parent.edit}"> <div class="ranking-badge ranking-badge ranking1" ontouchstart="{parent.remove}">{id}</div> <ul class="ui-grid-trisect" style="width: 95%;"> <li> {phone} </li> <li style="text-align: center;">&nbsp;{number}人</li> <li style="text-align: right;">{date}</li> </ul> </li> </ul>', function(opts) {
          app.mixin(this, require('./'));
    
});

},{"./":2}],4:[function(require,module,exports){
riot.tag('test', '<hello></hello><world></world> <h3 onclick="{test1}">{title1}</h3> <h3 onclick="{test2}">{title2}</h3> <h3 onclick="{test3}">{title3}</h3> <input type="text" onkeyup="{fill}">', function(opts) {
        (function() {
          app.mixin(this, require('./test'));

        }).call(this);
    
});
riot.tag('world', '<h1>world</h1>', function(opts) {

});
},{"./test":5}],5:[function(require,module,exports){
(function() {
  module.exports = {
    stores: {
      todos: {}
    },
    actions: {
      init: function() {
        this.title1 = '1111111';
        this.title2 = '2222222';
        this.title3 = '3333333';
        return this.trigger('remove');
      },
      test1: function(e) {
        return console.log('test1');
      },
      test2: function() {
        return console.log('test2');
      },
      fill: function(e) {
        return this.title1 = e.target.value;
      }
    },
    events: {
      mount: function() {
        return console.log('mount');
      },
      update: function() {
        return console.log('update');
      },
      updated: function() {
        return console.log('updated');
      },
      unmount: function() {
        return console.log('unmount');
      },
      remove: function() {
        return console.log('remove');
      }
    }
  };

}).call(this);

},{}],6:[function(require,module,exports){
riot.tag('viewport', '<div>{posts.data[0].title}</div> <div name="container"></div>', function(opts) {
        (function() {
          app.mixin(this, require('./viewport'));

        }).call(this);
    
});
},{"./viewport":7}],7:[function(require,module,exports){
(function() {
  module.exports = {
    events: {
      show: function(tag) {
        this.container.setAttribute('riot-tag', tag);
        return app.mount(tag);
      }
    }
  };

}).call(this);

},{}],8:[function(require,module,exports){
(function() {
  var app;

  require('./app/viewport/tag');

  require('./app/menu/tag');

  require('./app/test/tag');

  require('./app/ranking/tag');

  app = window.app = new Cheft.Application({
    urlRoot: 'http://10.10.51.118:3000/'
  });

  app.mount('viewport');

  app.router = new Cheft.Router(require('./router'));

  app.router.start();

}).call(this);

},{"./app/menu/tag":1,"./app/ranking/tag":3,"./app/test/tag":4,"./app/viewport/tag":6,"./router":9}],9:[function(require,module,exports){
(function() {
  module.exports = {
    routes: {
      '': 'home',
      'start/:id': 'start',
      'start/todos/:status': 'filterTodo',
      'hello/:id/:name': 'hello',
      'test/p:id': 'test',
      'path/*path': 'path',
      'aa': function() {
        return console.log('aaaaaaa');
      }
    },
    start: function(id) {
      return app.tags.viewport.trigger('show', 'id');
    },
    home: function() {
      return app.tags.viewport.trigger('show', 'ranking');
    },
    filterTodo: function(status) {
      if (!app.tags.todo) {
        app.tags.viewport.trigger('show', 'todo');
      }
      return app.tags.todo.filter(status);
    },
    hello: function(id, name) {
      return console.log('hello' + id + 'name=' + name);
    },
    test: function(id) {
      return console.log("test" + id);
    },
    path: function(path) {
      return console.log(path);
    }
  };

}).call(this);

},{}]},{},[8])