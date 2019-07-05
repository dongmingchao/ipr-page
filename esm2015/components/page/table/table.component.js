import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
class Response {
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
        template: "<table [nbTreeGrid]=\"shownDataSource\" [nbSort]=\"dataSource\" (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"page.now_number === 0\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"page.num + page.step >= dataList.length\">\u4E0B\u4E00\u9875</button>\r\n</div>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
        KeyValueDiffers])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFJekksTUFBTSxRQUFRO0NBS2I7QUFRRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBbUZ2QixZQUNZLGlCQUFzRCxFQUN0RCxPQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBQ3RELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBcEYxQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUNoRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBYzlDLGtCQUFhLEdBQW9CLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFFdEQsU0FBSSxHQUFHO1lBQ0gsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUM7SUErREYsQ0FBQztJQWpGUSxJQUFJLGNBQWMsQ0FBQyxHQUErQjtRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQW1CUSxJQUFJLElBQUksQ0FBQyxHQUFhO1FBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFVBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3pCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksR0FBRyxDQUFDLENBQUM7U0FDWjtRQUNELElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDaEIsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDbEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQ3pCLENBQUM7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUEwQjtRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztRQUN0QyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsT0FBTyx5QkFBeUIsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBUUQsUUFBUTtRQUNKLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFRCxTQUFTO1FBQ0wsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksYUFBYSxFQUFFO1lBQ2YsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUF0R2E7SUFBVCxNQUFNLEVBQUU7O2dEQUF1RDtBQUN0RDtJQUFULE1BQU0sRUFBRTs7b0RBQWlFO0FBQ2hFO0lBQVQsTUFBTSxFQUFFOztxREFBb0M7QUFDbkM7SUFBVCxNQUFNLEVBQUU7O3NEQUFxQztBQUVyQztJQUFSLEtBQUssRUFBRTs7O29EQUdQO0FBbUJRO0lBQVIsS0FBSyxFQUFFO3NDQUFlLFFBQVE7NkNBQVIsUUFBUTswQ0FTOUI7QUFyQ1EsY0FBYztJQU4xQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixnb0NBQXFDOztLQUV4QyxDQUFDOzZDQXNGaUMsMkJBQTJCO1FBQ3JDLGVBQWU7R0FyRjNCLGNBQWMsQ0F1RzFCO1NBdkdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCwgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciwgTmJUcmVlR3JpZFJvd0NvbXBvbmVudH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1BhdGVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvUGF0ZW50L3BhdGVudCc7XHJcblxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgY3VycmVudF9wYWdlOiBudW1iZXI7XHJcbiAgICBwYXRlbnRfbGlzdDogUGF0ZW50W107XHJcbiAgICB0b3RhbF9udW06IG51bWJlcjtcclxuICAgIHRvdGFsX3BhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+PigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5GaW5hbFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlblN3aXRjaFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuICAgIHNob3duRGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIGRhdGFMaXN0OiBQYXRlbnRbXTtcclxuICAgIHBhZ2UgPSB7XHJcbiAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgIG5vd19udW1iZXI6IDAsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBjdXN0b21lckRpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG5cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YSh2YWw6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCF2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gdmFsLnBhdGVudF9saXN0O1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0Lm1hcChlID0+ICh7ZGF0YTogZX0pKSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSgwKTtcclxuICAgICAgICB0aGlzLmFmdGVyU2V0RGF0YS5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciArIDEpO1xyXG4gICAgfVxyXG4gICAgbGFzdFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hQYWdlKG5vd19udW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2UubnVtID0gbm93X251bWJlciAqIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wYWdlLm51bTtcclxuICAgICAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByaWdodCA9IGxlZnQgKyB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICBpZiAocmlnaHQgPj0gdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy53aGVuRmluYWxQYWdlLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGFnZS5ub3dfbnVtYmVyID0gbm93X251bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0KHNvcnRSZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3J0Q29sdW1uID0gc29ydFJlcXVlc3QuY29sdW1uO1xyXG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHNvcnRSZXF1ZXN0LmRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0RGlyZWN0aW9uKGNvbHVtbjogc3RyaW5nKTogTmJTb3J0RGlyZWN0aW9uIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0Q29sdW1uID09PSBjb2x1bW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNob3dPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyA9IDQwMDtcclxuICAgICAgICBjb25zdCBuZXh0Q29sdW1uU3RlcCA9IDEwMDtcclxuICAgICAgICByZXR1cm4gbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyArIChuZXh0Q29sdW1uU3RlcCAqIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTb3VyY2VCdWlsZGVyOiBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXI8UGF0ZW50PixcclxuICAgICAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJEaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLnNob3duRGF0YVNvdXJjZSkuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaWZmZXIgPSB0aGlzLmN1c3RvbWVyRGlmZmVyLmRpZmYodGhpcy5zaG93bkRhdGFTb3VyY2UpO1xyXG4gICAgICAgIGlmIChjb250ZW50RGlmZmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaWZmZXIuZm9yRWFjaENoYW5nZWRJdGVtKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIua2V5ID09PSAncmVuZGVyRGF0YScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndoZW5Td2l0Y2hQYWdlLmVtaXQocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=