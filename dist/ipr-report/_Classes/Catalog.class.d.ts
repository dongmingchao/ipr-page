import { Paragraph } from './Paragraph.class';
export declare class Catalog {
    id: number;
    catalogType: string;
    title: string;
    order: string;
    styleID: string;
    content: string;
    reportID: number;
    parentID: number;
    style: {
        height: string;
    };
    paragraphs: Paragraph[];
    child_catalog: Catalog[];
    _render: {
        ref: Element;
        index: number;
    };
    constructor(values?: any);
}
