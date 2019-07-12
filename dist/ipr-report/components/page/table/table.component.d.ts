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
    whenSwitchPage: EventEmitter<number>;
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
    /**
     * 触发换页事件，展示页码中内容，并设定新的相关视图信息
     * @param now_number 页码
     */
    refreshPage(now_number: number): void;
    setPage(now_number: number): void;
    updateSort(sortRequest: NbSortRequest): void;
    updateSearch(searchQuery: string): void;
    /**
     * 从总数据源取部分数据展示
     */
    updateShow(): void;
    getSortDirection(column: string): NbSortDirection;
    getShowOn(index: number): number;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<Patent>, differs: KeyValueDiffers);
    ngOnInit(): void;
    ngDoCheck(): void;
}
export {};
