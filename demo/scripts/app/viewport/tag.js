riot.tag('viewport', '<menu> <hr><p>这是个很神奇的框架</p> <hr> </menu> <div name="container"></div>', function(opts) {
        (function() {
          Cheft.mixin(this, require('./viewport'));

        }).call(this);
    
});