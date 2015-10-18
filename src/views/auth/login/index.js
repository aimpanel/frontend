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
                        window.localStorage.token = data.token;
                        self.$http.headers.common["Authorization"] = data.token;
                        this.$root.$set('logged', true);

                        var jwt = require('jwt-decode');
                        var decoded = jwt(data.token);
                        window.localStorage.username = decoded.username;
                        window.location.reload();
                        this.$root.router.replace('servers');
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
                Materialize.toast('<a class="red-text">' + this.$t('auth.enterLoginAndPassword') + '</a>', 2000);
            }
        }
    },
    ready: function () {
        this.$root.$set('title', this.$t('auth.signIn'));
    }
}
