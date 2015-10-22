require('./style.css');
//require('morris.js')
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            days: 1,
            isRamLoading: true,
            isCpuLoading: true
        }
    },
    methods: {
        //https://github.com/mbostock/d3/wiki/Time-Formatting
        CpuChart: function ()
        {
            this.isCpuLoading = true;
            this.$http.get(window.baseurl + "/api/v1/services/" + this.service + "/" + this.id + "/chart/cpu/" + this.days, function (data) {
                jQuery("#cpuChart svg").empty();
                var d3 = require('d3');
                var nvd3 = require('nvd3');
                require('nvd3/build/nv.d3.css');
                this.isCpuLoading = false;
                nv.addGraph(function () {
                    var chart = nv.models.lineWithFocusChart()
                            .x(function (d) {
                                return d[0]
                            })
                            .y(function (d) {
                                return d[1]
                            })
                            .clipEdge(true)
                            .useInteractiveGuideline(true)
                            //.color(['#8bc34a'])
                            .color(['#4CAF50'])
                            ;
                    chart.xAxis
                            .showMaxMin(false)
                            .tickFormat(function (d) {
                                return d3.time.format('%H:%M')(new Date(d))
                            });
                    chart.x2Axis
                            .tickFormat(function (d) {
                                return d3.time.format('%d/%m/%Y')(new Date(d))
                            });
                    chart.yAxis
                            .tickFormat(d3.format(',.2f'));
                    chart.y2Axis
                            .tickFormat(d3.format(',.2f'));
                    d3.select('#cpuChart svg')
                            .datum(data)
                            .transition().duration(500).call(chart);
                    nv.utils.windowResize(chart.update);
                    return chart;
                });
            });
        },
        RamChart: function ()
        {
            this.isRamLoading = true;
            this.$http.get(window.baseurl + "/api/v1/services/" + this.service + "/" + this.id + "/chart/ram/" + this.days, function (data) {
                jQuery("#ramChart svg").empty();
                var d3 = require('d3');
                var nvd3 = require('nvd3');
                require('nvd3/build/nv.d3.css');
                this.isRamLoading = false;
                nv.addGraph(function () {
                    var chart = nv.models.lineWithFocusChart()
                            .x(function (d) {
                                return d[0]
                            })
                            .y(function (d) {
                                return d[1]
                            })
                            .clipEdge(true)
                            .useInteractiveGuideline(true)
                            //.color(['#8bc34a'])
                            .color(['#4CAF50'])
                            ;
                    chart.xAxis
                            .showMaxMin(false)
                            .tickFormat(function (d) {
                                return d3.time.format('%H:%M')(new Date(d))
                            });
                    chart.x2Axis
                            .tickFormat(function (d) {
                                return d3.time.format('%d/%m/%Y')(new Date(d))
                            });
                    chart.yAxis
                            .tickFormat(d3.format('0.0d')).formatPrefix;
                    chart.y2Axis
                            .tickFormat(d3.format('.0d'));
                    d3.select('#ramChart svg')
                            .datum(data)
                            .transition().duration(500).call(chart);
                    nv.utils.windowResize(chart.update);
                    return chart;
                });
            });
        },
        charts: function (days)
        {
            this.days = days;
            this.CpuChart();
            this.RamChart();
        }
    },
    ready: function () {
        this.id = this.route.params.id;
        this.service = this.route.params.service;
        this.$root.$set('title', this.$t("server.stats.title"));
        this.CpuChart();
        this.RamChart();
        jQuery('ul.tabs').tabs();
        jQuery(".dropdown-button").dropdown({
            hover: false,
            belowOrigin: true,
            constrain_width: true,
            alignment: 'right'
        });
    }
};