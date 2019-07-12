import { DoCheck, EventEmitter, KeyValueDiffers, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent } from '@nebular/theme';
import { Patent } from '../../../_Classes/Patent/patent';
declare class Response {
    current_page: number;
    patent_list: Patent[];
    total_num: number;
    total_page: number;
}
export declare class TableComponent implements DoCheck, OnInit {
    private dataSourceBuilder;
    private differs;
    rowClick: EventEmitter<NbTreeGridRowComponent>;
    afterSetData: EventEmitter<NbTreeGridDataSource<Patent>>;
    whenFinalPage: EventEmitter<{}>;
    whenSwitchPage: EventEmitter<{}>;
    clickNextPage: {
        onclick: () => void;
        disable?: () => boolean;
    };
    clickLastPage: {
        onclick: () => void;
        disable?: () => boolean;
    };
    tableHeaderMap: {
        [key: string]: string;
    };
    tableMap: {
        [key: string]: string;
    };
    allColumns: string[];
    dataSource: NbTreeGridDataSource<Patent>;
    shownDataSource: NbTreeGridDataSource<Patent>;
    sortColumn: string;
    sortDirection: NbSortDirection;
    dataList: Patent[];
    page: {
        num: number;
        step: number;
        now_number: number;
        sum: number;
    };
    private customerDiffer;
    data: Response;
    disableNextPage(): boolean;
    disableLastPage(): boolean;
    nextPage(): void;
    lastPage(): void;
    refreshPage(now_number: any): void;
    updateSort(sortRequest: NbSortRequest): void;
    updateSearch(searchQuery: string): void;
    updateShow(): void;
    getSortDirection(column: string): NbSortDirection;
    getShowOn(index: number): number;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<Patent>, differs: KeyValueDiffers);
    ngOnInit(): void;
    ngDoCheck(): void;
}
export {};
