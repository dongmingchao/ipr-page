import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
var TableComponent = /** @class */ (function () {
    function TableComponent(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.rowClick = new EventEmitter();
        this.sortDirection = NbSortDirection.NONE;
    }
    Object.defineProperty(TableComponent.prototype, "tableHeaderMap", {
        set: function (val) {
            this.tableMap = val;
            this.allColumns = Object.keys(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "data", {
        set: function (val) {
            this.dataSource = this.dataSourceBuilder
                .create(val.patent_list.map(function (e) { return ({ data: e }); }));
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.updateSort = function (sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    };
    TableComponent.prototype.getSortDirection = function (column) {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return NbSortDirection.NONE;
    };
    TableComponent.prototype.getShowOn = function (index) {
        var minWithForMultipleColumns = 400;
        var nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
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
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBU3pJO0lBcUNJLHdCQUNZLGlCQUFzRDtRQUF0RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBckN4RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFXaEUsa0JBQWEsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztJQTRCdEQsQ0FBQztJQXRDUSxzQkFBSSwwQ0FBYzthQUFsQixVQUFtQixHQUErQjtZQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFTUSxzQkFBSSxnQ0FBSTthQUFSLFVBQVMsR0FBRztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7aUJBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsbUNBQVUsR0FBVixVQUFXLFdBQTBCO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixJQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztRQUN0QyxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsT0FBTyx5QkFBeUIsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBbENTO1FBQVQsTUFBTSxFQUFFOztvREFBdUQ7SUFDdkQ7UUFBUixLQUFLLEVBQUU7Ozt3REFHUDtJQVNRO1FBQVIsS0FBSyxFQUFFOzs7OENBR1A7SUFqQlEsY0FBYztRQU4xQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixrMkJBQXFDOztTQUV4QyxDQUFDO2lEQXdDaUMsMkJBQTJCO09BdENqRCxjQUFjLENBeUMxQjtJQUFELHFCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F6Q1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJTb3J0RGlyZWN0aW9uLCBOYlNvcnRSZXF1ZXN0LCBOYlRyZWVHcmlkRGF0YVNvdXJjZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLCBOYlRyZWVHcmlkUm93Q29tcG9uZW50fSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7UGF0ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9QYXRlbnQvcGF0ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xyXG4gICAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkUm93Q29tcG9uZW50PigpO1xyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pICB7XHJcbiAgICAgICAgdGhpcy50YWJsZU1hcCA9IHZhbDtcclxuICAgICAgICB0aGlzLmFsbENvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWwpO1xyXG4gICAgfVxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YSh2YWwpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodmFsLnBhdGVudF9saXN0Lm1hcChlID0+ICh7ZGF0YTogZX0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydENvbHVtbiA9IHNvcnRSZXF1ZXN0LmNvbHVtbjtcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0UmVxdWVzdC5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICApIHtcclxuICAgIH1cclxufVxyXG4iXX0=