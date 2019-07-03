export declare class WorldChart {
    constructor(dataset: any);
    backgroundColor: string;
    title: {
        text: string;
    };
    tooltip: {
        trigger: string;
    };
    visualMap: {
        min: number;
        max: number;
        calculable: boolean;
        inRange: {
            color: string[];
        };
        textStyle: {
            color: string;
        };
    };
    dataset: {
        source: any[];
    };
    series: {
        type: string;
        mapType: string;
        roam: boolean;
        zoom: number;
        nameMap: {
            China: string;
            'United States': string;
        };
    }[];
}
