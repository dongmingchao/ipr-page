import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
let TableComponent = class TableComponent {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.rowClick = new EventEmitter();
        this.sortDirection = NbSortDirection.NONE;
    }
    set tableHeaderMap(val) {
        this.tableMap = val;
        this.allColumns = Object.keys(val);
    }
    set data(val) {
        this.dataSource = this.dataSourceBuilder
            .create(val.patent_list.map(e => ({ data: e })));
    }
    updateSort(sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
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
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "rowClick", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "tableHeaderMap", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "data", null);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'ipr-table',
        template: "<table [nbTreeGrid]=\"dataSource\" [nbSort]=\"dataSource\" (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBU3pJLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFxQ3ZCLFlBQ1ksaUJBQXNEO1FBQXRELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFyQ3hELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQVdoRSxrQkFBYSxHQUFvQixlQUFlLENBQUMsSUFBSSxDQUFDO0lBNEJ0RCxDQUFDO0lBdENRLElBQUksY0FBYyxDQUFDLEdBQStCO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBU1EsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQTBCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWM7UUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0I7UUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE1BQU0seUJBQXlCLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMzQixPQUFPLHlCQUF5QixHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FNSixDQUFBO0FBeENhO0lBQVQsTUFBTSxFQUFFOztnREFBdUQ7QUFDdkQ7SUFBUixLQUFLLEVBQUU7OztvREFHUDtBQVNRO0lBQVIsS0FBSyxFQUFFOzs7MENBR1A7QUFqQlEsY0FBYztJQU4xQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixrMkJBQXFDOztLQUV4QyxDQUFDOzZDQXdDaUMsMkJBQTJCO0dBdENqRCxjQUFjLENBeUMxQjtTQXpDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYlNvcnREaXJlY3Rpb24sIE5iU29ydFJlcXVlc3QsIE5iVHJlZUdyaWREYXRhU291cmNlLCBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsIE5iVHJlZUdyaWRSb3dDb21wb25lbnR9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtQYXRlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1BhdGVudC9wYXRlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICBASW5wdXQoKSBzZXQgdGFibGVIZWFkZXJNYXAodmFsOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZU1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XHJcbiAgICBhbGxDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHJcbiAgICBkYXRhU291cmNlOiBOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+O1xyXG5cclxuICAgIHNvcnRDb2x1bW46IHN0cmluZztcclxuICAgIHNvcnREaXJlY3Rpb246IE5iU29ydERpcmVjdGlvbiA9IE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh2YWwucGF0ZW50X2xpc3QubWFwKGUgPT4gKHtkYXRhOiBlfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0KHNvcnRSZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3J0Q29sdW1uID0gc29ydFJlcXVlc3QuY29sdW1uO1xyXG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHNvcnRSZXF1ZXN0LmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0RGlyZWN0aW9uKGNvbHVtbjogc3RyaW5nKTogTmJTb3J0RGlyZWN0aW9uIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0Q29sdW1uID09PSBjb2x1bW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNob3dPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyA9IDQwMDtcclxuICAgICAgICBjb25zdCBuZXh0Q29sdW1uU3RlcCA9IDEwMDtcclxuICAgICAgICByZXR1cm4gbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyArIChuZXh0Q29sdW1uU3RlcCAqIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTb3VyY2VCdWlsZGVyOiBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXI8UGF0ZW50PixcclxuICAgICkge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==