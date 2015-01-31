riot.tag('buttons', '<div class="{opts.position == \'center\' ? \'text-center\' : \'pull-\' + opts.position}"> <button onclick="{parent.test}" each="{opts.buttons}" id="{operate}" class="btn btn-{style}" ><i class="{icon}"></i>{label}</button> </div>', function(opts) {this.test = (function(_this) {
  return function(e) {
    return _this.trigger(e.target.id);
  };
})(this);

});
