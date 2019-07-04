export declare class TechDivision {
    label: string;
    count: number;
    children_label: TechDivision[];
}
declare class Response {
    total_num: number;
    domain_id: number;
    deepth: number;
    tech_division_count: TechDivision[];
}
export declare class TechDistribution {
    legend: {
        type: string;
    };
    tooltip: {
        trigger: string;
        formatter: string;
    };
    series: any[];
    private readonly _flat;
    constructor(dataset: Response);
    setPieSeries(level: any[]): void;
}
export {};
