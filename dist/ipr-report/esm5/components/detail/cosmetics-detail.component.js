import * as tslib_1 from "tslib";
import { Component, Input, NgZone, ViewChild, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
var CosmeticsDetailComponent = /** @class */ (function () {
    function CosmeticsDetailComponent(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
    }
    Object.defineProperty(CosmeticsDetailComponent.prototype, "pages", {
        set: function (val) {
            if (!val) {
                return;
            }
            this.reportsService.root_catalog = val;
            console.log('root_catalog', val);
            this.reportsService.selected.catalog = this.reportsService.root_catalog;
            this.page = this.reportsService.selected.catalog;
            this.change([0]);
        },
        enumerable: true,
        configurable: true
    });
    CosmeticsDetailComponent.prototype.change = function (indexesOfRoot) {
        var e_1, _a, e_2, _b;
        console.log('change', indexesOfRoot);
        var item;
        var index = indexesOfRoot[indexesOfRoot.length - 1];
        var catalog = this.reportsService.root_catalog;
        try {
            for (var indexesOfRoot_1 = tslib_1.__values(indexesOfRoot), indexesOfRoot_1_1 = indexesOfRoot_1.next(); !indexesOfRoot_1_1.done; indexesOfRoot_1_1 = indexesOfRoot_1.next()) { // 3 1
                var i = indexesOfRoot_1_1.value;
                if (item) {
                    catalog = item.child_catalog;
                }
                var x = 0;
                for (; x < i; x++) {
                    catalog[x].style.height = '100%';
                }
                for (; x < catalog.length; x++) {
                    catalog[x].style.height = '0';
                }
                item = catalog[i];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (indexesOfRoot_1_1 && !indexesOfRoot_1_1.done && (_a = indexesOfRoot_1.return)) _a.call(indexesOfRoot_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (indexesOfRoot.length === 1) {
            this.outline.selected = item;
        }
        this.pageId = item.id;
        this.reportsService.selected.catalog = catalog;
        this.reportsService.selected.index = index;
        this.reportsService.parent.indexesOfRoot = indexesOfRoot;
        if (item.child_catalog) {
            item.style.height = '100%';
            try {
                for (var _c = tslib_1.__values(item.child_catalog), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var each = _d.value;
                    each.style.height = '0';
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.reportsService.parent.catalog = catalog;
            this.reportsService.parent.indexesOfRoot.push(index); // 这里indexesOfRoot有错
            this.reportsService.selected.catalog = item.child_catalog;
            this.reportsService.selected.index = 0;
        }
        // this.outline.expand(item);
        // console.log('indexes of root', indexesOfRoot);
    };
    CosmeticsDetailComponent.prototype.onContentChange = function (indexes) {
        this.change(indexes);
    };
    CosmeticsDetailComponent.prototype.outlineClick = function (item) {
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        this.scrollLoad(item);
    };
    CosmeticsDetailComponent.prototype.scrollLoad = function (item) {
        var e_3, _a;
        var indexesOfRoot = [];
        try {
            for (var item_1 = tslib_1.__values(item), item_1_1 = item_1.next(); !item_1_1.done; item_1_1 = item_1.next()) {
                var each = item_1_1.value;
                indexesOfRoot.push(each._render.index);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (item_1_1 && !item_1_1.done && (_a = item_1.return)) _a.call(item_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        indexesOfRoot.reverse();
        this.change(indexesOfRoot);
        this.reportsService.loadContent();
    };
    CosmeticsDetailComponent.prototype.ngOnInit = function () {
    };
    CosmeticsDetailComponent.prototype.ngAfterViewInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], CosmeticsDetailComponent.prototype, "pages", null);
    tslib_1.__decorate([
        ViewChild('outline', { static: false }),
        tslib_1.__metadata("design:type", CosmeticsOutlineBarComponent)
    ], CosmeticsDetailComponent.prototype, "outline", void 0);
    tslib_1.__decorate([
        ViewChild('article', { static: false }),
        tslib_1.__metadata("design:type", CosmeticsPageComponent)
    ], CosmeticsDetailComponent.prototype, "article", void 0);
    CosmeticsDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'ipr-report-detail',
            template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div class=\"page\">\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
            styles: ["/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;position:relative;height:100%}:host .page{position:relative;height:100%;-webkit-box-flex:1;flex-grow:1}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ReportsService,
            NgZone])
    ], CosmeticsDetailComponent);
    return CosmeticsDetailComponent;
}());
export { CosmeticsDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBTzVGO0lBOEVJLGtDQUNXLGNBQThCLEVBQzlCLElBQVk7UUFEWixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUd2QixDQUFDO0lBakZRLHNCQUFJLDJDQUFLO2FBQVQsVUFBVSxHQUFjO1lBQzdCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7WUFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFTRCx5Q0FBTSxHQUFOLFVBQU8sYUFBdUI7O1FBQzFCLE9BQU8sQ0FBQyxH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LENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2Q0FBVSxHQUFWLFVBQVcsSUFBZTs7UUFDdEIsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDOztZQUN6QixLQUFtQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO2dCQUFwQixJQUFNLElBQUksaUJBQUE7Z0JBQ1gsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDOzs7Ozs7Ozs7UUFDRCxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFTRCwyQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGtEQUFlLEdBQWY7SUFDQSxDQUFDO0lBdkZRO1FBQVIsS0FBSyxFQUFFOzs7eURBT1A7SUFLc0M7UUFBdEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzswQ0FBVSw0QkFBNEI7NkRBQUM7SUFDdEM7UUFBdEMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzswQ0FBVSxzQkFBc0I7NkRBQUM7SUFmOUQsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsNnZCQUFnRDs7U0FFbkQsQ0FBQztpREFnRjZCLGNBQWM7WUFDeEIsTUFBTTtPQWhGZCx3QkFBd0IsQ0EwRnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQTFGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25Jbml0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZUNvbXBvbmVudH0gZnJvbSAnLi4vcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nvc21ldGljc091dGxpbmVCYXJDb21wb25lbnR9IGZyb20gJy4uL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci1yZXBvcnQtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3MtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3Rlc3QuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3NtZXRpY3NEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBwYWdlcyh2YWw6IENhdGFsb2dbXSkge1xyXG4gICAgICAgIGlmICghdmFsKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nID0gdmFsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb290X2NhdGFsb2cnLCB2YWwpO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZztcclxuICAgICAgICB0aGlzLmNoYW5nZShbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2U6IENhdGFsb2dbXTtcclxuICAgIHByaXZhdGUgcGFnZUlkOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIEBWaWV3Q2hpbGQoJ291dGxpbmUnLCB7c3RhdGljOiBmYWxzZX0pIG91dGxpbmU6IENvc21ldGljc091dGxpbmVCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKCdhcnRpY2xlJywge3N0YXRpYzogZmFsc2V9KSBhcnRpY2xlOiBDb3NtZXRpY3NQYWdlQ29tcG9uZW50O1xyXG5cclxuXHJcbiAgICBjaGFuZ2UoaW5kZXhlc09mUm9vdDogbnVtYmVyW10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlJywgaW5kZXhlc09mUm9vdCk7XHJcbiAgICAgICAgbGV0IGl0ZW06IENhdGFsb2c7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleGVzT2ZSb290W2luZGV4ZXNPZlJvb3QubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbGV0IGNhdGFsb2cgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZztcclxuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgaW5kZXhlc09mUm9vdCkgey8vIDMgMVxyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZyA9IGl0ZW0uY2hpbGRfY2F0YWxvZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgeCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoOyB4IDwgaTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nW3hdLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKDsgeCA8IGNhdGFsb2cubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dbeF0uc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYXRhbG9nW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXhlc09mUm9vdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRsaW5lLnNlbGVjdGVkID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IGNhdGFsb2c7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmluZGV4ZXNPZlJvb3QgPSBpbmRleGVzT2ZSb290O1xyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgICAgIGVhY2guc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmNhdGFsb2cgPSBjYXRhbG9nO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5pbmRleGVzT2ZSb290LnB1c2goaW5kZXgpOyAvLyDov5nph4xpbmRleGVzT2ZSb2905pyJ6ZSZXHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IGl0ZW0uY2hpbGRfY2F0YWxvZztcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMub3V0bGluZS5leHBhbmQoaXRlbSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luZGV4ZXMgb2Ygcm9vdCcsIGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29udGVudENoYW5nZShpbmRleGVzKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoaW5kZXhlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0bGluZUNsaWNrKGl0ZW06IENhdGFsb2dbXSkgeyAvLyBpdGVt5piv55Sx5YaF5Yiw5aSW55qE5pWw57uE5q+U5aaC6K+0MS4z5pivWzIsIDBdXHJcbiAgICAgICAgY29uc29sZS5sb2coJ291dCBsaW5lIGNsaWNrJywgaXRlbSwgdGhpcy5hcnRpY2xlLmNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FydGljbGUnLCB0aGlzLmFydGljbGUpO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZS5zY3JvbGxUbyhpdGVtWzBdKTtcclxuICAgICAgICB0aGlzLnNjcm9sbExvYWQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsTG9hZChpdGVtOiBDYXRhbG9nW10pIHtcclxuICAgICAgICBjb25zdCBpbmRleGVzT2ZSb290ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGl0ZW0pIHtcclxuICAgICAgICAgICAgaW5kZXhlc09mUm9vdC5wdXNoKGVhY2guX3JlbmRlci5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3QucmV2ZXJzZSgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlKGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UubG9hZENvbnRlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==