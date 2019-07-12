import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());
var Viewer = /** @class */ (function () {
    function Viewer() {
    }
    return Viewer;
}());
var TableComponent = /** @class */ (function () {
    function TableComponent(dataSourceBuilder, differs) {
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
    Object.defineProperty(TableComponent.prototype, "clickNextPage", {
        set: function (val) {
            this.nextPage = val.onclick;
            if (val.disable) {
                this.disableNextPage = val.disable;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "clickLastPage", {
        set: function (val) {
            this.lastPage = val.onclick;
            if (val.disable) {
                this.disableLastPage = val.disable;
            }
        },
        enumerable: true,
        configurable: true
    });
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
            this.dataList = val.patent_list;
            this.page.sum = Math.ceil(this.dataList.length / this.page.step) - 1;
            this.dataSource = this.dataSourceBuilder
                .create(this.dataList.map(function (e) { return ({ data: e }); }));
            this.setPage(0);
            this.afterSetData.emit(this.dataSource);
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.disableNextPage = function () {
        return this.page.now_number === this.page.sum;
    };
    TableComponent.prototype.disableLastPage = function () {
        return this.page.now_number === 0;
    };
    TableComponent.prototype.nextPage = function () {
        this.refreshPage(this.page.now_number + 1);
    };
    TableComponent.prototype.lastPage = function () {
        this.refreshPage(this.page.now_number - 1);
    };
    /**
     * 触发换页事件，展示页码中内容，并设定新的相关视图信息
     * @param now_number 页码
     */
    TableComponent.prototype.refreshPage = function (now_number) {
        this.whenSwitchPage.emit(now_number);
        this.setPage(now_number);
    };
    TableComponent.prototype.setPage = function (now_number) {
        this.page.num = now_number * this.page.step;
        var left = this.page.num;
        if (left < 0) {
            left = 0;
        }
        var right = left + this.page.step;
        if (right >= this.dataList.length) {
            right = this.dataList.length;
            this.whenFinalPage.emit();
        }
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
            .slice(left, right)
            .map(function (e) { return ({ data: e }); }));
        this.page.now_number = now_number;
    };
    TableComponent.prototype.updateSort = function (sortRequest) {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
        this.whenSorted.emit();
    };
    TableComponent.prototype.updateSearch = function (searchQuery) {
        this.dataSource.filter(searchQuery);
        this.whenFiltered.emit();
    };
    /**
     * 从总数据源取部分数据展示
     */
    TableComponent.prototype.updateShow = function () {
        var v = new Viewer();
        var data = [];
        this.dataSource.connect(v).subscribe(function (r) {
            var e_1, _a;
            try {
                for (var r_1 = tslib_1.__values(r), r_1_1 = r_1.next(); !r_1_1.done; r_1_1 = r_1.next()) {
                    var each = r_1_1.value;
                    data.push(each.data);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (r_1_1 && !r_1_1.done && (_a = r_1.return)) _a.call(r_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        this.dataList = data;
        // this.shownDataSource = this.dataSourceBuilder
        //     .create(this.dataList
        //         .slice(0, this.page.step)
        //         .map(e => ({data: e}))
        //     );
        this.setPage(0);
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
        // this.customerDiffer = this.differs.find(this.shownDataSource).create();
    };
    TableComponent.prototype.ngDoCheck = function () {
        // const contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        // if (contentDiffer) {
        //     contentDiffer.forEachChangedItem(r => {
        //         if (r.key === 'renderData') {
        //             this.whenSwitchPage.emit(r);
        //         }
        //     });
        // }
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
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekk7SUFBQTtJQUtBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQVFEO0lBaUpJLHdCQUNZLGlCQUFzRCxFQUN0RCxPQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBQ3RELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBbEoxQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUNoRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTRCNUMsa0JBQWEsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztRQUV0RCxTQUFJLEdBQUc7WUFDSCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLENBQUM7WUFDYixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7SUE0R0YsQ0FBQztJQTdJUSxzQkFBSSx5Q0FBYTthQUFqQixVQUFrQixHQUFx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SUFDaEM7UUFBVCxNQUFNLEVBQUU7O3dEQUFtQztJQUVuQztRQUFSLEtBQUssRUFBRTs7O3VEQUtQO0lBRVE7UUFBUixLQUFLLEVBQUU7Ozt1REFLUDtJQUVRO1FBQVIsS0FBSyxFQUFFOzs7d0RBR1A7SUFvQlE7UUFBUixLQUFLLEVBQUU7MENBQWUsUUFBUTtpREFBUixRQUFROzhDQVU5QjtJQXZEUSxjQUFjO1FBTjFCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLDJ6Q0FBcUM7O1NBRXhDLENBQUM7aURBb0ppQywyQkFBMkI7WUFDckMsZUFBZTtPQW5KM0IsY0FBYyxDQXFLMUI7SUFBRCxxQkFBQztDQUFBLEFBcktELElBcUtDO1NBcktZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05iU29ydERpcmVjdGlvbiwgTmJTb3J0UmVxdWVzdCwgTmJUcmVlR3JpZERhdGFTb3VyY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciwgTmJUcmVlR3JpZFJvd0NvbXBvbmVudH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1BhdGVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvUGF0ZW50L3BhdGVudCc7XHJcbmltcG9ydCB7TmJDb2xsZWN0aW9uVmlld2VyfSBmcm9tICdAbmVidWxhci90aGVtZS9jb21wb25lbnRzL2Nkay9jb2xsZWN0aW9ucy9jb2xsZWN0aW9uLXZpZXdlcic7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7TGlzdFJhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuICAgIGN1cnJlbnRfcGFnZTogbnVtYmVyO1xyXG4gICAgcGF0ZW50X2xpc3Q6IFBhdGVudFtdO1xyXG4gICAgdG90YWxfbnVtOiBudW1iZXI7XHJcbiAgICB0b3RhbF9wYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFZpZXdlciBpbXBsZW1lbnRzIE5iQ29sbGVjdGlvblZpZXdlciB7XHJcbiAgICB2aWV3Q2hhbmdlOiBPYnNlcnZhYmxlPExpc3RSYW5nZT47XHJcblxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXRhYmxlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgRG9DaGVjaywgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKSByb3dDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZFJvd0NvbXBvbmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBhZnRlclNldERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD4+KCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlbkZpbmFsUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuU3dpdGNoUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5Tb3J0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlbkZpbHRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBjbGlja05leHRQYWdlKHZhbDogeyBvbmNsaWNrOiAoKSA9PiB2b2lkLCBkaXNhYmxlPzogKCkgPT4gYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5uZXh0UGFnZSA9IHZhbC5vbmNsaWNrO1xyXG4gICAgICAgIGlmICh2YWwuZGlzYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IHZhbC5kaXNhYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2xpY2tMYXN0UGFnZSh2YWw6IHsgb25jbGljazogKCkgPT4gdm9pZCwgZGlzYWJsZT86ICgpID0+IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB2YWwub25jbGljaztcclxuICAgICAgICBpZiAodmFsLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlTGFzdFBhZ2UgPSB2YWwuZGlzYWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuICAgIHNob3duRGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIGRhdGFMaXN0OiBQYXRlbnRbXTtcclxuICAgIHBhZ2UgPSB7XHJcbiAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgIG5vd19udW1iZXI6IDAsXHJcbiAgICAgICAgc3VtOiAwLFxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY3VzdG9tZXJEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuXHJcblxyXG4gICAgQElucHV0KCkgc2V0IGRhdGEodmFsOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghdmFsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHZhbC5wYXRlbnRfbGlzdDtcclxuICAgICAgICB0aGlzLnBhZ2Uuc3VtID0gTWF0aC5jZWlsKHRoaXMuZGF0YUxpc3QubGVuZ3RoIC8gdGhpcy5wYWdlLnN0ZXApIC0gMTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdC5tYXAoZSA9PiAoe2RhdGE6IGV9KSkpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZSgwKTtcclxuICAgICAgICB0aGlzLmFmdGVyU2V0RGF0YS5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZU5leHRQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Uubm93X251bWJlciA9PT0gdGhpcy5wYWdlLnN1bTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlTGFzdFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZS5ub3dfbnVtYmVyID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UodGhpcy5wYWdlLm5vd19udW1iZXIgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDop6blj5HmjaLpobXkuovku7bvvIzlsZXnpLrpobXnoIHkuK3lhoXlrrnvvIzlubborr7lrprmlrDnmoTnm7jlhbPop4blm77kv6Hmga9cclxuICAgICAqIEBwYXJhbSBub3dfbnVtYmVyIOmhteeggVxyXG4gICAgICovXHJcbiAgICByZWZyZXNoUGFnZShub3dfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndoZW5Td2l0Y2hQYWdlLmVtaXQobm93X251bWJlcik7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlKG5vd19udW1iZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhZ2Uobm93X251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLm51bSA9IG5vd19udW1iZXIgKiB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucGFnZS5udW07XHJcbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmlnaHQgPSBsZWZ0ICsgdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgaWYgKHJpZ2h0ID49IHRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMud2hlbkZpbmFsUGFnZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25EYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3RcclxuICAgICAgICAgICAgICAgIC5zbGljZShsZWZ0LCByaWdodClcclxuICAgICAgICAgICAgICAgIC5tYXAoZSA9PiAoe2RhdGE6IGV9KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnBhZ2Uubm93X251bWJlciA9IG5vd19udW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU29ydChzb3J0UmVxdWVzdDogTmJTb3J0UmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc29ydENvbHVtbiA9IHNvcnRSZXF1ZXN0LmNvbHVtbjtcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSBzb3J0UmVxdWVzdC5kaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy53aGVuU29ydGVkLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VhcmNoKHNlYXJjaFF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHNlYXJjaFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLndoZW5GaWx0ZXJlZC5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47mgLvmlbDmja7mupDlj5bpg6jliIbmlbDmja7lsZXnpLpcclxuICAgICAqL1xyXG4gICAgdXBkYXRlU2hvdygpIHtcclxuICAgICAgICBjb25zdCB2ID0gbmV3IFZpZXdlcigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuY29ubmVjdCh2KS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiByKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goZWFjaC5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvd25EYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgIC8vICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3RcclxuICAgICAgICAvLyAgICAgICAgIC5zbGljZSgwLCB0aGlzLnBhZ2Uuc3RlcClcclxuICAgICAgICAvLyAgICAgICAgIC5tYXAoZSA9PiAoe2RhdGE6IGV9KSlcclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2UoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5zaG93bkRhdGFTb3VyY2UpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuc2hvd25EYXRhU291cmNlKTtcclxuICAgICAgICAvLyBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgIC8vICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChyLmtleSA9PT0gJ3JlbmRlckRhdGEnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KHIpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19