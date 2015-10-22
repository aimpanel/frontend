require('./style.css');
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            isLoading: true,
            licenses: false
        }
    },
    replace: true,
    ready: function () {
        this.$root.$set('title', this.$t("about.panel"));
        this.getLicenses();
    },
    methods: {
        getLicenses: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/licenses', function (data, status) {
                self.isLoading = false;
                self.$set("licenses", data);
            });
        },
        show: function (lic) {
            jQuery('#' + lic).openModal();
        }
    }
}
