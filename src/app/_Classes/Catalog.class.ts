import {Paragraph} from './Paragraph.class';

export class Catalog {
    id: number;
    catalogType: string;
    title: string;
    order: string;
    styleID: string;
    content: string;
    reportID: number;
    parentID: number;
    style = {
        height: '0',
    };
    paragraphs: Paragraph[];
    child_catalog: Catalog[];
    constructor(values: any = {}) {
        Object.assign(this, values);
    }
}
