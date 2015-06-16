module.exports = {
    routes: {
        '': 'home',
        ':id': 'start',
        'todomvc/:status': 'todomvc'
    },

    home: function() {
        app.container.trigger('show', 'todo');
    }, 
    start: function(id) {
        app.container.trigger('show', id);
    },
    todomvc: function(status) {
        app.container.trigger('show', 'todomvc');
        app.tags.todomvc.trigger('filtering', status);
    }
};
