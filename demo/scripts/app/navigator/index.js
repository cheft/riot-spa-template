module.exports = {
    on: {
        changed: function(li) {
            document.querySelector('.tab-current').className = '';
            li.className = 'tab-current';
        }
    },
    do: {
        change: function(e) {
            var a = e.target;
            var li = e.target.parentNode;
            if(a.tagName !== 'A') {
                li = li.parentNode;
                a = a.parentNode;
            }
            app.router.go(a.href.split('#')[1]);
        }
    }
};
