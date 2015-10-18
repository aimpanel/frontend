module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            isLoading: true,
            license: false,
            license_valid: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Informacje o licencji');
        this.getLicense();
        $('.copypaste').click(function () {
            var range, selection;
            if (window.getSelection && document.createRange) {
                selection = window.getSelection();
                range = document.createRange();
                range.selectNodeContents($(this)[0]);
                selection.removeAllRanges();
                selection.addRange(range);
            } else if (document.selection && document.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText($(this)[0]);
                range.select();
            }
        });
    },
    methods: {
        getLicense: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/license', function (data, status) {
                self.isLoading = false;
                self.$set("license", data);
                var moment = require("moment");
                this.license_valid = moment(this.license.valid_to, moment.ISO_8601).format("DD/MM/YYYY");
            });
        }
    }
}
