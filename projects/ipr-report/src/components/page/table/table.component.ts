import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent} from '@nebular/theme';
import {Patent} from '../../../_Classes/Patent/patent';

@Component({
    selector: 'ipr-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.styl'],
})

export class TableComponent {
    @Output() rowClick = new EventEmitter<NbTreeGridRowComponent>();
    tableMap = {
        publication_number: '专利号',
        title: '专利名',
        standard_applicant_str: '申请人',
        application_date: '申请日期',
        status: '状态',
        importance_reason: '重要原因'
    };
    allColumns = [
        'publication_number',
        'title', 'standard_applicant_str',
        'application_date',
        'status',
        'importance_reason'
    ];

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
