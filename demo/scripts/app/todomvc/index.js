module.exports = {
    store: 'todos',
    on: {
        init: function() {
            this.status = 'all';
            this.links = ['All', 'Active', 'Completed'];
        },
        mount: function() {
            this.trigger('getting');
        },
        update: function() {
            if(this.store.data.length > 0) {
                this.remaining = (this.store.data.filter(function(t) {return !t.completed; })).length;
                this.allDone = (this.remaining === 0 ? true : false);
            }
        },
        updated: function() {
            if(this.editing) {
                this.editor.focus();
            }
        },
        geted: function() {
            var self = this;
            if(this.status === 'all') {
                this.todos = this.store.data;
            }else {
                this.todos = this.store.data.filter(function(t) {
                    return t.completed === (self.status === 'active' ? false : true);
                });
            }
            this.update();
        },
        posted: function() {
            this.trigger('getting');
        },
        deleted: function() {
            this.trigger('getting');
        },

        // custom event
        getting: function() {
            this.store.get();
        },
        filtering: function(status) {
            this.status = status;
        }
    },
    do: {
        add: function(e) {
            var value = e.target.value;
            if(e.which === 13 && value) {
                this.store.save({title: value.trim(), completed: false});
                e.target.value = '';
            }
        },
        remove: function(e) {
            this.store.del({id: e.item.id});
        },
        clear: function() {
            var self = this;
            this.store.data.filter(function(t) {return t.completed; }).forEach(function(t) {
                self.store.del({id: t.id});
            });
        },
        toEdit: function(e) {
            this.editing = e.item.editing = true;
            this.editor = e.target.parentNode.parentNode.getElementsByClassName('edit')[0];
        },
        edit: function(e) {
            if(e.which === 13 || e.which === 0) {
                this.editing = e.item.editing = false;
                e.item.title = e.target.value.trim();
                this.store.save({id: e.item.id, title: e.item.title});
            }
        },
        toggle: function(e) {
            e.item.completed = !e.item.completed;
            var self = this;
            this.store.save({id: e.item.id, completed: e.item.completed})
                .done(function() {
                    self.trigger('getting');
                });
        },
        toggleAll: function(e) {
            var self = this, defs = [];
            this.store.data.forEach(function(t) {
                t.completed = e.target.checked;
                defs.push(self.store.save({id: t.id, completed: t.completed}));
            });
            $.when.apply(this, defs).done(function() {
                self.trigger('getting');
            });
        },
        sort: function(e) {
            this.todos = this.todos.reverse();
            this.arrow = e.target.innerHTML === '↓' ? '↑' : '↓';
        }
    }
};
