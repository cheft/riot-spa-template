riot.tag('test', '<hello></hello><world></world> <h3 onclick="{test1}">{title1}</h3> <h3 onclick="{test2}">{title2}</h3> <h3 onclick="{test3}">{title3}</h3> <input type="text" onkeyup="{fill}">', function(opts) {
        (function() {
          app.mixin(this, require('./test'));

        }).call(this);
    
});
riot.tag('world', '<h1>world</h1>', function(opts) {

});