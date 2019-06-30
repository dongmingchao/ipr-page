import {Component, Input} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {Patent} from '../../../_Classes/Patent/patent';

@Component({
    selector: 'ipr-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.styl'],
})

export class TableComponent {
    tableMap = {
        publication_number: '专利号',
        title: '专利名',
        applicant_str: '申请人',
        application_date: '申请日期',
        status: '状态'
    };
    allColumns = ['publication_number', 'title', 'applicant_str', 'application_date', 'status'];

    dataSource: NbTreeGridDataSource<Patent>;

    sortColumn: string;
    sortDirection: NbSortDirection = NbSortDirection.NONE;

    @Input() set data(val) {
        this.dataSource = this.dataSourceBuilder
            .create(val.patent_list.map(e => ({data: e})));
    }

    updateSort(sortRequest: NbSortRequest): void {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    }

    getSortDirection(column: string): NbSortDirection {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return NbSortDirection.NONE;
    }

    getShowOn(index: number) {
        const minWithForMultipleColumns = 400;
        const nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    }

    constructor(
        private dataSourceBuilder: NbTreeGridDataSourceBuilder<Patent>,
    ) {
    }
}
