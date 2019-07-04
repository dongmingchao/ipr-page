import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent} from '@nebular/theme';
import {Patent} from '../../../_Classes/Patent/patent';

@Component({
    selector: 'ipr-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.styl'],
})

export class TableComponent {
    @Output() rowClick = new EventEmitter<NbTreeGridRowComponent>();
    @Output() afterSetData = new EventEmitter<NbTreeGridDataSource<Patent>>();
    @Input() set tableHeaderMap(val: { [key: string]: string; })  {
        this.tableMap = val;
        this.allColumns = Object.keys(val);
    }
    tableMap: { [key: string]: string; };
    allColumns: string[];

    dataSource: NbTreeGridDataSource<Patent>;

    sortColumn: string;
    sortDirection: NbSortDirection = NbSortDirection.NONE;

    @Input() set data(val) {
        if (!val) { return; }
        this.dataSource = this.dataSourceBuilder
            .create(val.patent_list.map(e => ({data: e})));
        this.afterSetData.emit(this.dataSource);
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
