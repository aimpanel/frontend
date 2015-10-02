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
    '/os/stats': {
        component: 'os_stats'
    },
    /* Shared */
    ':service/:id/sftp': {
        component: 'shared_sftp'
    },
    ':service/:id/autorestart': {
        component: 'shared_autorestart'
    },
    /* TeamSpeak 3 service */
    '/ts3/': {
        component: 'ts3_list'
    },
    'ts3/:id/console': {
        component: 'ts3_console'
    },
    /* Minecraft service */
    '/mc/': {
        component: 'mc_list'
    },
    'mc/:id/console': {
        component: 'mc_console'
    },
    'mc/:id/info': {
        component: 'mc_info'
    },
    'mc/:id/java': {
        component: 'mc_java'
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
