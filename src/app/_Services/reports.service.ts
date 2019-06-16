import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import {Catalog} from '../_Classes/Catalog.class';
import {HttpClient} from '@angular/common/http';

// we can now access environment.apiUrl
const API_URL = environment.api_url;

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
    section: Catalog; // this.reportsService.selected.catalog[this.reportsService.selected.index];
    constructor(private http: HttpClient) {
    }

    // readonly get parent_catalog() {
    //     let now = this.root_catalog;
    //     for (let i of this.parent.indexesOfRoot) {
    //         now = now[i].child_catalog;
    //     }
    // }

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

    public async get_catelog(id: number, arg2: number): Promise<Catalog[]> {
        let ret = await this.http.get<Catalog[]>(API_URL + '/get_report_catalog/' + id + '/' + arg2).toPromise();
        ret = ret.map(rollCatalog);
        return ret;
    }

    public async get_content(id: number, child_content: string): Promise<Catalog[]> {
        return await this.http.get<Catalog[]>(API_URL + '/get_content/' + id + '/' + child_content).toPromise();
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
