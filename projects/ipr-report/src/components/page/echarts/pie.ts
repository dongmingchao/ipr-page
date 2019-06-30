import {EChartOption} from 'echarts';

export class TechDivision {
    label: string;
    count: number;
    children_label: TechDivision[];
}

class Response {
    total_num: number;
    domain_id: number;
    deepth: number;
    tech_division_count: TechDivision[];
}

function initArray(array: any[], level: number) {
    if (array[level] === undefined) {
        array[level] = [];
    }
}

function rollForPieChart(children_label: any[], out: any[], level: number) {
    initArray(out, level);
    for (const each of children_label) {
        const value: any = {name: each.label, value: each.count};
        out[level].push(value);
        if (each.children_label.length) {
            rollForPieChart(each.children_label, out, level + 1);
        } else {
            initArray(out, level + 1);
            out[level + 1].push(value);
        }
    }
}

function deal_tech_division_req(ret: Response) {
    let final = [];
    rollForPieChart(ret.tech_division_count, final, 0);
    final = final.map(e => {
        const index = final.indexOf(e);
        return {
            type: 'pie',
            data: e
        };
    });
    final.pop();
    return final;
}

export class TechDistribution {
    legend = {
        type: 'scroll',
        // orient: 'vertical',
        // x: 'left',
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    };
    tooltip = {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    };
    series = [];
    private readonly _flat: any[];

    constructor(dataset: Response) {
        this._flat = deal_tech_division_req(dataset);
        this.setPieSeries([0]);
    }

    setPieSeries(level: any[]) {
        const series = [];
        for (const i of level) {
            series.push(this._flat[i]);
        }
        for (let i = 0; i < series.length; i++) {
            series[i].radius = [i * 70, i * 70 + 70];
            series[i].label = {
                normal: {
                    show: false,
                    position: 'inner'
                }
            };
            series[i].labelLine = {
                normal: {
                    show: false
                }
            };
        }
        this.series = series;
    }
}
