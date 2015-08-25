module.exports = {
    on: {
        init: function() {
            this.title = this.opts.title || '';
        }
    },
    do: {
        show: function() {
            this.dialog.className = 'c-dialog show';
            document.body.style.overflow = 'hidden';
        },
        close: function() {
            this.dialog.className = 'c-dialog out';
            document.body.style.overflow = 'auto';

        }
    }
};
