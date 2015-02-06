riot.tag('app', '<div class="navbar navbar-default"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="/" class="navbar-brand">Riot Demos</a> </div> <div class="collapse navbar-collapse navbar-responsive-collapse" id="menu"> <ul class="nav navbar-nav"> <li each="{opts.data}"> <a href="#{href}">{title}</a> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="http://github.com/cheft" target="_blank">Author: Cheft</a></li> </ul> </div> </div> </div> <div id="container" class="container"></div>', function(opts) {var start;

start = (function(_this) {
  return function(op) {
    _this.container.innerHTML = '';
    return riot.mountTo(_this.container, op);
  };
})(this);

riot.route.exec((function(_this) {
  return function(op) {
    return start(op);
  };
})(this));

riot.route((function(_this) {
  return function(op) {
    return start(op);
  };
})(this));

if (!location.hash) {
  riot.route('user-add');
}

});
