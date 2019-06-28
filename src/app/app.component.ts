import {Component} from '@angular/core';
import {Catalog, ReportsService} from './usage/mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
})
export class AppComponent {
    page: Catalog[];
    report_header = {
        id: 4,
        name: 'text_report',
        create_time: '2019-06-20T16:37:47.821542+08:00',
        update_time: '2019-06-20T16:37:47.821590+08:00',
        abstract: null,
        agency: null,
        patent_count: null,
        domain: null,
        description: null,
        rating: null,
        rating_counts: null,
        reading_counts: null,
        image: null
    };

    constructor(private report: ReportsService) {
        report.get_catelog(6, 3).then(ret => {
            this.page = ret;
        });
    }
}
