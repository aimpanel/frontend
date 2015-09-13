require('./style.css');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            users: [],
            usersRes: this.$resource('/api/users/:id'),
            user: {
                username: '',
                password: ''
            },
            checkbox: {
                general: [
                    {
                        "name": "Użytkownicy (Wyświetlanie, dodawanie i usuwanie użytkowników)",
                        checked: false,
                        perm: "USERS"
                    },
                    {"name": "Hosty (Wyświetlanie, dodawanie i usuwanie hostów", checked: false, perm: "HOSTS"}
                ],
                hosts: [],
                minecraft: []
            },
            empty: true
        }
    },
    ready: function () {
        this.$root.checkPerm('USERS');

        this.$root.$set('title', 'Lista użytkowników');

        setTimeout(function () {
            jQuery('.collapsible').collapsible();
        }, 1);

        //get all hosts
        this.getUsers();
        this.getHosts();

        //init tooltips
        jQuery('.tooltipped').tooltip({delay: 50});
    },
    methods: {
        addUser1: function () {
            jQuery('#addUser2').closeModal();
            jQuery('#addUser1').openModal();
        },
        addUser2: function () {
            jQuery('#addUser1').closeModal();
            jQuery('#addUser2').openModal();
        },
        getUsers: function () {
            //get all hosts
            this.usersRes.get({}, function (items) {
                if (items.error === false) {
                    this.users = items.data;
                    if(this.users.length != 0) {
                        this.empty = false;
                    } else {
                        this.empty = true;
                    }
                }
            });
        },
        getHosts: function () {
            var self = this;
            //get all hosts
            this.$http.get('/api/hosts', function (data) {
                if (data.error === false) {
                    var hosts = data.data;
                    hosts.forEach(function (host) {
                        var el = {};
                        el[host.name] = [
                            {name: "Lista serwerów MC", checked: false, perm: "HOST_" + host.id + "_MC_LIST", host_id: host.id}
                        ];
                        self.checkbox.hosts.push(el);

                        //get all servers for specific host
                        self.$http.get('/api/host/' + host.id + '/mc/list', function (data) {
                            var srvs = data.data;
                            for (var key in srvs) {
                                var value = srvs[key];
                                var el2 = {};
                                el2[value.name] = [
                                    {
                                        "name": "Konsola",
                                        checked: false,
                                        mc_slug: value.name_slug,
                                        perm: "HOST_" + host.id + "_MC_" + value.name_slug + "_CONSOLE"
                                    },
                                    {
                                        "name": "Kontrola (włączenie, wyłączenie, restartowanie i wysyłanie komend)",
                                        checked: false,
                                        mc_slug: value.name_slug,
                                        perm: "HOST_" + host.id + "_MC_" + value.name_slug + "_CONTROL"
                                    },
                                    {
                                        "name": "Menadźer plików",
                                        checked: false,
                                        mc_slug: value.name_slug,
                                        perm: "HOST_" + host.id + "_MC_" + value.name_slug + "_FILES"
                                    }
                                ]
                                self.checkbox.minecraft.push(el2)
                            }
                        });
                    });
                }
            });
        },
        addUser: function () {
            var perms = [];
            //general
            for (var key in this.checkbox.general) {
                var value = this.checkbox.general[key];
                if (value.checked === true) {
                    perms.push({perm: value.perm});
			console.log(perms);
                }
            }

            //hosts
/*
            for (var key in this.checkbox.hosts) {
                var value = this.checkbox.hosts[key];
                for (var key2 in value) {
                    var value2 = value[key2];
                    for (var key3 in value2) {
                        var value3 = value2[key3]
                        if (value3.checked === true) {
                            perms.push({perm: value3.perm});
                        }
                    }
                }
            }
*/
            //minecraft
            for (var key in this.checkbox.minecraft) {
                var value = this.checkbox.minecraft[key];
                for (var key2 in value) {
                    var value2 = value[key2];
                    for (var key3 in value2) {
                        var value3 = value2[key3]
                        if (value3.checked === true) {
                            perms.push({perm: value3.perm});
                        }
                    }
                }
            }

            this.usersRes.save({}, {
                username: this.user.username,
                password: this.user.password,
                permissions: perms
            }, function (data) {
                jQuery('#addUser2').closeModal();
                Materialize.toast('Dodano użytkownika pomyślnie', 4000)

                this.getUsers();
            })
        },
        showKey: function (id) {
            jQuery('#key_' + id).openModal();
        },
        deleteUser: function (id) {
            this.usersRes.delete({id: id}, function (item) {
                if (item.error === false) {
                    Materialize.toast('Usunięto użytkownika pomyślnie', 4000)
                    this.getUsers()
                }
            })
        },
        toggleCheckbox: function (checkbox, event) {
            var checked = event.target.checked;
            if (checked) {
                checkbox.checked = true;
            }
        }
    }
}
