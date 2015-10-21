module.exports = {
    /* Home */
    'home': function (resolve) {
        require(['./views/home'], resolve)
    },
    'license': function (resolve) {
        require(['./views/license'], resolve)
    },
    'about': function (resolve) {
        require(['./views/about'], resolve)
    },
    /* Auth */
    'login': function (resolve) {
        require(['./views/auth/login'], resolve)
    },
    /* OS*/
    'os_stats': function (resolve) {
        require(['./views/os/stats'], resolve)
    },
    /* Shared */
    'server_list': function (resolve) {
        require(['./views/services/shared/list'], resolve)
    },
    'shared_sftp': function (resolve) {
        require(['./views/services/shared/sftp'], resolve)
    },
    'shared_autorestart': function (resolve) {
        require(['./views/services/shared/autorestart'], resolve)
    },
    'shared_stats': function (resolve) {
        require(['./views/services/shared/stats'], resolve)
    },
    'shared_console': function (resolve) {
        require(['./views/services/shared/console'], resolve)
    },
    /* Services */
    //
    'mc_console': function (resolve) {
        require(['./views/services/mc/console'], resolve)
    },
    'mc_info': function (resolve) {
        require(['./views/services/mc/info'], resolve)
    },
    'mc_java': function (resolve) {
        require(['./views/services/mc/java'], resolve)
    },
    'mc_files': function (resolve) {
        require(['./views/services/mc/files'], resolve)
    },
    /* Users */
    'users': function (resolve) {
        require(['./views/users'], resolve)
    },
    'groups': function (resolve) {
        require(['./views/groups'], resolve)
    },
    'change_password': function (resolve) {
        require(['./views/change-password'], resolve)
    },
    /* Misc */
    '404': function (resolve) {
        require(['./views/404'], resolve)
    },
    '401': function (resolve) {
        require(['./views/401'], resolve)
    },
    'sidebar-menu': function (resolve) {
        require(['./views/sidebar-menu'], resolve)
    },
    'right-menu': function (resolve) {
        require(['./views/right-menu'], resolve)
    },
    'preloader': function (resolve) {
        require(['./widgets/preloader'], resolve)
    },
    'api': function (resolve) {
        require(['./api/services.js']);
    }
}
