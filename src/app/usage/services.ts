import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Catalog, BackendService} from 'ipr-report';

@Injectable()
export class ReportsService implements BackendService {
    host = 'http://47.110.224.71';

    async get_catelog(id: number, degree: number): Promise<Catalog[]> {
        return await this.http.get<Catalog[]>(this.host + `/get_catalogs/${id}/${degree}/`).toPromise();
    }

    async get_content(id: number, child_content: string): Promise<Catalog> {
        return await this.http.get<Catalog>(this.host + `/get_chapter/${id}/${child_content}/`).toPromise();
    }

    constructor(private http: HttpClient) {
    }
}
