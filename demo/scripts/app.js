(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
riot.tag('menu', '', function(opts) {
});
},{}],2:[function(require,module,exports){
(function() {
  module.exports = {
    actions: {
      init: function() {
        return this.list = [
          {
            title: 'test11111'
          }, {
            title: 'test22222'
          }
        ];
      },
      test: function() {
        return console.log('111');
      }
    }
  };

}).call(this);

},{}],3:[function(require,module,exports){
riot.tag('ranking', '<div class="ui-tooltips ui-tooltips-vip"> <div class="ui-tooltips-cnt ui-border-b">好基友推荐排行榜</div> </div> <ul class="ui-grid-trisect grid-header"> <li> 手机号 </li> <li> 推荐人数 </li> <li> 日期 </li> </ul> <ul class="ui-list ui-list-text ui-border-tb"> <li class="ui-border-t"> <div class="ranking-badge ranking-badge ranking1">1</div> <ul class="ui-grid-trisect" style="width: 95%;"> <li> 13316463314 </li> <li style="text-align: center;">&nbsp;64人</li> <li style="text-align: right;">2015/05/26</li> </ul> </li> <li class="ui-border-t"> <div class="ranking-badge ranking-badge ranking2">2</div> <ul class="ui-grid-trisect" style="width: 95%;"> <li> 13316463314 </li> <li style="text-align: center;">&nbsp;64人</li> <li style="text-align: right;">2015/05/26</li> </ul> </li> <li class="ui-border-t"> <div class="ranking-badge ranking-badge ranking3">3</div> <ul class="ui-grid-trisect" style="width: 95%;"> <li> 13316463314 </li> <li style="text-align: center;">&nbsp;64人</li> <li style="text-align: right;">2015/05/26</li> </ul> </li> <li class="ui-border-t"> <div class="ranking-badge ranking-badge"></div> <ul class="ui-grid-trisect" style="width: 95%;"> <li> 13316463314 </li> <li style="text-align: center;">&nbsp;64人</li> <li style="text-align: right;">2015/05/26</li> </ul> </li> </ul>', function(opts) {
          Cheft.mixin(this, require('./'));
    
});

},{"./":2}],4:[function(require,module,exports){
riot.tag('viewport', '<div name="container"></div>', function(opts) {
        (function() {
          Cheft.mixin(this, require('./viewport'));

        }).call(this);
    
});
},{"./viewport":5}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
(function() {
  var app, router;

  require('./app/viewport/tag');

  require('./app/menu/tag');

  require('./app/ranking/tag');

  app = window.app = new Cheft.Application();

  app.mount('viewport');

  router = new Cheft.Router(require('./router'));

  router.start();

}).call(this);

},{"./app/menu/tag":1,"./app/ranking/tag":3,"./app/viewport/tag":4,"./router":7}],7:[function(require,module,exports){
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
      return app.tags.viewport.show(id);
    },
    home: function() {
      return app.tags.viewport.show('ranking');
    },
    filterTodo: function(status) {
      if (!app.tags.todo) {
        app.tags.viewport.show('todo');
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

},{}]},{},[6])