(function () {

    // 1.实例化对象
    let myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    let option = {
        xAxis: {
            type: 'category',
            data: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70],
                type: 'bar'
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
})();
(function () { })();
(function () { })();
(function () { })();
(function () { })();