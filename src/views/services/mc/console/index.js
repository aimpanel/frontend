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
//        this.hostId = this.route.params.hostId;
//        this.serverSlug = this.route.params.serverSlug;
//
//        this.$root.checkPerm('HOST_' + this.hostId + '_MC_' + this.serverSlug + '_CONSOLE');

        this.$root.$set('title', 'Konsola')
        jQuery('ul.tabs').tabs();
        jQuery('.button-collapse').sideNav('hide');
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
//        //stop console on close tab
//        var self = this;
//        var myEvent = window.attachEvent || window.addEventListener;
//        var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compatible
//
//        myEvent(chkevent, function (e) { // For >=IE7, Chrome, Firefox
//            (e || window.event).returnValue;
//            self.$http.post('/api/host/' + self.hostId + '/mc/console/stop', {
//                name: self.serverSlug,
//                key: self.consoleKey
//            }, function (data) {
//            });
//            return null;
//        });

        this.runConsole()
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
//        runConsole: function () {
//            var token = '';
//            this.$http.get('/api/users/info', function (data) {
//                if (data.error === false) {
//                    token = data.data.token;
//                }
//            });
//
//            this.$http.post('/api/host/' + this.hostId + '/mc/console', {name: this.serverSlug}, function (data) {
//                if (data.error === false) {
//                    this.consoleKey = data.data.key;
//                    function onchallenge(session, method, extra) {
//                        if (method == "auth") {
//                            return token;
//                        }
//                    }
//
//                    var connection = new autobahn.Connection({
//                        url: "ws://" + location.host + "/ws",
//                        realm: "doris",
//                        authmethods: ["auth"],
//                        onchallenge: onchallenge
//                    });
//
//                    connection.onopen = function (session) {
//                        function onevent(args) {
//                            jQuery("#console").append(args + '<br>');
//                            var objDiv = document.getElementById("console");
//                            objDiv.scrollTop = objDiv.scrollHeight;
//                        }
//
//                        session.subscribe(data.data.key, onevent);
//                    };
//
//                    connection.open();
//                }
//            }).error(function (data) {
//                console.log(data);
//            });
//        },
        sendCommand: function (e) {
            this.$http.post(window.baseurl + "/api/v1/services/mc/" + this.id + "/cmd", {cmd: this.command}, function (data) {
                //Materialize.toast('Zadanie dodano do kolejki', 3500)
                this.command = '';
                this.runConsole();
            });
//            var jsesc = require('jsesc');
//            this.$http.post('/api/host/' + this.hostId + '/mc/server/command', {
//                name: this.serverSlug,
//                command: jsesc(this.command, {
//                    'quotes': 'double'
//                })
//            }, function (data) {
//                if (data.error === true) {
//                    Materialize.toast(data.error_msg, 6000)
//                } else {
//                    //Materialize.toast('Zadanie wykonano pomyślnie', 5000)
//                    this.command = '';
//                }
//            });
        },
        serverStart: function () {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/start", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500)
            });
        },
        serverStop: function () {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/stop", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500)
            });
        },
        serverRestart: function () {
            this.$http.get(window.baseurl + "/api/v1/services/mc/" + this.id + "/restart", function (data) {
                Materialize.toast('Zadanie dodano do kolejki', 3500)
            });

//            this.$http.post('/api/host/' + this.hostId + '/mc/server/restart',
//                    {name: this.serverSlug}, function (data) {
//                if (data.error === true) {
//                    Materialize.toast(data.error_msg, 6000)
//                } else {
//                    Materialize.toast('Zadanie wykonano pomyślnie', 5000)
//                }
//            });
        }
    },
    beforeDestroy: function () {
        clearInterval(window.consoleInterval);
//        this.$http.post('/api/host/' + this.hostId + '/mc/console/stop', {
//            name: this.serverSlug,
//            key: this.consoleKey
//        }, function (data) {
//        });
    }
};