require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    ready: function () {
        this.$root.$set('title', 'O panelu');
        jQuery('.button-collapse').sideNav('hide');
    },
    methods: {
        show: function (lic) {
            jQuery('#' + lic).openModal();
        }
    }
}
