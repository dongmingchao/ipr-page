import {EChartOption, registerMap} from 'echarts';
import worldMapData from './maps_data/world.json';

registerMap('world', worldMapData);

export class WorldChart {
    constructor(dataset) {
        this.dataset.source = dataset.geo;
    }

    backgroundColor = '#404a59';
    title = {
        text: '',
    };
    tooltip = {
        trigger: 'item'
    };
    visualMap = {
        min: 0,
        max: 20000,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    };
    dataset = {
        source: [
            // ['US', 152],
            // ['CN', 11129]
        ]
    };
    series = [{
        type: 'map',
        mapType: 'world',
        // roam: true,
        zoom: 1.3,
        nameMap: {
            China: 'CN',
            'United States': 'US'
        }
    }];
}
