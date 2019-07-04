import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
let TableComponent = class TableComponent {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.rowClick = new EventEmitter();
        this.init = new EventEmitter();
        this.sortDirection = NbSortDirection.NONE;
    }
    set tableHeaderMap(val) {
        this.tableMap = val;
        this.allColumns = Object.keys(val);
    }
    set data(val) {
        if (!val) {
            return;
        }
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
    ngOnInit() {
        console.log('table init', this.dataSource);
        this.init.emit(this.dataSource);
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "rowClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "init", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBU3pJLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUF1Q3ZCLFlBQ1ksaUJBQXNEO1FBQXRELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUF2Q3hELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUN0RCxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQWdDLENBQUM7UUFXbEUsa0JBQWEsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztJQTZCdEQsQ0FBQztJQXZDUSxJQUFJLGNBQWMsQ0FBQyxHQUErQjtRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVNRLElBQUksSUFBSSxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQTBCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWM7UUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDN0I7UUFDRCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE1BQU0seUJBQXlCLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMzQixPQUFPLHlCQUF5QixHQUFHLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFPRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0osQ0FBQTtBQS9DYTtJQUFULE1BQU0sRUFBRTs7Z0RBQXVEO0FBQ3REO0lBQVQsTUFBTSxFQUFFOzs0Q0FBeUQ7QUFDekQ7SUFBUixLQUFLLEVBQUU7OztvREFHUDtBQVNRO0lBQVIsS0FBSyxFQUFFOzs7MENBSVA7QUFuQlEsY0FBYztJQU4xQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixrMkJBQXFDOztLQUV4QyxDQUFDOzZDQTBDaUMsMkJBQTJCO0dBeENqRCxjQUFjLENBZ0QxQjtTQWhEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYlNvcnREaXJlY3Rpb24sIE5iU29ydFJlcXVlc3QsIE5iVHJlZUdyaWREYXRhU291cmNlLCBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsIE5iVHJlZUdyaWRSb3dDb21wb25lbnR9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtQYXRlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1BhdGVudC9wYXRlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50Pj4oKTtcclxuICAgIEBJbnB1dCgpIHNldCB0YWJsZUhlYWRlck1hcCh2YWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSAge1xyXG4gICAgICAgIHRoaXMudGFibGVNYXAgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5hbGxDb2x1bW5zID0gT2JqZWN0LmtleXModmFsKTtcclxuICAgIH1cclxuICAgIHRhYmxlTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcclxuICAgIGFsbENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsKSB7XHJcbiAgICAgICAgaWYgKCF2YWwpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHZhbC5wYXRlbnRfbGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnREaXJlY3Rpb24oY29sdW1uOiBzdHJpbmcpOiBOYlNvcnREaXJlY3Rpb24ge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnRDb2x1bW4gPT09IGNvbHVtbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hvd09uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb2x1bW5TdGVwID0gMTAwO1xyXG4gICAgICAgIHJldHVybiBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zICsgKG5leHRDb2x1bW5TdGVwICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxQYXRlbnQ+LFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RhYmxlIGluaXQnLCB0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuaW5pdC5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIl19