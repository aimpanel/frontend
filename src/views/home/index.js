module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            welcome: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Aktualności');
        $('.copypaste').click(function () {
            var range, selection;
            if (window.getSelection && document.createRange) {
                selection = window.getSelection();
                range = document.createRange();
                range.selectNodeContents($(this)[0]);
                selection.removeAllRanges();
                selection.addRange(range);
            } else if (document.selection && document.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText($(this)[0]);
                range.select();
            }
        });
    }
};
