//柱状图1
(function () {
    let option = null;
    let myChart = null;
    myChart = echarts.init(document.querySelector('.bar .chart'));
    option = {
        //修改图表颜色
        color: ['#2f89cf'],
        //提示框组件
        tooltip: {
            //触发类型
            trigger: 'axis',
            //修改提示框内容
            axisPointer: {
                //坐标轴指示器，坐标轴触发有效
                type: 'shadow'
            }
        },
        //修改图表大小
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        //修改x轴相关样式
        xAxis: [
            {
                /*type的意思是：category：类目轴，适用于离散的类目数据，为该类型时必须通过data设置类目数据，
                value：数值轴，适用于连续数据，脱离0值的自适应线性数值轴，
                time：时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，
                在刻度计算上也有所不同，log：对数轴。适用于对数数据。*/
                type: 'category',
                //修改x轴刻度标签相关样式
                data: ['旅游行业', '教育行业', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                //x轴刻度标签线条
                axisTick: {
                    //刻度标签与轴线对齐
                    alignWithLabel: true
                },
                //修改刻度标签相关样式
                axisLabel: {
                    //文字颜色
                    color: 'rgba(255,255,255,.6)',
                    //文字大小
                    fontSize: '12'
                },
                //不显示x轴样式
                axisLine: {
                    //不显示x轴的边框
                    show: false
                },
            }
        ],
        //修改y轴相关样式
        yAxis: [
            {
                //y轴类型
                type: 'value',
                //y轴样式
                axisLine: {
                    //是否显示y轴的边框
                    show: true,
                    //设置y轴的设置
                    lineStyle: {
                        //设置y轴的边框颜色
                        color: 'rgba(255,255,255,.1)',
                        //设置y轴的边框类型
                        width: 1,
                        //设置y轴的边框类型
                        type: 'solid'
                    },
                },
                //y轴刻度标签文字样式
                axisLabel: {
                    //文字颜色
                    color: 'rgba(255,255,255,.6)',
                    //文字大小
                    fontSize: '12',
                },
                //y轴分割线样式
                splitLine: {
                    //分割线样式
                    lineStyle: {
                        //分割线颜色
                        color: 'rgba(255,255,255,.1)',
                    }
                }
            },
        ],
        //修改图表样式
        series: [
            {
                //图表名字
                name: 'Direct',
                //图表类型
                type: 'bar',
                //修改柱子宽度
                barWidth: '35%',
                //图标数据
                data: [200, 300, 300, 900, 1500, 1200, 600],
                //修改柱子圆角
                itemStyle: {
                    //修改柱子圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    //图表自适应
    window.addEventListener('resize', function () {
        //让图表调用resize方法
        //resize方法让图表重新适应
        myChart.resize();
    });
})();
// 柱状图2
(function () {
    // 1. 实例化对象
    let option = null;
    let myChart = null;
    myChart = echarts.init(document.querySelector('.bar2 .chart'));
    let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    // 2. 指定配置项和数据
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                //默认为直线，可选为：'line' | 'shadow'
                type: 'shadow'
            }
        },
        legend: {
            // 不显示
            show: false,
        },
        grid: {
            left: '22%',
            top: '10%',
            bottom: '10%',
            // 不考虑坐标轴刻度文字的宽度
            containLabel: false
        },
        xAxis: {
            //不显示x轴线条
            show: false,
        },
        yAxis: [
            {
                type: 'category',
                data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
                //不显示y轴线条
                axisLine: {
                    show: false,
                },
                //隐藏刻度线
                axisTick: {
                    show: false,
                },
                //刻度标签文字颜色
                axisLabel: {
                    color: '#fff',
                },
                //数据反转，与数据一致
                inverse: true,
            }, { //第二组y轴
                type: 'category',
                data: [702, 350, 610, 793, 664],
                //不显示y轴线条
                axisLine: {
                    show: false,
                },
                //隐藏刻度线
                axisTick: {
                    show: false,
                },
                //刻度标签文字颜色
                axisLabel: {
                    color: '#fff',
                },
                //数据反转，与数据一致
                inverse: true,


            }],
        series: [
            //第一组柱子(条状图)
            {
                name: '条',
                type: 'bar',
                data: [70.2, 35.0, 61.0, 79.3, 66.4],
                //修改第一组柱子的圆角
                //每个柱子的样式设置
                itemStyle: {
                    barBorderRadius: 20,
                    //修改柱子颜色
                    color: function (params) {
                        //params传进来的是柱子对象
                        //dataIndex是当前柱子的索引号
                        // console.log(params);
                        return myColor[params.dataIndex];
                    },
                    yAxisIndex: 0,
                },
                //柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                //设置柱子上的文字
                label: {
                    show: true,
                    //图形内显示
                    position: 'inside',
                    // {c}会自动解析为数据data里面的数据
                    formatter: '{c}%'
                },
                yAxisIndex: 1,

            },
            //第二组柱子(框状图)
            {
                name: '框',
                type: 'bar',
                data: [100.0, 100.0, 100.0, 100.0, 100.0],
                //修改第一组柱子的圆角
                //每个柱子的样式设置
                itemStyle: {
                    //修改柱子颜色
                    color: 'none',
                    //修改柱子边框颜色
                    borderColor: '#00c1de',
                    //修改柱子边框宽度
                    borderWidth: 2,
                    //修改柱子圆角
                    barBorderRadius: 15,
                },
                //柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 15,

            },

        ]
    };
    // 3. 把配置项给实例对象
    myChart.setOption(option);
    //图表自适应
    window.addEventListener('resize', function () {
        //让图表调用resize方法
        //resize方法让图表重新适应
        myChart.resize();
    });
})();
// 折线图1
(function () {
    //折线图1模块制作
    //1.实例化对象
    let myChart = echarts.init(document.querySelector('.line .chart'));

    let yearData = [
        {
            year: '2023',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        }, {
            year: '2024',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    let a1 = document.querySelector('.mainbox .line').querySelector("h2").querySelectorAll("a")[0];
    let a2 = document.querySelector('.mainbox .line').querySelector("h2").querySelectorAll("a")[1];
    //2.指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'axis',
        },
        // 颜色
        color: ['#00f2f1', '#ed3f35'],
        legend: {
            data: ['新增粉丝', '新增游客'],
            // 修改图例组件文字颜色
            textStyle: {
                color: '#4c9bfd',
                type: 'dashed',
            },
            // 距离容器10%
            right: '10%',
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,//显示边框
            borderColor: '#012f4a',//边框颜色
        },
        xAxis: {
            // 类目类型
            type: 'category',
            // 去除轴间距
            boundaryGap: false,
            data: [
                '1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月'],
            // 去除刻度线
            axisTick: {
                show: false,
            },
            // 文字颜色
            axisLabel: {
                color: '#4c9bfd',
            },
            // 去除轴线
            axisLine: {
                show: false,
            }
        },
        yAxis: {
            type: 'value',
            // 去除刻度线
            axisTick: {
                show: false,
            },
            // 文字颜色
            axisLabel: {
                color: '#4c9bfd',
            },
            // 去除轴线
            axisLine: {
                show: false,
            },
            // 修改分割线
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                stack: 'Total',
                // 圆滑线条
                smooth: true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
            },
            {
                name: '新增游客',
                type: 'line',
                //stack是数据堆叠效果
                stack: 'Total',
                // 圆滑线条
                smooth: true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            }
        ]
    };
    myChart.setOption(option);
    //图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
    //点击切换效果
    a1.addEventListener('click', function () {
        option.series[0].data = yearData[0].data[0];
        option.series[1].data = yearData[0].data[1];
        myChart.setOption(option);
    });
    a2.addEventListener('click', function () {
        option.series[0].data = yearData[1].data[0];
        option.series[1].data = yearData[1].data[1];
        myChart.setOption(option);
    });
})();
// 折线图2
(function () {
    //折线图2模块制作
    //1.实例化对象
    let a = [];
    let b = [];
    function s(a, b) {
        for (let i = 0; i < 30; i++) {
            let s = Math.round(Math.random() * 139) + 1;
            a[i] = s;
            s = Math.round(Math.random() * 139) + 1;
            b[i] = s;
        }
    };
    s(a, b);
    let myChart = echarts.init(document.querySelector('.line2 .chart'));
    //2.指定配置项和数据
    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            // data: ['Email', 'Union Ads'],
            // 修改图例组件文字颜色
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 12,
            },
        },
        grid: {
            top: '30',
            left: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
                ],
                axisLabel: {
                    // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12,
                    },
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)',
                    },
                },
            }
        ],
        yAxis: [
            {
                // 隐藏y轴刻度
                axisTick: { show: false },
                // y轴文字标签样式
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12,
                    },
                },
                type: 'value',
                // y轴线的颜色为   rgba(255,255,255,.1)
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                    },
                },
                // y轴分割线的颜色为   rgba(255,255,255,.1)
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                    },
                },
            }
        ],
        series: [
            {
                // 线条平滑
                smooth: true,
                // 单独修改当前线条的样式
                lineStyle: {
                    color: '#0184d5',
                    width: 2,
                },
                // 填充颜色设置
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)', // 渐变色的起始颜色，从上面开始
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.2)', // 渐变线的结束颜色
                            },
                        ],
                        false
                    ),
                    // 阴影的颜色
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                },
                // 设置拐点 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#0184d5',
                    borderColor: 'rgba(221, 220, 107, .3)',
                    borderWidth: 10,
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                name: '播放量',
                type: 'line',

                // stack: 'Total',
                emphasis: {
                    focus: 'series'
                },
                // data: [
                //     16, 138, 17, 28, 114, 76, 132, 43, 17, 125,
                //     11, 144, 73, 124, 71, 109, 108, 14, 143, 43,
                //     33, 3, 33, 43, 60, 51, 86, 45, 40, 104
                // ],
                data: [] = b,
            },
            {
                name: '转发量',
                type: 'line',
                // 设置拐点 小圆点
                areaStyle: {},
                // 拐点大小
                emphasis: {
                    focus: 'series'
                },
                data: [] = a,

                // data: [
                //     56, 44, 13, 46, 45, 4, 77, 124, 83, 97,
                //     18, 80, 114, 5, 80, 85, 81, 112, 44, 138, 112,
                //     76, 115, 107, 58, 149, 67, 22, 29, 132
                // ],
                // 线条平滑
                smooth: true,
                // 单独修改当前线条的样式
                lineStyle: {
                    color: '#00d887',
                    width: 2,
                },
                // 填充颜色设置
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)', // 渐变色的起始颜色，从上面开始
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.2)', // 渐变线的结束颜色
                            },
                        ],
                        false
                    ),
                    // 阴影的颜色
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                },
                // 设置拐点 小圆点
                symbol: 'circle',
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: '#00d887',
                    borderColor: 'rgba(210, 256, 195, 0.2)',
                    borderWidth: 10,

                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option);
    //图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();
