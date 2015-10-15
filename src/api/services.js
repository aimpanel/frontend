module.exports = {
    action: function (thi, id, service, action, callback) {
        thi.$http.get(window.baseurl + "/api/v1/services/" + service + "/" + id + "/" + action, function (data) {
            callback(data, false, thi);
        }).error(function (data, err)
        {
            callback(data, err);
        });
    },
    addServer: function () {
        this.serverInstalling = true;
        this.$http.post(window.baseurl + '/api/v1/services/mc', {"id": jQuery('#newServerId').val()},
        function (data, status) {
            this.serverInstalling = false;
            this.getServers();
            jQuery('#addServer').closeModal();
            Materialize.toast('Serwer dodano', 2500);
        }).error(function (data)
        {
            this.serverInstalling = false;
            jQuery('#newServerId').removeClass('valid');
            jQuery('#newServerId').addClass('invalid');
            jQuery('#newServerValidator').attr("data-error", data.error_msg);
        });
    },
    deleteServerModal: function (id) {
        this.serverToDelete = id;
        jQuery('#deleteServer').openModal();
    },
    deleteServer: function () {
        this.$http.delete(window.baseurl + '/api/v1/services/mc/' + this.serverToDelete,
                function (data, status) {
                    this.getServers();
                    jQuery('#deleteServer').closeModal();
                    Materialize.toast('Serwer usunięto', 2500);
                });
    }
}
