export class Paragraph {
    id: number;
    widgetID: {
        template: string;
        widgetType: number;
        rawData: object;
    };
    content: string;
    order: number;
    styleID: number;
    hasWidget: boolean;
    widgetVertical: boolean;
    catalogID: number;
}
