module.exports = {
    on: {
        show: function(tag) {
            this.container.setAttribute('riot-tag', tag);
            app.mount(tag);
            this.tags.navigator.trigger('changed',
                document.querySelectorAll('a[href="#' + tag + '"]')[0].parentNode);
        }
    }
};
