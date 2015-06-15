module.exports = {
    actions: {
        change: function(e) {
            var li = $(e.target).parent();
            console.log(li);
            if(e.target.tagName != 'A') {
                li = $(e.target).parent().parent();
            }
            $('li.tab-current').removeClass('tab-current');
            li.addClass('tab-current');
        }
    } 
}