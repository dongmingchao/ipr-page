import {TrendChart} from './trend';
import {WorldChart} from './geo';
import {Rank} from './rank';
import {TechDistribution} from './pie';

export class IprCharts {

    constructor(type, dataset) {
        Object.assign(this, new this.types[type](dataset));
    }

    types = {
        trend: TrendChart,
        geo: WorldChart,
        rank: Rank,
        tech_division: TechDistribution
    };
}
