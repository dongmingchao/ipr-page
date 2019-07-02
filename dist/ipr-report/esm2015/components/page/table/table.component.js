import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
let TableComponent = class TableComponent {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.rowClick = new EventEmitter();
        this.tableMap = {
            publication_number: '专利号',
            title: '专利名',
            standard_applicant_str: '申请人',
            application_date: '申请日期',
            status: '状态',
            importance_reason: '重要原因'
        };
        this.allColumns = [
            'publication_number',
            'title', 'standard_applicant_str',
            'application_date',
            'status',
            'importance_reason'
        ];
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
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "rowClick", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "data", null);
TableComponent = tslib_1.__decorate([
    Component({
        selector: 'ipr-table',
        template: "<table [nbTreeGrid]=\"dataSource\" [nbSort]=\"dataSource\" (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n",
        styles: [""]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFTekksSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQThDdkIsWUFDWSxpQkFBc0Q7UUFBdEQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQztRQTlDeEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQ2hFLGFBQVEsR0FBRztZQUNQLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsS0FBSyxFQUFFLEtBQUs7WUFDWixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLGdCQUFnQixFQUFFLE1BQU07WUFDeEIsTUFBTSxFQUFFLElBQUk7WUFDWixpQkFBaUIsRUFBRSxNQUFNO1NBQzVCLENBQUM7UUFDRixlQUFVLEdBQUc7WUFDVCxvQkFBb0I7WUFDcEIsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxrQkFBa0I7WUFDbEIsUUFBUTtZQUNSLG1CQUFtQjtTQUN0QixDQUFDO1FBS0Ysa0JBQWEsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztJQTRCdEQsQ0FBQztJQTFCUSxJQUFJLElBQUksQ0FBQyxHQUFHO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUNuQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxVQUFVLENBQUMsV0FBMEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBYztRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUNELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDbkIsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7UUFDdEMsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE9BQU8seUJBQXlCLEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQU1KLENBQUE7QUFqRGE7SUFBVCxNQUFNLEVBQUU7O2dEQUF1RDtBQXNCdkQ7SUFBUixLQUFLLEVBQUU7OzswQ0FHUDtBQTFCUSxjQUFjO0lBTjFCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLHEwQkFBcUM7O0tBRXhDLENBQUM7NkNBaURpQywyQkFBMkI7R0EvQ2pELGNBQWMsQ0FrRDFCO1NBbERZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYlNvcnREaXJlY3Rpb24sIE5iU29ydFJlcXVlc3QsIE5iVHJlZUdyaWREYXRhU291cmNlLCBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsIE5iVHJlZUdyaWRSb3dDb21wb25lbnR9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtQYXRlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1BhdGVudC9wYXRlbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICB0YWJsZU1hcCA9IHtcclxuICAgICAgICBwdWJsaWNhdGlvbl9udW1iZXI6ICfkuJPliKnlj7cnLFxyXG4gICAgICAgIHRpdGxlOiAn5LiT5Yip5ZCNJyxcclxuICAgICAgICBzdGFuZGFyZF9hcHBsaWNhbnRfc3RyOiAn55Sz6K+35Lq6JyxcclxuICAgICAgICBhcHBsaWNhdGlvbl9kYXRlOiAn55Sz6K+35pel5pyfJyxcclxuICAgICAgICBzdGF0dXM6ICfnirbmgIEnLFxyXG4gICAgICAgIGltcG9ydGFuY2VfcmVhc29uOiAn6YeN6KaB5Y6f5ZugJ1xyXG4gICAgfTtcclxuICAgIGFsbENvbHVtbnMgPSBbXHJcbiAgICAgICAgJ3B1YmxpY2F0aW9uX251bWJlcicsXHJcbiAgICAgICAgJ3RpdGxlJywgJ3N0YW5kYXJkX2FwcGxpY2FudF9zdHInLFxyXG4gICAgICAgICdhcHBsaWNhdGlvbl9kYXRlJyxcclxuICAgICAgICAnc3RhdHVzJyxcclxuICAgICAgICAnaW1wb3J0YW5jZV9yZWFzb24nXHJcbiAgICBdO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHZhbC5wYXRlbnRfbGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvcnREaXJlY3Rpb24oY29sdW1uOiBzdHJpbmcpOiBOYlNvcnREaXJlY3Rpb24ge1xyXG4gICAgICAgIGlmICh0aGlzLnNvcnRDb2x1bW4gPT09IGNvbHVtbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2hvd09uKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zID0gNDAwO1xyXG4gICAgICAgIGNvbnN0IG5leHRDb2x1bW5TdGVwID0gMTAwO1xyXG4gICAgICAgIHJldHVybiBtaW5XaXRoRm9yTXVsdGlwbGVDb2x1bW5zICsgKG5leHRDb2x1bW5TdGVwICogaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxQYXRlbnQ+LFxyXG4gICAgKSB7XHJcbiAgICB9XHJcbn1cclxuIl19