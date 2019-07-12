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
        this.refreshPage(0);
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
        template: "<table [nbTreeGrid]=\"shownDataSource\"\r\n       [nbSort]=\"dataSource\"\r\n       (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"disableLastPage()\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton disabled>{{page.now_number+1}}</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"disableNextPage()\">\u4E0B\u4E00\u9875</button>\r\n    <button nbButton [disabled]=\"page.sum === page.now_number\" (click)=\"refreshPage(page.sum)\">...{{page.sum+1}}</button>\r\n</div>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
        KeyValueDiffers])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekksTUFBTSxRQUFRO0NBS2I7QUFFRCxNQUFNLE1BQU07Q0FHWDtBQVFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFtSXZCLFlBQ1ksaUJBQXNELEVBQ3RELE9BQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFwSTFCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE0QjlDLGtCQUFhLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFFdEQsU0FBSSxHQUFHO1lBQ0gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1lBQ2IsR0FBRyxFQUFFLENBQUM7U0FDVCxDQUFDO0lBZ0dGLENBQUM7SUFqSVEsSUFBSSxhQUFhLENBQUMsR0FBcUQ7UUFDNUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLE9B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QUFLLEVBQUU7c0NBQWUsUUFBUTs2Q0FBUixRQUFROzBDQVU5QjtBQXJEUSxjQUFjO0lBTjFCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLDJ6Q0FBcUM7O0tBRXhDLENBQUM7NkNBc0lpQywyQkFBMkI7UUFDckMsZUFBZTtHQXJJM0IsY0FBYyxDQXVKMUI7U0F2SlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIElucHV0LCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJTb3J0RGlyZWN0aW9uLCBOYlNvcnRSZXF1ZXN0LCBOYlRyZWVHcmlkRGF0YVNvdXJjZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLCBOYlRyZWVHcmlkUm93Q29tcG9uZW50fSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7UGF0ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9QYXRlbnQvcGF0ZW50JztcclxuaW1wb3J0IHtOYkNvbGxlY3Rpb25WaWV3ZXJ9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lL2NvbXBvbmVudHMvY2RrL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb24tdmlld2VyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtMaXN0UmFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcblxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgY3VycmVudF9wYWdlOiBudW1iZXI7XHJcbiAgICBwYXRlbnRfbGlzdDogUGF0ZW50W107XHJcbiAgICB0b3RhbF9udW06IG51bWJlcjtcclxuICAgIHRvdGFsX3BhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmlld2VyIGltcGxlbWVudHMgTmJDb2xsZWN0aW9uVmlld2VyIHtcclxuICAgIHZpZXdDaGFuZ2U6IE9ic2VydmFibGU8TGlzdFJhbmdlPjtcclxuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkUm93Q29tcG9uZW50PigpO1xyXG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50Pj4oKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuRmluYWxQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5Td2l0Y2hQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBjbGlja05leHRQYWdlKHZhbDogeyBvbmNsaWNrOiAoKSA9PiB2b2lkLCBkaXNhYmxlPzogKCkgPT4gYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5uZXh0UGFnZSA9IHZhbC5vbmNsaWNrO1xyXG4gICAgICAgIGlmICh2YWwuZGlzYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IHZhbC5kaXNhYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2xpY2tMYXN0UGFnZSh2YWw6IHsgb25jbGljazogKCkgPT4gdm9pZCwgZGlzYWJsZT86ICgpID0+IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB2YWwub25jbGljaztcclxuICAgICAgICBpZiAodmFsLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlTGFzdFBhZ2UgPSB2YWwuZGlzYWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuICAgIHNob3duRGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIGRhdGFMaXN0OiBQYXRlbnRbXTtcclxuICAgIHBhZ2UgPSB7XHJcbiAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgIG5vd19udW1iZXI6IDAsXHJcbiAgICAgICAgc3VtOiAwLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY3VzdG9tZXJEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuXHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHZhbC5wYXRlbnRfbGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2Uuc3VtID0gTWF0aC5jZWlsKHRoaXMuZGF0YUxpc3QubGVuZ3RoIC8gdGhpcy5wYWdlLnN0ZXApIC0gMTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5hZnRlclNldERhdGEuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm5vd19udW1iZXIgPT09IHRoaXMucGFnZS5zdW07XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUxhc3RQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Uubm93X251bWJlciA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hQYWdlKG5vd19udW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2UubnVtID0gbm93X251bWJlciAqIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wYWdlLm51bTtcclxuICAgICAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByaWdodCA9IGxlZnQgKyB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICBpZiAocmlnaHQgPj0gdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy53aGVuRmluYWxQYWdlLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGFnZS5ub3dfbnVtYmVyID0gbm93X251bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0KHNvcnRSZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3J0Q29sdW1uID0gc29ydFJlcXVlc3QuY29sdW1uO1xyXG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHNvcnRSZXF1ZXN0LmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VhcmNoKHNlYXJjaFF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHNlYXJjaFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaG93KCkge1xyXG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmlld2VyKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb25uZWN0KHYpLnN1YnNjcmliZShyID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChlYWNoLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIHRoaXMucGFnZS5zdGVwKVxyXG4gICAgICAgICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5zaG93bkRhdGFTb3VyY2UpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuc2hvd25EYXRhU291cmNlKTtcclxuICAgICAgICBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmtleSA9PT0gJ3JlbmRlckRhdGEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19