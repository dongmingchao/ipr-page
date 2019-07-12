import {AfterViewInit, Component, DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, OnInit, Output} from '@angular/core';
import {NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridRowComponent} from '@nebular/theme';
import {Patent} from '../../../_Classes/Patent/patent';
import {NbCollectionViewer} from '@nebular/theme/components/cdk/collections/collection-viewer';
import {Observable} from 'rxjs';
import {ListRange} from '@angular/cdk/collections';


class Response {
    current_page: number;
    patent_list: Patent[];
    total_num: number;
    total_page: number;
}

class Viewer implements NbCollectionViewer {
    viewChange: Observable<ListRange>;

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
    @Output() whenSwitchPage = new EventEmitter<number>();
    @Output() whenSorted = new EventEmitter();
    @Output() whenFiltered = new EventEmitter();

    @Input() set clickNextPage(val: { onclick: () => void, disable?: () => boolean }) {
        this.nextPage = val.onclick;
        if (val.disable) {
            this.disableNextPage = val.disable;
        }
    }

    @Input() set clickLastPage(val: { onclick: () => void, disable?: () => boolean }) {
        this.lastPage = val.onclick;
        if (val.disable) {
            this.disableLastPage = val.disable;
        }
    }

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
        sum: 0,
    };
    private customerDiffer: KeyValueDiffer<string, any>;


    @Input() set data(val: Response) {
        if (!val) {
            return;
        }
        this.dataList = val.patent_list;
        this.page.sum = Math.ceil(this.dataList.length / this.page.step) - 1;
        this.dataSource = this.dataSourceBuilder
            .create(this.dataList.map(e => ({data: e})));
        this.setPage(0);
        this.afterSetData.emit(this.dataSource);
    }

    disableNextPage(): boolean {
        return this.page.now_number === this.page.sum;
    }

    disableLastPage(): boolean {
        return this.page.now_number === 0;
    }

    nextPage() {
        this.refreshPage(this.page.now_number + 1);
    }

    lastPage() {
        this.refreshPage(this.page.now_number - 1);
    }

    /**
     * 触发换页事件，展示页码中内容，并设定新的相关视图信息
     * @param now_number 页码
     */
    refreshPage(now_number: number) {
        this.whenSwitchPage.emit(now_number);
        this.setPage(now_number);
    }

    setPage(now_number: number) {
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
        this.sourceToShow(left, right);
        this.page.now_number = now_number;
    }

    sourceToShow(left: number, right?: number) {
        if (!right) {
            right = left + this.page.step;
        }
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
                .slice(left, right)
                .map(e => ({data: e}))
            );
    }

    updateSort(sortRequest: NbSortRequest): void {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
        this.whenSorted.emit();
    }

    public updateSearch(searchQuery: string) {
        this.dataSource.filter(searchQuery);
        this.whenFiltered.emit();
    }

    /**
     * 从总数据源取部分数据展示
     */
    updateShow() {
        const v = new Viewer();
        const data = [];
        this.dataSource.connect(v).subscribe(r => {
            for (const each of r) {
                data.push(each.data);
            }
        });
        this.dataList = data;
        // this.setPage(0);
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
        // this.customerDiffer = this.differs.find(this.shownDataSource).create();
    }

    ngDoCheck(): void {
        // const contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        // if (contentDiffer) {
        //     contentDiffer.forEachChangedItem(r => {
        //         if (r.key === 'renderData') {
        //             this.whenSwitchPage.emit(r);
        //         }
        //     });
        // }
    }
}
