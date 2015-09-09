module.exports = {
    on: {
        init: function() {
            this.title = 'I want to behave!';
            this.items = [
                { title: 'Avoid excessive coffeine', done: true },
                { title: 'Be less provocative' },
                { title: 'Be nice to people' }
            ];
            this.disabled = true;
        }
    },
    do: {
        add: function() {
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
            console.log(this);
            var item = e.item;
            item.done = !item.done;
        }
    }
};
