require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            servers: [],
            serverToDelete: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Lista serwerów TS3');
        jQuery('.tooltipped').tooltip({delay: 50});

        this.getServers();
        window.interval = setInterval(this.getServers, 5000);
    },
    methods: {
        getServers: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/services/ts3', function (data, status) {
                self.$set("servers", data);
            }).error(function (data, status) {
                this.$root.checkSession(data, status);
            });
        },
        addServerModal: function () {
            jQuery('#addServer').openModal();
        },
        addServer: function () {
            this.$http.post(window.baseurl + '/api/v1/services/ts3', {"id": jQuery('#newServerId').val()},
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
        },
        deleteServerModal: function (id) {
            this.serverToDelete = id;
            jQuery('#deleteServer').openModal();
        },
        deleteServer: function () {
            this.$http.delete(window.baseurl + '/api/v1/services/ts3/' + this.serverToDelete,
                    function (data, status) {
                        this.getServers();
                        jQuery('#deleteServer').closeModal();
                        Materialize.toast('Serwer usunięto', 2500);
                    });
        },
        startServer: function (id) {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + id + "/start", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
                this.getServers();
            }).error(function (data)
            {
                Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000);
            });
        },
        stopServer: function (id) {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + id + "/stop", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
                this.getServers();
            });
        },
        restartServer: function (id) {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + id + "/restart", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
                this.getServers();
            }).error(function (data)
            {
                Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000);
            });
        }
    },
    beforeDestroy: function () {
        clearInterval(window.interval);
    }
}
