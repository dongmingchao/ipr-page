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
        this.whenSorted = new EventEmitter();
        this.whenFiltered = new EventEmitter();
        this.sortDirection = NbSortDirection.NONE;
        this.page = {
            num: 0,
            step: 10,
            now_number: 0,
            sum: 0,
        };
    }
    set clickNextPage(val) {
        this.nextPage = val.onclick;
        if (val.disable) {
            this.disableNextPage = val.disable;
        }
    }
    set clickLastPage(val) {
        this.lastPage = val.onclick;
        if (val.disable) {
            this.disableLastPage = val.disable;
        }
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
        this.page.sum = Math.ceil(this.dataList.length / this.page.step) - 1;
        this.dataSource = this.dataSourceBuilder
            .create(this.dataList.map(e => ({ data: e })));
        this.setPage(0);
        this.afterSetData.emit(this.dataSource);
    }
    disableNextPage() {
        return this.page.now_number === this.page.sum;
    }
    disableLastPage() {
        return this.page.now_number === 0;
    }
    nextPage() {
        this.refreshPage(this.page.now_number + 1);
    }
    lastPage() {
        this.refreshPage(this.page.now_number - 1);
    }
    /**
     * 触发换页事件，展示页码中内容，并设定新的相关视图信息
     * @param now_number 页码
     */
    refreshPage(now_number) {
        this.whenSwitchPage.emit(now_number);
        this.setPage(now_number);
    }
    setPage(now_number) {
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
        this.whenSorted.emit();
    }
    updateSearch(searchQuery) {
        this.dataSource.filter(searchQuery);
        this.whenFiltered.emit();
    }
    /**
     * 从总数据源取部分数据展示
     */
    updateShow() {
        const v = new Viewer();
        const data = [];
        this.dataSource.connect(v).subscribe(r => {
            for (const each of r) {
                data.push(each.data);
            }
        });
        this.dataList = data;
        // this.shownDataSource = this.dataSourceBuilder
        //     .create(this.dataList
        //         .slice(0, this.page.step)
        //         .map(e => ({data: e}))
        //     );
        this.setPage(0);
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
        // this.customerDiffer = this.differs.find(this.shownDataSource).create();
    }
    ngDoCheck() {
        // const contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        // if (contentDiffer) {
        //     contentDiffer.forEachChangedItem(r => {
        //         if (r.key === 'renderData') {
        //             this.whenSwitchPage.emit(r);
        //         }
        //     });
        // }
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
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "whenSorted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TableComponent.prototype, "whenFiltered", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "clickNextPage", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], TableComponent.prototype, "clickLastPage", null);
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
        template: "<table [nbTreeGrid]=\"shownDataSource\"\r\n       [nbSort]=\"dataSource\"\r\n       (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"disableLastPage()\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton disabled>{{page.now_number+1}}</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"disableNextPage()\">\u4E0B\u4E00\u9875</button>\r\n    <button nbButton [disabled]=\"page.sum === page.now_number\" (click)=\"refreshPage(page.sum)\">...{{page.sum+1}}</button>\r\n</div>\r\n",
        styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
        KeyValueDiffers])
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekksTUFBTSxRQUFRO0NBS2I7QUFFRCxNQUFNLE1BQU07Q0FHWDtBQVFELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFpSnZCLFlBQ1ksaUJBQXNELEVBQ3RELE9BQXdCO1FBRHhCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBcUM7UUFDdEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFsSjFCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFnQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDNUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBNEI1QyxrQkFBYSxHQUFvQixlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXRELFNBQUksR0FBRztZQUNILEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsQ0FBQztZQUNiLEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQztJQTRHRixDQUFDO0lBN0lRLElBQUksYUFBYSxDQUFDLEdBQXFEO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRVEsSUFBSSxhQUFhLENBQUMsR0FBcUQ7UUFDNUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNiLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFUSxJQUFJLGNBQWMsQ0FBQyxHQUErQjtRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQW9CUSxJQUFJLElBQUksQ0FBQyxHQUFhO1FBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsVUFBa0I7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTyxDQUFDLFVBQWtCO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDVixJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDL0IsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQ2hCLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUN6QixDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxVQUFVLENBQUMsV0FBMEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxZQUFZLENBQUMsV0FBbUI7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ04sTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN2QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0RBQWdEO1FBQ2hELDRCQUE0QjtRQUM1QixvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQztRQUN0QyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7UUFDM0IsT0FBTyx5QkFBeUIsR0FBRyxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBUUQsUUFBUTtRQUNKLDBFQUEwRTtJQUM5RSxDQUFDO0lBRUQsU0FBUztRQUNMLHdFQUF3RTtRQUN4RSx1QkFBdUI7UUFDdkIsOENBQThDO1FBQzlDLHdDQUF3QztRQUN4QywyQ0FBMkM7UUFDM0MsWUFBWTtRQUNaLFVBQVU7UUFDVixJQUFJO0lBQ1IsQ0FBQztDQUNKLENBQUE7QUFwS2E7SUFBVCxNQUFNLEVBQUU7O2dEQUF1RDtBQUN0RDtJQUFULE1BQU0sRUFBRTs7b0RBQWlFO0FBQ2hFO0lBQVQsTUFBTSxFQUFFOztxREFBb0M7QUFDbkM7SUFBVCxNQUFNLEVBQUU7O3NEQUE2QztBQUM1QztJQUFULE1BQU0sRUFBRTs7a0RBQWlDO0FBQ2hDO0lBQVQsTUFBTSxFQUFFOztvREFBbUM7QUFFbkM7SUFBUixLQUFLLEVBQUU7OzttREFLUDtBQUVRO0lBQVIsS0FBSyxFQUFFOzs7bURBS1A7QUFFUTtJQUFSLEtBQUssRUFBRTs7O29EQUdQO0FBb0JRO0lBQVIsS0FBSyxFQUFFO3NDQUFlLFFBQVE7NkNBQVIsUUFBUTswQ0FVOUI7QUF2RFEsY0FBYztJQU4xQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQiwyekNBQXFDOztLQUV4QyxDQUFDOzZDQW9KaUMsMkJBQTJCO1FBQ3JDLGVBQWU7R0FuSjNCLGNBQWMsQ0FxSzFCO1NBcktZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCwgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciwgTmJUcmVlR3JpZFJvd0NvbXBvbmVudH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1BhdGVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvUGF0ZW50L3BhdGVudCc7XHJcbmltcG9ydCB7TmJDb2xsZWN0aW9uVmlld2VyfSBmcm9tICdAbmVidWxhci90aGVtZS9jb21wb25lbnRzL2Nkay9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uLXZpZXdlcic7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7TGlzdFJhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuICAgIGN1cnJlbnRfcGFnZTogbnVtYmVyO1xyXG4gICAgcGF0ZW50X2xpc3Q6IFBhdGVudFtdO1xyXG4gICAgdG90YWxfbnVtOiBudW1iZXI7XHJcbiAgICB0b3RhbF9wYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdlciBpbXBsZW1lbnRzIE5iQ29sbGVjdGlvblZpZXdlciB7XHJcbiAgICB2aWV3Q2hhbmdlOiBPYnNlcnZhYmxlPExpc3RSYW5nZT47XHJcblxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZFJvd0NvbXBvbmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBhZnRlclNldERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD4+KCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlbkZpbmFsUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuU3dpdGNoUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5Tb3J0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlbkZpbHRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBjbGlja05leHRQYWdlKHZhbDogeyBvbmNsaWNrOiAoKSA9PiB2b2lkLCBkaXNhYmxlPzogKCkgPT4gYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5uZXh0UGFnZSA9IHZhbC5vbmNsaWNrO1xyXG4gICAgICAgIGlmICh2YWwuZGlzYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IHZhbC5kaXNhYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2xpY2tMYXN0UGFnZSh2YWw6IHsgb25jbGljazogKCkgPT4gdm9pZCwgZGlzYWJsZT86ICgpID0+IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB2YWwub25jbGljaztcclxuICAgICAgICBpZiAodmFsLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlTGFzdFBhZ2UgPSB2YWwuZGlzYWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuICAgIHNob3duRGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIGRhdGFMaXN0OiBQYXRlbnRbXTtcclxuICAgIHBhZ2UgPSB7XHJcbiAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgIG5vd19udW1iZXI6IDAsXHJcbiAgICAgICAgc3VtOiAwLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY3VzdG9tZXJEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuXHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHZhbC5wYXRlbnRfbGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2Uuc3VtID0gTWF0aC5jZWlsKHRoaXMuZGF0YUxpc3QubGVuZ3RoIC8gdGhpcy5wYWdlLnN0ZXApIC0gMTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZSgwKTtcclxuICAgICAgICB0aGlzLmFmdGVyU2V0RGF0YS5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZU5leHRQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Uubm93X251bWJlciA9PT0gdGhpcy5wYWdlLnN1bTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlTGFzdFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZS5ub3dfbnVtYmVyID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UodGhpcy5wYWdlLm5vd19udW1iZXIgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDop6blj5HmjaLpobXkuovku7bvvIzlsZXnpLrpobXnoIHkuK3lhoXlrrnvvIzlubborr7lrprmlrDnmoTnm7jlhbPop4blm77kv6Hmga9cclxuICAgICAqIEBwYXJhbSBub3dfbnVtYmVyIOmhteeggVxyXG4gICAgICovXHJcbiAgICByZWZyZXNoUGFnZShub3dfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndoZW5Td2l0Y2hQYWdlLmVtaXQobm93X251bWJlcik7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlKG5vd19udW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhZ2Uobm93X251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLm51bSA9IG5vd19udW1iZXIgKiB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucGFnZS5udW07XHJcbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmlnaHQgPSBsZWZ0ICsgdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgaWYgKHJpZ2h0ID49IHRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMud2hlbkZpbmFsUGFnZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25EYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3RcclxuICAgICAgICAgICAgICAgIC5zbGljZShsZWZ0LCByaWdodClcclxuICAgICAgICAgICAgICAgIC5tYXAoZSA9PiAoe2RhdGE6IGV9KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBhZ2Uubm93X251bWJlciA9IG5vd19udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydENvbHVtbiA9IHNvcnRSZXF1ZXN0LmNvbHVtbjtcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0UmVxdWVzdC5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy53aGVuU29ydGVkLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VhcmNoKHNlYXJjaFF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHNlYXJjaFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLndoZW5GaWx0ZXJlZC5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47mgLvmlbDmja7mupDlj5bpg6jliIbmlbDmja7lsZXnpLpcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2hvdygpIHtcclxuICAgICAgICBjb25zdCB2ID0gbmV3IFZpZXdlcigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29ubmVjdCh2KS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiByKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWFjaC5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvd25EYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgIC8vICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3RcclxuICAgICAgICAvLyAgICAgICAgIC5zbGljZSgwLCB0aGlzLnBhZ2Uuc3RlcClcclxuICAgICAgICAvLyAgICAgICAgIC5tYXAoZSA9PiAoe2RhdGE6IGV9KSlcclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2UoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5zaG93bkRhdGFTb3VyY2UpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuc2hvd25EYXRhU291cmNlKTtcclxuICAgICAgICAvLyBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgIC8vICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChyLmtleSA9PT0gJ3JlbmRlckRhdGEnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KHIpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19