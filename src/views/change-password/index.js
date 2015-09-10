module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            oldpassword: '',
            password: ''
        }
    },
    methods: {
        changePassword: function (e) {
            var self = this;
            //auth
            this.$http.post('/api/v1/auth/test', {
                    old_password: this.oldpassword,
                    new_password: this.password
                }, function (data) {
                    if (data.error === false) {
                        Materialize.toast('Zmieniono hasło pomyślnie!', 4000);
                        this.$root.router.replace('/')
                    }
                    else {
                        Materialize.toast('<a class="red-text">' + data.error_msg + '</a>', 6000)
                    }
                }
            );
        }
    },
    ready: function () {
        this.$root.$set('title', 'Zmiana hasła');
        jQuery('.button-collapse').sideNav('hide');
    }
}
