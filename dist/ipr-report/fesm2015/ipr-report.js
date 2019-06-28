import { EventEmitter, Component, Input, Output, InjectionToken, Injectable, Inject, ViewChildren, ViewChild, NgZone, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { __awaiter } from 'tslib';
import { NgxEchartsModule } from 'ngx-echarts';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const openClose = [
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
class CosmeticsOutlineBarComponent {
    constructor() {
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
    passSelect(item) {
        console.log('next level select', item);
        this.nextLevel.selected = item[0];
        item.push(this.selected);
        this.pointClick.emit(item);
    }
    /**
     * @return {?}
     */
    getLevelCss() {
        return `level-${this.level}`;
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    onselect(item) {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    clearProgress(item) {
        for (const each of item.child_catalog) {
            each.style.height = '0';
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    expand(item) {
        this.onselect(item);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        e => {
            console.log('catalogs', this.catalog);
        }), 1000);
    }
}
CosmeticsOutlineBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-cosmetics-outline-bar',
                template: "<ng-container *ngIf=\"catalog;\">\r\n    <ng-container *ngFor=\"let item of catalog;index as n\">\r\n        <button (click)=\"expand(item)\"\r\n                [ngClass]=\"getLevelCss()\"\r\n                class=\"circle spin circle_b\"></button>\r\n        <div class=\"botLine\">\r\n            <div></div>\r\n            <div class=\"progress\" [style.height]=\"item.style.height\"></div>\r\n        </div>\r\n        <ngx-cosmetics-outline-bar\r\n                [@openClose]=\"isOpen\"\r\n                [level]=\"level+1\"\r\n                *ngIf=\"item === selected && item.child_catalog\"\r\n                (pointClick)=\"passSelect($event)\"\r\n                [catalog]=\"item.child_catalog\"></ngx-cosmetics-outline-bar>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!--nbTooltip=\"{{item.title}}\" nbTooltipPlacement=\"right\"-->\r\n",
                animations: openClose,
                styles: [":host{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}button.circle{background-color:#0077b9;border:3px solid #acacac;border-radius:100%;width:24px;height:24px;margin:auto;z-index:1}.botLine{-webkit-box-flex:1;flex-grow:1;position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.botLine div{width:.9rem;height:calc(100% + 10px);position:relative;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.botLine.active div{background:#0077b9}.botLine .progress{position:absolute;background-color:red;-ms-grid-row-align:start;align-self:start}:host button.circle.spin.level-1{background-color:#00d77f;width:15px;height:18px;border:3px solid #acacac}:host button.circle.spin.level-2{background-color:#a1a1e5;width:12px;height:16px;border:2px solid #acacac}"]
            }] }
];
/** @nocollapse */
CosmeticsOutlineBarComponent.ctorParameters = () => [];
CosmeticsOutlineBarComponent.propDecorators = {
    catalog: [{ type: Input }],
    open: [{ type: Input }],
    level: [{ type: Input }],
    pointClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Catalog {
    /**
     * @param {?=} values
     */
    constructor(values = {}) {
        this.style = {
            height: '0',
        };
        Object.assign(this, values);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const IprReportBackend = new InjectionToken('backend api');

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
class ReportsService {
    /**
     * @param {?} bes
     */
    constructor(bes) {
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
    /**
     * @return {?}
     */
    get section() {
        return this.selected.catalog[this.selected.index];
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    loadContent(item) {
        /** @type {?} */
        let section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then((/**
         * @param {?} json
         * @return {?}
         */
        json => {
            console.log('section content', json);
            if (!section.paragraphs) {
                section.paragraphs = json.paragraphs;
            }
        }));
    }
    /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    get_catelog(id, degree) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let ret = yield this.bes.get_catelog(id, degree);
            ret = ret.map(rollCatalog);
            return ret;
        });
    }
    /**
     * @param {?} id
     * @param {?} child_content
     * @return {?}
     */
    get_content(id, child_content) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bes.get_content(id, child_content);
        });
    }
}
ReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IprReportBackend,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CosmeticsPageComponent {
    /**
     * @param {?} reportsService
     */
    constructor(reportsService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set Page(value) {
        this.page = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set swithchTo(value) {
        if (value !== undefined && value != null) {
            this.currentIndex = value;
        }
    }
    /**
     * @return {?}
     */
    get M_Page() {
        this.height = 100 / this.page.length;
        return this.page;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    change(i) {
        this.currentIndex = i;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    getWidth(width) {
        return 'col-lg-' + width + ' col-md-' + width + ' col-sm-' + width;
    }
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
    get focusContentIndex() {
        return this.reportsService.focusContent.index;
    }
    /**
     * @private
     * @param {?} curEle
     * @return {?}
     */
    offsetContainer(curEle) {
        /** @type {?} */
        let totalLeft = null;
        /** @type {?} */
        let totalTop = null;
        /** @type {?} */
        let par = curEle.offsetParent;
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
    }
    /**
     * @param {?} content
     * @return {?}
     */
    scrollTo(content) {
        /** @type {?} */
        const offset = this.offsetContainer(content._render.ref);
        this.container.scrollTo(offset.left, offset.top);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    scrollIntoParagraph(content) {
        this.scrollIn.emit(content);
    }
    /**
     * @return {?}
     */
    onscroll() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.disableScroll) {
                return;
            }
            for (const each of this.secondary.toArray()) {
                each.onscroll();
            }
            for (const each of this.firstOfAll.toArray()) {
                each.onscroll();
            }
            // let percent = this.container.clientHeight + this.container.scrollTop - this.beyondOverWindow;
            // percent /= this.reportsService.focusContent.el.scrollHeight;
            // console.log('focusContent', this.reportsService.focusContent.el, this.container);
            // if (this.reportsService.selected.catalog.length) {
            //     section.style.height = '100%';
            //     section = this.reportsService.selected.catalog[0];
            // }
            // this.reportsService.section.style.height = percent * 100 + '%';
            // console.log('percent', percent, this.reportsService.selected.index);
            // if (percent > 0.8) {
            // if (!this.appendPageLock) {
            //     const nextPageId = this.reportsService.nextPageId();
            //     if (this.reportsService.alreadyAdd.includes(nextPageId)) {
            //         // this.appendPageLock = false;
            //     } else {
            //         this.appendPage(nextPageId);
            //         this.contents.changes.subscribe(a => {
            //             this.appendPageLock = false;
            //         });
            //     }
            // }
            // }
            // if (percent > 1) {
            // const nextPageId = this.reportsService.nextPageId();
            // if (this.reportsService.alreadyAdd.includes(nextPageId)) {
            //     if (this.reportsService.focusContent.el) {
            //         this.beyondOverWindow += this.reportsService.focusContent.el.scrollHeight;
            //     }
            //     this.focusContentIndex++;
            //     this.focusContentChange.emit([this.reportsService.focusContent.index]);
            // }
            // }
            // if (percent < 0) {
            // if (this.reportsService.focusContent.el) {
            //     this.beyondOverWindow -= this.contents.toArray()[this.reportsService.focusContent.index - 1]
            //         .nativeElement.scrollHeight;
            // }
            // this.focusContentIndex--;
            // this.focusContentChange.emit([this.reportsService.focusContent.index]);
            // this.disableScroll = true;
            // setTimeout(() => this.disableScroll = false, 1000);
            // }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // 如果第一章节不足以滚动，则再添加一章节
        // this.focusContentIndex = 0;
        // if (this.container.scrollHeight > this.contents.first.nativeElement.scrollHeight) {
        //     const ret = this.appendPage(this.reportsService.nextPageId());
        //     if (ret) ret.subscribe(c => this.appendPageLock = false);
        // }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.container = this._scroll_container.nativeElement;
        }));
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {
        // }
        this.secondary.changes.subscribe((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            console.log('secondary', n.toArray());
        }));
    }
    /**
     * @param {?} page
     * @param {?} index
     * @param {?} ref
     * @return {?}
     */
    contentRander(page, index, ref) {
        page._render = { ref, index };
    }
}
CosmeticsPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-cosmetics-page',
                template: "<div class=\"page-container\" #scroll_container (scroll)=\"onscroll()\">\r\n    <ipr-paragraph\r\n            *ngFor=\"let one of page;index as first;\"\r\n            [container]=\"container\"\r\n            [content]=\"one\" [index]=\"first\" (scrollIn)=\"scrollIntoParagraph([one])\"\r\n            #firstOfAll>{{contentRander(one, first, firstOfAll.el)}}\r\n        <ipr-paragraph\r\n                *ngFor=\"let two of one.child_catalog;index as second;\"\r\n                [container]=\"container\"\r\n                [content]=\"two\" [index]=\"second\" (scrollIn)=\"scrollIntoParagraph([two,one])\"\r\n                #secondary>{{contentRander(two, second, secondary.el)}}\r\n            <ipr-paragraph\r\n                    *ngFor=\"let three of two.child_catalog;index as third;\"\r\n                    [container]=\"container\"\r\n                    [content]=\"three\" [index]=\"third\"\r\n                    #tertiary>{{contentRander(three, third, tertiary.el)}}</ipr-paragraph>\r\n        </ipr-paragraph>\r\n    </ipr-paragraph>\r\n</div>\r\n",
                styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20}p{text-indent:2em;font-size:13px;line-height:29px}.text{padding-left:60px;padding-right:60px}.image{padding:60px}.c-step .circle{width:100%;display:block;margin:auto;z-index:21;position:relative}.c-step .topLine{width:100%;height:50%;display:block}.c-step .botLine{width:100%;height:50%;display:block;margin-top:-3px}.c-step .circle div{background-color:#fff;border:3px solid #acacac;border-radius:100%;width:20px;height:20px;margin:auto}.c-step .circle div:hover,.c-step.active .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.botLine div,.topLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.active .botLine div,.c-step.active .topLine div,.c-step.currentActive .topLine div{width:12px;height:110%;margin:auto;background:#0077b9;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.currentActive .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.c-step.currentActive .botLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.mainTitle{margin-top:44%;padding-left:33px;padding-right:33px}.mainTitle h1{color:#0077b9;font-size:2.4em;text-align:center}.mainImg{padding-left:33px;padding-right:33px}.mainImg img{width:100%;max-height:325px}.subTitle{height:25%;padding-left:33px;padding-right:33px}.subTitle h1{color:#0077b9;font-size:2.4em;margin-top:70px}.subTitle p{color:#000;font-size:18px}.subCatelogList{padding-left:33px;padding-right:33px}.subCatelogList ul{list-style:none;padding-left:0}.subCatelogList li{margin-top:10px}.subCatelogList h3{color:#0077b9}.subCatelogList p{color:#000;font-size:18px}.report_card{background:#ecebeb;padding:15px;margin-top:10px;margin-bottom:10px;border-radius:15px;height:95%;box-shadow:0 4px 8px 0 rgba(68,186,204,.2),0 6px 20px 0 rgba(68,186,204,.2)}.report_card .tool_bar{height:30px;text-align:right}.report_card .text{padding:30px}.report_card .text p{color:#000}.report_card .image img{width:100%}.report_card .chart{position:relative}.report_card .chart .left{position:absolute;top:0;left:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-right:13px solid #0077b9}.report_card .chart .right{position:absolute;top:0;right:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:13px solid #0077b9}.report_title{height:120px;margin-top:50px;text-align:center}.report_detail_main_title{background:#0077b9;border-radius:15px}.report_detail_main_title h2{text-align:center;font-weight:800;color:#fff}.widgetButton{border-radius:14px;border:none;color:#fff;background:#0077b9;padding:5px;min-width:71px}:host .page-container{position:absolute;overflow:auto;height:100%;width:99%}"]
            }] }
];
/** @nocollapse */
CosmeticsPageComponent.ctorParameters = () => [
    { type: ReportsService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CosmeticsDetailComponent {
    /**
     * @param {?} reportsService
     * @param {?} zone
     */
    constructor(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set pages(val) {
        if (!val) {
            return;
        }
        this.reportsService.root_catalog = val;
        console.log('root_catalog', val);
        this.reportsService.selected.catalog = this.reportsService.root_catalog;
        this.page = this.reportsService.selected.catalog;
        this.change([0]);
    }
    /**
     * @param {?} indexesOfRoot
     * @return {?}
     */
    change(indexesOfRoot) {
        console.log('change', indexesOfRoot);
        /** @type {?} */
        let item;
        /** @type {?} */
        const index = indexesOfRoot[indexesOfRoot.length - 1];
        /** @type {?} */
        let catalog = this.reportsService.root_catalog;
        for (const i of indexesOfRoot) { // 3 1
            if (item) {
                catalog = item.child_catalog;
            }
            /** @type {?} */
            let x = 0;
            for (; x < i; x++) {
                catalog[x].style.height = '100%';
            }
            for (; x < catalog.length; x++) {
                catalog[x].style.height = '0';
            }
            item = catalog[i];
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
            for (const each of item.child_catalog) {
                each.style.height = '0';
            }
            this.reportsService.parent.catalog = catalog;
            this.reportsService.parent.indexesOfRoot.push(index); // 这里indexesOfRoot有错
            this.reportsService.selected.catalog = item.child_catalog;
            this.reportsService.selected.index = 0;
        }
        // this.outline.expand(item);
        // console.log('indexes of root', indexesOfRoot);
    }
    /**
     * @param {?} indexes
     * @return {?}
     */
    onContentChange(indexes) {
        this.change(indexes);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    outlineClick(item) {
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        this.scrollLoad(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    scrollLoad(item) {
        /** @type {?} */
        const indexesOfRoot = [];
        for (const each of item) {
            indexesOfRoot.push(each._render.index);
        }
        indexesOfRoot.reverse();
        this.change(indexesOfRoot);
        this.reportsService.loadContent();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
CosmeticsDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'ipr-report-detail',
                template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div>\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
                styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;height:100%}"]
            }] }
];
/** @nocollapse */
CosmeticsDetailComponent.ctorParameters = () => [
    { type: ReportsService },
    { type: NgZone }
];
CosmeticsDetailComponent.propDecorators = {
    pages: [{ type: Input }],
    outline: [{ type: ViewChild, args: ['outline', { static: false },] }],
    article: [{ type: ViewChild, args: ['article', { static: false },] }]
};

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
    let totalLeft = null;
    /** @type {?} */
    let totalTop = null;
    /** @type {?} */
    let par = curEle.offsetParent;
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
class ParagraphComponent {
    /**
     * @param {?} _el
     * @param {?} reportsService
     */
    constructor(_el, reportsService) {
        this.reportsService = reportsService;
        this.scrollIn = new EventEmitter();
        this.enter_lock = false;
        this.outer_lock = false;
        this.el = _el.nativeElement;
    }
    /**
     * @return {?}
     */
    updatePercent() {
        /** @type {?} */
        const focus = this.el.firstElementChild;
        /** @type {?} */
        const innocentOffset = offset(focus, this.container).top;
        this.percent = this.container.clientHeight + this.container.scrollTop - innocentOffset;
        this.percent /= focus.scrollHeight;
    }
    /**
     * @return {?}
     */
    onscroll() {
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
    }
    /**
     * @return {?}
     */
    scrollIntoView() {
        this.enter_lock = true;
        this.outer_lock = false;
        console.log(this.content, 'scrollIntoView');
        this.scrollIn.emit(this.content);
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    scrollOutView(direction) {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.container.currentValue) {
            this.onscroll();
            if (this.outer_lock) {
                this.reportsService.loadContent(this.content);
            }
        }
    }
}
ParagraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'ipr-paragraph',
                template: "<div>\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <!--<div>paragraph id{{ppp.id}}</div>-->\r\n            <div class=\"row content\" *ngIf=\"ppp.hasWidget\">\r\n                <div *ngIf=\"!ppp.widgetVertical\" class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n                    <div>widget id{{ppp.widgetID.id}}</div>\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div *ngIf=\"!ppp.widgetVertical\" class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                </div>\r\n                <div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <!--<div>widget id {{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\" class=\"echart\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
                styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:3rem;overflow-wrap:break-word}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
            }] }
];
/** @nocollapse */
ParagraphComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ReportsService }
];
ParagraphComponent.propDecorators = {
    content: [{ type: Input }],
    index: [{ type: Input }],
    container: [{ type: Input }],
    scrollIn: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CosmeticsPageModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IprReportModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Paragraph {
}

export { Catalog, IprReportBackend, IprReportModule, Paragraph, ReportsService, CosmeticsOutlineBarComponent as ɵa, openClose as ɵb, CosmeticsDetailComponent as ɵc, CosmeticsPageModule as ɵd, ParagraphComponent as ɵe, CosmeticsPageComponent as ɵf };
//# sourceMappingURL=ipr-report.js.map
