require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
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
        this.runConsole();
        window.consoleInterval = setInterval(this.runConsole, 1500);
    },
    methods: {
        runConsole: function ()
        {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/log", function (data) {
                jQuery("#console").empty();
                data.forEach(function (d) {
                    console.log(d);
                    jQuery("#console").append(d + '<br>');
                });
                var objDiv = document.getElementById("console");
                objDiv.scrollTop = objDiv.scrollHeight;
            });
        },
        sendCommand: function (e) {
            this.$http.post(window.baseurl + "/api/v1/services/mc/" + this.id + "/cmd", {cmd: this.command}, function (data) {
                this.command = '';
                this.runConsole();
            });
        },
        startServer: function () {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/start", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
            });
        },
        stopServer: function () {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/stop", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
            });
        },
        restartServer: function () {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/restart", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500);
            });
        }
    },
    beforeDestroy: function () {
        clearInterval(window.consoleInterval);
    }
};