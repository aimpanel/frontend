require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            isLoading: true,
            servers: false,
            services: [],
            serverToDelete: false,
            serviceToDelete: false,
            serverInstalling: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Lista serwerów');
        jQuery('.tooltipped').tooltip({delay: 50});
        this.getServers();
        window.interval = setInterval(this.getServers, 5000);
    },
    methods: {
        ifWorking: function (id, service)
        {
            //console.log("ifWorking " + id + " " + service + ": " + this[id + service + "working"]);
            // if (this.$get(id + service + "working"))
            return this[id + service + "working"];
        },
        resetInterval: function ()
        {
            clearInterval(window.interval);
            window.interval = setInterval(this.getServers, 5000);
        },
        getServers: function () {
            var async = require("async");
            var self = this;
            var servicez = [];
            var serviceList = ["mc", "ts3", "ts3mb"];
            var configs = {};

            async.forEachOf(serviceList, function (service, key, callback) {
                self.$http.get(window.baseurl + '/api/v1/services/' + service, function (data, status) {
                    data.serv = service;
                    data.forEach(function (dataz) {
                        dataz.serv = service;
                        servicez.push(dataz);
                    });
                    callback();
                }).error(function (data, status) {
                    self.$root.checkSession(data, status);
                    return callback(status);
                });
            }, function (err) {
                if (err)
                {
                    console.error(err.message);
                }
                self.$set('services', servicez.sort(function (a, b) {
                    var dateA = new Date(Date.parse(a.created_at));
                    var dateB = new Date(Date.parse(b.created_at));
                    return dateA - dateB;
                }));
                self.isLoading = false;
            })
        },
        addServer: function () {
            this.serverInstalling = true;
            this.$http.post(window.baseurl + '/api/v1/services/mc', {"id": jQuery('#newServerId').val()},
            function (data, status) {
                this.serverInstalling = false;
                this.getServers();
                jQuery('#addServer').closeModal();
                Materialize.toast('Serwer dodano', 2500);
            }).error(function (data)
            {
                this.serverInstalling = false;
                jQuery('#newServerId').removeClass('valid');
                jQuery('#newServerId').addClass('invalid');
                jQuery('#newServerValidator').attr("data-error", data.error_msg);
            });
        },
        deleteServerModal: function (id, service) {
            this.serverToDelete = id;
            this.serviceToDelete = service;
            jQuery('#deleteServer').openModal();
        },
        deleteServer: function () {
            this.$http.delete(window.baseurl + '/api/v1/services/' + this.serviceToDelete + '/' + this.serverToDelete,
                    function (data, status) {
                        this.getServers();
                        jQuery('#deleteServer').closeModal();
                        Materialize.toast('Serwer usunięto', 2500);
                    });
        },
        startServer: function (id, service) {
            this[id + service + "working"] = true;
            this.getServers();
            this.resetInterval();
            var api = require('../../../../api/services.js');
            api.action(this, id, service, "start", function (data, err, thi) {
                thi[id + service + "working"] = false;
                if (!err)
                {
                    Materialize.toast('Zadanie dodano do kolejki', 3500);
                } else
                {
                    Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000);
                }
            });
        },
        stopServer: function (id, service) {
            this[id + service + "working"] = true;
            this.getServers();
            this.resetInterval();
            var api = require('../../../../api/services.js');
            api.action(this, id, service, "stop", function (data, err, thi) {
                thi[id + service + "working"] = false;
                if (!err)
                {
                    Materialize.toast('Zadanie dodano do kolejki', 3500);
                } else
                {
                    Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000);
                }

            });
        },
        restartServer: function (id, service) {
            this[id + service + "working"] = true;
            this.getServers();
            this.resetInterval();
            var api = require('../../../../api/services.js');
            api.action(this, id, service, "restart", function (data, err, thi) {
                thi[id + service + "working"] = false;
                if (!err)
                {
                    Materialize.toast('Zadanie dodano do kolejki', 3500);
                } else
                {
                    Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000);
                }

            });
        }
    },
    beforeDestroy: function () {
        clearInterval(window.interval);
    }
}
