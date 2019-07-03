import { TrendChart } from './trend';
import { WorldChart } from './geo';
import { Rank } from './rank';
import { TechDistribution } from './pie';
export declare class IprCharts {
    constructor(type: any, dataset: any);
    types: {
        trend: typeof TrendChart;
        geo: typeof WorldChart;
        rank: typeof Rank;
        tech_division: typeof TechDistribution;
    };
}
