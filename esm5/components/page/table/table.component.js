import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
var TableComponent = /** @class */ (function () {
    function TableComponent(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.rowClick = new EventEmitter();
        this.init = new EventEmitter();
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
            if (!val) {
                return;
            }
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
    TableComponent.prototype.ngOnInit = function () {
        this.init.emit(this.dataSource);
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
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBU3pJO0lBdUNJLHdCQUNZLGlCQUFzRDtRQUF0RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBdkN4RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBV2xFLGtCQUFhLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUE2QnRELENBQUM7SUF2Q1Esc0JBQUksMENBQWM7YUFBbEIsVUFBbUIsR0FBK0I7WUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBU1Esc0JBQUksZ0NBQUk7YUFBUixVQUFTLEdBQUc7WUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2lCQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELG1DQUFVLEdBQVYsVUFBVyxXQUEwQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUNELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE9BQU8seUJBQXlCLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQU9ELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQTdDUztRQUFULE1BQU0sRUFBRTs7b0RBQXVEO0lBQ3REO1FBQVQsTUFBTSxFQUFFOztnREFBeUQ7SUFDekQ7UUFBUixLQUFLLEVBQUU7Ozt3REFHUDtJQVNRO1FBQVIsS0FBSyxFQUFFOzs7OENBSVA7SUFuQlEsY0FBYztRQU4xQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixrMkJBQXFDOztTQUV4QyxDQUFDO2lEQTBDaUMsMkJBQTJCO09BeENqRCxjQUFjLENBK0MxQjtJQUFELHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0EvQ1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJTb3J0RGlyZWN0aW9uLCBOYlNvcnRSZXF1ZXN0LCBOYlRyZWVHcmlkRGF0YVNvdXJjZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLCBOYlRyZWVHcmlkUm93Q29tcG9uZW50fSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7UGF0ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9QYXRlbnQvcGF0ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkUm93Q29tcG9uZW50PigpO1xyXG4gICAgQE91dHB1dCgpIGluaXQgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD4+KCk7XHJcbiAgICBASW5wdXQoKSBzZXQgdGFibGVIZWFkZXJNYXAodmFsOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcbiAgICB0YWJsZU1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XHJcbiAgICBhbGxDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHJcbiAgICBkYXRhU291cmNlOiBOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+O1xyXG5cclxuICAgIHNvcnRDb2x1bW46IHN0cmluZztcclxuICAgIHNvcnREaXJlY3Rpb246IE5iU29ydERpcmVjdGlvbiA9IE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbCkge1xyXG4gICAgICAgIGlmICghdmFsKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh2YWwucGF0ZW50X2xpc3QubWFwKGUgPT4gKHtkYXRhOiBlfSkpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0KHNvcnRSZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3J0Q29sdW1uID0gc29ydFJlcXVlc3QuY29sdW1uO1xyXG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHNvcnRSZXF1ZXN0LmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0RGlyZWN0aW9uKGNvbHVtbjogc3RyaW5nKTogTmJTb3J0RGlyZWN0aW9uIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0Q29sdW1uID09PSBjb2x1bW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNob3dPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyA9IDQwMDtcclxuICAgICAgICBjb25zdCBuZXh0Q29sdW1uU3RlcCA9IDEwMDtcclxuICAgICAgICByZXR1cm4gbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyArIChuZXh0Q29sdW1uU3RlcCAqIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTb3VyY2VCdWlsZGVyOiBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXI8UGF0ZW50PixcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdC5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcbn1cclxuIl19