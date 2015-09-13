module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            welcome: "..."
        }
    },
    ready: function () {
        this.$root.$set('title', 'Strona główna');
    }
};
