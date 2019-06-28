import {Component} from '@angular/core';
import {Catalog, ReportsService} from './usage/mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
})
export class AppComponent {
    page: Catalog[];

    constructor(private report: ReportsService) {
        report.get_catelog(4, 3).then(ret => {
            this.page = ret;
        });
    }
}
