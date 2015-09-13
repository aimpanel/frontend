module.exports = {
    template: require('./template.html'),
    replace: true,
    methods: {
        routeContains: function (name) {
            var path = this.route.path;
            if (path.indexOf(name) != -1) {
                return true;
            }
            return false;
        }
    }
};