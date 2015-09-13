require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            service: 'ts3',
            hostId: '',
            serverSlug: '',
            consoleKey: ''
        }
    },
    ready: function () {
        this.id = this.route.params.id;
        //this.$root.checkPerm('HOST_' + this.hostId + '_MC_' + this.serverSlug + '_CONSOLE');
        this.$root.$set('title', 'Konsola')
        jQuery('ul.tabs').tabs();
        jQuery('.button-collapse').sideNav('hide');
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
        this.startIntervalLog();
    },
    methods: {
        runLog: function ()
        {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + this.id + "/log", function (data) {
                jQuery("#log").empty();
                data.forEach(function (d) {
                    //console.log(d);
                    jQuery("#log").append(d + '<br>');
                });
                var objDiv = document.getElementById("log");
                objDiv.scrollTop = objDiv.scrollHeight;
            });
        },
        runConsole: function ()
        {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + this.id + "/console", function (data) {
                jQuery("#console").empty();
                data.forEach(function (d) {
                    //console.log(d);
                    jQuery("#console").append(d + '<br>');
                });
                var objDiv = document.getElementById("console");
                objDiv.scrollTop = objDiv.scrollHeight;
            });
        },
        sendCommand: function (e) {
            this.$http.post(window.baseurl + "/api/v1/services/ts3/" + this.id + "/cmd", {cmd: this.command}, function (data) {
                this.command = '';
                this.runLog();
            });
        },
        startServer: function () {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + this.id + "/start", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
            });
        },
        stopServer: function () {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + this.id + "/stop", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
            });
        },
        restartServer: function () {
            this.$http.get(window.baseurl + "/api/v1/services/ts3/" + this.id + "/restart", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
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