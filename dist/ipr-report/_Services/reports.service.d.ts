import { Catalog } from '../_Classes/Catalog.class';
import { BackendService } from '../_Interface/backend.service';
export declare class ReportsService {
    private bes;
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
    constructor(bes: BackendService);
    readonly section: Catalog;
    loadContent(item?: Catalog): void;
    get_catelog(id: number, degree: number): Promise<Catalog[]>;
    get_content(id: number, child_content: string): Promise<Catalog>;
}
