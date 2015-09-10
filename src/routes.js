module.exports = {
    /* Home */
    '/': {
        component: 'home'
    },
    /* Minecraft service */
    '/mc/': {
        component: 'mc_list'
    },
    'mc/:id/console': {
        component: 'mc_console'
    },
    'mc/:id/files': {
        component: 'mc_files'
    },
    'mc/:id/stats': {
        component: 'mc_stats'
    },
    /* Auth */
    '/auth/login': {
        component: 'login'
    },
    /* Users */
    'users': {
        component: 'users'
    },
    'change-password': {
        component: 'change_password'
    },
    /* Misc */
    '*': {
        component: '404'
    },
    '401': {
        component: '401'
    }
};
