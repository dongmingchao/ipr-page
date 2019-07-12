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
        this.updateShow();
    };
    TableComponent.prototype.updateSearch = function (searchQuery) {
        this.dataSource.filter(searchQuery);
        this.updateShow();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekk7SUFBQTtJQUtBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQVFEO0lBK0lJLHdCQUNZLGlCQUFzRCxFQUN0RCxPQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBQ3RELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBaEoxQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUNoRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBNEJ0RCxrQkFBYSxHQUFvQixlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXRELFNBQUksR0FBRztZQUNILEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsQ0FBQztZQUNiLEdBQUcsRUFBRSxDQUFDO1NBQ1QsQ0FBQztJQTRHRixDQUFDO0lBN0lRLHNCQUFJLHlDQUFhO2FBQWpCLFVBQWtCLEdBQXFEO1lBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM1QixJQUFJLEdBQUcsQ0FBQyxPQUFP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LFFBQVE7OENBVTlCO0lBckRRLGNBQWM7UUFOMUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsMnpDQUFxQzs7U0FFeEMsQ0FBQztpREFrSmlDLDJCQUEyQjtZQUNyQyxlQUFlO09BakozQixjQUFjLENBbUsxQjtJQUFELHFCQUFDO0NBQUEsQUFuS0QsSUFtS0M7U0FuS1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIElucHV0LCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmJTb3J0RGlyZWN0aW9uLCBOYlNvcnRSZXF1ZXN0LCBOYlRyZWVHcmlkRGF0YVNvdXJjZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyLCBOYlRyZWVHcmlkUm93Q29tcG9uZW50fSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7UGF0ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9QYXRlbnQvcGF0ZW50JztcclxuaW1wb3J0IHtOYkNvbGxlY3Rpb25WaWV3ZXJ9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lL2NvbXBvbmVudHMvY2RrL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb24tdmlld2VyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtMaXN0UmFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcblxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgY3VycmVudF9wYWdlOiBudW1iZXI7XHJcbiAgICBwYXRlbnRfbGlzdDogUGF0ZW50W107XHJcbiAgICB0b3RhbF9udW06IG51bWJlcjtcclxuICAgIHRvdGFsX3BhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmlld2VyIGltcGxlbWVudHMgTmJDb2xsZWN0aW9uVmlld2VyIHtcclxuICAgIHZpZXdDaGFuZ2U6IE9ic2VydmFibGU8TGlzdFJhbmdlPjtcclxuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItdGFibGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkUm93Q29tcG9uZW50PigpO1xyXG4gICAgQE91dHB1dCgpIGFmdGVyU2V0RGF0YSA9IG5ldyBFdmVudEVtaXR0ZXI8TmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50Pj4oKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuRmluYWxQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5Td2l0Y2hQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGNsaWNrTmV4dFBhZ2UodmFsOiB7IG9uY2xpY2s6ICgpID0+IHZvaWQsIGRpc2FibGU/OiAoKSA9PiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLm5leHRQYWdlID0gdmFsLm9uY2xpY2s7XHJcbiAgICAgICAgaWYgKHZhbC5kaXNhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZU5leHRQYWdlID0gdmFsLmRpc2FibGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBjbGlja0xhc3RQYWdlKHZhbDogeyBvbmNsaWNrOiAoKSA9PiB2b2lkLCBkaXNhYmxlPzogKCkgPT4gYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHZhbC5vbmNsaWNrO1xyXG4gICAgICAgIGlmICh2YWwuZGlzYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVMYXN0UGFnZSA9IHZhbC5kaXNhYmxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgdGFibGVIZWFkZXJNYXAodmFsOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkge1xyXG4gICAgICAgIHRoaXMudGFibGVNYXAgPSB2YWw7XHJcbiAgICAgICAgdGhpcy5hbGxDb2x1bW5zID0gT2JqZWN0LmtleXModmFsKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZU1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XHJcbiAgICBhbGxDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHJcbiAgICBkYXRhU291cmNlOiBOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+O1xyXG4gICAgc2hvd25EYXRhU291cmNlOiBOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+O1xyXG5cclxuICAgIHNvcnRDb2x1bW46IHN0cmluZztcclxuICAgIHNvcnREaXJlY3Rpb246IE5iU29ydERpcmVjdGlvbiA9IE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG4gICAgZGF0YUxpc3Q6IFBhdGVudFtdO1xyXG4gICAgcGFnZSA9IHtcclxuICAgICAgICBudW06IDAsXHJcbiAgICAgICAgc3RlcDogMTAsXHJcbiAgICAgICAgbm93X251bWJlcjogMCxcclxuICAgICAgICBzdW06IDAsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBjdXN0b21lckRpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG5cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YSh2YWw6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCF2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gdmFsLnBhdGVudF9saXN0O1xyXG4gICAgICAgIHRoaXMucGFnZS5zdW0gPSBNYXRoLmNlaWwodGhpcy5kYXRhTGlzdC5sZW5ndGggLyB0aGlzLnBhZ2Uuc3RlcCkgLSAxO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0Lm1hcChlID0+ICh7ZGF0YTogZX0pKSk7XHJcbiAgICAgICAgdGhpcy5zZXRQYWdlKDApO1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJTZXREYXRhLmVtaXQodGhpcy5kYXRhU291cmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlTmV4dFBhZ2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZS5ub3dfbnVtYmVyID09PSB0aGlzLnBhZ2Uuc3VtO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVMYXN0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm5vd19udW1iZXIgPT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhc3RQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UodGhpcy5wYWdlLm5vd19udW1iZXIgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOinpuWPkeaNoumhteS6i+S7tu+8jOWxleekuumhteeggeS4reWGheWuue+8jOW5tuiuvuWumuaWsOeahOebuOWFs+inhuWbvuS/oeaBr1xyXG4gICAgICogQHBhcmFtIG5vd19udW1iZXIg6aG156CBXHJcbiAgICAgKi9cclxuICAgIHJlZnJlc2hQYWdlKG5vd19udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2hlblN3aXRjaFBhZ2UuZW1pdChub3dfbnVtYmVyKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2Uobm93X251bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnZShub3dfbnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBhZ2UubnVtID0gbm93X251bWJlciAqIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wYWdlLm51bTtcclxuICAgICAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByaWdodCA9IGxlZnQgKyB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICBpZiAocmlnaHQgPj0gdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy53aGVuRmluYWxQYWdlLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucGFnZS5ub3dfbnVtYmVyID0gbm93X251bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTb3J0KHNvcnRSZXF1ZXN0OiBOYlNvcnRSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zb3J0Q29sdW1uID0gc29ydFJlcXVlc3QuY29sdW1uO1xyXG4gICAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHNvcnRSZXF1ZXN0LmRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2VhcmNoKHNlYXJjaFF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHNlYXJjaFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7juaAu+aVsOaNrua6kOWPlumDqOWIhuaVsOaNruWxleekulxyXG4gICAgICovXHJcbiAgICB1cGRhdGVTaG93KCkge1xyXG4gICAgICAgIGNvbnN0IHYgPSBuZXcgVmlld2VyKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5jb25uZWN0KHYpLnN1YnNjcmliZShyID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChlYWNoLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgLy8gdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgLy8gICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgIC8vICAgICAgICAgLnNsaWNlKDAsIHRoaXMucGFnZS5zdGVwKVxyXG4gICAgICAgIC8vICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgIC8vICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0RGlyZWN0aW9uKGNvbHVtbjogc3RyaW5nKTogTmJTb3J0RGlyZWN0aW9uIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0Q29sdW1uID09PSBjb2x1bW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE5iU29ydERpcmVjdGlvbi5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNob3dPbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyA9IDQwMDtcclxuICAgICAgICBjb25zdCBuZXh0Q29sdW1uU3RlcCA9IDEwMDtcclxuICAgICAgICByZXR1cm4gbWluV2l0aEZvck11bHRpcGxlQ29sdW1ucyArIChuZXh0Q29sdW1uU3RlcCAqIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGFTb3VyY2VCdWlsZGVyOiBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXI8UGF0ZW50PixcclxuICAgICAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuY3VzdG9tZXJEaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLnNob3duRGF0YVNvdXJjZSkuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnN0IGNvbnRlbnREaWZmZXIgPSB0aGlzLmN1c3RvbWVyRGlmZmVyLmRpZmYodGhpcy5zaG93bkRhdGFTb3VyY2UpO1xyXG4gICAgICAgIC8vIGlmIChjb250ZW50RGlmZmVyKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnREaWZmZXIuZm9yRWFjaENoYW5nZWRJdGVtKHIgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHIua2V5ID09PSAncmVuZGVyRGF0YScpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndoZW5Td2l0Y2hQYWdlLmVtaXQocik7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=