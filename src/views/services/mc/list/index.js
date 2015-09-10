require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            servers: []
        }
    },
    ready: function () {
        this.hostId = this.route.params.hostId;
        this.serverSlug = this.route.params.serverSlug;

        //this.$root.checkPerm('HOSTS_MC_LIST');
        //this.$root.checkPerm('');

        this.$root.$set('title', 'Lista serwerów MC');
        jQuery('.button-collapse').sideNav('hide');

        this.getServers()
        window.interval = setInterval(this.getServers, 5000);
    },
    methods: {
        getServers: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/services/mc', function (data, status) {
                self.$set("servers", data);
            });
        },
        addServerModal: function () {
            jQuery('#addServer').openModal();
        },
        addServer: function () {
            this.$http.post(window.baseurl + '/api/v1/services/mc', {"id": jQuery('#newServerId').val()},
            function (data, status) {
                this.getServers();
                jQuery('#addServer').closeModal();
                Materialize.toast('Serwer dodano', 2500);
            }).error(function (data)
            {
                jQuery('#newServerId').removeClass('valid');
                jQuery('#newServerId').addClass('invalid');
                jQuery('#newServerValidator').attr("data-error", data.error_msg);
            });
        }
    },
    beforeDestroy: function () {
        clearInterval(window.interval);
    }
}
