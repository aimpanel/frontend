require('./style.css');
var _ = require('underscore');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            id: false,
            isLoading: true,
            args: []
        }
    },
    ready: function () {
//        for (var i = 0, len = localStorage.length; i < len; ++i) {
//            console.log(localStorage.key(i));
//            console.log(localStorage.getItem(localStorage.key(i)));
//        }
        this.$root.$set('title', this.$t("server.params.generic.params"));
        this.service = this.route.params.service;
        this.id = this.route.params.id;
        jQuery('.tooltipped').tooltip({delay: 50});
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
        this.listArgs();
        $('.copypasta').click(function () {
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
        listArgs: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/services/' + this.service + '/' + this.id + '/parameters', function (data, status) {
                this.isLoading = false;
                self.$set("args", data);
            }).error(function (data, status) {
                this.$root.checkSession(data, status);
            });
        },
        saveArgs: function ()
        {
            this.$http.post(window.baseurl + '/api/v1/services/' + this.service + '/' + this.id + '/parameters',
                    {"params": this.args},
            function (data, status) {
                this.listArgs();
                Materialize.toast(this.$t("server.mc.java.paramsSaved"), 2500);
            }).error(function (data, status) {
                this.$root.checkSession(data, status);
            });
        },
        newArg: function () {
            this.args.push("");
        },
        delArg: function (val) {
            this.args = _.without(this.args, val);
        }
    }
}
