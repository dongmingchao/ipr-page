export declare class TrendChart {
    constructor(dataset: any);
    title: {
        text: string;
    };
    tooltip: {
        trigger: string;
        axisPointer: {
            type: string;
            label: {
                backgroundColor: string;
            };
        };
    };
    legend: {
        data: string[];
    };
    toolbox: {
        show: boolean;
        feature: {
            saveAsImage: {};
        };
    };
    dataZoom: {
        show: boolean;
        start: number;
        end: number;
    };
    dataset: {
        source: any[];
    };
    xAxis: {
        type: string;
        boundaryGap: boolean;
    }[];
    yAxis: {
        type: string;
        scale: boolean;
        name: string;
        min: number;
        boundaryGap: number[];
    }[];
    series: {
        name: string;
        type: string;
    }[];
}
