require('./style.css');
//require('morris.js')
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            hostId: '',
            serverSlug: ''
        }
    },
    ready: function () {
        this.hostId = this.route.params.hostId;
        this.serverSlug = this.route.params.serverSlug;

        this.$root.checkPerm('HOST_' + this.hostId + '_MC_' + this.serverSlug + '_STATS');
        this.$root.$set('title', 'Statystyki')
    }
};