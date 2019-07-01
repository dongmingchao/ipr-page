import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
var TableComponent = /** @class */ (function () {
    function TableComponent(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.tableMap = {
            publication_number: '专利号',
            title: '专利名',
            standard_applicant_str: '申请人',
            application_date: '申请日期',
            status: '状态'
        };
        this.allColumns = ['publication_number', 'title', 'standard_applicant_str', 'application_date', 'status'];
        this.sortDirection = NbSortDirection.NONE;
    }
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
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], TableComponent.prototype, "data", null);
    TableComponent = tslib_1.__decorate([
        Component({
            selector: 'ipr-table',
            template: "<table [nbTreeGrid]=\"dataSource\" [nbSort]=\"dataSource\" (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\" [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFTakg7SUFzQ0ksd0JBQ1ksaUJBQXNEO1FBQXRELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUF0Q2xFLGFBQVEsR0FBRztZQUNQLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsS0FBSyxFQUFFLEtBQUs7WUFDWixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLGdCQUFnQixFQUFFLE1BQU07WUFDeEIsTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDO1FBQ0YsZUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBS3JHLGtCQUFhLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUE0QnRELENBQUM7SUExQlEsc0JBQUksZ0NBQUk7YUFBUixVQUFTLEdBQUc7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2lCQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELG1DQUFVLEdBQVYsVUFBVyxXQUEwQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUNELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE9BQU8seUJBQXlCLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXJCUTtRQUFSLEtBQUssRUFBRTs7OzhDQUdQO0lBbEJRLGNBQWM7UUFOMUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsZ3hCQUFxQzs7U0FFeEMsQ0FBQztpREF5Q2lDLDJCQUEyQjtPQXZDakQsY0FBYyxDQTBDMUI7SUFBRCxxQkFBQztDQUFBLEFBMUNELElBMENDO1NBMUNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCwgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1BhdGVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvUGF0ZW50L3BhdGVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IHtcclxuICAgIHRhYmxlTWFwID0ge1xyXG4gICAgICAgIHB1YmxpY2F0aW9uX251bWJlcjogJ+S4k+WIqeWPtycsXHJcbiAgICAgICAgdGl0bGU6ICfkuJPliKnlkI0nLFxyXG4gICAgICAgIHN0YW5kYXJkX2FwcGxpY2FudF9zdHI6ICfnlLPor7fkuronLFxyXG4gICAgICAgIGFwcGxpY2F0aW9uX2RhdGU6ICfnlLPor7fml6XmnJ8nLFxyXG4gICAgICAgIHN0YXR1czogJ+eKtuaAgSdcclxuICAgIH07XHJcbiAgICBhbGxDb2x1bW5zID0gWydwdWJsaWNhdGlvbl9udW1iZXInLCAndGl0bGUnLCAnc3RhbmRhcmRfYXBwbGljYW50X3N0cicsICdhcHBsaWNhdGlvbl9kYXRlJywgJ3N0YXR1cyddO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHZhbC5wYXRlbnRfbGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnREaXJlY3Rpb24oY29sdW1uOiBzdHJpbmcpOiBOYlNvcnREaXJlY3Rpb24ge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnRDb2x1bW4gPT09IGNvbHVtbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hvd09uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb2x1bW5TdGVwID0gMTAwO1xyXG4gICAgICAgIHJldHVybiBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zICsgKG5leHRDb2x1bW5TdGVwICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxQYXRlbnQ+LFxyXG4gICAgKSB7XHJcbiAgICB9XHJcbn1cclxuIl19