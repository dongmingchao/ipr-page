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
        };
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
            this.dataList = val.patent_list;
            this.dataSource = this.dataSourceBuilder
                .create(this.dataList.map(function (e) { return ({ data: e }); }));
            this.refreshPage(0);
            this.afterSetData.emit(this.dataSource);
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.disableNextPage = function () {
        if (this.clickNextPage) {
            return this.clickNextPage();
        }
        return this.page.num + this.page.step >= this.dataList.length;
    };
    TableComponent.prototype.disableLastPage = function () {
        if (this.clickLastPage) {
            return this.clickLastPage();
        }
        return this.page.now_number === 0;
    };
    TableComponent.prototype.nextPage = function () {
        this.refreshPage(this.page.now_number + 1);
    };
    TableComponent.prototype.lastPage = function () {
        this.refreshPage(this.page.now_number - 1);
    };
    TableComponent.prototype.refreshPage = function (now_number) {
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
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
            .slice(0, this.page.step)
            .map(function (e) { return ({ data: e }); }));
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
        this.customerDiffer = this.differs.find(this.shownDataSource).create();
    };
    TableComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var contentDiffer = this.customerDiffer.diff(this.shownDataSource);
        if (contentDiffer) {
            contentDiffer.forEachChangedItem(function (r) {
                if (r.key === 'renderData') {
                    _this.whenSwitchPage.emit(r);
                }
            });
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
        tslib_1.__metadata("design:type", Function)
    ], TableComponent.prototype, "clickNextPage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], TableComponent.prototype, "clickLastPage", void 0);
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
            template: "<table [nbTreeGrid]=\"shownDataSource\"\r\n       [nbSort]=\"dataSource\"\r\n       (sort)=\"updateSort($event)\">\r\n\r\n    <tr nbTreeGridHeaderRow *nbTreeGridHeaderRowDef=\"allColumns\"></tr>\r\n    <tr class=\"ipr-row\"\r\n        nbTreeGridRow *nbTreeGridRowDef=\"let row; columns: allColumns\"\r\n        (click)=\"rowClick.emit(row)\"\r\n        [clickToToggle]=\"false\"></tr>\r\n\r\n    <ng-container *ngFor=\"let column of allColumns; let index = index\"\r\n                  [nbTreeGridColumnDef]=\"column\"\r\n                  [showOn]=\"getShowOn(index)\">\r\n        <th nbTreeGridHeaderCell [nbSortHeader]=\"getSortDirection(column)\" *nbTreeGridHeaderCellDef>\r\n            {{tableMap[column]}}\r\n        </th>\r\n        <td nbTreeGridCell *nbTreeGridCellDef=\"let row\" [innerHTML]=\"row.data[column] || '-'\"></td>\r\n    </ng-container>\r\n\r\n</table>\r\n<div class=\"btn-group\">\r\n    <button nbButton (click)=\"lastPage()\" [disabled]=\"disableLastPage()\">\u4E0A\u4E00\u9875</button>\r\n    <button nbButton (click)=\"nextPage()\" [disabled]=\"disableNextPage()\">\u4E0B\u4E00\u9875</button>\r\n</div>\r\n",
            styles: [":host .ipr-row{-webkit-transition:background-color .3s;transition:background-color .3s}:host .ipr-row:hover{background-color:#edf1f7}:host .btn-group{float:right;margin:1rem}:host .btn-group button{margin-right:1rem}"]
        }),
        tslib_1.__metadata("design:paramtypes", [NbTreeGridDataSourceBuilder,
            KeyValueDiffers])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekk7SUFBQTtJQUtBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQVFEO0lBMkhJLHdCQUNZLGlCQUFzRCxFQUN0RCxPQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBQ3RELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBNUgxQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUNoRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBaUI5QyxrQkFBYSxHQUFvQixlQUFlLENBQUMsSUFBSSxDQUFDO1FBRXRELFNBQUksR0FBRztZQUNILEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFDO0lBb0dGLENBQUM7SUF0SFEsc0JBQUksMENBQWM7YUFBbEIsVUFBbUIsR0FBK0I7WUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FB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QWU7T0E3SDNCLGNBQWMsQ0ErSTFCO0lBQUQscUJBQUM7Q0FBQSxBQS9JRCxJQStJQztTQS9JWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYlNvcnREaXJlY3Rpb24sIE5iU29ydFJlcXVlc3QsIE5iVHJlZUdyaWREYXRhU291cmNlLCBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsIE5iVHJlZUdyaWRSb3dDb21wb25lbnR9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtQYXRlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1BhdGVudC9wYXRlbnQnO1xyXG5pbXBvcnQge05iQ29sbGVjdGlvblZpZXdlcn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUvY29tcG9uZW50cy9jZGsvY29sbGVjdGlvbnMvY29sbGVjdGlvbi12aWV3ZXInO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0xpc3RSYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcbiAgICBjdXJyZW50X3BhZ2U6IG51bWJlcjtcclxuICAgIHBhdGVudF9saXN0OiBQYXRlbnRbXTtcclxuICAgIHRvdGFsX251bTogbnVtYmVyO1xyXG4gICAgdG90YWxfcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBWaWV3ZXIgaW1wbGVtZW50cyBOYkNvbGxlY3Rpb25WaWV3ZXIge1xyXG4gICAgdmlld0NoYW5nZTogT2JzZXJ2YWJsZTxMaXN0UmFuZ2U+O1xyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+PigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5GaW5hbFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlblN3aXRjaFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQElucHV0KCkgY2xpY2tOZXh0UGFnZTogKCkgPT4gYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGNsaWNrTGFzdFBhZ2U6ICgpID0+IGJvb2xlYW47XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHRhYmxlSGVhZGVyTWFwKHZhbDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pIHtcclxuICAgICAgICB0aGlzLnRhYmxlTWFwID0gdmFsO1xyXG4gICAgICAgIHRoaXMuYWxsQ29sdW1ucyA9IE9iamVjdC5rZXlzKHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG4gICAgYWxsQ29sdW1uczogc3RyaW5nW107XHJcblxyXG4gICAgZGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuICAgIHNob3duRGF0YVNvdXJjZTogTmJUcmVlR3JpZERhdGFTb3VyY2U8UGF0ZW50PjtcclxuXHJcbiAgICBzb3J0Q29sdW1uOiBzdHJpbmc7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBOYlNvcnREaXJlY3Rpb24gPSBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIGRhdGFMaXN0OiBQYXRlbnRbXTtcclxuICAgIHBhZ2UgPSB7XHJcbiAgICAgICAgbnVtOiAwLFxyXG4gICAgICAgIHN0ZXA6IDEwLFxyXG4gICAgICAgIG5vd19udW1iZXI6IDAsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBjdXN0b21lckRpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG5cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGF0YSh2YWw6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKCF2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gdmFsLnBhdGVudF9saXN0O1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0Lm1hcChlID0+ICh7ZGF0YTogZX0pKSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSgwKTtcclxuICAgICAgICB0aGlzLmFmdGVyU2V0RGF0YS5lbWl0KHRoaXMuZGF0YVNvdXJjZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZU5leHRQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrTmV4dFBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tOZXh0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm51bSArIHRoaXMucGFnZS5zdGVwID49IHRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVMYXN0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5jbGlja0xhc3RQYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsaWNrTGFzdFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZS5ub3dfbnVtYmVyID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhZ2UodGhpcy5wYWdlLm5vd19udW1iZXIgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXN0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyIC0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFBhZ2Uobm93X251bWJlcikge1xyXG4gICAgICAgIHRoaXMucGFnZS5udW0gPSBub3dfbnVtYmVyICogdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBhZ2UubnVtO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gbGVmdCArIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGlmIChyaWdodCA+PSB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByaWdodCA9IHRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLndoZW5GaW5hbFBhZ2UuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3duRGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0XHJcbiAgICAgICAgICAgICAgICAuc2xpY2UobGVmdCwgcmlnaHQpXHJcbiAgICAgICAgICAgICAgICAubWFwKGUgPT4gKHtkYXRhOiBlfSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5wYWdlLm5vd19udW1iZXIgPSBub3dfbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTZWFyY2goc2VhcmNoUXVlcnk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIoc2VhcmNoUXVlcnkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNob3coKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWaWV3ZXIoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbm5lY3Qodikuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2Ygcikge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVhY2guZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNob3duRGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXJcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmRhdGFMaXN0XHJcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5wYWdlLnN0ZXApXHJcbiAgICAgICAgICAgICAgICAubWFwKGUgPT4gKHtkYXRhOiBlfSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5zaG93bkRhdGFTb3VyY2UpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuc2hvd25EYXRhU291cmNlKTtcclxuICAgICAgICBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmtleSA9PT0gJ3JlbmRlckRhdGEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19