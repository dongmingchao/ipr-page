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
        this.disableNextPage = val.disable;
    }
    set clickLastPage(val) {
        this.lastPage = val.onclick;
        this.disableLastPage = val.disable;
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
        this.page.sum = Math.ceil(this.dataList.length / this.page.step);
        this.dataSource = this.dataSourceBuilder
            .create(this.dataList.map(e => ({ data: e })));
        this.refreshPage(0);
        this.afterSetData.emit(this.dataSource);
    }
    disableNextPage() {
        return this.page.num + this.page.step >= this.dataList.length;
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
            .map(e => ({ data: e })));
        this.page.now_number = now_number;
    }
    updateSort(sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
        this.updateShow();
    }
    updateSearch(searchQuery) {
        this.dataSource.filter(searchQuery);
        this.updateShow();
    }
    updateShow() {
        const v = new Viewer();
        const data = [];
        this.dataSource.connect(v).subscribe(r => {
            for (const each of r) {
                data.push(each.data);
            }
        });
        this.dataList = data;
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
            .slice(0, this.page.step)
            .map(e => ({ data: e })));
        this.refreshPage(0);
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
        this.customerDiffer = this.differs.find(this.shownDataSource).create();
    }
    ngDoCheck() {
        const contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        if (contentDiffer) {
            contentDiffer.forEachChangedItem(r => {
                if (r.key === 'renderData') {
                    this.whenSwitchPage.emit(r);
                }
            });
        }
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
        template: "<table [nbTreeGrid]=\"shownDataSource\"\r\n       [nbSort]=\"dataSource\"\r\n       (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"disableLastPage()\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton disabled>{{page.now_number+1}}</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"disableNextPage()\">\u4E0B\u4E00\u9875</button>\r\n    <button nbButton [disabled]=\"page.sum === page.now_number+1\" (click)=\"refreshPage(page.sum-1)\">...{{page.sum}}</button>\r\n</div>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
        KeyValueDiffers])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekksTUFBTSxRQUFRO0NBS2I7QUFFRCxNQUFNLE1BQU07Q0FHWDtBQVFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUErSHZCLFlBQ1ksaUJBQXNELEVBQ3RELE9BQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoSTFCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUF3QjlDLGtCQUFhLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFFdEQsU0FBSSxHQUFHO1lBQ0gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1lBQ2IsR0FBRyxFQUFFLENBQUM7U0FDVCxDQUFDO0lBZ0dGLENBQUM7SUE3SFEsSUFBSSxhQUFhLENBQUMsR0FBb0Q7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRVEsSUFBSSxh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QU4xQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQiw2ekNBQXFDOztLQUV4QyxDQUFDOzZDQWtJaUMsMkJBQTJCO1FBQ3JDLGVBQWU7R0FqSTNCLGNBQWMsQ0FtSjFCO1NBbkpZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCwgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciwgTmJUcmVlR3JpZFJvd0NvbXBvbmVudH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1BhdGVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvUGF0ZW50L3BhdGVudCc7XHJcbmltcG9ydCB7TmJDb2xsZWN0aW9uVmlld2VyfSBmcm9tICdAbmVidWxhci90aGVtZS9jb21wb25lbnRzL2Nkay9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uLXZpZXdlcic7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7TGlzdFJhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuICAgIGN1cnJlbnRfcGFnZTogbnVtYmVyO1xyXG4gICAgcGF0ZW50X2xpc3Q6IFBhdGVudFtdO1xyXG4gICAgdG90YWxfbnVtOiBudW1iZXI7XHJcbiAgICB0b3RhbF9wYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdlciBpbXBsZW1lbnRzIE5iQ29sbGVjdGlvblZpZXdlciB7XHJcbiAgICB2aWV3Q2hhbmdlOiBPYnNlcnZhYmxlPExpc3RSYW5nZT47XHJcblxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZFJvd0NvbXBvbmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBhZnRlclNldERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD4+KCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlbkZpbmFsUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuU3dpdGNoUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2xpY2tOZXh0UGFnZSh2YWw6IHsgb25jbGljazogKCkgPT4gdm9pZCwgZGlzYWJsZTogKCkgPT4gYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5uZXh0UGFnZSA9IHZhbC5vbmNsaWNrO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZU5leHRQYWdlID0gdmFsLmRpc2FibGU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGNsaWNrTGFzdFBhZ2UodmFsOiB7IG9uY2xpY2s6ICgpID0+IHZvaWQsIGRpc2FibGU6ICgpID0+IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB2YWwub25jbGljaztcclxuICAgICAgICB0aGlzLmRpc2FibGVMYXN0UGFnZSA9IHZhbC5kaXNhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCB0YWJsZUhlYWRlck1hcCh2YWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XHJcbiAgICAgICAgdGhpcy50YWJsZU1hcCA9IHZhbDtcclxuICAgICAgICB0aGlzLmFsbENvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcclxuICAgIGFsbENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcbiAgICBzaG93bkRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICBkYXRhTGlzdDogUGF0ZW50W107XHJcbiAgICBwYWdlID0ge1xyXG4gICAgICAgIG51bTogMCxcclxuICAgICAgICBzdGVwOiAxMCxcclxuICAgICAgICBub3dfbnVtYmVyOiAwLFxyXG4gICAgICAgIHN1bTogMCxcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGN1c3RvbWVyRGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcblxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbDogUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSB2YWwucGF0ZW50X2xpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlLnN1bSA9IE1hdGguY2VpbCh0aGlzLmRhdGFMaXN0Lmxlbmd0aCAvIHRoaXMucGFnZS5zdGVwKTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5hZnRlclNldERhdGEuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm51bSArIHRoaXMucGFnZS5zdGVwID49IHRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVMYXN0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm5vd19udW1iZXIgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhc3RQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UodGhpcy5wYWdlLm5vd19udW1iZXIgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUGFnZShub3dfbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLm51bSA9IG5vd19udW1iZXIgKiB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucGFnZS5udW07XHJcbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmlnaHQgPSBsZWZ0ICsgdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgaWYgKHJpZ2h0ID49IHRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMud2hlbkZpbmFsUGFnZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25EYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3RcclxuICAgICAgICAgICAgICAgIC5zbGljZShsZWZ0LCByaWdodClcclxuICAgICAgICAgICAgICAgIC5tYXAoZSA9PiAoe2RhdGE6IGV9KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBhZ2Uubm93X251bWJlciA9IG5vd19udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydENvbHVtbiA9IHNvcnRSZXF1ZXN0LmNvbHVtbjtcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0UmVxdWVzdC5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaChzZWFyY2hRdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcihzZWFyY2hRdWVyeSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hvdygpIHtcclxuICAgICAgICBjb25zdCB2ID0gbmV3IFZpZXdlcigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29ubmVjdCh2KS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiByKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWFjaC5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2hvd25EYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3RcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLnBhZ2Uuc3RlcClcclxuICAgICAgICAgICAgICAgIC5tYXAoZSA9PiAoe2RhdGE6IGV9KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnREaXJlY3Rpb24oY29sdW1uOiBzdHJpbmcpOiBOYlNvcnREaXJlY3Rpb24ge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnRDb2x1bW4gPT09IGNvbHVtbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hvd09uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb2x1bW5TdGVwID0gMTAwO1xyXG4gICAgICAgIHJldHVybiBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zICsgKG5leHRDb2x1bW5TdGVwICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxQYXRlbnQ+LFxyXG4gICAgICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lckRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuc2hvd25EYXRhU291cmNlKS5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGVudERpZmZlciA9IHRoaXMuY3VzdG9tZXJEaWZmZXIuZGlmZih0aGlzLnNob3duRGF0YVNvdXJjZSk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnREaWZmZXIpIHtcclxuICAgICAgICAgICAgY29udGVudERpZmZlci5mb3JFYWNoQ2hhbmdlZEl0ZW0ociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5rZXkgPT09ICdyZW5kZXJEYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hlblN3aXRjaFBhZ2UuZW1pdChyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==