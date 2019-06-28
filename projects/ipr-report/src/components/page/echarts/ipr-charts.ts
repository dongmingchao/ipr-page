import {EChartOption} from 'echarts';

export class IprCharts {

    constructor(type, dataset) {
        Object.assign(this, this[type]);
        this.dataset.source = dataset;
    }

    trend: EChartOption = {
        title: {
            text: '行业专利动态数据'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data: ['专利', '申请人', '发明人']
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        dataset: {
            source: []
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '总量',
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                name: '专利',
                type: 'bar',
            },
            {
                name: '申请人',
                type: 'line',
            },
            {
                name: '发明人',
                type: 'line',
            }
        ]
    };
}
