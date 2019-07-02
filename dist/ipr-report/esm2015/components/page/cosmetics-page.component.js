import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
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
    widgetClick(catalogs, event) {
        event.catalogs = catalogs;
        this.widgetOnClick.emit(event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQVcvRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQStKL0IsWUFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqSmhDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDWCx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBNkkvQyx5Q0FBeUM7UUFDekMseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixRQUFRO0lBQ1osQ0FBQztJQWxLYyxJQUFJLElBQUksQ0FBQyxLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFUSxJQUFJLFNBQVMsQ0FBQyxLQUFLO1FBQ3hCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQWVELE1BQU0sQ0FBQyxDQUFT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Q0FBQztJQUNoQyxDQUFDO0NBQ0osQ0FBQTtBQTdMa0I7SUFBZCxLQUFLLENBQUMsTUFBTSxDQUFDOzs7a0RBRWI7QUFFUTtJQUFSLEtBQUssRUFBRTs7O3VEQUlQO0FBRVM7SUFBVCxNQUFNLEVBQUU7OzZEQUFvQztBQU1uQztJQUFULE1BQU0sRUFBRTs7a0VBQXlDO0FBQ3hDO0lBQVQsTUFBTSxFQUFFOzt3REFBMEM7QUFDdkI7SUFBM0IsWUFBWSxDQUFDLFlBQVksQ0FBQztzQ0FBYSxTQUFTOzBEQUFxQjtBQUMzQztJQUExQixZQUFZLENBQUMsV0FBVyxDQUFDO3NDQUFZLFNBQVM7eURBQXFCO0FBQzFDO0lBQXpCLFlBQVksQ0FBQyxVQUFVLENBQUM7c0NBQVcsU0FBUzt3REFBcUI7QUFDbEI7SUFBL0MsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3NDQUFvQixVQUFVO2lFQUFDO0FBMUJyRSxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qix1d0NBQThDOztLQUVqRCxDQUFDOzZDQWlLOEIsY0FBYztHQWhLakMsc0JBQXNCLENBa01sQztTQWxNWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UGFyYWdyYXBoQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50JztcclxuaW1wb3J0IHtXaWRnZXRDbGlja0V2ZW50fSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9XaWRnZXRDbGlja0V2ZW50LmNsYXNzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNvc21ldGljcy1wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBwYWdlOiBDYXRhbG9nW107XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KCdQYWdlJykgc2V0IFBhZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc3dpdGhjaFRvKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgd2lkZ2V0T25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgZGlzYWJsZVNjcm9sbCA9IGZhbHNlO1xyXG4gICAgYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgIGJleW9uZE92ZXJXaW5kb3cgPSAwO1xyXG4gICAgQE91dHB1dCgpIGZvY3VzQ29udGVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzY3JvbGxJbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZ1tdPigpO1xyXG4gICAgQFZpZXdDaGlsZHJlbignZmlyc3RPZkFsbCcpIGZpcnN0T2ZBbGw6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZHJlbignc2Vjb25kYXJ5Jykgc2Vjb25kYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3RlcnRpYXJ5JykgdGVydGlhcnk6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsX2NvbnRhaW5lcicsIHtzdGF0aWM6IGZhbHNlfSkgX3Njcm9sbF9jb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY2hhbmdlKGk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXaWR0aCh3aWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb2wtbGctJyArIHdpZHRoICsgJyBjb2wtbWQtJyArIHdpZHRoICsgJyBjb2wtc20tJyArIHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFwcGVuZFBhZ2UocGFnZUlkOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFwcGVuZFRvKHBhZ2VJZCwgdGhpcy5wYWdlKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhcHBlbmRQYXJhZ3JhcGgoaWQ6IG51bWJlcik6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXBwZW5kVG8oaWQsIHRoaXMucGFnZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYXBwZW5kVG8oaWQ6IG51bWJlciwgY29udGVudDogQ2F0YWxvZ1tdKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICBpZiAoaWQgPT09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5hcHBlbmRQYWdlTG9jayA9IHRydWU7XHJcbiAgICAvLyAgICAgY29uc3QgcmVjID0gdGhpcy5yZXBvcnRzU2VydmljZS5nZXRfY29udGVudChpZCwgJ1RydWUnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnYXBwZW5kJywgaWQsIGNvbnRlbnQpO1xyXG4gICAgLy8gICAgIC8vIHJlYy50aGVuKGpzb24gPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICBmb3IgKGNvbnN0IGVhY2ggb2YganNvbikge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29udGVudC5wdXNoKGVhY2gpO1xyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuYWxyZWFkeUFkZC5wdXNoKGlkKTtcclxuICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vICAgICByZXR1cm4gcmVjO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNldCBmb2N1c0NvbnRlbnRJbmRleCh2YWwpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsIGlzJywgdmFsLCB0aGlzLmNvbnRlbnRzLnRvQXJyYXkoKSk7XHJcbiAgICAvLyAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXggPSB2YWw7XHJcbiAgICAvLyAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwgPSB0aGlzLmNvbnRlbnRzLnRvQXJyYXkoKVt2YWxdLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZvY3VzIGNvbnRlbnQnLCB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0IGZvY3VzQ29udGVudEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9mZnNldENvbnRhaW5lcihjdXJFbGUpIHtcclxuICAgICAgICBsZXQgdG90YWxMZWZ0ID0gbnVsbDtcclxuICAgICAgICBsZXQgdG90YWxUb3AgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXIgPSBjdXJFbGUub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIC8vIOmmluWFiOWKoOiHquW3seacrOi6q+eahOW3puWBj+enu+WSjOS4iuWBj+enu1xyXG4gICAgICAgIHRvdGFsTGVmdCArPSBjdXJFbGUub2Zmc2V0TGVmdDtcclxuICAgICAgICB0b3RhbFRvcCArPSBjdXJFbGUub2Zmc2V0VG9wO1xyXG4gICAgICAgIHdoaWxlIChwYXIgIT09IHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIC8vIOe0r+WKoOeItue6p+WPgueFp+eJqeacrOi6q+eahOWBj+enu1xyXG4gICAgICAgICAgICB0b3RhbExlZnQgKz0gcGFyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIHRvdGFsVG9wICs9IHBhci5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIHBhciA9IHBhci5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiB0b3RhbExlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG90YWxUb3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvKGNvbnRlbnQ6IENhdGFsb2cpIHtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm9mZnNldENvbnRhaW5lcihjb250ZW50Ll9yZW5kZXIucmVmKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyhvZmZzZXQubGVmdCwgb2Zmc2V0LnRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50b1BhcmFncmFwaChjb250ZW50OiBDYXRhbG9nW10pIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEluLmVtaXQoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25zY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVNjcm9sbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiB0aGlzLnNlY29uZGFyeS50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgZWFjaC5vbnNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdGhpcy5maXJzdE9mQWxsLnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICBlYWNoLm9uc2Nyb2xsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBwZXJjZW50ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICsgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wIC0gdGhpcy5iZXlvbmRPdmVyV2luZG93O1xyXG4gICAgICAgIC8vIHBlcmNlbnQgLz0gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb2N1c0NvbnRlbnQnLCB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCwgdGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIHNlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uID0gdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nWzBdO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gcGVyY2VudCAqIDEwMCArICclJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGVyY2VudCcsIHBlcmNlbnQsIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXgpO1xyXG4gICAgICAgIC8vIGlmIChwZXJjZW50ID4gMC44KSB7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmFwcGVuZFBhZ2VMb2NrKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IG5leHRQYWdlSWQgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuYWxyZWFkeUFkZC5pbmNsdWRlcyhuZXh0UGFnZUlkKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hcHBlbmRQYWdlKG5leHRQYWdlSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPiAxKSB7XHJcbiAgICAgICAgLy8gY29uc3QgbmV4dFBhZ2VJZCA9IHRoaXMucmVwb3J0c1NlcnZpY2UubmV4dFBhZ2VJZCgpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQuaW5jbHVkZXMobmV4dFBhZ2VJZCkpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJleW9uZE92ZXJXaW5kb3cgKz0gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZm9jdXNDb250ZW50SW5kZXgrKztcclxuICAgICAgICAvLyAgICAgdGhpcy5mb2N1c0NvbnRlbnRDaGFuZ2UuZW1pdChbdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXhdKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChwZXJjZW50IDwgMCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJleW9uZE92ZXJXaW5kb3cgLT0gdGhpcy5jb250ZW50cy50b0FycmF5KClbdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXggLSAxXVxyXG4gICAgICAgIC8vICAgICAgICAgLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudEluZGV4LS07XHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRDaGFuZ2UuZW1pdChbdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXhdKTtcclxuICAgICAgICAvLyB0aGlzLmRpc2FibGVTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNhYmxlU2Nyb2xsID0gZmFsc2UsIDEwMDApO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICB3aWRnZXRDbGljayhjYXRhbG9nczogQ2F0YWxvZ1tdLCBldmVudDogV2lkZ2V0Q2xpY2tFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LmNhdGFsb2dzID0gY2F0YWxvZ3M7XHJcbiAgICAgICAgdGhpcy53aWRnZXRPbkNsaWNrLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZXBvcnRzU2VydmljZS5nZXRfanNvbl9kYXRhKCcwJylcclxuICAgICAgICAvLyAgIC5zdWJzY3JpYmUoanNvbiA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGFnZSA9IGpzb247XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c56ys5LiA56ug6IqC5LiN6Laz5Lul5rua5Yqo77yM5YiZ5YaN5re75Yqg5LiA56ug6IqCXHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRJbmRleCA9IDA7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuY29udGFpbmVyLnNjcm9sbEhlaWdodCA+IHRoaXMuY29udGVudHMuZmlyc3QubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgcmV0ID0gdGhpcy5hcHBlbmRQYWdlKHRoaXMucmVwb3J0c1NlcnZpY2UubmV4dFBhZ2VJZCgpKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJldCkgcmV0LnN1YnNjcmliZShjID0+IHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX3Njcm9sbF9jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zdCBmaXJzdE9mQWxsID0gdGhpcy5maXJzdE9mQWxsLnRvQXJyYXkoKTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IGVhY2ggb2YgZmlyc3RPZkFsbCkge1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkuY2hhbmdlcy5zdWJzY3JpYmUobiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWNvbmRhcnknLCBuLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudFJhbmRlcihwYWdlOiBDYXRhbG9nLCBpbmRleDogbnVtYmVyLCByZWYpIHtcclxuICAgICAgICBwYWdlLl9yZW5kZXIgPSB7cmVmLCBpbmRleH07XHJcbiAgICB9XHJcbn1cclxuIl19