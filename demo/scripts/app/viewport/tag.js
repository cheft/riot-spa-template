riot.tag('viewport', '<div>{posts.data[0].title}</div> <div name="container"></div>', function(opts) {
        (function() {
          app.mixin(this, require('./viewport'));

        }).call(this);
    
});