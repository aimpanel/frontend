module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            id: false,
            serverProperties: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Informacje o serwerze');
        this.service = this.route.params.service;
        this.id = this.route.params.id;
        jQuery('.tooltipped').tooltip({delay: 50});
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
        this.getServerProperties();
    },
    methods: {
        getServerProperties: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/services/mc/' + this.id + '/server.properties', function (data, status) {
                self.$set("serverProperties", data);
            }).error(function (data, status) {
                this.$root.checkSession(data, status);
            });
        }
    }
}
