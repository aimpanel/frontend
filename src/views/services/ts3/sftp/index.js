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
        randomPassword: function () {
            jQuery('#newRandomPasswordContainer').hide();
            this.$http.get(window.baseurl + '/api/v1/services/ts3/' + this.id + '/password/random', function (data, status) {
                jQuery('#newRandomPassword').val(data.new_password);
                jQuery('#newRandomPasswordContainer').show();
            }).error(function (data)
            {
            });
        }
    }
}
