require('./style.css');
var Chart = require("chart.js");
//Chart.defaults.global = {
//    responsive: false
//};
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
            ramChartInstance: false,
            cpuChartInstance: false
        }
    },
    ready: function () {
        this.$root.$set('title', 'Statystyki systemu');
        this.getRam();
        window.refreshCharts = setInterval(this.getRam, 5000);
    },
    methods: {
        getRam: function () {
            var self = this;
            this.$http.get(window.baseurl + '/api/v1/os/stats', function (data, status) {
                self.$set("ram", data.meminfo);
                self.$set("cpu", data.cpuinfo);
                if (!self.ramChartInstance)
                {
                    console.log("creating ram instance");
                    this.ramChart();
                }
                this.ramChartInstance.segments[0].value = Math.round(this.ram.MemTotal / 1024);
                this.ramChartInstance.segments[1].value = Math.round(this.ram.Buffers / 1024);
                this.ramChartInstance.segments[2].value = Math.round(this.ram.Cached / 1024);
                this.ramChartInstance.segments[3].value = Math.round((this.ram.MemTotal - this.ram.MemFree - this.ram.Buffers - this.ram.Cached) / 1024);
                this.ramChartInstance.update();

                if (!self.cpuChartInstance)
                {
                    console.log("creating cpu instance");
                    this.cpuChart();
                }
                this.cpuChartInstance.segments[0].value = this.cpu.idle;
                this.cpuChartInstance.segments[1].value = this.cpu.usr;
                this.cpuChartInstance.update();
            });
        },
        ramChart: function ()
        {
            var data = [
                {
                    value: 1,
                    color: "#60BD68",
                    highlight: "#7AD782",
                    label: "Nieużywane"
                },
                {
                    value: 1,
                    color: "#5DA5DA",
                    highlight: "#77BFF4",
                    label: "Bufory"
                },
                {
                    value: 1,
                    color: "#F8E959",
                    highlight: "#FFFF72",
                    label: "Cache"
                },
                {
                    value: 1,
                    color: "#F15854",
                    highlight: "#FF726E",
                    label: "Aplikacje"
                }
            ];
            var options = {
                animationSteps: 40,
                animation: false
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
                    color: "#60BD68",
                    highlight: "#7AD782",
                    label: "Idle"
                },
                {
                    value: 1,
                    color: "#5DA5DA",
                    highlight: "#77BFF4",
                    label: "Usr"
                }
            ];
            var options = {
                animation: false
            };
            var ctx = document.getElementById("cpu").getContext("2d");
            this.cpuChartInstance = new Chart(ctx).Pie(data, options);
        }
    },
    beforeDestroy: function () {
        clearInterval(window.refreshCharts);
    }
}
