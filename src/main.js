require('./config.js');
require('./main.css');

//for hiding sidenav after click
require("font-awesome-webpack");
//require("../node_modules/materialize-css/dist/css/materialize.css")
require("../node_modules/materialize-css/dist/js/materialize.js");
require("../assets/date.format.js")

window.version = "0.91";

//customize right top dropdown
setTimeout(function () {
    jQuery(".dropdown-button").dropdown({hover: false, belowOrigin: true, constrain_width: false, alignment: 'right'});
}, 1);

var browserLanguage = require('in-browser-language');
var pickLanguage = browserLanguage.pick(['en', 'pl'], 'en');

//detect if browser is native android browser
var ua = navigator.userAgent;
var is_native_android = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
if (is_native_android) {
    if (pickLanguage === "pl")
    {
        alert("Twoja przeglądarka jest niewspierana, niektóre elementy mogą nie działać poprawnie, użyj Chrome'a lub Firefoxa'a");
    } else
    {
        alert('Your browser is not supported, some element may not work, try using Chrome or Firefox');
    }
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
var i18n = require('vue-i18n');
window.locale = {en: {}, pl: {}};
require('./locales/en.js');
require('./locales/pl.js');

Vue.use(i18n, {
    lang: pickLanguage,
    locales: window.locale
});
//get lang from local storage settings
if (localStorage.getItem("lang") !== null) {
    Vue.config.lang = localStorage.getItem("lang");
}
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
                {"name": this.$t("home.news"), "href": "", "icon": "newspaper-o", enabled: true},
                {"name": this.$t("osStats.stats"), "href": "os/stats", "icon": "bar-chart", enabled: true},
                {"name": this.$t("servers.servers"), "href": "servers", "icon": "server", enabled: true},
                //{"name": "Users", "href": "users", perm: "", enabled: true},
                //{"name": "Groups", "href": "groups", perm: "", enabled: true},
                {"name": this.$t("about.license"), "href": "license", "icon": "key", enabled: true},
                {"name": this.$t("about.panel"), "href": "about", "icon": "info", enabled: true}
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
                Materialize.toast(this.$t("auth.sessionExpired"), 4000);
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
            //Materialize.toast('Brak uprawnień do wyświetlenia tej strony', 4000)
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