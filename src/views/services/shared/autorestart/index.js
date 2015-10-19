require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            id: false,
            service: false,
            servers: []
        }
    },
    ready: function () {
        this.$root.$set('title', this.$t('server.autorestart.title'));
        this.service = this.route.params.service;
        this.id = this.route.params.id;
        jQuery('.tooltipped').tooltip({delay: 50});
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
    }
}
