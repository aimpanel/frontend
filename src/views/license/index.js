module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            license: false,
            license_valid: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Informacje o licencji');
        jQuery('.button-collapse').sideNav('hide');
        this.getLicense();
    },
    methods: {
        getLicense: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/license', function (data, status) {
                self.$set("license", data);
                var moment = require("moment");
                this.license_valid = moment(this.license.valid_to, moment.ISO_8601).format("DD/MM/YYYY");
            });
        }
    }
}
