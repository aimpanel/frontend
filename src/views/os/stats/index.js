require('./style.css');
var Chart = require("chart.js");
//Chart.defaults.global = {
//    responsive: false
//};
//var sparkline = require('jquery-sparkline');
module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            ram: {
                MemTotal: 1,
                MemFree: 1,
                Buffers: 1,
                Cached: 1
            },
            cpu: {
                usr: 1,
                nice: 1,
                sys: 1,
                iowait: 1,
                irq: 1,
                soft: 1,
                steal: 1,
                guest: 1,
                idle: 1
            },
            ramChartInstance: false,
            cpuChartInstance: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Statystyki systemu');
        this.getRam();
        window.refreshCharts = setInterval(this.getRam, 5000);
//        var myvalues = [10, 8, 5, 7, 4, 4, 1];
//        $('#cpuSpark').sparkline(myvalues, {
//            width: "100%"
//        });
        //jQuery("#cpuSpark").sparkline([1, 5, 22, 7, 9]);
    },
    methods: {
        getRam: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/os/stats', function (data, status) {
                self.$set("ram", data.meminfo);
                self.$set("cpu", data.cpuinfo);
                if (!self.ramChartInstance)
                {
                    this.ramChart();
                }
                this.ramChartInstance.segments[0].value = Math.round(this.ram.MemTotal / 1024);
                this.ramChartInstance.segments[1].value = Math.round(this.ram.Buffers / 1024);
                this.ramChartInstance.segments[2].value = Math.round(this.ram.Cached / 1024);
                this.ramChartInstance.segments[3].value = Math.round((this.ram.MemTotal - this.ram.MemFree - this.ram.Buffers - this.ram.Cached) / 1024);
                this.ramChartInstance.update();

                if (!self.cpuChartInstance)
                {
                    this.cpuChart();
                }
                this.cpuChartInstance.segments[0].value = this.cpu.usr;
                this.cpuChartInstance.segments[1].value = this.cpu.nice;
                this.cpuChartInstance.segments[2].value = this.cpu.sys;
                this.cpuChartInstance.segments[3].value = this.cpu.iowait;
                this.cpuChartInstance.segments[4].value = this.cpu.irq;
                this.cpuChartInstance.segments[5].value = this.cpu.soft;
                this.cpuChartInstance.segments[6].value = this.cpu.steal;
                this.cpuChartInstance.segments[7].value = this.cpu.guest;
                this.cpuChartInstance.segments[8].value = this.cpu.idle;
                this.cpuChartInstance.update();
            });
        },
        ramChart: function ()
        {
            var data = [
                {
                    value: 1,
                    color: "#60BD68",
                    highlight: "#6DCA75",
                    label: "Nieużywane"
                },
                {
                    value: 1,
                    color: "#5DA5DA",
                    highlight: "#6AB2E7",
                    label: "Bufory"
                },
                {
                    value: 1,
                    color: "#DECF3F",
                    highlight: "#EBDC4C",
                    label: "Cache"
                },
                {
                    value: 1,
                    color: "#F15854",
                    highlight: "#FE6561",
                    label: "Aplikacje"
                }
            ];
            var options = {
                animationSteps: 35,
                animation: true
            };
            var ctx = document.getElementById("ram").getContext("2d");
            this.ramChartInstance = new Chart(ctx).Pie(data, options);
            //jQuery("#ramLegend").html(ramChart.generateLegend());
            //ramChart.reDraw();
        },
        cpuChart: function ()
        {
            var data = [
                {
                    value: 1,
                    color: "#5DA5DA",
                    highlight: "#6AB2E7",
                    label: "usr"
                },
                {
                    value: 1,
                    color: "#4D4D4D",
                    highlight: "#5A5A5A",
                    label: "nice"
                },
                {
                    value: 1,
                    color: "#DECF3F",
                    highlight: "#EBDC4C",
                    label: "sys"
                },
                {
                    value: 1,
                    color: "#F15854",
                    highlight: "#FE6561",
                    label: "iowait"
                },
                {
                    value: 1,
                    color: "#B276B2",
                    highlight: "#BF83BF",
                    label: "irq"
                },
                {
                    value: 1,
                    color: "#F17CB0",
                    highlight: "#FE89BD",
                    label: "soft"
                },
                {
                    value: 1,
                    color: "#FAA43A",
                    highlight: "#FFB147",
                    label: "steal"
                },
                {
                    value: 1,
                    color: "#B2912F",
                    highlight: "#BF9E3C",
                    label: "guest"
                },
                {
                    value: 1,
                    color: "#60BD68",
                    highlight: "#6DCA75",
                    label: "idle"
                }
            ];
            var options = {
                animationSteps: 35,
                animation: true
            };
            var ctx = document.getElementById("cpu").getContext("2d");
            this.cpuChartInstance = new Chart(ctx).Pie(data, options);
        }
    },
    beforeDestroy: function () {
        clearInterval(window.refreshCharts);
    }
}
