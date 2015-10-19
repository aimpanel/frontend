require('./style.css');
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
    },
    ready: function () {
        jQuery('#slide-out li').on("click", function () {
            jQuery('#slide-out li').each(function () {
                jQuery(this).removeClass("active");
            });
            jQuery(this).addClass("active");
        });
    }
}
