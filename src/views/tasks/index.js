require('./style.css');
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            isLoading: true,
            tasks: false,
            taskLog: false
        }
    },
    replace: true,
    ready: function () {
        this.$root.$set('title', this.$t("tasks.title"));
        this.getTasks();
        window.interval = setInterval(this.getTasks, 2000);
        //this.getLog("5647eb64c9eb7");
    },
    methods: {
        getTasks: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/task/list/latest', function (data, status) {
                self.isLoading = false;
                self.$set("tasks", data);
            });
        },
        getLog: function (id) {
            this.taskLog = "Loading...";
            this.$http.get(window.baseurl + '/api/v1/task/' + id + '/log', function (data, status) {
                this.taskLog = data;
                jQuery('#taskLog').openModal();
            });
        }
    },
    filters: {
        formatDate: function (value) {
            var moment = require("moment");
            return moment(value, moment.ISO_8601).format("HH:MM:ss DD/MM/YYYY");
        }
    },
    beforeDestroy: function () {
        clearInterval(window.interval);
    }
}
