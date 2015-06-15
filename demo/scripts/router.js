module.exports = {
    routes: {
        '': 'home',
        ':id': 'start'
    },

    home: function() {
        app.container.trigger('show', 'todo');
    }, 
    start: function(id) {
        app.container.trigger('show', id);
    }
};
