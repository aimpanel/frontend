require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            id: false,
            servers: [],
        }
    },
    ready: function () {
        this.$root.$set('title', 'SFTP');
        this.id = this.route.params.id;
        jQuery('.tooltipped').tooltip({delay: 50});
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
    },
    methods: {
        getSftpHost: function () {
            var url = this.$root.url;
            var res = this.$root.url.split("://")[1];
            if (url.indexOf(":") != -1) {
                res = res.split(":")[0];
            }
            return res;
        },
        getServers: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/services/mc', function (data, status) {
                self.$set("servers", data);
            }).error(function (data, status) {
                this.$root.checkSession(data, status);
            });
        },
        addServer: function () {
            this.$http.post(window.baseurl + '/api/v1/services/mc', {"id": jQuery('#newServerId').val()},
            function (data, status) {
                this.getServers();
                jQuery('#addServer').closeModal();
                Materialize.toast('Serwer dodano', 2500);
            }).error(function (data)
            {
            });
        },
        restartServer: function (id) {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + id + "/restart", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
                this.getServers();
            });
        }
    }
}
