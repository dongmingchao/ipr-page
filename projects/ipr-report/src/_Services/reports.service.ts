import {Injectable} from '@angular/core';
import {Catalog} from '../_Classes/Catalog.class';
import {HttpClient} from '@angular/common/http';

function rollCatalog(each) {
    if (each.child_catalog instanceof Array) {
        each.child_catalog = each.child_catalog.map(rollCatalog);
    }
    return new Catalog(each);
}

@Injectable()
export class ReportsService {
    host = 'http://47.110.224.71';
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

    constructor(private http: HttpClient) {
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
                console.log('section content', json[0]);
                if (!section.paragraphs) {
                    section.paragraphs = json[0].paragraphs;
                }
            });
    }

    nextPageId(): number {
        let nextIndex = this.selected.index + 1;
        if (nextIndex >= this.selected.catalog.length) {
            this.selected.catalog = this.parent.catalog;
            nextIndex = this.parent.indexesOfRoot.pop() + 1;
        }
        console.log('next index', nextIndex, this.selected.catalog);
        return this.selected.catalog[nextIndex].id;
    }

    nextContentId(): number {
        return 0;
    }

    public async get_catelog(id: number, degree: number): Promise<Catalog[]> {
        let ret = await this.http.get<Catalog[]>(this.host + `/get_catalogs/${id}/${degree}/`).toPromise();
        ret = ret.map(rollCatalog);
        return ret;
    }

    public async get_content(id: number, child_content: string): Promise<Catalog[]> {
        return await this.http.get<Catalog[]>(this.host + `/get_chapter/${id}/${child_content}/`).toPromise();
    }

    // public get_json_data(name: string) {
    //     return this.http
    //         .get('assets/data/' + name + '.json')
    //         .map(response => {
    //             const catelogs = response.json();
    //             return catelogs;
    //         })
    //         .catch(this.handleError);
    // }
    //
    // private handleError(error: Response | any) {
    //     console.error('ApiService::handleError', error);
    //     return Observable.throw(error);
    // }
}
