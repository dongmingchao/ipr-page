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
        this.sourceToShow(left, right);
        this.page.now_number = now_number;
    };
    TableComponent.prototype.sourceToShow = function (left, right) {
        if (!right) {
            right = left + this.page.step;
        }
        this.shownDataSource = this.dataSourceBuilder
            .create(this.dataList
            .slice(left, right)
            .map(function (e) { return ({ data: e }); }));
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
        // this.setPage(0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFDLGVBQWUsRUFBdUMsMkJBQTJCLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFPekk7SUFBQTtJQUtBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQVFEO0lBbUpJLHdCQUNZLGlCQUFzRCxFQUN0RCxPQUF3QjtRQUR4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXFDO1FBQ3RELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBcEoxQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDdEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0MsQ0FBQztRQUNoRSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzVDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTRCNUMsa0JBQWEsR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztRQUV0RCxTQUFJLEdBQUc7WUFDSCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLENBQUM7WUFDYixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7SUE4R0YsQ0FBQztJQS9JUSxzQkFBSSx5Q0FBYTthQUFqQixVQUFrQixHQUFx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d0RBQWlFO0lBQ2hFO1FBQVQsTUFBTSxFQUFFOzt5REFBb0M7SUFDbkM7UUFBVCxNQUFNLEVBQUU7OzBEQUE2QztJQUM1QztRQUFULE1BQU0sRUFBRTs7c0RBQWlDO0lBQ2hDO1FBQVQsTUFBTSxFQUFFOzt3REFBbUM7SUFFbkM7UUFBUixLQUFLLEVBQUU7Ozt1REFLUDtJQUVRO1FBQVIsS0FBSyxFQUFFOzs7dURBS1A7SUFFUTtRQUFSLEtBQUssRUFBRTs7O3dEQUdQO0lBb0JRO1FBQVIsS0FBSyxFQUFFOzBDQUFlLFFBQVE7aURBQVIsUUFBUTs4Q0FVOUI7SUF2RFEsY0FBYztRQU4xQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQiwyekNBQXFDOztTQUV4QyxDQUFDO2lEQXNKaUMsMkJBQTJCO1lBQ3JDLGVBQWU7T0FySjNCLGNBQWMsQ0F1SzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZLRCxJQXVLQztTQXZLWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOYlNvcnREaXJlY3Rpb24sIE5iU29ydFJlcXVlc3QsIE5iVHJlZUdyaWREYXRhU291cmNlLCBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsIE5iVHJlZUdyaWRSb3dDb21wb25lbnR9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtQYXRlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1BhdGVudC9wYXRlbnQnO1xyXG5pbXBvcnQge05iQ29sbGVjdGlvblZpZXdlcn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUvY29tcG9uZW50cy9jZGsvY29sbGVjdGlvbnMvY29sbGVjdGlvbi12aWV3ZXInO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0xpc3RSYW5nZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuXHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcbiAgICBjdXJyZW50X3BhZ2U6IG51bWJlcjtcclxuICAgIHBhdGVudF9saXN0OiBQYXRlbnRbXTtcclxuICAgIHRvdGFsX251bTogbnVtYmVyO1xyXG4gICAgdG90YWxfcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBWaWV3ZXIgaW1wbGVtZW50cyBOYkNvbGxlY3Rpb25WaWV3ZXIge1xyXG4gICAgdmlld0NoYW5nZTogT2JzZXJ2YWJsZTxMaXN0UmFuZ2U+O1xyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIERvQ2hlY2ssIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE5iVHJlZUdyaWRSb3dDb21wb25lbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXREYXRhID0gbmV3IEV2ZW50RW1pdHRlcjxOYlRyZWVHcmlkRGF0YVNvdXJjZTxQYXRlbnQ+PigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5GaW5hbFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgd2hlblN3aXRjaFBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAgIEBPdXRwdXQoKSB3aGVuU29ydGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHdoZW5GaWx0ZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2xpY2tOZXh0UGFnZSh2YWw6IHsgb25jbGljazogKCkgPT4gdm9pZCwgZGlzYWJsZT86ICgpID0+IGJvb2xlYW4gfSkge1xyXG4gICAgICAgIHRoaXMubmV4dFBhZ2UgPSB2YWwub25jbGljaztcclxuICAgICAgICBpZiAodmFsLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlTmV4dFBhZ2UgPSB2YWwuZGlzYWJsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGNsaWNrTGFzdFBhZ2UodmFsOiB7IG9uY2xpY2s6ICgpID0+IHZvaWQsIGRpc2FibGU/OiAoKSA9PiBib29sZWFuIH0pIHtcclxuICAgICAgICB0aGlzLmxhc3RQYWdlID0gdmFsLm9uY2xpY2s7XHJcbiAgICAgICAgaWYgKHZhbC5kaXNhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUxhc3RQYWdlID0gdmFsLmRpc2FibGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCB0YWJsZUhlYWRlck1hcCh2YWw6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSB7XHJcbiAgICAgICAgdGhpcy50YWJsZU1hcCA9IHZhbDtcclxuICAgICAgICB0aGlzLmFsbENvbHVtbnMgPSBPYmplY3Qua2V5cyh2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlTWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcclxuICAgIGFsbENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcbiAgICBzaG93bkRhdGFTb3VyY2U6IE5iVHJlZUdyaWREYXRhU291cmNlPFBhdGVudD47XHJcblxyXG4gICAgc29ydENvbHVtbjogc3RyaW5nO1xyXG4gICAgc29ydERpcmVjdGlvbjogTmJTb3J0RGlyZWN0aW9uID0gTmJTb3J0RGlyZWN0aW9uLk5PTkU7XHJcbiAgICBkYXRhTGlzdDogUGF0ZW50W107XHJcbiAgICBwYWdlID0ge1xyXG4gICAgICAgIG51bTogMCxcclxuICAgICAgICBzdGVwOiAxMCxcclxuICAgICAgICBub3dfbnVtYmVyOiAwLFxyXG4gICAgICAgIHN1bTogMCxcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGN1c3RvbWVyRGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcblxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBkYXRhKHZhbDogUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSB2YWwucGF0ZW50X2xpc3Q7XHJcbiAgICAgICAgdGhpcy5wYWdlLnN1bSA9IE1hdGguY2VpbCh0aGlzLmRhdGFMaXN0Lmxlbmd0aCAvIHRoaXMucGFnZS5zdGVwKSAtIDE7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlclxyXG4gICAgICAgICAgICAuY3JlYXRlKHRoaXMuZGF0YUxpc3QubWFwKGUgPT4gKHtkYXRhOiBlfSkpKTtcclxuICAgICAgICB0aGlzLnNldFBhZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5hZnRlclNldERhdGEuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVOZXh0UGFnZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlLm5vd19udW1iZXIgPT09IHRoaXMucGFnZS5zdW07XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZUxhc3RQYWdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2Uubm93X251bWJlciA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0UGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hQYWdlKHRoaXMucGFnZS5ub3dfbnVtYmVyICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGFnZSh0aGlzLnBhZ2Uubm93X251bWJlciAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kem5Y+R5o2i6aG15LqL5Lu277yM5bGV56S66aG156CB5Lit5YaF5a6577yM5bm26K6+5a6a5paw55qE55u45YWz6KeG5Zu+5L+h5oGvXHJcbiAgICAgKiBAcGFyYW0gbm93X251bWJlciDpobXnoIFcclxuICAgICAqL1xyXG4gICAgcmVmcmVzaFBhZ2Uobm93X251bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KG5vd19udW1iZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGFnZShub3dfbnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdlKG5vd19udW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucGFnZS5udW0gPSBub3dfbnVtYmVyICogdGhpcy5wYWdlLnN0ZXA7XHJcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBhZ2UubnVtO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gbGVmdCArIHRoaXMucGFnZS5zdGVwO1xyXG4gICAgICAgIGlmIChyaWdodCA+PSB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByaWdodCA9IHRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLndoZW5GaW5hbFBhZ2UuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvdXJjZVRvU2hvdyhsZWZ0LCByaWdodCk7XHJcbiAgICAgICAgdGhpcy5wYWdlLm5vd19udW1iZXIgPSBub3dfbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNvdXJjZVRvU2hvdyhsZWZ0OiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFyaWdodCkge1xyXG4gICAgICAgICAgICByaWdodCA9IGxlZnQgKyB0aGlzLnBhZ2Uuc3RlcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93bkRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5kYXRhTGlzdFxyXG4gICAgICAgICAgICAgICAgLnNsaWNlKGxlZnQsIHJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLm1hcChlID0+ICh7ZGF0YTogZX0pKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNvcnQoc29ydFJlcXVlc3Q6IE5iU29ydFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNvcnRDb2x1bW4gPSBzb3J0UmVxdWVzdC5jb2x1bW47XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gc29ydFJlcXVlc3QuZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMud2hlblNvcnRlZC5lbWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaChzZWFyY2hRdWVyeTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlcihzZWFyY2hRdWVyeSk7XHJcbiAgICAgICAgdGhpcy53aGVuRmlsdGVyZWQuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO5oC75pWw5o2u5rqQ5Y+W6YOo5YiG5pWw5o2u5bGV56S6XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVNob3coKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IG5ldyBWaWV3ZXIoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmNvbm5lY3Qodikuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2Ygcikge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGVhY2guZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YTtcclxuICAgICAgICAvLyB0aGlzLnNldFBhZ2UoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U29ydERpcmVjdGlvbihjb2x1bW46IHN0cmluZyk6IE5iU29ydERpcmVjdGlvbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydENvbHVtbiA9PT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYlNvcnREaXJlY3Rpb24uTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTaG93T24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgPSA0MDA7XHJcbiAgICAgICAgY29uc3QgbmV4dENvbHVtblN0ZXAgPSAxMDA7XHJcbiAgICAgICAgcmV0dXJuIG1pbldpdGhGb3JNdWx0aXBsZUNvbHVtbnMgKyAobmV4dENvbHVtblN0ZXAgKiBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPFBhdGVudD4sXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5zaG93bkRhdGFTb3VyY2UpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuc2hvd25EYXRhU291cmNlKTtcclxuICAgICAgICAvLyBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgIC8vICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hDaGFuZ2VkSXRlbShyID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChyLmtleSA9PT0gJ3JlbmRlckRhdGEnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53aGVuU3dpdGNoUGFnZS5lbWl0KHIpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19