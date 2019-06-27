/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
export class CosmeticsPageComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUgsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksR0FDZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFVL0QsTUFBTSxPQUFPLHNCQUFzQjs7OztJQThKL0IsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUExSTFDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNYLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUF3SS9DLHlDQUF5QztRQUN6Qyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLFFBQVE7SUFDWixDQUFDOzs7OztJQWpLRCxJQUFtQixJQUFJLENBQUMsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQWEsU0FBUyxDQUFDLEtBQUs7UUFDeEIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDOzs7O0lBR0QsSUFBYyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFH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SUFDdEIsZ0RBQXVCOztJQUN2QixrREFBcUI7O0lBQ3JCLG9EQUFrRDs7SUFDbEQsMENBQW1EOztJQUNuRCw0Q0FBc0U7O0lBQ3RFLDJDQUFvRTs7SUFDcEUsMENBQWtFOztJQUNsRSxtREFBOEU7Ozs7O0lBaUkxRSxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UGFyYWdyYXBoQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNvc21ldGljcy1wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBwYWdlOiBDYXRhbG9nW107XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KCdQYWdlJykgc2V0IFBhZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc3dpdGhjaFRvKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGdldCBNX1BhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDAgLyB0aGlzLnBhZ2UubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGRpc2FibGVTY3JvbGwgPSBmYWxzZTtcclxuICAgIGFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICBiZXlvbmRPdmVyV2luZG93ID0gMDtcclxuICAgIEBPdXRwdXQoKSBmb2N1c0NvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2dbXT4oKTtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2ZpcnN0T2ZBbGwnKSBmaXJzdE9mQWxsOiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3NlY29uZGFyeScpIHNlY29uZGFyeTogUXVlcnlMaXN0PFBhcmFncmFwaENvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkcmVuKCd0ZXJ0aWFyeScpIHRlcnRpYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbF9jb250YWluZXInLCB7c3RhdGljOiBmYWxzZX0pIF9zY3JvbGxfY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNoYW5nZShpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAnY29sLWxnLScgKyB3aWR0aCArICcgY29sLW1kLScgKyB3aWR0aCArICcgY29sLXNtLScgKyB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcHBlbmRQYWdlKHBhZ2VJZDogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcHBlbmRUbyhwYWdlSWQsIHRoaXMucGFnZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYXBwZW5kUGFyYWdyYXBoKGlkOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFwcGVuZFRvKGlkLCB0aGlzLnBhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFwcGVuZFRvKGlkOiBudW1iZXIsIGNvbnRlbnQ6IENhdGFsb2dbXSk6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgaWYgKGlkID09PSAtMSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlYyA9IHRoaXMucmVwb3J0c1NlcnZpY2UuZ2V0X2NvbnRlbnQoaWQsICdUcnVlJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2FwcGVuZCcsIGlkLCBjb250ZW50KTtcclxuICAgIC8vICAgICAvLyByZWMudGhlbihqc29uID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgZm9yIChjb25zdCBlYWNoIG9mIGpzb24pIHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnRlbnQucHVzaChlYWNoKTtcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQucHVzaChpZCk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJlYztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXQgZm9jdXNDb250ZW50SW5kZXgodmFsKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhbCBpcycsIHZhbCwgdGhpcy5jb250ZW50cy50b0FycmF5KCkpO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4ID0gdmFsO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsID0gdGhpcy5jb250ZW50cy50b0FycmF5KClbdmFsXS5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdmb2N1cyBjb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldCBmb2N1c0NvbnRlbnRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvZmZzZXRDb250YWluZXIoY3VyRWxlKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsTGVmdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRvdGFsVG9wID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgICAgICAvLyDpppblhYjliqDoh6rlt7HmnKzouqvnmoTlt6blgY/np7vlkozkuIrlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gY3VyRWxlLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgICAgICB3aGlsZSAocGFyICE9PSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICAgICAgdG90YWxMZWZ0ICs9IHBhci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB0b3RhbFRvcCArPSBwYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogdG90YWxMZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRvdGFsVG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyhjb250ZW50OiBDYXRhbG9nKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXRDb250YWluZXIoY29udGVudC5fcmVuZGVyLnJlZik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8ob2Zmc2V0LmxlZnQsIG9mZnNldC50b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9QYXJhZ3JhcGgoY29udGVudDogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdGhpcy5zZWNvbmRhcnkudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGVhY2gub25zY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRoaXMuZmlyc3RPZkFsbC50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgZWFjaC5vbnNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgcGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIHRoaXMuYmV5b25kT3ZlcldpbmRvdztcclxuICAgICAgICAvLyBwZXJjZW50IC89IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXNDb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAvLyAgICAgc2VjdGlvbiA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZ1swXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5yZXBvcnRzU2VydmljZS5zZWN0aW9uLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BlcmNlbnQnLCBwZXJjZW50LCB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4KTtcclxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDAuOCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5hcHBlbmRQYWdlTG9jaykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBuZXh0UGFnZUlkID0gdGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQuaW5jbHVkZXMobmV4dFBhZ2VJZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYXBwZW5kUGFnZShuZXh0UGFnZUlkKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGVudHMuY2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChwZXJjZW50ID4gMSkge1xyXG4gICAgICAgIC8vIGNvbnN0IG5leHRQYWdlSWQgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLmluY2x1ZGVzKG5leHRQYWdlSWQpKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93ICs9IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmZvY3VzQ29udGVudEluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocGVyY2VudCA8IDApIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93IC09IHRoaXMuY29udGVudHMudG9BcnJheSgpW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4IC0gMV1cclxuICAgICAgICAvLyAgICAgICAgIC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRJbmRleC0tO1xyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzYWJsZVNjcm9sbCA9IGZhbHNlLCAxMDAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJlcG9ydHNTZXJ2aWNlLmdldF9qc29uX2RhdGEoJzAnKVxyXG4gICAgICAgIC8vICAgLnN1YnNjcmliZShqc29uID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wYWdlID0ganNvbjtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyDlpoLmnpznrKzkuIDnq6DoioLkuI3otrPku6Xmu5rliqjvvIzliJnlho3mt7vliqDkuIDnq6DoioJcclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudEluZGV4ID0gMDtcclxuICAgICAgICAvLyBpZiAodGhpcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5jb250ZW50cy5maXJzdC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByZXQgPSB0aGlzLmFwcGVuZFBhZ2UodGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCkpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmV0KSByZXQuc3Vic2NyaWJlKGMgPT4gdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fc2Nyb2xsX2NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnN0IGZpcnN0T2ZBbGwgPSB0aGlzLmZpcnN0T2ZBbGwudG9BcnJheSgpO1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgZWFjaCBvZiBmaXJzdE9mQWxsKSB7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnNlY29uZGFyeS5jaGFuZ2VzLnN1YnNjcmliZShuID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlY29uZGFyeScsIG4udG9BcnJheSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50UmFuZGVyKHBhZ2U6IENhdGFsb2csIGluZGV4OiBudW1iZXIsIHJlZikge1xyXG4gICAgICAgIHBhZ2UuX3JlbmRlciA9IHtyZWYsIGluZGV4fTtcclxuICAgIH1cclxufVxyXG4iXX0=