module.exports = {
    /* Home */
    '/': {
        component: 'home'
    },
    '/license': {
        component: 'license'
    },
    '/about': {
        component: 'about'
    },
    /* TeamSpeak 3 service */
    '/ts3/': {
        component: 'ts3_list'
    },
    'ts3/:id/console': {
        component: 'ts3_console'
    },
    'ts3/:id/sftp': {
        component: 'ts3_sftp'
    },
    /* Minecraft service */
    '/mc/': {
        component: 'mc_list'
    },
    'mc/:id/console': {
        component: 'mc_console'
    },
    'mc/:id/sftp': {
        component: 'mc_sftp'
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
    'groups': {
        component: 'groups'
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
