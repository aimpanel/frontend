require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            service: '',
            hostId: '',
            serverSlug: '',
            consoleKey: ''
        }
    },
    ready: function () {
        this.id = this.route.params.id;
        this.service = this.route.params.service;
        this.$root.$set('title', this.$t("server.console.title") + ' #' + this.id);
        jQuery('ul.tabs').tabs();
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
        this.startIntervalConsole();
    },
    methods: {
        runConsole: function ()
        {
            this.$http.get(window.baseurl + "/api/v1/services/" + this.service + "/" + this.id + "/console", function (data) {
                jQuery("#console").empty();
                data.forEach(function (d) {
                    jQuery("#console").append(d + '<br>');
                });
                var objDiv = document.getElementById("console");
                objDiv.scrollTop = objDiv.scrollHeight;
            });
        },
        sendCommand: function (e) {
            this.$http.post(window.baseurl + "/api/v1/services/" + this.service + "/" + this.id + "/cmd", {cmd: this.command}, function (data) {
                this.command = '';
                this.runLog();
            });
        },
        apiAction: function (action)
        {
            var id = this.id;
            var service = this.service;
            var this2 = this;
            this[id + service + "working"] = true;
            var api = require('../../../../api/services.js');
            api.action(this, id, service, action, function (data, err, thi) {
                thi[id + service + "working"] = false;
                if (!err)
                {
                    Materialize.toast(this2.$t("general.taskAddedToQueue"), 3500);
                } else
                {
                    Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000);
                }

            });
        },
        startIntervalLog: function () {
            this.runLog();
            clearInterval(window.logInterval);
            window.logInterval = setInterval(this.runLog, 1700);
            clearInterval(window.consoleInterval);
        },
        startIntervalConsole: function () {
            this.runConsole();
            clearInterval(window.consoleInterval);
            window.consoleInterval = setInterval(this.runConsole, 4000);
            clearInterval(window.logInterval);
        }
    },
    beforeDestroy: function () {
        clearInterval(window.logInterval);
        clearInterval(window.consoleInterval);
    }
};