import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
let CosmeticsPageComponent = class CosmeticsPageComponent {
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
    set Page(value) {
        this.page = value;
    }
    set swithchTo(value) {
        if (value !== undefined && value != null) {
            this.currentIndex = value;
        }
    }
    get M_Page() {
        this.height = 100 / this.page.length;
        return this.page;
    }
    change(i) {
        this.currentIndex = i;
    }
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
    get focusContentIndex() {
        return this.reportsService.focusContent.index;
    }
    offsetContainer(curEle) {
        let totalLeft = null;
        let totalTop = null;
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
    scrollTo(content) {
        const offset = this.offsetContainer(content._render.ref);
        this.container.scrollTo(offset.left, offset.top);
    }
    scrollIntoParagraph(content) {
        this.scrollIn.emit(content);
    }
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
    ngOnInit() {
    }
    ngAfterViewInit() {
        // 如果第一章节不足以滚动，则再添加一章节
        // this.focusContentIndex = 0;
        // if (this.container.scrollHeight > this.contents.first.nativeElement.scrollHeight) {
        //     const ret = this.appendPage(this.reportsService.nextPageId());
        //     if (ret) ret.subscribe(c => this.appendPageLock = false);
        // }
        setTimeout(() => {
            this.container = this._scroll_container.nativeElement;
        });
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {
        // }
        this.secondary.changes.subscribe(n => {
            console.log('secondary', n.toArray());
        });
    }
    contentRander(page, index, ref) {
        page._render = { ref, index };
    }
};
tslib_1.__decorate([
    Input('Page'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], CosmeticsPageComponent.prototype, "Page", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], CosmeticsPageComponent.prototype, "swithchTo", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], CosmeticsPageComponent.prototype, "M_Page", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "focusContentChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "scrollIn", void 0);
tslib_1.__decorate([
    ViewChildren('firstOfAll'),
    tslib_1.__metadata("design:type", QueryList)
], CosmeticsPageComponent.prototype, "firstOfAll", void 0);
tslib_1.__decorate([
    ViewChildren('secondary'),
    tslib_1.__metadata("design:type", QueryList)
], CosmeticsPageComponent.prototype, "secondary", void 0);
tslib_1.__decorate([
    ViewChildren('tertiary'),
    tslib_1.__metadata("design:type", QueryList)
], CosmeticsPageComponent.prototype, "tertiary", void 0);
tslib_1.__decorate([
    ViewChild('scroll_container', { static: false }),
    tslib_1.__metadata("design:type", ElementRef)
], CosmeticsPageComponent.prototype, "_scroll_container", void 0);
CosmeticsPageComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-cosmetics-page',
        template: "<div class=\"page-container\" #scroll_container (scroll)=\"onscroll()\">\r\n    <ipr-paragraph\r\n            *ngFor=\"let one of page;index as first;\"\r\n            [container]=\"container\"\r\n            [content]=\"one\" [index]=\"first\" (scrollIn)=\"scrollIntoParagraph([one])\"\r\n            #firstOfAll>{{contentRander(one, first, firstOfAll.el)}}\r\n        <ipr-paragraph\r\n                *ngFor=\"let two of one.child_catalog;index as second;\"\r\n                [container]=\"container\"\r\n                [content]=\"two\" [index]=\"second\" (scrollIn)=\"scrollIntoParagraph([two,one])\"\r\n                #secondary>{{contentRander(two, second, secondary.el)}}\r\n            <ipr-paragraph\r\n                    *ngFor=\"let three of two.child_catalog;index as third;\"\r\n                    [container]=\"container\"\r\n                    [content]=\"three\" [index]=\"third\"\r\n                    #tertiary>{{contentRander(three, third, tertiary.el)}}</ipr-paragraph>\r\n        </ipr-paragraph>\r\n    </ipr-paragraph>\r\n</div>\r\n",
        styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20}p{text-indent:2em;font-size:13px;line-height:29px}.text{padding-left:60px;padding-right:60px}.image{padding:60px}.c-step .circle{width:100%;display:block;margin:auto;z-index:21;position:relative}.c-step .topLine{width:100%;height:50%;display:block}.c-step .botLine{width:100%;height:50%;display:block;margin-top:-3px}.c-step .circle div{background-color:#fff;border:3px solid #acacac;border-radius:100%;width:20px;height:20px;margin:auto}.c-step .circle div:hover,.c-step.active .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.botLine div,.topLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.active .botLine div,.c-step.active .topLine div,.c-step.currentActive .topLine div{width:12px;height:110%;margin:auto;background:#0077b9;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.currentActive .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.c-step.currentActive .botLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.mainTitle{margin-top:44%;padding-left:33px;padding-right:33px}.mainTitle h1{color:#0077b9;font-size:2.4em;text-align:center}.mainImg{padding-left:33px;padding-right:33px}.mainImg img{width:100%;max-height:325px}.subTitle{height:25%;padding-left:33px;padding-right:33px}.subTitle h1{color:#0077b9;font-size:2.4em;margin-top:70px}.subTitle p{color:#000;font-size:18px}.subCatelogList{padding-left:33px;padding-right:33px}.subCatelogList ul{list-style:none;padding-left:0}.subCatelogList li{margin-top:10px}.subCatelogList h3{color:#0077b9}.subCatelogList p{color:#000;font-size:18px}.report_card{background:#ecebeb;padding:15px;margin-top:10px;margin-bottom:10px;border-radius:15px;height:95%;box-shadow:0 4px 8px 0 rgba(68,186,204,.2),0 6px 20px 0 rgba(68,186,204,.2)}.report_card .tool_bar{height:30px;text-align:right}.report_card .text{padding:30px}.report_card .text p{color:#000}.report_card .image img{width:100%}.report_card .chart{position:relative}.report_card .chart .left{position:absolute;top:0;left:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-right:13px solid #0077b9}.report_card .chart .right{position:absolute;top:0;right:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:13px solid #0077b9}.report_title{height:120px;margin-top:50px;text-align:center}.report_detail_main_title{background:#0077b9;border-radius:15px}.report_detail_main_title h2{text-align:center;font-weight:800;color:#fff}.widgetButton{border-radius:14px;border:none;color:#fff;background:#0077b9;padding:5px;min-width:71px}:host .page-container{position:absolute;overflow:auto;height:100%;width:100%}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ReportsService])
], CosmeticsPageComponent);
export { CosmeticsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQVUvRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQThKL0IsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUExSTFDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNYLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUF3SS9DLHlDQUF5QztRQUN6Qyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLFFBQVE7SUFDWixDQUFDO0lBaktjLElBQUksSUFBSSxDQUFDLEtBQUs7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVRLElBQUksU0FBUyxDQUFDLEtBQUs7UUFDeEIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBR1MsSUFBSSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUks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QUFDLE1BQU0sQ0FBQzs7O2tEQUViO0FBRVE7SUFBUixLQUFLLEVBQUU7Ozt1REFJUDtBQUdTO0lBQVQsTUFBTSxFQUFFOzs7b0RBR1I7QUFNUztJQUFULE1BQU0sRUFBRTs7a0VBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOzt3REFBMEM7QUFDdkI7SUFBM0IsWUFBWSxDQUFDLFlBQVksQ0FBQztzQ0FBYSxTQUFTOzBEQUFxQjtBQUMzQztJQUExQixZQUFZLENBQUMsV0FBVyxDQUFDO3NDQUFZLFNBQVM7eURBQXFCO0FBQzFDO0lBQXpCLFlBQVksQ0FBQyxVQUFVLENBQUM7c0NBQVcsU0FBUzt3REFBcUI7QUFDbEI7SUFBL0MsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3NDQUFvQixVQUFVO2lFQUFDO0FBOUJyRSxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixtakNBQThDOztLQUVqRCxDQUFDOzZDQWdLOEIsY0FBYztHQS9KakMsc0JBQXNCLENBaU1sQztTQWpNWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UGFyYWdyYXBoQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNvc21ldGljcy1wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBwYWdlOiBDYXRhbG9nW107XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KCdQYWdlJykgc2V0IFBhZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc3dpdGhjaFRvKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgQE91dHB1dCgpIGdldCBNX1BhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDAgLyB0aGlzLnBhZ2UubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGRpc2FibGVTY3JvbGwgPSBmYWxzZTtcclxuICAgIGFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICBiZXlvbmRPdmVyV2luZG93ID0gMDtcclxuICAgIEBPdXRwdXQoKSBmb2N1c0NvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2dbXT4oKTtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2ZpcnN0T2ZBbGwnKSBmaXJzdE9mQWxsOiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3NlY29uZGFyeScpIHNlY29uZGFyeTogUXVlcnlMaXN0PFBhcmFncmFwaENvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkcmVuKCd0ZXJ0aWFyeScpIHRlcnRpYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbF9jb250YWluZXInLCB7c3RhdGljOiBmYWxzZX0pIF9zY3JvbGxfY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNoYW5nZShpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAnY29sLWxnLScgKyB3aWR0aCArICcgY29sLW1kLScgKyB3aWR0aCArICcgY29sLXNtLScgKyB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcHBlbmRQYWdlKHBhZ2VJZDogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcHBlbmRUbyhwYWdlSWQsIHRoaXMucGFnZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYXBwZW5kUGFyYWdyYXBoKGlkOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFwcGVuZFRvKGlkLCB0aGlzLnBhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFwcGVuZFRvKGlkOiBudW1iZXIsIGNvbnRlbnQ6IENhdGFsb2dbXSk6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgaWYgKGlkID09PSAtMSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlYyA9IHRoaXMucmVwb3J0c1NlcnZpY2UuZ2V0X2NvbnRlbnQoaWQsICdUcnVlJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2FwcGVuZCcsIGlkLCBjb250ZW50KTtcclxuICAgIC8vICAgICAvLyByZWMudGhlbihqc29uID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgZm9yIChjb25zdCBlYWNoIG9mIGpzb24pIHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnRlbnQucHVzaChlYWNoKTtcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQucHVzaChpZCk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJlYztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXQgZm9jdXNDb250ZW50SW5kZXgodmFsKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhbCBpcycsIHZhbCwgdGhpcy5jb250ZW50cy50b0FycmF5KCkpO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4ID0gdmFsO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsID0gdGhpcy5jb250ZW50cy50b0FycmF5KClbdmFsXS5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdmb2N1cyBjb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldCBmb2N1c0NvbnRlbnRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvZmZzZXRDb250YWluZXIoY3VyRWxlKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsTGVmdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRvdGFsVG9wID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgICAgICAvLyDpppblhYjliqDoh6rlt7HmnKzouqvnmoTlt6blgY/np7vlkozkuIrlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gY3VyRWxlLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgICAgICB3aGlsZSAocGFyICE9PSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICAgICAgdG90YWxMZWZ0ICs9IHBhci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB0b3RhbFRvcCArPSBwYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogdG90YWxMZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRvdGFsVG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyhjb250ZW50OiBDYXRhbG9nKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXRDb250YWluZXIoY29udGVudC5fcmVuZGVyLnJlZik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8ob2Zmc2V0LmxlZnQsIG9mZnNldC50b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9QYXJhZ3JhcGgoY29udGVudDogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdGhpcy5zZWNvbmRhcnkudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGVhY2gub25zY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRoaXMuZmlyc3RPZkFsbC50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgZWFjaC5vbnNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgcGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIHRoaXMuYmV5b25kT3ZlcldpbmRvdztcclxuICAgICAgICAvLyBwZXJjZW50IC89IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXNDb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAvLyAgICAgc2VjdGlvbiA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZ1swXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5yZXBvcnRzU2VydmljZS5zZWN0aW9uLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BlcmNlbnQnLCBwZXJjZW50LCB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4KTtcclxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDAuOCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5hcHBlbmRQYWdlTG9jaykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBuZXh0UGFnZUlkID0gdGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQuaW5jbHVkZXMobmV4dFBhZ2VJZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYXBwZW5kUGFnZShuZXh0UGFnZUlkKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGVudHMuY2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChwZXJjZW50ID4gMSkge1xyXG4gICAgICAgIC8vIGNvbnN0IG5leHRQYWdlSWQgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLmluY2x1ZGVzKG5leHRQYWdlSWQpKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93ICs9IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmZvY3VzQ29udGVudEluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocGVyY2VudCA8IDApIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93IC09IHRoaXMuY29udGVudHMudG9BcnJheSgpW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4IC0gMV1cclxuICAgICAgICAvLyAgICAgICAgIC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRJbmRleC0tO1xyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzYWJsZVNjcm9sbCA9IGZhbHNlLCAxMDAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJlcG9ydHNTZXJ2aWNlLmdldF9qc29uX2RhdGEoJzAnKVxyXG4gICAgICAgIC8vICAgLnN1YnNjcmliZShqc29uID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wYWdlID0ganNvbjtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyDlpoLmnpznrKzkuIDnq6DoioLkuI3otrPku6Xmu5rliqjvvIzliJnlho3mt7vliqDkuIDnq6DoioJcclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudEluZGV4ID0gMDtcclxuICAgICAgICAvLyBpZiAodGhpcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5jb250ZW50cy5maXJzdC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByZXQgPSB0aGlzLmFwcGVuZFBhZ2UodGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCkpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmV0KSByZXQuc3Vic2NyaWJlKGMgPT4gdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5fc2Nyb2xsX2NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnN0IGZpcnN0T2ZBbGwgPSB0aGlzLmZpcnN0T2ZBbGwudG9BcnJheSgpO1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgZWFjaCBvZiBmaXJzdE9mQWxsKSB7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnNlY29uZGFyeS5jaGFuZ2VzLnN1YnNjcmliZShuID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlY29uZGFyeScsIG4udG9BcnJheSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50UmFuZGVyKHBhZ2U6IENhdGFsb2csIGluZGV4OiBudW1iZXIsIHJlZikge1xyXG4gICAgICAgIHBhZ2UuX3JlbmRlciA9IHtyZWYsIGluZGV4fTtcclxuICAgIH1cclxufVxyXG4iXX0=