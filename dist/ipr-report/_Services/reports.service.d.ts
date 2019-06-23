import { Catalog } from '../_Classes/Catalog.class';
import { HttpClient } from '@angular/common/http';
export declare class ReportsService {
    private http;
    host: string;
    root_catalog: Catalog[];
    parent: {
        catalog: Catalog[];
        indexesOfRoot: number[];
    };
    selected: {
        catalog: Catalog[];
        index: number;
    };
    focusContent: {
        index: number;
        el: HTMLDivElement;
    };
    alreadyAdd: number[];
    constructor(http: HttpClient);
    readonly section: Catalog;
    loadContent(item?: Catalog): void;
    nextPageId(): number;
    nextContentId(): number;
    get_catelog(id: number, degree: number): Promise<Catalog[]>;
    get_content(id: number, child_content: string): Promise<Catalog[]>;
}
