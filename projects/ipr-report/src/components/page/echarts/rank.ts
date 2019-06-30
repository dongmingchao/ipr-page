import {EChartOption} from 'echarts';

export class Rank {
    constructor(dataset) {
        this.dataset.source = dataset.result;
    }

    dataset = {
        source: [
            // ['amount', 'product'],
            // [58212, 'Matcha Latte'],
            // [78254, 'Milk Tea'],
            // [41032, 'Cheese Cocoa'],
            // [12755, 'Cheese Brownie'],
            // [20145, 'Matcha Cocoa'],
            // [79146, 'Tea'],
            // [91852, 'Orange Juice'],
            // [101852, 'Lemon Juice'],
            // [20112, 'Walnut Brownie']
        ]
    };
    // grid: {containLabel: true},
    xAxis = {name: ''};
    yAxis = {
        type: 'category',
        // axisLabel: {
        //     inside: true,
        // },
        // z: 3,
        // axisTick: {
        //     inside: true
        // }
    };
    series = [{
        type: 'bar',
        encode: {
            x: 'count',
            y: 'name'
        },
    }];
}
