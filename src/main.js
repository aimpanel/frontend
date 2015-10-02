require('./config.js');
require('./main.css');

//for hiding sidenav after click
require("font-awesome-webpack");
//require("../node_modules/materialize-css/dist/css/materialize.css")
require("../node_modules/materialize-css/dist/js/materialize.js")
require("../assets/date.format.js")

window.version = "0.70";

//customize right top dropdown
setTimeout(function () {
    jQuery(".dropdown-button").dropdown({hover: false, belowOrigin: true, constrain_width: false, alignment: 'right'});
}, 1);

//detect if browser is native android browser
var ua = navigator.userAgent;
var is_native_android = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
if (is_native_android) {
    alert('Twoja przeglądarka jest przestarzała, niektóre elementy mogą nie działać poprawnie')
}

//=== VUE ===
var Vue = require('vue');
Vue.config.debug = true;

var Router = require('vue-router');
Vue.use(Router);

var Resource = require('vue-resource');
Vue.use(Resource);

Vue.directive('modal', {
    bind: function (namez)
    {
        this.handler = function (name) {
            jQuery('#' + this.expression).openModal();
        }.bind(this);
        this.el.addEventListener('click', this.handler);
    },
    unbind: function () {
        this.el.removeEventListener('click', this.handler);
    }
});

window.permissions = [];

//main vm(viewmodel)
var root = Vue.extend({
    components: require('./components'),
    data: function () {
        return {
            version: window.version,
            url: false,
            logged: false,
            router: router,
            email: '',
            title: 'Panel',
            menu: [
                {"name": "Aktualności", "href": "", perm: "", enabled: true},
                {"name": "Statystyki", "href": "os/stats", perm: "", enabled: true},
                {"name": "Serwery MC", "href": "mc", perm: "", enabled: true},
                {"name": "Serwery TS3", "href": "ts3", perm: "", enabled: true},
                //{"name": "Użytkownicy", "href": "users", perm: "", enabled: true},
                //{"name": "Grupy", "href": "groups", perm: "", enabled: true},
                {"name": "Licencja", "href": "license", perm: "", enabled: true},
                {"name": "Informacje", "href": "about", perm: "", enabled: true}
            ]
        }
    },
    ready: function () {
        this.getUrl();
    },
    methods: {
        getUrl: function ()
        {
            var arr = window.location.href.split("/");
            this.url = arr[0] + "//" + arr[2];
            return this.url;
        },
        doLogout: function () {
            delete window.localStorage.token;
            delete window.localStorage.username;
            delete window.localStorage.email;
            this.logged = false;

            //hack for working menu collapsible
            setTimeout(function () {
                jQuery('.collapsible').collapsible();
            }, 1);

            router.go('/auth/login');
        },
        checkSession: function (data, status) {
            if (status == 401)
            {
                Materialize.toast('Sesja przedawniona, należy zalogować się ponownie', 4000);
                this.doLogout();
            }
        },
        routeContains: function (name) {
            var path = this.route.path;
            if (path.indexOf(name) != -1) {
                return true;
            }
            return false;
        },
        updateMenu: function (perms) {
            var menu = this.menu;

            menu.forEach(function (item) {
                if (perms.indexOf(item.perm) != -1 || item.perm == '' || perms.indexOf('ADMIN') != -1) {
                    item.enabled = true;
                } else {
                    item.enabled = false;
                }
            });
        },
        checkPerm: function (perm) {
            var permissions = window.permissions;

            if (permissions.indexOf(perm) > -1 || permissions.indexOf('ADMIN') > -1) {
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
            return false;
        }
    }

    //if not logged
    if (window.localStorage.token == null) {
        if (to.path.indexOf('auth') == -1) {
            //router.replace('/auth/login');
        }
    }

    //hack for dropdown
    setTimeout(function () {
        jQuery(".dropdown-button").dropdown({hover: false, belowOrigin: true, constrain_width: false, alignment: 'right'});
    }, 1);
    //hack for working menu collapsible
    setTimeout(function () {
        jQuery('.collapsible').collapsible();
    }, 1);

    //sideNav doesn't need hack
    jQuery('.button-collapse').sideNav('hide');
});

jQuery('.button-collapse').sideNav();

router.map(require('./routes'));
router.start(root, 'html');
router.go('/auth/login');