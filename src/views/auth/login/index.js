module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            checkingAuth: false,
            afterCheckingAuth: false,
            login: '',
            password: ''
        }
    },
    methods: {
        doAuth: function (e) {
            var self = this;
            if (this.login.length > 0 && this.password.length > 0)
            {
                this.checkingAuth = true;
                this.$http.post(window.baseurl + '/api/v1/auth/login', {username: this.login, password: this.password}, function (data) {
                    if (data.error === false) {
                        //Materialize.toast('Zalogowano!', 4000);
                        //window.localStorage.token = data.data.token;
                        window.localStorage.token = data.token;
                        //self.$http.headers.common["Authorization"] = 'Bearer ' + data.data.token;
                        self.$http.headers.common["Authorization"] = data.token;
                        this.$root.$set('logged', true);

                        var jwt = require('jwt-decode');
                        var decoded = jwt(data.token);
                        //window.localStorage.user_id = decoded.user_id;
                        window.localStorage.username = decoded.username;

//                    var permissions = window.permissions;
//                    permissions.length = 0;

//                    self.$http.get('/api/users/info', function (data) {
//                        var perms = data.data.permissions;
//                        perms.forEach(function (item) {
//                            permissions.push(item.perm);
//                        });
//                        //hack for updatemenu working
//                        window.location.reload()
//                    });
                        window.location.reload();
                        this.$root.router.replace('mc');
                    }
                    else {
                        this.checkingAuth = false;
                        this.afterCheckingAuth = true;
                        Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000)
                    }
                }
                );
            } else
            {
                Materialize.toast('<a class="red-text">Wpisz login i hasło</a>', 2000);
            }
        }
    },
    ready: function () {
        this.$root.$set('title', 'Logowanie');
    }
}
