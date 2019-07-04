export declare class Rank {
    constructor(dataset: any);
    dataset: {
        source: any[];
    };
    xAxis: {
        name: string;
    };
    yAxis: {
        type: string;
    };
    series: {
        type: string;
        encode: {
            x: string;
            y: string;
        };
    }[];
}
