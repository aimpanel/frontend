window.locale.en = {
    general: {
        notfound: "Error 404 - Page not found",
        notfoundNote: "Instead have a cat gif",
        close: "Close",
        loading: "Loading",
        taskAddedToQueue: "Task added to queue"
    },
    home: {
        "news": "News",
        "helpHeader": "Feedback? Feature request? Bugs?",
        "helpDesc": "Write on our forum",
        "manualDesc": "Manual is available at ",
        "updateHeader": "How to upgrade Aimpanel to latest version?",
        "updateDesc": "Just execute following command upgrading your system on root user:"
    },
    auth: {
        "enterLoginAndPassword": "Enter username and password",
        "signIn": "Sign in",
        "clickToSignIn": "Sign in",
        "logout": "Logout",
        "signInToExistingAccount": "Login to existing account",
        "yourUsername": "Your username",
        "yourPassword": "Your password",
        "loggingIn": " Logging in..."
    },
    about: {
        panel: "About panel",
        thanks: "Aimpanel exists thanks to wonderful projects, almost all of them are open source.",
        specialThanks: "Special thanks for:",
        license: "License",
        proprietaryLicense: "Proprietary license"
    },
    security: {
        unauthorized: "You are not authorized to display this page"
    },
    license: {
        active: "Active",
        yes: "Yes",
        no: "No",
        forUser: "For",
        desc: "Description",
        validTo: "Valid to",
        thanks: "Thank you for choosing Aimpanel :)"
    },
    servers: {
        servers: "Servers",
        listOfServers: "List of servers",
        state: "State",
        console: "Console",
        actions: "Actions",
        remove: "Remove",
        on: "On",
        off: "Off",
        empty: "No servers",
        emptyMaybeAddNew: "No servers. Maybe it's worth to try add a new? :)",
        addTooltip: "Protip: in lower right corner there is red plus sign",
        addServer: "Add server",
        serverAdded: "Server added",
        addModal: {
            idLabel: "Server ID e.g. 1",
            clickToAdd: "Add",
            working: "Working...",
            serverType: "Type of server"
        },
        removeModal: {
            removeServer: "Delete server",
            areYouSure: "Are you sure? It's going to remove all server files. Files will be gone!",
            yesDestroy: "Hulk, destroy!"
        }
    },
    osStats: {
        stats: "OS stats",
        refreshEach: "Chart is refresing each {sec} sec",
        ramInMb: "RAM in MB",
        ram: {
            howTo: "How to understand RAM usage?",
            apps: "Applications",
            appsInfo: "memory used by apps, main reason to have plenty of RAM :)",
            cache: "Cache",
            cacheInfo: "frequently readed data from disk is storaged in RAM for faster reads.",
            buffer: "Buffers",
            bufferInfo: "space where data is added to queue for write to disk, hard disk may be slow if this space is big.",
            free: "Free",
            freeInfo: "memory totally 'wasted', Linux kernel converts free space to cache if needed.",
            cacheBufferInfo: "Cache and buffers may be shrinked to make space for apps if needed.",
            cacheBufferOsInfo: "OS knows how to set proper cache and buffer sizes, no user intervention is needed."
        },
        cpuInPerc: "CPU in %",
        cpu: {
            howTo: "What is using my CPU time?",
            general: {
                info: "General",
                usr: "applications in OS e.g. game servers",
                idle: "not used",
                nice: "less important stuff"
            },
            sys: {
                info: "System",
                sys: "system kernel",
                irq: "drivers",
                soft: "more drivers stuff",
                iowait: "waiting for write to disk"
            },
            virt: {
                info: "Virtualization",
                steal: "other VPS on machine or exceeding your CPU quota",
                guest: "creating vCPU on your machine"
            }
        }
    },
    serverMenu: {
        title: "Server menu",
        java: "Java VM",
        autorestart: "Autorestart",
        sftp: "SFTP",
        info: "Info",
        stats: "Stats",
        console: "Console & log"
    },
    server: {
        autorestart: {
            title: "Autorestart",
            alwaysOn: "Server autorestart is always turned on.",
            queue: "Aimpanel check every minute if server process is running, if it's not running - restart server job will be added to queue.",
            estimate: "Restart after crash shoudn't take more than two minutes."
        },
        console: {
            title: "Console",
            console: "Console",
            log: "Log"
        },
        stats: {
            title: "Stats"
        },
        mc: {
            info: {
                title: "Info about server",
                portGame: "Game port",
                portQuery: "Query port",
                portRcon: "RCON Port ",
                passwordRcon: "RCON password",
                onlineMode: "Online mode",
                on: "On",
                off: "Off",
                configNotFound: "File server.properties not found"
            }
        }
    }
};