import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
function calcParagraphSum(t) {
    let ret = t.length;
    for (const each of t) {
        if (each.child_catalog) {
            ret += calcParagraphSum(each.child_catalog);
        }
    }
    return ret;
}
let CosmeticsPageComponent = class CosmeticsPageComponent {
    constructor(reportsService) {
        this.reportsService = reportsService;
        this.widgetOnClick = new EventEmitter();
        this.currentIndex = 0;
        this.disableScroll = false;
        this.appendPageLock = false;
        this.beyondOverWindow = 0;
        this.focusContentChange = new EventEmitter();
        this.scrollIn = new EventEmitter();
        this.containerReady = new EventEmitter();
        this.loadingParagraph = new EventEmitter();
        this.process = {
            render: {
                total: 0,
                now: 0,
            }
        };
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
    }
    widgetClick(catalogs, event) {
        event.catalogs = catalogs;
        this.widgetOnClick.emit(event);
    }
    contentRander(page, index, ref) {
        if (page._render) {
            return;
        }
        page._render = { ref, index };
        this.process.render.now += 1;
        this.loadingParagraph.emit({
            process: this.process.render
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
        this.container = this._scroll_container.nativeElement;
        this.containerReady.emit(this.container);
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {
        // }
    }
    ngOnChanges(changes) {
        if (changes.page.currentValue) {
            this.process.render.total = calcParagraphSum(this.page);
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], CosmeticsPageComponent.prototype, "page", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "widgetOnClick", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "focusContentChange", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "scrollIn", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "containerReady", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsPageComponent.prototype, "loadingParagraph", void 0);
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
        template: "<div class=\"page-container\" #scroll_container (scroll)=\"onscroll()\">\r\n    <ipr-paragraph\r\n            *ngFor=\"let one of page;index as first;\"\r\n            [container]=\"container\"\r\n            (widgetOnClick)=\"widgetClick([one], $event)\"\r\n            [content]=\"one\" [index]=\"first\" (scrollIn)=\"scrollIntoParagraph([one])\"\r\n            #firstOfAll>{{contentRander(one, first, firstOfAll.el)}}\r\n        <ipr-paragraph\r\n                *ngFor=\"let two of one.child_catalog;index as second;\"\r\n                [container]=\"container\"\r\n                (widgetOnClick)=\"widgetClick([two,one], $event)\"\r\n                [content]=\"two\" [index]=\"second\" (scrollIn)=\"scrollIntoParagraph([two,one])\"\r\n                #secondary>{{contentRander(two, second, secondary.el)}}\r\n            <ipr-paragraph\r\n                    *ngFor=\"let three of two.child_catalog;index as third;\"\r\n                    [container]=\"container\"\r\n                    (widgetOnClick)=\"widgetClick([three,two,one], $event)\"\r\n                    [content]=\"three\" [index]=\"third\"\r\n                    #tertiary>{{contentRander(three, third, tertiary.el)}}</ipr-paragraph>\r\n        </ipr-paragraph>\r\n    </ipr-paragraph>\r\n</div>\r\n",
        styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20}p{text-indent:2em;font-size:13px;line-height:29px}.text{padding-left:60px;padding-right:60px}.image{padding:60px}.c-step .circle{width:100%;display:block;margin:auto;z-index:21;position:relative}.c-step .topLine{width:100%;height:50%;display:block}.c-step .botLine{width:100%;height:50%;display:block;margin-top:-3px}.c-step .circle div{background-color:#fff;border:3px solid #acacac;border-radius:100%;width:20px;height:20px;margin:auto}.c-step .circle div:hover,.c-step.active .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.botLine div,.topLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.active .botLine div,.c-step.active .topLine div,.c-step.currentActive .topLine div{width:12px;height:110%;margin:auto;background:#0077b9;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.c-step.currentActive .circle div{background-color:#0077b9;border:3px solid #0077b9;border-radius:100%;width:20px;height:20px;margin:auto}.c-step.currentActive .botLine div{width:12px;height:110%;margin:auto;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.mainTitle{margin-top:44%;padding-left:33px;padding-right:33px}.mainTitle h1{color:#0077b9;font-size:2.4em;text-align:center}.mainImg{padding-left:33px;padding-right:33px}.mainImg img{width:100%;max-height:325px}.subTitle{height:25%;padding-left:33px;padding-right:33px}.subTitle h1{color:#0077b9;font-size:2.4em;margin-top:70px}.subTitle p{color:#000;font-size:18px}.subCatelogList{padding-left:33px;padding-right:33px}.subCatelogList ul{list-style:none;padding-left:0}.subCatelogList li{margin-top:10px}.subCatelogList h3{color:#0077b9}.subCatelogList p{color:#000;font-size:18px}.report_card{background:#ecebeb;padding:15px;margin-top:10px;margin-bottom:10px;border-radius:15px;height:95%;box-shadow:0 4px 8px 0 rgba(68,186,204,.2),0 6px 20px 0 rgba(68,186,204,.2)}.report_card .tool_bar{height:30px;text-align:right}.report_card .text{padding:30px}.report_card .text p{color:#000}.report_card .image img{width:100%}.report_card .chart{position:relative}.report_card .chart .left{position:absolute;top:0;left:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-right:13px solid #0077b9}.report_card .chart .right{position:absolute;top:0;right:0;width:0;height:0;border-top:13px solid transparent;border-bottom:13px solid transparent;border-left:13px solid #0077b9}.report_title{height:120px;margin-top:50px;text-align:center}.report_detail_main_title{background:#0077b9;border-radius:15px}.report_detail_main_title h2{text-align:center;font-weight:800;color:#fff}.widgetButton{border-radius:14px;border:none;color:#fff;background:#0077b9;padding:5px;min-width:71px}:host .page-container{position:absolute;overflow:auto;height:100%;width:100%}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ReportsService])
], CosmeticsPageComponent);
export { CosmeticsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQU0vRCxTQUFTLGdCQUFnQixDQUFDLENBQVk7SUFDbEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMvQztLQUNKO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBT0QsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUEwSy9CLFlBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBcktoQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDN0MscUJBQWdCLEdB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O1NBdE1ZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge1BhcmFncmFwaENvbXBvbmVudH0gZnJvbSAnLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2lkZ2V0Q2xpY2tFdmVudH0gZnJvbSAnLi4vLi4vX0NsYXNzZXMvV2lkZ2V0Q2xpY2tFdmVudC5jbGFzcyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY2FsY1BhcmFncmFwaFN1bSh0OiBDYXRhbG9nW10pOiBudW1iZXIge1xyXG4gICAgbGV0IHJldCA9IHQubGVuZ3RoO1xyXG4gICAgZm9yIChjb25zdCBlYWNoIG9mIHQpIHtcclxuICAgICAgICBpZiAoZWFjaC5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgIHJldCArPSBjYWxjUGFyYWdyYXBoU3VtKGVhY2guY2hpbGRfY2F0YWxvZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1jb3NtZXRpY3MtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KCkgcGFnZTogQ2F0YWxvZ1tdO1xyXG5cclxuICAgIEBPdXRwdXQoKSB3aWRnZXRPbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGN1cnJlbnRJbmRleCA9IDA7XHJcbiAgICBkaXNhYmxlU2Nyb2xsID0gZmFsc2U7XHJcbiAgICBhcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgYmV5b25kT3ZlcldpbmRvdyA9IDA7XHJcbiAgICBAT3V0cHV0KCkgZm9jdXNDb250ZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbEluID0gbmV3IEV2ZW50RW1pdHRlcjxDYXRhbG9nW10+KCk7XHJcbiAgICBAT3V0cHV0KCkgY29udGFpbmVyUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgbG9hZGluZ1BhcmFncmFwaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2ZpcnN0T2ZBbGwnKSBmaXJzdE9mQWxsOiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3NlY29uZGFyeScpIHNlY29uZGFyeTogUXVlcnlMaXN0PFBhcmFncmFwaENvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkcmVuKCd0ZXJ0aWFyeScpIHRlcnRpYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbF9jb250YWluZXInLCB7c3RhdGljOiBmYWxzZX0pIF9zY3JvbGxfY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHByb2Nlc3MgPSB7XHJcbiAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBub3c6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGFuZ2UoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdpZHRoKHdpZHRoOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gJ2NvbC1sZy0nICsgd2lkdGggKyAnIGNvbC1tZC0nICsgd2lkdGggKyAnIGNvbC1zbS0nICsgd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXBwZW5kUGFnZShwYWdlSWQ6IG51bWJlcik6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXBwZW5kVG8ocGFnZUlkLCB0aGlzLnBhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFwcGVuZFBhcmFncmFwaChpZDogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcHBlbmRUbyhpZCwgdGhpcy5wYWdlKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhcHBlbmRUbyhpZDogbnVtYmVyLCBjb250ZW50OiBDYXRhbG9nW10pOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIGlmIChpZCA9PT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gdHJ1ZTtcclxuICAgIC8vICAgICBjb25zdCByZWMgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLmdldF9jb250ZW50KGlkLCAnVHJ1ZScpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBpZCwgY29udGVudCk7XHJcbiAgICAvLyAgICAgLy8gcmVjLnRoZW4oanNvbiA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgIGZvciAoY29uc3QgZWFjaCBvZiBqc29uKSB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb250ZW50LnB1c2goZWFjaCk7XHJcbiAgICAvLyAgICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLnB1c2goaWQpO1xyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiByZWM7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0IGZvY3VzQ29udGVudEluZGV4KHZhbCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWwgaXMnLCB2YWwsIHRoaXMuY29udGVudHMudG9BcnJheSgpKTtcclxuICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleCA9IHZhbDtcclxuICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCA9IHRoaXMuY29udGVudHMudG9BcnJheSgpW3ZhbF0ubmF0aXZlRWxlbWVudDtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnZm9jdXMgY29udGVudCcsIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXQgZm9jdXNDb250ZW50SW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb2Zmc2V0Q29udGFpbmVyKGN1ckVsZSkge1xyXG4gICAgICAgIGxldCB0b3RhbExlZnQgPSBudWxsO1xyXG4gICAgICAgIGxldCB0b3RhbFRvcCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHBhciA9IGN1ckVsZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgLy8g6aaW5YWI5Yqg6Ieq5bex5pys6Lqr55qE5bem5YGP56e75ZKM5LiK5YGP56e7XHJcbiAgICAgICAgdG90YWxMZWZ0ICs9IGN1ckVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvdGFsVG9wICs9IGN1ckVsZS5vZmZzZXRUb3A7XHJcbiAgICAgICAgd2hpbGUgKHBhciAhPT0gdGhpcy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgLy8g57Sv5Yqg54i257qn5Y+C54Wn54mp5pys6Lqr55qE5YGP56e7XHJcbiAgICAgICAgICAgIHRvdGFsTGVmdCArPSBwYXIub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgdG90YWxUb3AgKz0gcGFyLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgcGFyID0gcGFyLm9mZnNldFBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IHRvdGFsTGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0b3RhbFRvcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8oY29udGVudDogQ2F0YWxvZykge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0Q29udGFpbmVyKGNvbnRlbnQuX3JlbmRlci5yZWYpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvKG9mZnNldC5sZWZ0LCBvZmZzZXQudG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvUGFyYWdyYXBoKGNvbnRlbnQ6IENhdGFsb2dbXSkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSW4uZW1pdChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbnNjcm9sbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRoaXMuc2Vjb25kYXJ5LnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICBlYWNoLm9uc2Nyb2xsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiB0aGlzLmZpcnN0T2ZBbGwudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGVhY2gub25zY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IHBlcmNlbnQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgLSB0aGlzLmJleW9uZE92ZXJXaW5kb3c7XHJcbiAgICAgICAgLy8gcGVyY2VudCAvPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzQ29udGVudCcsIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLCB0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZy5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgLy8gICAgIHNlY3Rpb24gPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2dbMF07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VjdGlvbi5zdHlsZS5oZWlnaHQgPSBwZXJjZW50ICogMTAwICsgJyUnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwZXJjZW50JywgcGVyY2VudCwgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5pbmRleCk7XHJcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPiAwLjgpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuYXBwZW5kUGFnZUxvY2spIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbmV4dFBhZ2VJZCA9IHRoaXMucmVwb3J0c1NlcnZpY2UubmV4dFBhZ2VJZCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLmluY2x1ZGVzKG5leHRQYWdlSWQpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFwcGVuZFBhZ2UobmV4dFBhZ2VJZCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnRzLmNoYW5nZXMuc3Vic2NyaWJlKGEgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDEpIHtcclxuICAgICAgICAvLyBjb25zdCBuZXh0UGFnZUlkID0gdGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuYWxyZWFkeUFkZC5pbmNsdWRlcyhuZXh0UGFnZUlkKSkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmV5b25kT3ZlcldpbmRvdyArPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgdGhpcy5mb2N1c0NvbnRlbnRJbmRleCsrO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZvY3VzQ29udGVudENoYW5nZS5lbWl0KFt0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleF0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPCAwKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmV5b25kT3ZlcldpbmRvdyAtPSB0aGlzLmNvbnRlbnRzLnRvQXJyYXkoKVt0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleCAtIDFdXHJcbiAgICAgICAgLy8gICAgICAgICAubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50SW5kZXgtLTtcclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudENoYW5nZS5lbWl0KFt0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleF0pO1xyXG4gICAgICAgIC8vIHRoaXMuZGlzYWJsZVNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc2FibGVTY3JvbGwgPSBmYWxzZSwgMTAwMCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHdpZGdldENsaWNrKGNhdGFsb2dzOiBDYXRhbG9nW10sIGV2ZW50OiBXaWRnZXRDbGlja0V2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQuY2F0YWxvZ3MgPSBjYXRhbG9ncztcclxuICAgICAgICB0aGlzLndpZGdldE9uQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudFJhbmRlcihwYWdlOiBDYXRhbG9nLCBpbmRleDogbnVtYmVyLCByZWYpIHtcclxuICAgICAgICBpZiAocGFnZS5fcmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFnZS5fcmVuZGVyID0ge3JlZiwgaW5kZXh9O1xyXG4gICAgICAgIHRoaXMucHJvY2Vzcy5yZW5kZXIubm93ICs9IDE7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nUGFyYWdyYXBoLmVtaXQoe1xyXG4gICAgICAgICAgICBwcm9jZXNzOiB0aGlzLnByb2Nlc3MucmVuZGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvLyDlpoLmnpznrKzkuIDnq6DoioLkuI3otrPku6Xmu5rliqjvvIzliJnlho3mt7vliqDkuIDnq6DoioJcclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudEluZGV4ID0gMDtcclxuICAgICAgICAvLyBpZiAodGhpcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5jb250ZW50cy5maXJzdC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByZXQgPSB0aGlzLmFwcGVuZFBhZ2UodGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCkpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmV0KSByZXQuc3Vic2NyaWJlKGMgPT4gdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9zY3JvbGxfY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJSZWFkeS5lbWl0KHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAvLyBjb25zdCBmaXJzdE9mQWxsID0gdGhpcy5maXJzdE9mQWxsLnRvQXJyYXkoKTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IGVhY2ggb2YgZmlyc3RPZkFsbCkge1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLnBhZ2UuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5yZW5kZXIudG90YWwgPSBjYWxjUGFyYWdyYXBoU3VtKHRoaXMucGFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==