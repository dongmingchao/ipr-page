import { Component, Input, Output, EventEmitter, InjectionToken, Injectable, Inject, ViewChildren, ViewChild, NgZone, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { __values, __awaiter, __generator } from 'tslib';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NgxEchartsModule } from 'ngx-echarts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var openClose = [
    trigger('openClose', [
        state('open', style({
            flexGrow: 1,
            height: '50%',
        })),
        state('closed', style({
            flexGrow: 0,
            height: '0',
        })),
        transition('open => closed', [
            // style({
            //     transition: 'flex-grow 0.5s ease'
            // }),
            animate('0.5s'),
        ]),
        transition('closed => open', [
            // style({
            //     transition: 'flex-grow 0.5s ease'
            // }),
            animate('0.5s'),
        ]),
        transition('void => *', [
            animate('200ms', keyframes([
                style({
                    flexGrow: 0,
                    height: '0',
                }),
                style({
                    flexGrow: 1,
                    height: '50%',
                }),
            ])),
        ]),
        transition('* => void', [
            animate('200ms', keyframes([
                style({
                    flexGrow: 0,
                    height: '0',
                }),
            ])),
        ]),
    ]),
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CosmeticsOutlineBarComponent = /** @class */ (function () {
    function CosmeticsOutlineBarComponent() {
        this.open = true;
        this.level = 0;
        this.pointClick = new EventEmitter();
        this.nextLevel = {
            selected: null,
        };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.passSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        console.log('next level select', item);
        this.nextLevel.selected = item[0];
        item.push(this.selected);
        this.pointClick.emit(item);
    };
    /**
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.getLevelCss = /**
     * @return {?}
     */
    function () {
        return "level-" + this.level;
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.onselect = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // console.log('on select', item);
        this.selected = item;
        this.isOpen = 'open';
        this.pointClick.emit([item]);
        // const i = this.catalog.indexOf(item);
        // for (let j = 0; j < this.catalog.length; j++) {
        //     const each = this.catalog[j];
        //     each.style.height = j < i ? '100%' : '0';
        // }
        // this.clearProgress(item);
        // if (this.nextLevel.selected)
        //     this.clearProgress(this.nextLevel.selected);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.clearProgress = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_1, _a;
        try {
            for (var _b = __values(item.child_catalog), _c = _b.next(); !_c.done; _c = _b.next()) {
                var each = _c.value;
                each.style.height = '0';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.expand = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onselect(item);
    };
    /**
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.open) {
            this.isOpen = 'open';
        }
        else {
            this.isOpen = 'closed';
        }
        setTimeout((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            console.log('catalogs', _this.catalog);
        }), 1000);
    };
    CosmeticsOutlineBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-cosmetics-outline-bar',
                    template: "<ng-container *ngIf=\"catalog;\">\r\n    <ng-container *ngFor=\"let item of catalog;index as n\">\r\n        <button (click)=\"expand(item)\"\r\n                [ngClass]=\"getLevelCss()\"\r\n                class=\"circle spin circle_b\"></button>\r\n        <div class=\"botLine\">\r\n            <div></div>\r\n            <div class=\"progress\" [style.height]=\"item.style.height\"></div>\r\n        </div>\r\n        <ngx-cosmetics-outline-bar\r\n                [@openClose]=\"isOpen\"\r\n                [level]=\"level+1\"\r\n                *ngIf=\"item === selected && item.child_catalog\"\r\n                (pointClick)=\"passSelect($event)\"\r\n                [catalog]=\"item.child_catalog\"></ngx-cosmetics-outline-bar>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!--nbTooltip=\"{{item.title}}\" nbTooltipPlacement=\"right\"-->\r\n",
                    animations: openClose,
                    styles: [":host{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}button.circle{background-color:#0077b9;border:3px solid #acacac;border-radius:100%;width:24px;height:24px;margin:auto;z-index:1}.botLine{-webkit-box-flex:1;flex-grow:1;position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.botLine div{width:.9rem;height:calc(100% + 10px);position:relative;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.botLine.active div{background:#0077b9}.botLine .progress{position:absolute;background-color:red;-ms-grid-row-align:start;align-self:start}:host button.circle.spin.level-1{background-color:#00d77f;width:15px;height:18px;border:3px solid #acacac}:host button.circle.spin.level-2{background-color:#a1a1e5;width:12px;height:16px;border:2px solid #acacac}"]
                }] }
    ];
    /** @nocollapse */
    CosmeticsOutlineBarComponent.ctorParameters = function () { return []; };
    CosmeticsOutlineBarComponent.propDecorators = {
        catalog: [{ type: Input }],
        open: [{ type: Input }],
        level: [{ type: Input }],
        pointClick: [{ type: Output }]
    };
    return CosmeticsOutlineBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Catalog = /** @class */ (function () {
    function Catalog(values) {
        if (values === void 0) { values = {}; }
        this.style = {
            height: '0',
        };
        Object.assign(this, values);
    }
    return Catalog;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var IprReportBackend = new InjectionToken('backend api');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} each
 * @return {?}
 */
function rollCatalog(each) {
    if (each.child_catalog instanceof Array) {
        each.child_catalog = each.child_catalog.map(rollCatalog);
    }
    return new Catalog(each);
}
var ReportsService = /** @class */ (function () {
    function ReportsService(bes) {
        this.bes = bes;
        this.parent = {
            catalog: [],
            indexesOfRoot: [0],
        };
        this.selected = {
            catalog: [],
            index: 0,
        };
        this.focusContent = {
            index: 0,
            el: null,
        };
        this.alreadyAdd = [];
    }
    Object.defineProperty(ReportsService.prototype, "section", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selected.catalog[this.selected.index];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} item
     * @return {?}
     */
    ReportsService.prototype.loadContent = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then((/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            console.log('section content', json);
            if (!section.paragraphs) {
                section.paragraphs = json.paragraphs;
            }
        }));
    };
    /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    ReportsService.prototype.get_catelog = /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    function (id, degree) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bes.get_catelog(id, degree)];
                    case 1:
                        ret = _a.sent();
                        ret = ret.map(rollCatalog);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * @param {?} id
     * @param {?} child_content
     * @return {?}
     */
    ReportsService.prototype.get_content = /**
     * @param {?} id
     * @param {?} child_content
     * @return {?}
     */
    function (id, child_content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.bes.get_content(id, child_content)];
            });
        });
    };
    ReportsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReportsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IprReportBackend,] }] }
    ]; };
    return ReportsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, _c, _d, each, _e, _f, each;
            return __generator(this, function (_g) {
                if (this.disableScroll) {
                    return [2 /*return*/];
                }
                try {
                    for (_c = __values(this.secondary.toArray()), _d = _c.next(); !_d.done; _d = _c.next()) {
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
                    for (_e = __values(this.firstOfAll.toArray()), _f = _e.next(); !_f.done; _f = _e.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CosmeticsDetailComponent = /** @class */ (function () {
    function CosmeticsDetailComponent(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
    }
    Object.defineProperty(CosmeticsDetailComponent.prototype, "pages", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
            for (var indexesOfRoot_1 = __values(indexesOfRoot), indexesOfRoot_1_1 = indexesOfRoot_1.next(); !indexesOfRoot_1_1.done; indexesOfRoot_1_1 = indexesOfRoot_1.next()) { // 3 1
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
                for (var _c = __values(item.child_catalog), _d = _c.next(); !_d.done; _d = _c.next()) {
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
            for (var item_1 = __values(item), item_1_1 = item_1.next(); !item_1_1.done; item_1_1 = item_1.next()) {
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
    CosmeticsDetailComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CosmeticsDetailComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
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
        pages: [{ type: Input }],
        outline: [{ type: ViewChild, args: ['outline', { static: false },] }],
        article: [{ type: ViewChild, args: ['article', { static: false },] }]
    };
    return CosmeticsDetailComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} curEle
 * @param {?} parent
 * @return {?}
 */
function offset(curEle, parent) {
    /** @type {?} */
    var totalLeft = null;
    /** @type {?} */
    var totalTop = null;
    /** @type {?} */
    var par = curEle.offsetParent;
    // 首先加自己本身的左偏移和上偏移
    totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop;
    while (par && par !== parent) {
        // 累加父级参照物本身的偏移
        totalLeft += par.offsetLeft;
        totalTop += par.offsetTop;
        par = par.offsetParent;
    }
    return {
        left: totalLeft,
        top: totalTop,
    };
}
var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(_el, reportsService) {
        this.reportsService = reportsService;
        this.scrollIn = new EventEmitter();
        this.enter_lock = false;
        this.outer_lock = false;
        this.el = _el.nativeElement;
    }
    /**
     * @return {?}
     */
    ParagraphComponent.prototype.updatePercent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var focus = this.el.firstElementChild;
        /** @type {?} */
        var innocentOffset = offset(focus, this.container).top;
        this.percent = this.container.clientHeight + this.container.scrollTop - innocentOffset;
        this.percent /= focus.scrollHeight;
    };
    /**
     * @return {?}
     */
    ParagraphComponent.prototype.onscroll = /**
     * @return {?}
     */
    function () {
        this.updatePercent();
        if (this.percent > 0 && this.percent < 1) {
            if (!this.enter_lock) {
                this.scrollIntoView();
            }
            if (this.outer_lock) {
                this.scrollIntoView();
            }
            this.content.style.height = this.percent * 100 + '%';
            // console.log('focus change', this.content, this.percent);
        }
        if (this.percent > 1 && !this.outer_lock) {
            this.scrollOutView('down');
        }
        if (this.percent < 0 && this.enter_lock) {
            this.scrollOutView('up');
        }
    };
    /**
     * @return {?}
     */
    ParagraphComponent.prototype.scrollIntoView = /**
     * @return {?}
     */
    function () {
        this.enter_lock = true;
        this.outer_lock = false;
        console.log(this.content, 'scrollIntoView');
        this.scrollIn.emit(this.content);
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    ParagraphComponent.prototype.scrollOutView = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this.enter_lock = false;
        this.outer_lock = true;
        switch (direction) {
            case 'up':
                this.content.style.height = '0';
                break;
            case 'down':
                this.content.style.height = '100%';
                break;
        }
        console.log(this.content, 'scrollOutView');
    };
    /**
     * @return {?}
     */
    ParagraphComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ParagraphComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ParagraphComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.container.currentValue) {
            this.onscroll();
            if (this.outer_lock) {
                this.reportsService.loadContent(this.content);
            }
        }
    };
    ParagraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ipr-paragraph',
                    template: "<div>\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <!--<div>paragraph id{{ppp.id}}</div>-->\r\n            <div class=\"row content\" *ngIf=\"ppp.hasWidget\">\r\n                <div *ngIf=\"!ppp.widgetVertical\" class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n                    <div>widget id{{ppp.widgetID.id}}</div>\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div *ngIf=\"!ppp.widgetVertical\" class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                </div>\r\n                <div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <!--<div>widget id {{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\" class=\"echart\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
                    styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:3rem;overflow-wrap:break-word}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
                }] }
    ];
    /** @nocollapse */
    ParagraphComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ReportsService }
    ]; };
    ParagraphComponent.propDecorators = {
        content: [{ type: Input }],
        index: [{ type: Input }],
        container: [{ type: Input }],
        scrollIn: [{ type: Output }]
    };
    return ParagraphComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CosmeticsPageModule = /** @class */ (function () {
    function CosmeticsPageModule() {
    }
    CosmeticsPageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ParagraphComponent,
                        CosmeticsPageComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgxEchartsModule,
                    ],
                    exports: [CosmeticsPageComponent]
                },] }
    ];
    return CosmeticsPageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IprReportModule = /** @class */ (function () {
    function IprReportModule() {
    }
    IprReportModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CosmeticsOutlineBarComponent,
                        CosmeticsDetailComponent,
                    ],
                    imports: [
                        CommonModule,
                        CosmeticsPageModule,
                    ],
                    providers: [ReportsService],
                    exports: [CosmeticsDetailComponent]
                },] }
    ];
    return IprReportModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Paragraph = /** @class */ (function () {
    function Paragraph() {
    }
    return Paragraph;
}());

export { Catalog, IprReportBackend, IprReportModule, Paragraph, ReportsService, CosmeticsOutlineBarComponent as ɵa, openClose as ɵb, CosmeticsDetailComponent as ɵc, CosmeticsPageModule as ɵd, ParagraphComponent as ɵe, CosmeticsPageComponent as ɵf };
//# sourceMappingURL=ipr-report.js.map
