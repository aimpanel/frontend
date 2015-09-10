module.exports = {
    /* Home */
    'home': function (resolve) {
        require(['./views/home'], resolve)
    },
    /* Auth */
    'login': function (resolve) {
        require(['./views/auth/login'], resolve)
    },
    /* Services */
    'mc_list': function (resolve) {
        require(['./views/services/mc/list'], resolve)
    },
    'mc_console': function (resolve) {
        require(['./views/services/mc/console'], resolve)
    },
    'mc_files': function (resolve) {
        require(['./views/services/mc/files'], resolve)
    },
    'mc_stats': function (resolve) {
        require(['./views/services/mc/stats'], resolve)
    },
    /* Users */
    'users': function (resolve) {
        require(['./views/users'], resolve)
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
    }
}
