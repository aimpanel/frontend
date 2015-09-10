require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            servers: []
        }
    },
    ready: function () {
        this.hostId = this.route.params.hostId;
        this.serverSlug = this.route.params.serverSlug;

        //this.$root.checkPerm('HOSTS_MC_LIST');
	//this.$root.checkPerm('');

        this.$root.$set('title', 'Lista serwerów MC');
        jQuery('.button-collapse').sideNav('hide');

        this.getServers()
        window.interval = setInterval(this.getServers, 5000);
    },
    methods: {
        getServers: function () {
            var self = this;
            //get all hosts
            this.$http.get(window.baseurl+'/api/v1/services/mc', function (data,status) {
              console.log(status);
                if (status === 200) {
                   self.$set("servers", data);
                }
            });
        },
        addServerModal:function(){
            jQuery('#addServer').openModal();
        }
    },
    beforeDestroy: function() {
        clearInterval(window.interval)
    }
}
