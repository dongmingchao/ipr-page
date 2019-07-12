import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
class Response {
}
class Viewer {
}
let TableComponent = class TableComponent {
    constructor(dataSourceBuilder, differs) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.differs = differs;
        this.rowClick = new EventEmitter();
        this.afterSetData = new EventEmitter();
        this.whenFinalPage = new EventEmitter();
        this.whenSwitchPage = new EventEmitter();
        this.whenSorted = new EventEmitter();
        this.whenFiltered = new EventEmitter();
        this.sortDirection = NbSortDirection.NONE;
        this.page = {
            num: 0,
            step: 10,
            now_number: 0,
            sum: 0,
        };
    }
    set clickNextPage(val) {
        this.nextPage = val.onclick;
        if (val.disable) {
            this.disableNextPage = val.disable;
        }
    }
    set clickLastPage(val) {
        this.lastPage = val.onclick;
        if (val.disable) {
            this.disableLastPage = val.disable;
        }
    }
    set tableHeaderMap(val) {
        this.tableMap = val;
        this.allColumns = Object.keys(val);
    }
    set data(val) {
        if (!val) {
            return;
        }
        this.dataList = val.patent_list;
        this.page.sum = Math.ceil(this.dataList.length / this.page.step) - 1;
        this.dataSource = this.dataSourceBuilder
            .create(this.dataList.map(e => ({ data: e })));
        this.setPage(0);
        this.afterSetData.emit(this.dataSource);
    }
    disableNextPage() {
        return this.page.now_number === this.page.sum;
    }
    disableLastPage() {
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
    refreshPage(now_number) {
        this.whenSwitchPage.emit(now_number);
        this.setPage(now_number);
    }
    setPage(now_number) {
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
    sourceToShow(left, right) {
        if (!right) {
            right = left + this.page.step;
        }
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
            .slice(left, right)
            .map(e => ({ data: e })));
    }
    updateSort(sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
        this.whenSorted.emit();
    }
    updateSearch(searchQuery) {
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
        // this.shownDataSource = this.dataSourceBuilder
        //     .create(this.dataList
        //         .slice(0, this.page.step)
        //         .map(e => ({data: e}))
        //     );
        this.setPage(0);
    }
    getSortDirection(column) {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return NbSortDirection.NONE;
    }
    getShowOn(index) {
        const minWithForMultipleColumns = 400;
        const nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    }
    ngOnInit() {
        // this.customerDiffer = this.differs.find(this.shownDataSource).create();
    }
    ngDoCheck() {
        // const contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        // if (contentDiffer) {
        //     contentDiffer.forEachChangedItem(r => {
        //         if (r.key === 'renderData') {
        //             this.whenSwitchPage.emit(r);
        //         }
        //     });
        // }
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "rowClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "afterSetData", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "whenFinalPage", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "whenSwitchPage", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "whenSorted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "whenFiltered", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "clickNextPage", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "clickLastPage", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "tableHeaderMap", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Response),
    tslib_1.__metadata("design:paramtypes", [Response])
], TableComponent.prototype, "data", null);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'ipr-table',
        template: "<table [nbTreeGrid]=\"shownDataSource\"\r\n       [nbSort]=\"dataSource\"\r\n       (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"disableLastPage()\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton disabled>{{page.now_number+1}}</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"disableNextPage()\">\u4E0B\u4E00\u9875</button>\r\n    <button nbButton [disabled]=\"page.sum === page.now_number\" (click)=\"refreshPage(page.sum)\">...{{page.sum+1}}</button>\r\n</div>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
        KeyValueDiffers])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekksTUFBTSxRQUFRO0NBS2I7QUFFRCxNQUFNLE1BQU07Q0FHWDtBQVFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUF3SnZCLFlBQ1ksaUJBQXNELEVBQ3RELE9BQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUF6SjFCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBNEI1QyxrQkFBYSxHQUFvQixlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXRELFNBQUksR0FBRztZQUNILEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsQ0FBQztZQUNiLEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQztJQW1IRixDQUFDO0lBcEpRLElBQUksYUFBYSxDQUFDLEdBQXFEO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8s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S1A7QUFFUTtJQUFSLEtBQUssRUFBRTs7O21EQUtQO0FBRVE7SUFBUixLQUFLLEVBQUU7OztvREFHUDtBQW9CUTtJQUFSLEtBQUssRUFBRTtzQ0FBZSxRQUFROzZDQUFSLFFBQVE7MENBVTlCO0FBdkRRLGNBQWM7SUFOMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsMnpDQUFxQzs7S0FFeEMsQ0FBQzs2Q0EySmlDLDJCQUEyQjtRQUNyQyxlQUFlO0dBMUozQixjQUFjLENBNEsxQjtTQTVLWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYlNvcnREaXJlY3Rpb24sIE5iU29ydFJlcXVlc3QsIE5iVHJlZUdyaWREYXRhU291cmNlLCBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsIE5iVHJlZUdyaWRSb3dDb21wb25lbnR9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtQYXRlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1BhdGVudC9wYXRlbnQnO1xyXG5pbXBvcnQge05iQ29sbGVjdGlvblZpZXdlcn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUvY29tcG9uZW50cy9jZGsvY29sbGVjdGlvbnMvY29sbGVjdGlvbi12aWV3ZXInO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0xpc3RSYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcbiAgICBjdXJyZW50X3BhZ2U6IG51bWJlcjtcclxuICAgIHBhdGVudF9saXN0OiBQYXRlbnRbXTtcclxuICAgIHRvdGFsX251bTogbnVtYmVyO1xyXG4gICAgdG90YWxfcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBWaWV3ZXIgaW1wbGVtZW50cyBOYkNvbGxlY3Rpb25WaWV3ZXIge1xyXG4gICAgdmlld0NoYW5nZTogT2JzZXJ2YWJsZTxMaXN0UmFuZ2U+O1xyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+PigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5GaW5hbFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlblN3aXRjaFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuU29ydGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5GaWx0ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2xpY2tOZXh0UGFnZSh2YWw6IHsgb25jbGljazogKCkgPT4gdm9pZCwgZGlzYWJsZT86ICgpID0+IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubmV4dFBhZ2UgPSB2YWwub25jbGljaztcclxuICAgICAgICBpZiAodmFsLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlTmV4dFBhZ2UgPSB2YWwuZGlzYWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGNsaWNrTGFzdFBhZ2UodmFsOiB7IG9uY2xpY2s6ICgpID0+IHZvaWQsIGRpc2FibGU/OiAoKSA9PiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLmxhc3RQYWdlID0gdmFsLm9uY2xpY2s7XHJcbiAgICAgICAgaWYgKHZhbC5kaXNhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUxhc3RQYWdlID0gdmFsLmRpc2FibGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCB0YWJsZUhlYWRlck1hcCh2YWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XHJcbiAgICAgICAgdGhpcy50YWJsZU1hcCA9IHZhbDtcclxuICAgICAgICB0aGlzLmFsbENvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcclxuICAgIGFsbENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcbiAgICBzaG93bkRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICBkYXRhTGlzdDogUGF0ZW50W107XHJcbiAgICBwYWdlID0ge1xyXG4gICAgICAgIG51bTogMCxcclxuICAgICAgICBzdGVwOiAxMCxcclxuICAgICAgICBub3dfbnVtYmVyOiAwLFxyXG4gICAgICAgIHN1bTogMCxcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGN1c3RvbWVyRGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcblxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbDogUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSB2YWwucGF0ZW50X2xpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlLnN1bSA9IE1hdGguY2VpbCh0aGlzLmRhdGFMaXN0Lmxlbmd0aCAvIHRoaXMucGFnZS5zdGVwKSAtIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3QubWFwKGUgPT4gKHtkYXRhOiBlfSkpKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5hZnRlclNldERhdGEuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm5vd19udW1iZXIgPT09IHRoaXMucGFnZS5zdW07XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUxhc3RQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Uubm93X251bWJlciA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kem5Y+R5o2i6aG15LqL5Lu277yM5bGV56S66aG156CB5Lit5YaF5a6577yM5bm26K6+5a6a5paw55qE55u45YWz6KeG5Zu+5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gbm93X251bWJlciDpobXnoIFcclxuICAgICAqL1xyXG4gICAgcmVmcmVzaFBhZ2Uobm93X251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KG5vd19udW1iZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZShub3dfbnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKG5vd19udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGFnZS5udW0gPSBub3dfbnVtYmVyICogdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBhZ2UubnVtO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gbGVmdCArIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGlmIChyaWdodCA+PSB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByaWdodCA9IHRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLndoZW5GaW5hbFBhZ2UuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZVRvU2hvdyhsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgdGhpcy5wYWdlLm5vd19udW1iZXIgPSBub3dfbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdXJjZVRvU2hvdyhsZWZ0OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFyaWdodCkge1xyXG4gICAgICAgICAgICByaWdodCA9IGxlZnQgKyB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMud2hlblNvcnRlZC5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaChzZWFyY2hRdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcihzZWFyY2hRdWVyeSk7XHJcbiAgICAgICAgdGhpcy53aGVuRmlsdGVyZWQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO5oC75pWw5o2u5rqQ5Y+W6YOo5YiG5pWw5o2u5bGV56S6XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVNob3coKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWaWV3ZXIoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbm5lY3Qodikuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2Ygcikge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVhY2guZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YTtcclxuICAgICAgICAvLyB0aGlzLnNob3duRGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAvLyAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0XHJcbiAgICAgICAgLy8gICAgICAgICAuc2xpY2UoMCwgdGhpcy5wYWdlLnN0ZXApXHJcbiAgICAgICAgLy8gICAgICAgICAubWFwKGUgPT4gKHtkYXRhOiBlfSkpXHJcbiAgICAgICAgLy8gICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnREaXJlY3Rpb24oY29sdW1uOiBzdHJpbmcpOiBOYlNvcnREaXJlY3Rpb24ge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnRDb2x1bW4gPT09IGNvbHVtbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hvd09uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb2x1bW5TdGVwID0gMTAwO1xyXG4gICAgICAgIHJldHVybiBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zICsgKG5leHRDb2x1bW5TdGVwICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxQYXRlbnQ+LFxyXG4gICAgICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5jdXN0b21lckRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuc2hvd25EYXRhU291cmNlKS5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc3QgY29udGVudERpZmZlciA9IHRoaXMuY3VzdG9tZXJEaWZmZXIuZGlmZih0aGlzLnNob3duRGF0YVNvdXJjZSk7XHJcbiAgICAgICAgLy8gaWYgKGNvbnRlbnREaWZmZXIpIHtcclxuICAgICAgICAvLyAgICAgY29udGVudERpZmZlci5mb3JFYWNoQ2hhbmdlZEl0ZW0ociA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoci5rZXkgPT09ICdyZW5kZXJEYXRhJykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMud2hlblN3aXRjaFBhZ2UuZW1pdChyKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==