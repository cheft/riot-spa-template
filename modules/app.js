riot.tag('app', '<div class="navbar navbar-default" id="top"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="/" class="navbar-brand">Riot Demos</a> </div> <div class="collapse navbar-collapse navbar-responsive-collapse" id="menu"> <ul class="nav navbar-nav"> <li> <a href="javascript: void 0" onclick="{start}" id="user-add">Form</a> </li> <li> <a href="javascript: void 0" onclick="{start}" id="list-view">List</a> </li> <li> <a href="javascript: void 0" onclick="{start}" id="user-list">Table</a> </li> <li> <a href="javascript: void 0" onclick="{start}" id="todo">Custom</a> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="http://github.com/cheft" target="_blank">Author: Cheft</a></li> </ul> </div> </div> </div> <div id="container" class="container"></div>', function(opts) {var route;

route = (function(_this) {
  return function(op) {
    _this.container.innerHTML = '';
    return riot.mountTo(_this.container, op);
  };
})(this);

riot.route(function(op) {
  return route(op);
});

riot.route.exec(function(op) {
  return route(op);
});

this.start = function(e) {
  return riot.route(e.target.id);
};

if (!location.hash) {
  riot.route('user-add');
}

});
