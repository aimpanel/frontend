require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    ready: function () {
        this.$root.$set('title', this.$t("about.panel"));
    },
    methods: {
        show: function (lic) {
            jQuery('#' + lic).openModal();
        }
    }
}
