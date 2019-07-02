import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, NgZone, ViewChild, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
var CosmeticsDetailComponent = /** @class */ (function () {
    function CosmeticsDetailComponent(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
        this.widgetOnClick = new EventEmitter();
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
    CosmeticsDetailComponent.prototype.widgetClick = function (event) {
        this.widgetOnClick.emit(event);
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
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CosmeticsDetailComponent.prototype, "widgetOnClick", void 0);
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
            template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div class=\"page\">\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            (widgetOnClick)=\"widgetClick($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
            styles: ["/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;position:relative;height:100%}:host .page{position:relative;height:100%;-webkit-box-flex:1;flex-grow:1}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ReportsService,
            NgZone])
    ], CosmeticsDetailComponent);
    return CosmeticsDetailComponent;
}());
export { CosmeticsDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFRNUY7SUFtRkksa0NBQ1csY0FBOEIsRUFDOUIsSUFBWTtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBM0ViLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUE4RS9ELENBQUM7SUF0RlEsc0JBQUksMkNBQUs7YUFBVCxVQUFVLEdBQWM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztZQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNy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QkFBd0IsQ0ErRnBDO0lBQUQsK0JBQUM7Q0FBQSxBQS9GRCxJQStGQztTQS9GWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25Jbml0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZUNvbXBvbmVudH0gZnJvbSAnLi4vcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nvc21ldGljc091dGxpbmVCYXJDb21wb25lbnR9IGZyb20gJy4uL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dpZGdldENsaWNrRXZlbnR9IGZyb20gJy4uLy4uL19DbGFzc2VzL1dpZGdldENsaWNrRXZlbnQuY2xhc3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci1yZXBvcnQtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3MtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3Rlc3QuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3NtZXRpY3NEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBwYWdlcyh2YWw6IENhdGFsb2dbXSkge1xyXG4gICAgICAgIGlmICghdmFsKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nID0gdmFsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb290X2NhdGFsb2cnLCB2YWwpO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZztcclxuICAgICAgICB0aGlzLmNoYW5nZShbMF0pO1xyXG4gICAgfVxyXG4gICAgQE91dHB1dCgpIHdpZGdldE9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFdpZGdldENsaWNrRXZlbnQ+KCk7XHJcblxyXG4gICAgcGFnZTogQ2F0YWxvZ1tdO1xyXG4gICAgcHJpdmF0ZSBwYWdlSWQ6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgQFZpZXdDaGlsZCgnb3V0bGluZScsIHtzdGF0aWM6IGZhbHNlfSkgb3V0bGluZTogQ29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoJ2FydGljbGUnLCB7c3RhdGljOiBmYWxzZX0pIGFydGljbGU6IENvc21ldGljc1BhZ2VDb21wb25lbnQ7XHJcblxyXG5cclxuICAgIGNoYW5nZShpbmRleGVzT2ZSb290OiBudW1iZXJbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnLCBpbmRleGVzT2ZSb290KTtcclxuICAgICAgICBsZXQgaXRlbTogQ2F0YWxvZztcclxuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNPZlJvb3RbaW5kZXhlc09mUm9vdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBpbmRleGVzT2ZSb290KSB7Ly8gMyAxXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nID0gaXRlbS5jaGlsZF9jYXRhbG9nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB4ID0gMDtcclxuICAgICAgICAgICAgZm9yICg7IHggPCBpOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dbeF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoOyB4IDwgY2F0YWxvZy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ1t4XS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbSA9IGNhdGFsb2dbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleGVzT2ZSb290Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGxpbmUuc2VsZWN0ZWQgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VJZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gY2F0YWxvZztcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuaW5kZXhlc09mUm9vdCA9IGluZGV4ZXNPZlJvb3Q7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgZWFjaC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuY2F0YWxvZyA9IGNhdGFsb2c7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmluZGV4ZXNPZlJvb3QucHVzaChpbmRleCk7IC8vIOi/memHjGluZGV4ZXNPZlJvb3TmnInplJlcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gaXRlbS5jaGlsZF9jYXRhbG9nO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5vdXRsaW5lLmV4cGFuZChpdGVtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5kZXhlcyBvZiByb290JywgaW5kZXhlc09mUm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZW50Q2hhbmdlKGluZGV4ZXMpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZShpbmRleGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRsaW5lQ2xpY2soaXRlbTogQ2F0YWxvZ1tdKSB7IC8vIGl0ZW3mmK/nlLHlhoXliLDlpJbnmoTmlbDnu4Tmr5TlpoLor7QxLjPmmK9bMiwgMF1cclxuICAgICAgICBjb25zb2xlLmxvZygnb3V0IGxpbmUgY2xpY2snLCBpdGVtLCB0aGlzLmFydGljbGUuY29udGFpbmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXJ0aWNsZScsIHRoaXMuYXJ0aWNsZSk7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLnNjcm9sbFRvKGl0ZW1bMF0pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTG9hZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxMb2FkKGl0ZW06IENhdGFsb2dbXSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ZXNPZlJvb3QgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbSkge1xyXG4gICAgICAgICAgICBpbmRleGVzT2ZSb290LnB1c2goZWFjaC5fcmVuZGVyLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXhlc09mUm9vdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoaW5kZXhlc09mUm9vdCk7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5sb2FkQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZGdldENsaWNrKGV2ZW50OiBXaWRnZXRDbGlja0V2ZW50KSB7XHJcbiAgICAgICAgdGhpcy53aWRnZXRPbkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHpvbmU6IE5nWm9uZSxcclxuICAgICkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIl19