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
            this.reportsService.selected.catalog = this.reportsService.root_catalog;
            this.page = this.reportsService.selected.catalog;
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
    CosmeticsDetailComponent.prototype.appendChapterFullScreen = function () {
        this.outlineClick([this.page[0]]);
    };
    CosmeticsDetailComponent.prototype.onLoading = function (_a) {
        var process = _a.process;
        if (process.now === 1) {
            this.appendChapterFullScreen();
        }
    };
    CosmeticsDetailComponent.prototype.ngOnInit = function () {
    };
    CosmeticsDetailComponent.prototype.ngAfterViewInit = function () {
    };
    CosmeticsDetailComponent.prototype.ngAfterViewChecked = function () {
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
            template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div class=\"page\">\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page [page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            (widgetOnClick)=\"widgetClick($event)\"\r\n                            (loadingParagraph)=\"onLoading($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
            styles: ["/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;position:relative;height:100%}:host .page{position:relative;height:100%;-webkit-box-flex:1;flex-grow:1}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ReportsService,
            NgZone])
    ], CosmeticsDetailComponent);
    return CosmeticsDetailComponent;
}());
export { CosmeticsDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFRNUY7SUE4Rkksa0NBQ1csY0FBOEIsRUFDOUIsSUFBWTtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBckZiLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUF3Ri9ELENBQUM7SUFqR1Esc0JBQUksMkNBQUs7YUFBVCxVQUFVLEdBQWM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBV0QseUNBQU0sR0FBTixVQUFPLGFBQXVCOztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJ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QyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7MENBQVUsc0JBQXNCOzZEQUFDO0lBakI5RCx3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG1CQUFtQjtZQUM3Qiw2M0JBQWdEOztTQUVuRCxDQUFDO2lEQWdHNkIsY0FBYztZQUN4QixNQUFNO09BaEdkLHdCQUF3QixDQThHcEM7SUFBRCwrQkFBQztDQUFBLEFBOUdELElBOEdDO1NBOUdZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE5nWm9uZSxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtDb3NtZXRpY3NQYWdlQ29tcG9uZW50fSBmcm9tICcuLi9wYWdlL2Nvc21ldGljcy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudH0gZnJvbSAnLi4vb3V0bGluZS1iYXIvY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2lkZ2V0Q2xpY2tFdmVudH0gZnJvbSAnLi4vLi4vX0NsYXNzZXMvV2lkZ2V0Q2xpY2tFdmVudC5jbGFzcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXJlcG9ydC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nvc21ldGljcy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVzdC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHBhZ2VzKHZhbDogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgaWYgKCF2YWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZyA9IHZhbDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZztcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2c7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIHdpZGdldE9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFdpZGdldENsaWNrRXZlbnQ+KCk7XHJcblxyXG4gICAgcGFnZTogQ2F0YWxvZ1tdO1xyXG4gICAgcHJpdmF0ZSBwYWdlSWQ6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgQFZpZXdDaGlsZCgnb3V0bGluZScsIHtzdGF0aWM6IGZhbHNlfSkgb3V0bGluZTogQ29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoJ2FydGljbGUnLCB7c3RhdGljOiBmYWxzZX0pIGFydGljbGU6IENvc21ldGljc1BhZ2VDb21wb25lbnQ7XHJcblxyXG5cclxuICAgIGNoYW5nZShpbmRleGVzT2ZSb290OiBudW1iZXJbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnLCBpbmRleGVzT2ZSb290KTtcclxuICAgICAgICBsZXQgaXRlbTogQ2F0YWxvZztcclxuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNPZlJvb3RbaW5kZXhlc09mUm9vdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBpbmRleGVzT2ZSb290KSB7Ly8gMyAxXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nID0gaXRlbS5jaGlsZF9jYXRhbG9nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB4ID0gMDtcclxuICAgICAgICAgICAgZm9yICg7IHggPCBpOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dbeF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoOyB4IDwgY2F0YWxvZy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ1t4XS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbSA9IGNhdGFsb2dbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleGVzT2ZSb290Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGxpbmUuc2VsZWN0ZWQgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VJZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gY2F0YWxvZztcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuaW5kZXhlc09mUm9vdCA9IGluZGV4ZXNPZlJvb3Q7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgZWFjaC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuY2F0YWxvZyA9IGNhdGFsb2c7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmluZGV4ZXNPZlJvb3QucHVzaChpbmRleCk7IC8vIOi/memHjGluZGV4ZXNPZlJvb3TmnInplJlcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gaXRlbS5jaGlsZF9jYXRhbG9nO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5vdXRsaW5lLmV4cGFuZChpdGVtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5kZXhlcyBvZiByb290JywgaW5kZXhlc09mUm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZW50Q2hhbmdlKGluZGV4ZXMpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZShpbmRleGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRsaW5lQ2xpY2soaXRlbTogQ2F0YWxvZ1tdKSB7IC8vIGl0ZW3mmK/nlLHlhoXliLDlpJbnmoTmlbDnu4Tmr5TlpoLor7QxLjPmmK9bMiwgMF1cclxuICAgICAgICBjb25zb2xlLmxvZygnb3V0IGxpbmUgY2xpY2snLCBpdGVtLCB0aGlzLmFydGljbGUuY29udGFpbmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXJ0aWNsZScsIHRoaXMuYXJ0aWNsZSk7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLnNjcm9sbFRvKGl0ZW1bMF0pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTG9hZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxMb2FkKGl0ZW06IENhdGFsb2dbXSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ZXNPZlJvb3QgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbSkge1xyXG4gICAgICAgICAgICBpbmRleGVzT2ZSb290LnB1c2goZWFjaC5fcmVuZGVyLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXhlc09mUm9vdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoaW5kZXhlc09mUm9vdCk7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5sb2FkQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZGdldENsaWNrKGV2ZW50OiBXaWRnZXRDbGlja0V2ZW50KSB7XHJcbiAgICAgICAgdGhpcy53aWRnZXRPbkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoYXB0ZXJGdWxsU2NyZWVuKCkge1xyXG4gICAgICAgIHRoaXMub3V0bGluZUNsaWNrKFt0aGlzLnBhZ2VbMF1dKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWRpbmcoe3Byb2Nlc3N9KSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3Mubm93ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hhcHRlckZ1bGxTY3JlZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==