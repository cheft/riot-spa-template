module.exports = {
    actions: {
        add: function(e) {
            if (this.text) {
                this.items.push({
                    title: this.text
                });
                this.text = this.input.value = '';
            }
        },
        edit: function(e) {
            this.text = e.target.value;
        },
        toggle: function(e) {
            var item = e.item;
            item.done = !item.done;
        }
    },
    events: {
        init: function() {
            this.title = 'I want to behave!';
            this.items = [
                { title: 'Avoid excessive coffeine', done: true },
                { title: 'Be less provocative' },
                { title: 'Be nice to people' }
            ];
            this.disabled = true;
        }
    }
}