//hack for working menu collapsible
setTimeout(function () {
    jQuery('.collapsible').collapsible();
}, 1);

jQuery('.button-collapse').sideNav();

module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            menu: this.$root.menu
        }
    }
}
