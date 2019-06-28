/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
var CosmeticsPageComponent = /** @class */ (function () {
    function CosmeticsPageComponent(reportsService) {
        this.reportsService = reportsService;
        this.currentIndex = 0;
        this.disableScroll = false;
        this.appendPageLock = false;
        this.beyondOverWindow = 0;
        this.focusContentChange = new EventEmitter();
        this.scrollIn = new EventEmitter();
        // this.reportsService.get_json_data('0')
        //   .subscribe(json => {
        //     this.page = json;
        //   });
    }
    Object.defineProperty(CosmeticsPageComponent.prototype, "Page", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.page = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CosmeticsPageComponent.prototype, "swithchTo", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== undefined && value != null) {
                this.currentIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CosmeticsPageComponent.prototype, "M_Page", {
        get: /**
         * @return {?}
         */
        function () {
            this.height = 100 / this.page.length;
            return this.page;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} i
     * @return {?}
     */
    CosmeticsPageComponent.prototype.change = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.currentIndex = i;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    CosmeticsPageComponent.prototype.getWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return 'col-lg-' + width + ' col-md-' + width + ' col-sm-' + width;
    };
    Object.defineProperty(CosmeticsPageComponent.prototype, "focusContentIndex", {
        // appendPage(pageId: number): Promise<Catalog[]> {
        //     return this.appendTo(pageId, this.page);
        // }
        //
        // appendParagraph(id: number): Promise<Catalog[]> {
        //     return this.appendTo(id, this.page);
        // }
        //
        // appendTo(id: number, content: Catalog[]): Promise<Catalog[]> {
        //     if (id === -1) {
        //         return;
        //     }
        //     this.appendPageLock = true;
        //     const rec = this.reportsService.get_content(id, 'True');
        //     console.log('append', id, content);
        //     // rec.then(json => {
        //     //     for (const each of json) {
        //     //         content.push(each);
        //     //     }
        //     //     this.reportsService.alreadyAdd.push(id);
        //     // });
        //     return rec;
        // }
        // set focusContentIndex(val) {
        //     console.log('val is', val, this.contents.toArray());
        //     this.reportsService.focusContent.index = val;
        //     this.reportsService.focusContent.el = this.contents.toArray()[val].nativeElement;
        //     console.log('focus content', this.reportsService.focusContent.el);
        // }
        get: 
        // appendPage(pageId: number): Promise<Catalog[]> {
        //     return this.appendTo(pageId, this.page);
        // }
        //
        // appendParagraph(id: number): Promise<Catalog[]> {
        //     return this.appendTo(id, this.page);
        // }
        //
        // appendTo(id: number, content: Catalog[]): Promise<Catalog[]> {
        //     if (id === -1) {
        //         return;
        //     }
        //     this.appendPageLock = true;
        //     const rec = this.reportsService.get_content(id, 'True');
        //     console.log('append', id, content);
        //     // rec.then(json => {
        //     //     for (const each of json) {
        //     //         content.push(each);
        //     //     }
        //     //     this.reportsService.alreadyAdd.push(id);
        //     // });
        //     return rec;
        // }
        // set focusContentIndex(val) {
        //     console.log('val is', val, this.contents.toArray());
        //     this.reportsService.focusContent.index = val;
        //     this.reportsService.focusContent.el = this.contents.toArray()[val].nativeElement;
        //     console.log('focus content', this.reportsService.focusContent.el);
        // }
        /**
         * @return {?}
         */
        function () {
            return this.reportsService.focusContent.index;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} curEle
     * @return {?}
     */
    CosmeticsPageComponent.prototype.offsetContainer = /**
     * @private
     * @param {?} curEle
     * @return {?}
     */
    function (curEle) {
        /** @type {?} */
        var totalLeft = null;
        /** @type {?} */
        var totalTop = null;
        /** @type {?} */
        var par = curEle.offsetParent;
        // 首先加自己本身的左偏移和上偏移
        totalLeft += curEle.offsetLeft;
        totalTop += curEle.offsetTop;
        while (par !== this.container) {
            // 累加父级参照物本身的偏移
            totalLeft += par.offsetLeft;
            totalTop += par.offsetTop;
            par = par.offsetParent;
        }
        return {
            left: totalLeft,
            top: totalTop
        };
    };
    /**
     * @param {?} content
     * @return {?}
     */
    CosmeticsPageComponent.prototype.scrollTo = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var offset = this.offsetContainer(content._render.ref);
        this.container.scrollTo(offset.left, offset.top);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    CosmeticsPageComponent.prototype.scrollIntoParagraph = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.scrollIn.emit(content);
    };
    /**
     * @return {?}
     */
    CosmeticsPageComponent.prototype.onscroll = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, _c, _d, each, _e, _f, each;
            return tslib_1.__generator(this, function (_g) {
                if (this.disableScroll) {
                    return [2 /*return*/];
                }
                try {
                    for (_c = tslib_1.__values(this.secondary.toArray()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        each = _d.value;
                        each.onscroll();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                try {
                    for (_e = tslib_1.__values(this.firstOfAll.toArray()), _f = _e.next(); !_f.done; _f = _e.next()) {
                        each = _f.value;
                        each.onscroll();
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    CosmeticsPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CosmeticsPageComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // 如果第一章节不足以滚动，则再添加一章节
        // this.focusContentIndex = 0;
        // if (this.container.scrollHeight > this.contents.first.nativeElement.scrollHeight) {
        //     const ret = this.appendPage(this.reportsService.nextPageId());
        //     if (ret) ret.subscribe(c => this.appendPageLock = false);
        // }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.container = _this._scroll_container.nativeElement;
        }));
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {
        // }
        this.secondary.changes.subscribe((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            console.log('secondary', n.toArray());
        }));
    };
    /**
     * @param {?} page
     * @param {?} index
     * @param {?} ref
     * @return {?}
     */
    CosmeticsPageComponent.prototype.contentRander = /**
     * @param {?} page
     * @param {?} index
     * @param {?} ref
     * @return {?}
     */
    function (page, index, ref) {
        page._render = { ref: ref, index: index };
    };
    CosmeticsPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-cosmetics-page',
                    template: "<div class=\"page-container\" #scroll_container (scroll)=\"onscroll()\">\r\n    <ipr-paragraph\r\n            *ngFor=\"let one of page;index as first;\"\r\n            [container]=\"container\"\r\n            [content]=\"one\" [index]=\"first\" (scrollIn)=\"scrollIntoParagraph([one])\"\r\n            #firstOfAll>{{contentRander(one, first, firstOfAll.el)}}\r\n        <ipr-paragraph\r\n                *ngFor=\"let two of one.child_catalog;index as second;\"\r\n                [container]=\"container\"\r\n                [content]=\"two\" [index]=\"second\" (scrollIn)=\"scrollIntoParagraph([two,one])\"\r\n                #secondary>{{contentRander(two, second, secondary.el)}}\r\n            <ipr-paragraph\r\n                    *ngFor=\"let three of two.child_catalog;index as third;\"\r\n                    [container]=\"container\"\r\n                    [content]=\"three\" [index]=\"third\"\r\n                    #tertiary>{{contentRander(three, third, tertiary.el)}}</ipr-paragraph>\r\n        </ipr-paragraph>\r\n    </ipr-paragraph>\r\n</div>\r\n",
                    styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20}p{text-indent:2em;font-size:13px;line-height:29px}.text{padding-left:60px;padding-right:60px}.image{padding:60px}.c-step .circle{width:100%;display:block;margin:auto;z-index:21;position:relative}.c-step .topLine{width:100%;height:50%;display:block}.c-step .botLine{width:100%;height:50%;display:block;margin-top:-3px}.c-step .circle div{background-color:#fff;border:3px solid #acacac;border-radius:100%;width:20px;height:20px;margin:auto}.c-step .circle div:hover,.c-step.active .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.botLine div,.topLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.active .botLine div,.c-step.active .topLine div,.c-step.currentActive .topLine div{width:12px;height:110%;margin:auto;background:#0077b9;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.currentActive .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.c-step.currentActive .botLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.mainTitle{margin-top:44%;padding-left:33px;padding-right:33px}.mainTitle h1{color:#0077b9;font-size:2.4em;text-align:center}.mainImg{padding-left:33px;padding-right:33px}.mainImg img{width:100%;max-height:325px}.subTitle{height:25%;padding-left:33px;padding-right:33px}.subTitle h1{color:#0077b9;font-size:2.4em;margin-top:70px}.subTitle p{color:#000;font-size:18px}.subCatelogList{padding-left:33px;padding-right:33px}.subCatelogList ul{list-style:none;padding-left:0}.subCatelogList li{margin-top:10px}.subCatelogList h3{color:#0077b9}.subCatelogList p{color:#000;font-size:18px}.report_card{background:#ecebeb;padding:15px;margin-top:10px;margin-bottom:10px;border-radius:15px;height:95%;box-shadow:0 4px 8px 0 rgba(68,186,204,.2),0 6px 20px 0 rgba(68,186,204,.2)}.report_card .tool_bar{height:30px;text-align:right}.report_card .text{padding:30px}.report_card .text p{color:#000}.report_card .image img{width:100%}.report_card .chart{position:relative}.report_card .chart .left{position:absolute;top:0;left:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-right:13px solid #0077b9}.report_card .chart .right{position:absolute;top:0;right:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:13px solid #0077b9}.report_title{height:120px;margin-top:50px;text-align:center}.report_detail_main_title{background:#0077b9;border-radius:15px}.report_detail_main_title h2{text-align:center;font-weight:800;color:#fff}.widgetButton{border-radius:14px;border:none;color:#fff;background:#0077b9;padding:5px;min-width:71px}:host .page-container{position:absolute;overflow:auto;height:100%;width:99%}"]
                }] }
    ];
    /** @nocollapse */
    CosmeticsPageComponent.ctorParameters = function () { return [
        { type: ReportsService }
    ]; };
    CosmeticsPageComponent.propDecorators = {
        Page: [{ type: Input, args: ['Page',] }],
        swithchTo: [{ type: Input }],
        M_Page: [{ type: Output }],
        focusContentChange: [{ type: Output }],
        scrollIn: [{ type: Output }],
        firstOfAll: [{ type: ViewChildren, args: ['firstOfAll',] }],
        secondary: [{ type: ViewChildren, args: ['secondary',] }],
        tertiary: [{ type: ViewChildren, args: ['tertiary',] }],
        _scroll_container: [{ type: ViewChild, args: ['scroll_container', { static: false },] }]
    };
    return CosmeticsPageComponent;
}());
export { CosmeticsPageComponent };
if (false) {
    /** @type {?} */
    CosmeticsPageComponent.prototype.page;
    /** @type {?} */
    CosmeticsPageComponent.prototype.height;
    /** @type {?} */
    CosmeticsPageComponent.prototype.container;
    /** @type {?} */
    CosmeticsPageComponent.prototype.currentIndex;
    /** @type {?} */
    CosmeticsPageComponent.prototype.disableScroll;
    /** @type {?} */
    CosmeticsPageComponent.prototype.appendPageLock;
    /** @type {?} */
    CosmeticsPageComponent.prototype.beyondOverWindow;
    /** @type {?} */
    CosmeticsPageComponent.prototype.focusContentChange;
    /** @type {?} */
    CosmeticsPageComponent.prototype.scrollIn;
    /** @type {?} */
    CosmeticsPageComponent.prototype.firstOfAll;
    /** @type {?} */
    CosmeticsPageComponent.prototype.secondary;
    /** @type {?} */
    CosmeticsPageComponent.prototype.tertiary;
    /** @type {?} */
    CosmeticsPageComponent.prototype._scroll_container;
    /**
     * @type {?}
     * @private
     */
    CosmeticsPageComponent.prototype.reportsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUgsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksR0FDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFLL0Q7SUFtS0ksZ0NBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBMUkxQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDWCx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBd0kvQyx5Q0FBeUM7UUFDekMseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixRQUFRO0lBQ1osQ0FBQztJQWpLRCxzQkFBbUIsd0NBQUk7Ozs7O1FBQXZCLFVBQXdCLEtBQUs7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYSw2Q0FBUzs7Ozs7UUFBdEIsVUFBdUIsS0FBSztZQUN4QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDN0I7UUFDTCxDQUFDOzs7T0FBQTtJQUdELHNCQUFjLDBDQUFNOzs7O1FBQXBCO1lBQ0ksSUFBSSxDQUFD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LHNDQUFnQjs7SUFDaEIsd0NBQWU7O0lBQ2YsMkNBQTBCOztJQWtCMUIsOENBQWlCOztJQUNqQiwrQ0FBc0I7O0lBQ3RCLGdEQUF1Qjs7SUFDdkIsa0RBQXFCOztJQUNyQixvREFBa0Q7O0lBQ2xELDBDQUFtRDs7SUFDbkQsNENBQXNFOztJQUN0RSwyQ0FBb0U7O0lBQ3BFLDBDQUFrRTs7SUFDbEUsbURBQThFOzs7OztJQWlJMUUsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge1BhcmFncmFwaENvbXBvbmVudH0gZnJvbSAnLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1jb3NtZXRpY3MtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgcGFnZTogQ2F0YWxvZ1tdO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIEBJbnB1dCgnUGFnZScpIHNldCBQYWdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHN3aXRoY2hUbyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBPdXRwdXQoKSBnZXQgTV9QYWdlKCkge1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwIC8gdGhpcy5wYWdlLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICBkaXNhYmxlU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBhcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgYmV5b25kT3ZlcldpbmRvdyA9IDA7XHJcbiAgICBAT3V0cHV0KCkgZm9jdXNDb250ZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbEluID0gbmV3IEV2ZW50RW1pdHRlcjxDYXRhbG9nW10+KCk7XHJcbiAgICBAVmlld0NoaWxkcmVuKCdmaXJzdE9mQWxsJykgZmlyc3RPZkFsbDogUXVlcnlMaXN0PFBhcmFncmFwaENvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkcmVuKCdzZWNvbmRhcnknKSBzZWNvbmRhcnk6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZHJlbigndGVydGlhcnknKSB0ZXJ0aWFyeTogUXVlcnlMaXN0PFBhcmFncmFwaENvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkKCdzY3JvbGxfY29udGFpbmVyJywge3N0YXRpYzogZmFsc2V9KSBfc2Nyb2xsX2NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjaGFuZ2UoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gJ2NvbC1sZy0nICsgd2lkdGggKyAnIGNvbC1tZC0nICsgd2lkdGggKyAnIGNvbC1zbS0nICsgd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXBwZW5kUGFnZShwYWdlSWQ6IG51bWJlcik6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXBwZW5kVG8ocGFnZUlkLCB0aGlzLnBhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFwcGVuZFBhcmFncmFwaChpZDogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcHBlbmRUbyhpZCwgdGhpcy5wYWdlKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhcHBlbmRUbyhpZDogbnVtYmVyLCBjb250ZW50OiBDYXRhbG9nW10pOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIGlmIChpZCA9PT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gdHJ1ZTtcclxuICAgIC8vICAgICBjb25zdCByZWMgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLmdldF9jb250ZW50KGlkLCAnVHJ1ZScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBpZCwgY29udGVudCk7XHJcbiAgICAvLyAgICAgLy8gcmVjLnRoZW4oanNvbiA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgIGZvciAoY29uc3QgZWFjaCBvZiBqc29uKSB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb250ZW50LnB1c2goZWFjaCk7XHJcbiAgICAvLyAgICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLnB1c2goaWQpO1xyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiByZWM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0IGZvY3VzQ29udGVudEluZGV4KHZhbCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWwgaXMnLCB2YWwsIHRoaXMuY29udGVudHMudG9BcnJheSgpKTtcclxuICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleCA9IHZhbDtcclxuICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCA9IHRoaXMuY29udGVudHMudG9BcnJheSgpW3ZhbF0ubmF0aXZlRWxlbWVudDtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnZm9jdXMgY29udGVudCcsIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXQgZm9jdXNDb250ZW50SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2Zmc2V0Q29udGFpbmVyKGN1ckVsZSkge1xyXG4gICAgICAgIGxldCB0b3RhbExlZnQgPSBudWxsO1xyXG4gICAgICAgIGxldCB0b3RhbFRvcCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhciA9IGN1ckVsZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgLy8g6aaW5YWI5Yqg6Ieq5bex5pys6Lqr55qE5bem5YGP56e75ZKM5LiK5YGP56e7XHJcbiAgICAgICAgdG90YWxMZWZ0ICs9IGN1ckVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvdGFsVG9wICs9IGN1ckVsZS5vZmZzZXRUb3A7XHJcbiAgICAgICAgd2hpbGUgKHBhciAhPT0gdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgLy8g57Sv5Yqg54i257qn5Y+C54Wn54mp5pys6Lqr55qE5YGP56e7XHJcbiAgICAgICAgICAgIHRvdGFsTGVmdCArPSBwYXIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgdG90YWxUb3AgKz0gcGFyLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgcGFyID0gcGFyLm9mZnNldFBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IHRvdGFsTGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0b3RhbFRvcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8oY29udGVudDogQ2F0YWxvZykge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0Q29udGFpbmVyKGNvbnRlbnQuX3JlbmRlci5yZWYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvKG9mZnNldC5sZWZ0LCBvZmZzZXQudG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvUGFyYWdyYXBoKGNvbnRlbnQ6IENhdGFsb2dbXSkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSW4uZW1pdChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbnNjcm9sbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRoaXMuc2Vjb25kYXJ5LnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICBlYWNoLm9uc2Nyb2xsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiB0aGlzLmZpcnN0T2ZBbGwudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGVhY2gub25zY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHBlcmNlbnQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgLSB0aGlzLmJleW9uZE92ZXJXaW5kb3c7XHJcbiAgICAgICAgLy8gcGVyY2VudCAvPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzQ29udGVudCcsIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLCB0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZy5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgLy8gICAgIHNlY3Rpb24gPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2dbMF07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSBwZXJjZW50ICogMTAwICsgJyUnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwZXJjZW50JywgcGVyY2VudCwgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5pbmRleCk7XHJcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPiAwLjgpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuYXBwZW5kUGFnZUxvY2spIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbmV4dFBhZ2VJZCA9IHRoaXMucmVwb3J0c1NlcnZpY2UubmV4dFBhZ2VJZCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLmluY2x1ZGVzKG5leHRQYWdlSWQpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFwcGVuZFBhZ2UobmV4dFBhZ2VJZCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnRzLmNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDEpIHtcclxuICAgICAgICAvLyBjb25zdCBuZXh0UGFnZUlkID0gdGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuYWxyZWFkeUFkZC5pbmNsdWRlcyhuZXh0UGFnZUlkKSkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmV5b25kT3ZlcldpbmRvdyArPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5mb2N1c0NvbnRlbnRJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZvY3VzQ29udGVudENoYW5nZS5lbWl0KFt0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleF0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPCAwKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmV5b25kT3ZlcldpbmRvdyAtPSB0aGlzLmNvbnRlbnRzLnRvQXJyYXkoKVt0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleCAtIDFdXHJcbiAgICAgICAgLy8gICAgICAgICAubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50SW5kZXgtLTtcclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudENoYW5nZS5lbWl0KFt0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleF0pO1xyXG4gICAgICAgIC8vIHRoaXMuZGlzYWJsZVNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc2FibGVTY3JvbGwgPSBmYWxzZSwgMTAwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZXBvcnRzU2VydmljZS5nZXRfanNvbl9kYXRhKCcwJylcclxuICAgICAgICAvLyAgIC5zdWJzY3JpYmUoanNvbiA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGFnZSA9IGpzb247XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c56ys5LiA56ug6IqC5LiN6Laz5Lul5rua5Yqo77yM5YiZ5YaN5re75Yqg5LiA56ug6IqCXHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IHRoaXMuY29udGVudHMuZmlyc3QubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgcmV0ID0gdGhpcy5hcHBlbmRQYWdlKHRoaXMucmVwb3J0c1NlcnZpY2UubmV4dFBhZ2VJZCgpKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJldCkgcmV0LnN1YnNjcmliZShjID0+IHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX3Njcm9sbF9jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zdCBmaXJzdE9mQWxsID0gdGhpcy5maXJzdE9mQWxsLnRvQXJyYXkoKTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IGVhY2ggb2YgZmlyc3RPZkFsbCkge1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkuY2hhbmdlcy5zdWJzY3JpYmUobiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWNvbmRhcnknLCBuLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudFJhbmRlcihwYWdlOiBDYXRhbG9nLCBpbmRleDogbnVtYmVyLCByZWYpIHtcclxuICAgICAgICBwYWdlLl9yZW5kZXIgPSB7cmVmLCBpbmRleH07XHJcbiAgICB9XHJcbn1cclxuIl19