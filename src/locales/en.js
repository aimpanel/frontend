window.locale.en = {
    general: {
        notfound: "Error 404 - Page not found",
        notfoundNote: "Instead have a cat gif",
        close: "Close",
        loading: "Loading",
        taskAddedToQueue: "Task added to queue",
        remember: "Remember!",
        desc: "Description"
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
        "loggingIn": " Logging in...",
        "sessionExpired": "Session expired, sign in again"
    },
    about: {
        panel: "About panel",
        thanks: "Aimpanel exists thanks to wonderful projects, almost all of them are open source.",
        specialThanks: "Special thanks",
        license: "License",
        proprietaryLicense: "Proprietary license",
        composerPacks: "Composer PHP packages used by Aimpanel backend",
        version: "Version",
        project: "Projects",
        link: "Link"
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
        thanks: "Thank you for choosing Aimpanel :)",
        howToUpdate: "How to update license?",
        howToUpdateDesc: "You will need key in format:",
        helpCmd: "Next, execute following command from SSH on root account:",
        yourKey: "your_key",
        example: "example:"
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
        serverRemoved: "Server removed",
        addModal: {
            idLabel: "Server ID e.g. 1",
            clickToAdd: "Add",
            working: "Working...",
            serverType: "Type of server",
            ts3CostWarningPreLink: "TS3MusicBot needs €2.50/month subscription available @ ",
            ts3CostWarningPostLink: " ",
            csgoManualInstall: 'You need to run one command from SSH to install server files after this step <a class="green-text" target="_blank" href="http://aimpanel.pro/en/docs/game-servers/">More info</a>'
        },
        removeModal: {
            removeServer: "Delete server",
            areYouSure: "Are you sure? It's going to remove all server files. Files will be gone forever!",
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
            cacheInfo: "frequently read data from disk, storaged in RAM for faster reads.",
            buffer: "Buffers",
            bufferInfo: "space where data is added to queue for write, hard disk may be slow if this space is big.",
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
    tasks: {
        title: "Tasks",
        empty: "No tasks yet",
        id: "ID",
        lastModified: "Last Modified",
        state: "State",
        progressBar: "Progress bar"
    },
    serverMenu: {
        title: "Server menu",
        java: "Java VM",
        autorestart: "Autorestart",
        sftp: "SFTP",
        info: "Info",
        stats: "Stats",
        console: "Console & log",
        params: "Parameters"
    },
    server: {
        autorestart: {
            title: "Autorestart",
            alwaysOn: "Server autorestart is always turned on.",
            queue: "Aimpanel check every minute if server process is running, if it's not running - 'restart' action will be taken.",
            estimate: "Restart after crash shoudn't take more than two minutes."
        },
        console: {
            title: "Console",
            console: "Console",
            log: "Log"
        },
        stats: {
            title: "Stats",
            timespan: "Timespan",
            day1: "Last 24h",
            day7: "Last 7 days",
            day30: "Last 30 days"
        },
        sftp: {
            title: "SFTP",
            credentials: "Credentials for SFTP account",
            host: "Host",
            username: "Username",
            port: "Port",
            password: "Password",
            secureInfo: "SFTP is recommended and safe way to transfer files between your computer and server.",
            desc: "SFTP is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed by the Internet Engineering Task Force (IETF) as an extension of the Secure Shell protocol (SSH) version 2.0 to provide secure file transfer capabilities. The IETF Internet Draft states that, even though this protocol is described in the context of the SSH-2 protocol, it could be used in a number of different applications, such as secure file transfer over Transport Layer Security (TLS) and transfer of management information in VPN applications.",
            descSource: "<a class=\"green-text truncate\" href=\"https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol\"  target=\"_blank\">https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol</a>",
            newPassword: {
                set: "Set new random password for SFTP account",
                pressToRandom: "Press button to generate new, secure 16 character password.",
                noRecovery: "After password is set, there is no way to recover it, you can only set new for security reasons.",
                clickToChange: "Change password",
                done: "Done! You can now copy and paste new password to your SFTP client e.g.",
                newPass: "New password"
            }
        },
        params: {
            generic: {
                param: "Parameters",
                params: "Parameters",
                help: "Help with parameters",
                change: "Change bold text with your setting."
            },
            ts3mb: {
                email: "Your email registered at",
                webPort: "Web interface port",
                adminPass: "Web interface admin password",
                userPass: "Web interface user password",
                noQuery: "Turn off bot chat function (recommended)"
            }
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
            },
            java: {
                title: "JVM",
                paramsSaved: "Parameters saved",
                javaRamHog: "JVM (Java Virtual Machine) can take all available RAM, so it's good to set limit for it.<br>Parameter for this is -Xmx.",
                paramExample: "For 1024MB RAM limit use:<br>-Xmx1024M",
                javaRamHogWarning: "Xmx value should be less than available RAM because JVM can take more than you set.",
                jvmParams: "JVM parameters",
                param: "Parameter",
                add: "Add",
                save: "Save"
            }
        }
    }
};