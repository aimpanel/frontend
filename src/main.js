require('./main.css');

//for hiding sidenav after click
require("font-awesome-webpack");
//require("../node_modules/materialize-css/dist/css/materialize.css")
require("../node_modules/materialize-css/dist/js/materialize.js")

require("../assets/date.format.js")

//customize right top dropdown
setTimeout(function () {
    jQuery(".dropdown-button").dropdown({hover: false, belowOrigin: true, constrain_width: false, alignment: 'right'});
}, 1);

//detect if browser is native android browser
var ua = navigator.userAgent;
var is_native_android = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
if(is_native_android) {
    alert('Twoja przeglądarka jest przestarzała, niektóre elementy mogą nie działać poprawnie')
}

//=== VUE ===
var Vue = require('vue');
Vue.config.debug = true;

var Router = require('vue-router');
Vue.use(Router);

var Resource = require('vue-resource');
Vue.use(Resource);

window.permissions = [];
window.baseurl = "http://192.168.33.33:3131"

//main vm(viewmodel)
var root = Vue.extend({
    components: require('./components'),
    data: function () {
        return {
            logged: false,
            router: router,
            email: '',
            title: 'Panel',
            menu: [
                {"name": "Serwery MC", "href": "mc", perm: "", enabled: true},
                {"name": "Serwery TS3", "href": "ts3", perm: "", enabled: true},
                {"name": "Licencja", "href": "license", perm: "", enabled: true},
                {"name": "Informacje", "href": "about", perm: "", enabled: true},
                //{"name": "Strona główna", href: "", perm: "", enabled: true},
                //{"name": "Hosty", "href": "hosts", perm: "HOSTS", enabled: false},
                //{"name": "Serwery MC", "href": "hosts/mc/list", perm: "", enabled: false},
                //{"name": "Użytkownicy", "href": "users", perm: "USERS", enabled: false},
                //{"name": "Zmiana hasła", "href": "change-password", perm: "", enabled: true}
            ]
        }
    },
    methods: {
        doLogout: function () {
            delete window.localStorage.token;
            delete window.localStorage.username;
            delete window.localStorage.email;
            this.logged = false;

            //hack for working menu collapsible
            setTimeout(function () {
                jQuery('.collapsible').collapsible();
            }, 1);

            router.go('/');
        },
        routeContains: function (name) {
            var path = this.route.path;
            if (path.indexOf(name) != -1) {
                return true;
            }
            return false;
        },
        updateMenu: function(perms) {
            var menu = this.menu;

            menu.forEach(function(item) {
                if (perms.indexOf(item.perm) != -1 || item.perm == '' || perms.indexOf('ADMIN') != -1) {
                    item.enabled = true;
                } else {
                    item.enabled = false;
                }
            });
        },
        checkPerm: function(perm) {
            var permissions = window.permissions;

            if(permissions.indexOf(perm) > -1 || permissions.indexOf('ADMIN') > -1) {
                return false
            }
            //
            return false//
            //
            Materialize.toast('Brak uprawnień do wyświetlenia tej strony', 4000)
            router.replace('/')
        }
    },
    created: function () {
        if (window.localStorage.token != null) {
            this.logged = true;
            this.$http.headers.common["Authorization"] = "Bearer " + window.localStorage.token;

            //get permissions
//            this.$http.get('/api/users/info', function (data) {
//                var permissions = window.permissions;
//                var perms = data.data.permissions;
//                perms.forEach(function (item) {
//                    permissions.push(item.perm);
//                });
//
//                this.updateMenu(permissions);
//            });
        }

        if (window.localStorage.email != null) {
            this.email = window.localStorage.email;
        }
    }
});

//routing
var router = new Router({
    root: '/',
    hashbang: false
});

router.beforeEach(function (from, to) {
    //if logged
    if (window.localStorage.token != null) {
        if (to.path.indexOf('auth') != -1) {
            return false
        }
    }

    //if not logged
    if (window.localStorage.token == null) {
        if (to.path.indexOf('auth') == -1) {
            //router.replace('/auth/login');
        }
    }
});

router.map(require('./routes'));
router.start(root, 'html');