import {Inject, Injectable} from '@angular/core';
import {Catalog} from '../_Classes/Catalog.class';
import {BackendService, IprReportBackend} from '../_Interface/backend.service';

function rollCatalog(each) {
    if (each.child_catalog instanceof Array) {
        each.child_catalog = each.child_catalog.map(rollCatalog);
    }
    return new Catalog(each);
}

@Injectable()
export class ReportsService {
    root_catalog: Catalog[];
    parent: {
        catalog: Catalog[],
        indexesOfRoot: number[],
    } = {
        catalog: [],
        indexesOfRoot: [0], // stack 父层级相对root层级的index
    };
    selected: {
        catalog: Catalog[],
        index: number,
    } = {
        catalog: [],
        index: 0,
    };
    focusContent: {
        index: number,
        el: HTMLDivElement,
    } = {
        index: 0,
        el: null,
    };
    alreadyAdd: number[] = [];

    constructor(@Inject(IprReportBackend) private bes: BackendService) {
    }

    get section(): Catalog {
        return this.selected.catalog[this.selected.index];
    }

    loadContent(item?: Catalog) {
        let section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then(json => {
                console.log('section content', json);
                if (!section.paragraphs) {
                    section.paragraphs = json.paragraphs;
                }
            });
    }

    public async get_catelog(id: number, degree: number): Promise<Catalog[]> {
        let ret = await this.bes.get_catelog(id, degree);
        ret = ret.map(rollCatalog);
        return ret;
    }

    public async get_content(id: number, child_content: string): Promise<Catalog> {
        return this.bes.get_content(id, child_content);
    }
}
