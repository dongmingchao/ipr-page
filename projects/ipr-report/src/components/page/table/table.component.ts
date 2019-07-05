import {AfterViewInit, Component, DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, OnInit, Output} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent} from '@nebular/theme';
import {Patent} from '../../../_Classes/Patent/patent';


class Response {
    current_page: number;
    patent_list: Patent[];
    total_num: number;
    total_page: number;
}

@Component({
    selector: 'ipr-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.styl'],
})

export class TableComponent implements DoCheck, OnInit {
    @Output() rowClick = new EventEmitter<NbTreeGridRowComponent>();
    @Output() afterSetData = new EventEmitter<NbTreeGridDataSource<Patent>>();
    @Output() whenFinalPage = new EventEmitter();
    @Output() whenSwitchPage = new EventEmitter();

    @Input() set tableHeaderMap(val: { [key: string]: string; }) {
        this.tableMap = val;
        this.allColumns = Object.keys(val);
    }

    tableMap: { [key: string]: string; };
    allColumns: string[];

    dataSource: NbTreeGridDataSource<Patent>;
    shownDataSource: NbTreeGridDataSource<Patent>;

    sortColumn: string;
    sortDirection: NbSortDirection = NbSortDirection.NONE;
    dataList: Patent[];
    page = {
        num: 0,
        step: 10,
        now_number: 0,
    };
    private customerDiffer: KeyValueDiffer<string, any>;


    @Input() set data(val: Response) {
        if (!val) {
            return;
        }
        this.dataList = val.patent_list;
        this.dataSource = this.dataSourceBuilder
            .create(this.dataList.map(e => ({data: e})));
        this.refreshPage(0);
        this.afterSetData.emit(this.dataSource);
    }

    nextPage() {
        this.refreshPage(this.page.now_number + 1);
    }
    lastPage() {
        this.refreshPage(this.page.now_number - 1);
    }

    refreshPage(now_number) {
        this.page.num = now_number * this.page.step;
        let left = this.page.num;
        if (left < 0) {
            left = 0;
        }
        let right = left + this.page.step;
        if (right >= this.dataList.length) {
            right = this.dataList.length;
            this.whenFinalPage.emit();
        }
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
                .slice(left, right)
                .map(e => ({data: e}))
            );
        this.page.now_number = now_number;
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
        private differs: KeyValueDiffers,
    ) {
    }

    ngOnInit(): void {
        this.customerDiffer = this.differs.find(this.shownDataSource).create();
    }

    ngDoCheck(): void {
        const contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        if (contentDiffer) {
            contentDiffer.forEachChangedItem(r => {
                if (r.key === 'renderData') {
                    this.whenSwitchPage.emit(r);
                }
            });
        }
    }
}
