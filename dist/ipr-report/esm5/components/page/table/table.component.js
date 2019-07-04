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
        console.log('table init', this.dataSource);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUF5QixNQUFNLGdCQUFnQixDQUFDO0FBU3pJO0lBdUNJLHdCQUNZLGlCQUFzRDtRQUF0RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBdkN4RCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBV2xFLGtCQUFhLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUE2QnRELENBQUM7SUF2Q1Esc0JBQUksMENBQWM7YUFBbEIsVUFBbUIsR0FBK0I7WUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBU1Esc0JBQUksZ0NBQUk7YUFBUixVQUFTLEdBQUc7WUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2lCQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELG1DQUFVLEdBQVYsVUFBVyxXQUEwQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUNELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE9BQU8seUJBQXlCLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQU9ELGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUE5Q1M7UUFBVCxNQUFNLEVBQUU7O29EQUF1RDtJQUN0RDtRQUFULE1BQU0sRUFBRTs7Z0RBQXlEO0lBQ3pEO1FBQVIsS0FBSyxFQUFFOzs7d0RBR1A7SUFTUTtRQUFSLEtBQUssRUFBRTs7OzhDQUlQO0lBbkJRLGNBQWM7UUFOMUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsazJCQUFxQzs7U0FFeEMsQ0FBQztpREEwQ2lDLDJCQUEyQjtPQXhDakQsY0FBYyxDQWdEMUI7SUFBRCxxQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaERZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCwgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciwgTmJUcmVlR3JpZFJvd0NvbXBvbmVudH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1BhdGVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvUGF0ZW50L3BhdGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZFJvd0NvbXBvbmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBpbml0ID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+PigpO1xyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pICB7XHJcbiAgICAgICAgdGhpcy50YWJsZU1hcCA9IHZhbDtcclxuICAgICAgICB0aGlzLmFsbENvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWwpO1xyXG4gICAgfVxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YSh2YWwpIHtcclxuICAgICAgICBpZiAoIXZhbCkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodmFsLnBhdGVudF9saXN0Lm1hcChlID0+ICh7ZGF0YTogZX0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydENvbHVtbiA9IHNvcnRSZXF1ZXN0LmNvbHVtbjtcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0UmVxdWVzdC5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGFibGUgaW5pdCcsIHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5pbml0LmVtaXQodGhpcy5kYXRhU291cmNlKTtcclxuICAgIH1cclxufVxyXG4iXX0=