//饼形图1
(function () {
    //1.实例化对象
    let myChart = echarts.init(document.querySelector(".pie .chart"));
    //2.指定配置项和数据
    let option = {
        color: ['#006aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
        tooltip: {
            trigger: 'item'
        },
        // 图例组件
        legend: {
            // 距离底部为0%
            bottom: '0%',
            left: 'center',
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '10'
            },
            // 图例组件的宽度，主要用于图例组件的布局。
            itemWidth: 12,
            // 图例组件的高度，主要用于图例组件的布局。
            itemHeight: 12
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                // 设置饼形图在容器中的位置
                radius: ['40%', '60%'],
                // 设置饼形图垂直居中
                center: ['50%', '45%'],
                // 半径模式，可选值：'area'、'radius'。默认为'radius'，使用半径模式。
                // roseType: 'radius',
                avoidLabelOverlap: false,
                // 图形上的文本标签
                label: {
                    // 默认不显示
                    show: false,
                    position: 'center'
                },
                // 链接图形和文字的线条
                labelLine: {
                    // 默认不显示
                    show: false
                },
                data: [
                    { value: 1, name: '0岁以下' },
                    { value: 4, name: '20岁-29岁' },
                    { value: 3, name: '30岁-39岁' },
                    { value: 3, name: '40岁-49岁' },
                    { value: 1, name: '50岁以上' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    //图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();
//饼形图2
(function () {
    //1.实例化对象
    let myChart = echarts.init(document.querySelector(".pie2 .chart"));
    //2.指定配置项和数据
    option = {
        color: [
            '#006cff',
            '#60cda0',
            '#ed8884',
            '#ff9f7f',
            '#0096ff',
            '#9fe6b8',
            '#32c5e9',
            '#1d9dff'
        ],
        tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        legend: {
            bottom: '0%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '10',
            }
        },
        series: [

            {
                name: 'Area Mode',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                // 图形的文字标签
                label: {
                    // 修改文字大小
                    fontSize: 10,
                    //让字体跟随主题色自动变化，若有描边（一般是透明度引起的），去除文字描边
                    color: 'inherit',
                },
                // 链接图形和文字的线条
                labelLine: {
                    // 连接图形的线条
                    length: 6,
                    // 连接文字的线条
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    //图表自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    }
    );
})();
//模拟飞行路线模块地图模块
(function () {
    //1.实例化对象
    let myChart = echarts.init(document.querySelector(".map .chart"));
    //2.地图配置项
    let geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
    };

    let XAData = [
        [{ name: "西安" }, { name: "拉萨", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "西安" }, { name: "广州", value: 100 }],
        [{ name: "西安" }, { name: "西宁", value: 100 }],
        [{ name: "西安" }, { name: "银川", value: 100 }]
    ];

    let XNData = [
        [{ name: "西宁" }, { name: "北京", value: 100 }],
        [{ name: "西宁" }, { name: "上海", value: 100 }],
        [{ name: "西宁" }, { name: "广州", value: 100 }],
        [{ name: "西宁" }, { name: "西安", value: 100 }],
        [{ name: "西宁" }, { name: "银川", value: 100 }]
    ];

    let YCData = [
        [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
        [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
        [{ name: "银川" }, { name: "上海", value: 100 }],
        [{ name: "银川" }, { name: "西安", value: 100 }],
        [{ name: "银川" }, { name: "西宁", value: 100 }]
    ];

    let planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //let planePath = 'arrow';
    let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let dataItem = data[i];

            let fromCoord = geoCoordMap[dataItem[0].name];
            let toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    let color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    let series = [];
    [
        ["西安", XAData],
        ["西宁", XNData],
        ["银川", YCData]
    ].forEach(function (item, i) {
        series.push(
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "red", //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 2,
                symbol: ["none", "arrow"],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    brushType: "stroke"
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{b}"
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            }
        );
    });
    //指定配置项和数据
    let option = {
        tooltip: {
            trigger: "item",
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return (
                        params.data.fromName +
                        ">" +
                        params.data.toName +
                        "<br />" +
                        params.data.value
                    );
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: "vertical",
            top: "bottom",
            left: "right",
            data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "multiple"
        },
        geo: {
            map: "china",
            label: {
                emphasis: {
                    show: true,
                    color: "#fff"
                }
            },
            // 把中国地图放大了1.2倍
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    // 地图省份的背景颜色
                    areaColor: "rgba(20, 41, 87,0.6)",
                    // 地图省份的边框颜色
                    borderColor: "#195BB9",
                    //省份的边框宽度
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: "#2B91B7"
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    }
    );
})();
