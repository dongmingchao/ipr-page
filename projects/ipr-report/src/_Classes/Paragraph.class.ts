import {IprCharts} from '../components/page/echarts/ipr-charts';

export class Paragraph {
    id: number;
    widgetID: {
        template: string;
        widgetType: number;
        rawData: object;
        _render: IprCharts
    };
    content: string;
    order: number;
    styleID: number;
    hasWidget: boolean;
    widgetVertical: boolean;
    catalogID: number;
}
