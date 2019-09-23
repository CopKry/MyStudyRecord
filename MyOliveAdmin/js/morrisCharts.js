// morri中的第一个图表
var myChat1 = echarts.init(document.getElementById('graph-bar'))
option = {
    tooltip: {
        backgroundColor: "rgba(255,255,255,0.8)",
        // borderRadius:'4px',
        padding: 8,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        extraCssText: 'border-radius:5px;line-height:1.3;',
        position: function (pos, params, dom, rect, size) {
            if (pos[0] < size.viewSize[0] * 0.25) {
                return ['11.4%', '45%'];
            }
            else if (pos[0] < size.viewSize[0] * 0.5) {
                return ['35.4%', '45%']
            }
            else if (pos[0] < size.viewSize[0] * 0.75) {
                return ['59.7%', '45%']
            } else {
                return ['83.9%', '45%']
            }
        },
        formatter: function (params) {
            var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);">' + params[0].name + '</p></div>'
            res += '<p style="color:rgb(114,208,235)">' + 'x' + ':' + params[0].data + '</p>';
            res += '<p style="color:rgb(63,169,199)">' + 'y' + ':' + params[1].data + '</p>';
            res += '<p style="color:rgb(10,114,144)">' + 'z' + ':' + params[2].data + '</p>';
            return res;
        },
        textStyle: {
            align: 'center'
        },
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            lineStyle: {
                color: 'transparent'
            }       // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    },
    grid: {
        height: '300px',
        left: '1%',
        right: '1%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4'],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false
            },
            axisPointer: {
                show: false
            },
            axisTick: {
                show: false
            },
            max: 4,
            min: 0,
            minIterval: 1,
            maxIterval: 1
        }
    ],
    series: [
        {
            barGap: '4%',
            name: '',
            type: 'bar',
            data: [3, 2, 0, 2],
            itemStyle: {
                normal: {
                    color: 'rgb(114,208,235)'
                }
            }
        },
        {
            name: '',
            type: 'bar',
            data: [2, 0, 2, 4],
            itemStyle: {
                normal: {
                    color: 'rgb(63,169,199)'
                }
            }
        },
        {
            name: '',
            type: 'bar',
            data: [3, 1, 4, 3],
            itemStyle: {
                normal: {
                    color: 'rgb(10,114,144)'
                }
            }
        }
    ]
};
myChat1.setOption(option);
// 第二个图表
var myChat2 = echarts.init(document.getElementById('graph-line'));
option2 = {
    tooltip: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        extraCssText: 'border-radius:10px;line-height:1.5',
        position: function (pos, params, dom, rect, size) {
            if (pos[0] < size.viewSize[0] * 0.1) {
                return ['0.5%', '0%']
            } else if (pos[0] < size.viewSize[0] * 0.2) {
                return ['11.5%', '20.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.3) {
                return ['22%', '65.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.4) {
                return ['32%', '45.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.5) {
                return ['42.5%', '43.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.6) {
                return ['53%', '25.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.7) {
                return ['64%', '59.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.8) {
                return ['73.5%', '16.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.9) {
                return ['84.5%', '44.5%']
            } else {
                return ['94.5%', '31.5%']
            }
        },
        backgroundColor: '#fff',
        formatter: function (params) {
            var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);">' + params[0].name + '</p></div>'
            res += '<p style="color:rgb(114,208,235)">' + '值' + ':' + params[0].data + '</p>';
            return res;
        },
        textStyle: {
            align: 'center'
        },
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            lineStyle: {
                color: 'transparent'
            }       // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        height: '290px',
        left: '3%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisPointer: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'value',
        min: 0,
        max: 40
    },
    series: [{
        data: [34, 24, 3, 12, 13, 22, 5, 26, 12, 19],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: '7',
        itemStyle: {
            color: 'rgb(114,208,235)'
        },
        lineStyle: {
            normal: {
                color: 'rgb(114,208,235)'
            }
        }
    }]
};

myChat2.setOption(option2)
// 面积图表
myChat3 = echarts.init(document.getElementById('graph-area-line'))
option3 = {
    tooltip: {
        textStyle: {
            align: 'center'
        },
        backgroundColor: '#fff',
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'transparent'
            }
        },
        formatter: function (params) {
            if (params[0].name == '2011-03') {
                var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);"> 2011 Q1 </p></div>'
            } else if (params[0].name == '2011-05') {
                var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);"> 2011 Q2 </p></div>'
            } else if (params[0].name == '2011-07') {
                var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);"> 2011 Q3 </p></div>'
            } else if (params[0].name == '2011-09') {
                var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);"> 2011 Q4 </p></div>'
            } else if (params[0].name == '2011-11') {
                var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);"> 2011 Q5 </p></div>'
            }
            res += '<p style="color:rgb(114,208,235)">' + 'y' + ':' + params[0].data + '</p>';
            res += '<p style="color:rgb(63,169,199)">' + 'z' + ':' + params[1].data + '</p>';
            return res;
        },
        position: function (pos, params, dom, rect, size) {
            if (pos[0] < size.viewSize[0] * 0.2) {
                return ['0.5%', '35%']
            } else if (pos[0] < size.viewSize[0] * 0.4) {
                return ['22%', '45%']
            }
            else if (pos[0] < size.viewSize[0] * 0.6) {
                return ['45%', '40.5%']
            }
            else if (pos[0] < size.viewSize[0] * 0.8) {
                return ['68%', '35.5%']
            }
            else {
                return ['90.5%', '31.5%']
            }
        },
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'category',
        boundaryGap: false,
        data: ['2011-03', '2011-05', '2011-07', '2011-09', '2011-11']
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisPointer: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'value',
        min: 0,
        max: 8,
        minIterval: 2
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '4%',
        height: '290px',
        containLabel: true
    },
    series: [
        {
            data: [3, 2, 2, 3, 3],
            type: 'line',
            smooth: true,
            stack: '堆叠',
            symbol: 'circle',
            symbolSize: 8,
            areaStyle: {
                normal: {
                    opacity: 1,
                    color: "rgb(197,229,238)"

                }
            },
            lineStyle: {
                normal: {

                    color: 'rgb(114,208,235)'
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    color: 'rgb(114,208,235)'

                }
            }
        },

        {
            data: [3, 1, 4, 3, 4],
            type: 'line',
            smooth: true,
            stack: '堆叠',
            symbol: 'circle',
            symbolSize: 8,
            areaStyle: {
                normal: {
                    opacity: 1,
                    color: "rgb(87,166,188)"
                }
            },
            lineStyle: {
                normal: {
                    color: 'rgb(10,114,144)'
                }

            },

            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    color: 'rgb(10,114,144)'
                }
            }
        },

    ]


};
myChat3.setOption(option3);
var myChat4 = echarts.init(document.getElementById('graph-donut'))
option4 = {
    tooltip: {
        trigger: 'axis',
        // show:false,
        // formatter: function (params) {
        //     var res = '<div"><p style="font-size:10px;font-weight:bold; color:rgb(102,102,102);">' + params[0].name + '</p></div>'
        //     res += '<p style="color:rgb(114,208,235)">' + '值' + ':' + params[0].data + '</p>';
        //     console.log(params);
        //     return res;
        // },
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['', '', '', '', '']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        if (params.value > 60) {
                            return 'rgb(114,208,235)'
                        } else if (params.value > 14) {
                            return 'rgb(71,169,197)'
                        } else if (params.value > 9) {
                            return 'rgb(39,139,167)'
                        }
                        else {
                            return 'rgb(10,120,152)'
                        }
                    },
                    label: {
                        textStyle: function (params) {
                            console.log(100);
                        },
                        formatter: function (params) {
                            var res = '';
                            if (params.data.value == 5) {
                                res = params.data.name
                                res += '\n' + '最多' + params.data.value + '%'
                                return res;
                            }
                            else if (params.data.value == 10) {
                                res = params.data.name
                                res += '\n' + '大约' + params.data.value + '%'
                                return res;
                            }
                            else if (params.data.value == 15) {
                                res = params.data.name
                                res += '\n' + '大约' + params.data.value + '%'
                                return res;
                            }
                            else if (params.data.value == 70) {
                                res = params.data.name
                                res += '\n' + '至少' + params.data.value + '%'
                                return res;
                            }
                        }
                    }
                }
            },
            data: [
                { value: 70, name: '文件', },
                { value: 5, name: '一个非常非常长的标签' },
                { value: 10, name: '巴兹' },
                { value: 15, name: '酒吧' },
            ]
        }
    ]

};
myChat4.setOption(option4)