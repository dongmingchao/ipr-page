import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
let TableComponent = class TableComponent {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.tableMap = {
            publication_number: '专利号',
            title: '专利名',
            applicant_str: '申请人',
            application_date: '申请日期',
            status: '状态'
        };
        this.allColumns = ['publication_number', 'title', 'applicant_str', 'application_date', 'status'];
        this.sortDirection = NbSortDirection.NONE;
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
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxlQUFlLEVBQXVDLDJCQUEyQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFTakgsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQXNDdkIsWUFDWSxpQkFBc0Q7UUFBdEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQztRQXRDbEUsYUFBUSxHQUFHO1lBQ1Asa0JBQWtCLEVBQUUsS0FBSztZQUN6QixLQUFLLEVBQUUsS0FBSztZQUNaLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGdCQUFnQixFQUFFLE1BQU07WUFDeEIsTUFBTSxFQUFFLElBQUk7U0FDZixDQUFDO1FBQ0YsZUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUs1RixrQkFBYSxHQUFvQixlQUFlLENBQUMsSUFBSSxDQUFDO0lBNEJ0RCxDQUFDO0lBMUJRLElBQUksSUFBSSxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUEwQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztRQUN0QyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsT0FBTyx5QkFBeUIsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBTUosQ0FBQTtBQTNCWTtJQUFSLEtBQUssRUFBRTs7OzBDQUdQO0FBbEJRLGNBQWM7SUFOMUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsZ3hCQUFxQzs7S0FFeEMsQ0FBQzs2Q0F5Q2lDLDJCQUEyQjtHQXZDakQsY0FBYyxDQTBDMUI7U0ExQ1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJTb3J0RGlyZWN0aW9uLCBOYlNvcnRSZXF1ZXN0LCBOYlRyZWVHcmlkRGF0YVNvdXJjZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7UGF0ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9QYXRlbnQvcGF0ZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xyXG4gICAgdGFibGVNYXAgPSB7XHJcbiAgICAgICAgcHVibGljYXRpb25fbnVtYmVyOiAn5LiT5Yip5Y+3JyxcclxuICAgICAgICB0aXRsZTogJ+S4k+WIqeWQjScsXHJcbiAgICAgICAgYXBwbGljYW50X3N0cjogJ+eUs+ivt+S6uicsXHJcbiAgICAgICAgYXBwbGljYXRpb25fZGF0ZTogJ+eUs+ivt+aXpeacnycsXHJcbiAgICAgICAgc3RhdHVzOiAn54q25oCBJ1xyXG4gICAgfTtcclxuICAgIGFsbENvbHVtbnMgPSBbJ3B1YmxpY2F0aW9uX251bWJlcicsICd0aXRsZScsICdhcHBsaWNhbnRfc3RyJywgJ2FwcGxpY2F0aW9uX2RhdGUnLCAnc3RhdHVzJ107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YSh2YWwpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodmFsLnBhdGVudF9saXN0Lm1hcChlID0+ICh7ZGF0YTogZX0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydENvbHVtbiA9IHNvcnRSZXF1ZXN0LmNvbHVtbjtcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0UmVxdWVzdC5kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICApIHtcclxuICAgIH1cclxufVxyXG4iXX0=