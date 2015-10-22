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
    '/servers/': {
        component: 'server_list'
    },
    /* Minecraft service */
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
    /* Shared */
    ':service/:id/console': {
        component: 'shared_console'
    },
    ':service/:id/params': {
        component: 'shared_params'
    },
    ':service/:id/sftp': {
        component: 'shared_sftp'
    },
    ':service/:id/autorestart': {
        component: 'shared_autorestart'
    },
    ':service/:id/stats': {
        component: 'shared_stats'
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
