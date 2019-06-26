/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, NgZone, ViewChild, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
var CosmeticsDetailComponent = /** @class */ (function () {
    function CosmeticsDetailComponent(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
    }
    /**
     * @param {?} indexesOfRoot
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.change = /**
     * @param {?} indexesOfRoot
     * @return {?}
     */
    function (indexesOfRoot) {
        var e_1, _a, e_2, _b;
        console.log('change', indexesOfRoot);
        /** @type {?} */
        var item;
        /** @type {?} */
        var index = indexesOfRoot[indexesOfRoot.length - 1];
        /** @type {?} */
        var catalog = this.reportsService.root_catalog;
        try {
            for (var indexesOfRoot_1 = tslib_1.__values(indexesOfRoot), indexesOfRoot_1_1 = indexesOfRoot_1.next(); !indexesOfRoot_1_1.done; indexesOfRoot_1_1 = indexesOfRoot_1.next()) { // 3 1
                var i = indexesOfRoot_1_1.value;
                if (item) {
                    catalog = item.child_catalog;
                }
                /** @type {?} */
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
    /**
     * @param {?} indexes
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.onContentChange = /**
     * @param {?} indexes
     * @return {?}
     */
    function (indexes) {
        this.change(indexes);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.outlineClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        this.scrollLoad(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.scrollLoad = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_3, _a;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.clearToolTip = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tooltipContainer = document.getElementsByClassName('cdk-overlay-container')[0];
        for (var i = 1; i < tooltipContainer.childNodes.length; i++) {
            tooltipContainer.removeChild(tooltipContainer.childNodes[i]);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.progressHeight = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.style.height;
    };
    /**
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.getCateLog = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.reportsService.get_catelog(4, 3)
            .then((/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            _this.reportsService.root_catalog = json;
            _this.reportsService.selected.catalog = _this.reportsService.root_catalog;
            _this.page = _this.reportsService.selected.catalog;
            _this.change([0]);
        }));
    };
    /**
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.getCateLog();
    };
    CosmeticsDetailComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ipr-report-detail',
                    template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div>\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
                    styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    CosmeticsDetailComponent.ctorParameters = function () { return [
        { type: ReportsService },
        { type: NgZone }
    ]; };
    CosmeticsDetailComponent.propDecorators = {
        outline: [{ type: ViewChild, args: ['outline', { static: false },] }],
        article: [{ type: ViewChild, args: ['article', { static: false },] }]
    };
    return CosmeticsDetailComponent;
}());
export { CosmeticsDetailComponent };
if (false) {
    /** @type {?} */
    CosmeticsDetailComponent.prototype.subscription;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.page;
    /**
     * @type {?}
     * @private
     */
    CosmeticsDetailComponent.prototype.pageId;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.height;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.outline;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.article;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.reportsService;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQU1ULE1BQU0sRUFDTixTQUFTLEdBR1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRTVGO0lBK0ZJLGtDQUNXLGNBQThCLEVBQzlCLElBQVk7UUFEWixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUd2QixDQUFDOzs7OztJQXRGRCx5Q0FBTTs7OztJQUFOLFVBQU8sYUFBdUI7O1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDOztZQUNqQyxJQUFhOztZQUNYLEtBQUssR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBQ2pELE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7O1lBQzlDLEtBQWdCLElBQUEsa0JBQUEsaUJBQUEsYUFBYSxDQUFBLDRDQUFBLHVFQUFFLEVBQUMsTUFBTTtnQkFBakMsSUFBTSxDQUFDLDBCQUFBO2dCQUNSLElBQUksSUFBSSxFQUFFO29CQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNoQzs7b0JBQ0csQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNmLE9BQU8sQ0FBQyxDQUFD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QkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4dUJBQWdEOztpQkFFbkQ7Ozs7Z0JBVE8sY0FBYztnQkFObEIsTUFBTTs7OzBCQXFCTCxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzswQkFDcEMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBc0d6QywrQkFBQztDQUFBLEFBakhELElBaUhDO1NBNUdZLHdCQUF3Qjs7O0lBQ2pDLGdEQUEyQjs7SUFDM0Isd0NBQWdCOzs7OztJQUNoQiwwQ0FBdUI7O0lBQ3ZCLDBDQUFlOztJQUNmLDJDQUE2RTs7SUFDN0UsMkNBQXVFOztJQXFGbkUsa0RBQXFDOztJQUNyQyx3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25Jbml0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBOZ1pvbmUsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtDb3NtZXRpY3NQYWdlQ29tcG9uZW50fSBmcm9tICcuLi9wYWdlL2Nvc21ldGljcy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudH0gZnJvbSAnLi4vb3V0bGluZS1iYXIvY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXJlcG9ydC1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nvc21ldGljcy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVzdC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcGFnZTogQ2F0YWxvZ1tdO1xyXG4gICAgcHJpdmF0ZSBwYWdlSWQ6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgQFZpZXdDaGlsZCgnb3V0bGluZScsIHtzdGF0aWM6IGZhbHNlfSkgb3V0bGluZTogQ29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoJ2FydGljbGUnLCB7c3RhdGljOiBmYWxzZX0pIGFydGljbGU6IENvc21ldGljc1BhZ2VDb21wb25lbnQ7XHJcblxyXG5cclxuICAgIGNoYW5nZShpbmRleGVzT2ZSb290OiBudW1iZXJbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UnLCBpbmRleGVzT2ZSb290KTtcclxuICAgICAgICBsZXQgaXRlbTogQ2F0YWxvZztcclxuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4ZXNPZlJvb3RbaW5kZXhlc09mUm9vdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBsZXQgY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBpbmRleGVzT2ZSb290KSB7Ly8gMyAxXHJcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nID0gaXRlbS5jaGlsZF9jYXRhbG9nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB4ID0gMDtcclxuICAgICAgICAgICAgZm9yICg7IHggPCBpOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dbeF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoOyB4IDwgY2F0YWxvZy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ1t4XS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbSA9IGNhdGFsb2dbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleGVzT2ZSb290Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGxpbmUuc2VsZWN0ZWQgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VJZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gY2F0YWxvZztcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuaW5kZXhlc09mUm9vdCA9IGluZGV4ZXNPZlJvb3Q7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgZWFjaC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuY2F0YWxvZyA9IGNhdGFsb2c7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmluZGV4ZXNPZlJvb3QucHVzaChpbmRleCk7IC8vIOi/memHjGluZGV4ZXNPZlJvb3TmnInplJlcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gaXRlbS5jaGlsZF9jYXRhbG9nO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5vdXRsaW5lLmV4cGFuZChpdGVtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5kZXhlcyBvZiByb290JywgaW5kZXhlc09mUm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZW50Q2hhbmdlKGluZGV4ZXMpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZShpbmRleGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRsaW5lQ2xpY2soaXRlbTogQ2F0YWxvZ1tdKSB7IC8vIGl0ZW3mmK/nlLHlhoXliLDlpJbnmoTmlbDnu4Tmr5TlpoLor7QxLjPmmK9bMiwgMF1cclxuICAgICAgICBjb25zb2xlLmxvZygnb3V0IGxpbmUgY2xpY2snLCBpdGVtLCB0aGlzLmFydGljbGUuY29udGFpbmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXJ0aWNsZScsIHRoaXMuYXJ0aWNsZSk7XHJcbiAgICAgICAgdGhpcy5hcnRpY2xlLnNjcm9sbFRvKGl0ZW1bMF0pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTG9hZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxMb2FkKGl0ZW06IENhdGFsb2dbXSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ZXNPZlJvb3QgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbSkge1xyXG4gICAgICAgICAgICBpbmRleGVzT2ZSb290LnB1c2goZWFjaC5fcmVuZGVyLmluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXhlc09mUm9vdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoaW5kZXhlc09mUm9vdCk7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5sb2FkQ29udGVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVG9vbFRpcCgpIHtcclxuICAgICAgICBjb25zdCB0b29sdGlwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2RrLW92ZXJsYXktY29udGFpbmVyJylbMF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0b29sdGlwQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5yZW1vdmVDaGlsZCh0b29sdGlwQ29udGFpbmVyLmNoaWxkTm9kZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmVzc0hlaWdodChpdGVtOiBDYXRhbG9nKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3R5bGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVMb2coKSB7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5nZXRfY2F0ZWxvZyg0LCAzKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nID0ganNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UoWzBdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHVuc3Vic2NyaWJlIHRvIGVuc3VyZSBubyBtZW1vcnkgbGVha3NcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldENhdGVMb2coKTtcclxuICAgIH1cclxufVxyXG4iXX0=