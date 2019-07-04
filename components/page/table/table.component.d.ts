import { EventEmitter } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent } from '@nebular/theme';
import { Patent } from '../../../_Classes/Patent/patent';
export declare class TableComponent {
    private dataSourceBuilder;
    rowClick: EventEmitter<NbTreeGridRowComponent>;
    afterSetData: EventEmitter<NbTreeGridDataSource<Patent>>;
    tableHeaderMap: {
        [key: string]: string;
    };
    tableMap: {
        [key: string]: string;
    };
    allColumns: string[];
    dataSource: NbTreeGridDataSource<Patent>;
    sortColumn: string;
    sortDirection: NbSortDirection;
    data: any;
    updateSort(sortRequest: NbSortRequest): void;
    getSortDirection(column: string): NbSortDirection;
    getShowOn(index: number): number;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<Patent>);
}
