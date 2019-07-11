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
        };
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
        this.dataSource = this.dataSourceBuilder
            .create(this.dataList.map(e => ({ data: e })));
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
], TableComponent.prototype, "tableHeaderMap", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Response),
    tslib_1.__metadata("design:paramtypes", [Response])
], TableComponent.prototype, "data", null);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'ipr-table',
        template: "<table [nbTreeGrid]=\"shownDataSource\"\r\n       [nbSort]=\"dataSource\"\r\n       (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"page.now_number === 0\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"page.num + page.step >= dataList.length\">\u4E0B\u4E00\u9875</button>\r\n</div>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
        KeyValueDiffers])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekksTUFBTSxRQUFRO0NBS2I7QUFFRCxNQUFNLE1BQU07Q0FHWDtBQVFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUEwR3ZCLFlBQ1ksaUJBQXNELEVBQ3RELE9BQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUEzRzFCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFjOUMsa0JBQWEsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztRQUV0RCxTQUFJLEdBQUc7WUFDSCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLENBQUM7U0FDaEIsQ0FBQztJQXNGRixDQUFDO0lBeEdRLElBQUksY0FBYyxDQUFDLEdBQStCO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBbUJRLElBQUksSUFBSSxDQUFDLEdBQWE7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Q0FBQTtBQTdIYTtJQUFULE1BQU0sRUFBRTs7Z0RBQXVEO0FBQ3REO0lBQVQsTUFBTSxFQUFFOztvREFBaUU7QUFDaEU7SUFBVCxNQUFNLEVBQUU7O3FEQUFvQztBQUNuQztJQUFULE1BQU0sRUFBRTs7c0RBQXFDO0FBRXJDO0lBQVIsS0FBSyxFQUFFOzs7b0RBR1A7QUFtQlE7SUFBUixLQUFLLEVBQUU7c0NBQWUsUUFBUTs2Q0FBUixRQUFROzBDQVM5QjtBQXJDUSxjQUFjO0lBTjFCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLG9wQ0FBcUM7O0tBRXhDLENBQUM7NkNBNkdpQywyQkFBMkI7UUFDckMsZUFBZTtHQTVHM0IsY0FBYyxDQThIMUI7U0E5SFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIElucHV0LCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJTb3J0RGlyZWN0aW9uLCBOYlNvcnRSZXF1ZXN0LCBOYlRyZWVHcmlkRGF0YVNvdXJjZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLCBOYlRyZWVHcmlkUm93Q29tcG9uZW50fSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7UGF0ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9QYXRlbnQvcGF0ZW50JztcclxuaW1wb3J0IHtOYkNvbGxlY3Rpb25WaWV3ZXJ9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lL2NvbXBvbmVudHMvY2RrL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb24tdmlld2VyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtMaXN0UmFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcblxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgY3VycmVudF9wYWdlOiBudW1iZXI7XHJcbiAgICBwYXRlbnRfbGlzdDogUGF0ZW50W107XHJcbiAgICB0b3RhbF9udW06IG51bWJlcjtcclxuICAgIHRvdGFsX3BhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmlld2VyIGltcGxlbWVudHMgTmJDb2xsZWN0aW9uVmlld2VyIHtcclxuICAgIHZpZXdDaGFuZ2U6IE9ic2VydmFibGU8TGlzdFJhbmdlPjtcclxuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkUm93Q29tcG9uZW50PigpO1xyXG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50Pj4oKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuRmluYWxQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5Td2l0Y2hQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCB0YWJsZUhlYWRlck1hcCh2YWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XHJcbiAgICAgICAgdGhpcy50YWJsZU1hcCA9IHZhbDtcclxuICAgICAgICB0aGlzLmFsbENvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcclxuICAgIGFsbENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcbiAgICBzaG93bkRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICBkYXRhTGlzdDogUGF0ZW50W107XHJcbiAgICBwYWdlID0ge1xyXG4gICAgICAgIG51bTogMCxcclxuICAgICAgICBzdGVwOiAxMCxcclxuICAgICAgICBub3dfbnVtYmVyOiAwLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY3VzdG9tZXJEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuXHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHZhbC5wYXRlbnRfbGlzdDtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5hZnRlclNldERhdGEuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UodGhpcy5wYWdlLm5vd19udW1iZXIgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFBhZ2Uobm93X251bWJlcikge1xyXG4gICAgICAgIHRoaXMucGFnZS5udW0gPSBub3dfbnVtYmVyICogdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBhZ2UubnVtO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gbGVmdCArIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGlmIChyaWdodCA+PSB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByaWdodCA9IHRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLndoZW5GaW5hbFBhZ2UuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3duRGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0XHJcbiAgICAgICAgICAgICAgICAuc2xpY2UobGVmdCwgcmlnaHQpXHJcbiAgICAgICAgICAgICAgICAubWFwKGUgPT4gKHtkYXRhOiBlfSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wYWdlLm5vd19udW1iZXIgPSBub3dfbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTZWFyY2goc2VhcmNoUXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIoc2VhcmNoUXVlcnkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNob3coKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWaWV3ZXIoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbm5lY3Qodikuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2Ygcikge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVhY2guZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNob3duRGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0XHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5wYWdlLnN0ZXApXHJcbiAgICAgICAgICAgICAgICAubWFwKGUgPT4gKHtkYXRhOiBlfSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5zaG93bkRhdGFTb3VyY2UpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuc2hvd25EYXRhU291cmNlKTtcclxuICAgICAgICBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmtleSA9PT0gJ3JlbmRlckRhdGEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19