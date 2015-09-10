module.exports = {
    template: require('./template.html'),
    replace: true,
    ready: function () {
        this.$root.$set('title', '401');
        jQuery('.button-collapse').sideNav('hide');
    }
}