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
        set: function (value) {
            this.page = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CosmeticsPageComponent.prototype, "swithchTo", {
        set: function (value) {
            if (value !== undefined && value != null) {
                this.currentIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CosmeticsPageComponent.prototype, "M_Page", {
        get: function () {
            this.height = 100 / this.page.length;
            return this.page;
        },
        enumerable: true,
        configurable: true
    });
    CosmeticsPageComponent.prototype.change = function (i) {
        this.currentIndex = i;
    };
    CosmeticsPageComponent.prototype.getWidth = function (width) {
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
        get: function () {
            return this.reportsService.focusContent.index;
        },
        enumerable: true,
        configurable: true
    });
    CosmeticsPageComponent.prototype.offsetContainer = function (curEle) {
        var totalLeft = null;
        var totalTop = null;
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
    CosmeticsPageComponent.prototype.scrollTo = function (content) {
        var offset = this.offsetContainer(content._render.ref);
        this.container.scrollTo(offset.left, offset.top);
    };
    CosmeticsPageComponent.prototype.scrollIntoParagraph = function (content) {
        this.scrollIn.emit(content);
    };
    CosmeticsPageComponent.prototype.onscroll = function () {
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
    CosmeticsPageComponent.prototype.ngOnInit = function () {
    };
    CosmeticsPageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // 如果第一章节不足以滚动，则再添加一章节
        // this.focusContentIndex = 0;
        // if (this.container.scrollHeight > this.contents.first.nativeElement.scrollHeight) {
        //     const ret = this.appendPage(this.reportsService.nextPageId());
        //     if (ret) ret.subscribe(c => this.appendPageLock = false);
        // }
        setTimeout(function () {
            _this.container = _this._scroll_container.nativeElement;
        });
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {
        // }
        this.secondary.changes.subscribe(function (n) {
            console.log('secondary', n.toArray());
        });
    };
    CosmeticsPageComponent.prototype.contentRander = function (page, index, ref) {
        page._render = { ref: ref, index: index };
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
    return CosmeticsPageComponent;
}());
export { CosmeticsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQVUvRDtJQThKSSxnQ0FDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUExSTFDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNYLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUF3SS9DLHlDQUF5QztRQUN6Qyx5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLFFBQVE7SUFDWixDQUFDO0lBaktjLHNCQUFJLHdDQUFJO2FBQVIsVUFBUyxLQUFLO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRVEsc0JBQUksNkNBQVM7YUFBYixVQUFjLEtBQUs7WUFDeEIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQzs7O09BQUE7SUFHUyxzQkFBSSwwQ0FBTTthQUFWO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcs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TGxDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsbWpDQUE4Qzs7U0FFakQsQ0FBQztpREFnSzhCLGNBQWM7T0EvSmpDLHNCQUFzQixDQWlNbEM7SUFBRCw2QkFBQztDQUFBLEFBak1ELElBaU1DO1NBak1ZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgUXVlcnlMaXN0LFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0NoaWxkcmVuLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtQYXJhZ3JhcGhDb21wb25lbnR9IGZyb20gJy4vcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtY29zbWV0aWNzLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nvc21ldGljcy1wYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Nvc21ldGljcy1wYWdlLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3NtZXRpY3NQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAgIHBhZ2U6IENhdGFsb2dbXTtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBASW5wdXQoJ1BhZ2UnKSBzZXQgUGFnZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBzd2l0aGNoVG8odmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAT3V0cHV0KCkgZ2V0IE1fUGFnZSgpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMCAvIHRoaXMucGFnZS5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgZGlzYWJsZVNjcm9sbCA9IGZhbHNlO1xyXG4gICAgYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgIGJleW9uZE92ZXJXaW5kb3cgPSAwO1xyXG4gICAgQE91dHB1dCgpIGZvY3VzQ29udGVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBzY3JvbGxJbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZ1tdPigpO1xyXG4gICAgQFZpZXdDaGlsZHJlbignZmlyc3RPZkFsbCcpIGZpcnN0T2ZBbGw6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZHJlbignc2Vjb25kYXJ5Jykgc2Vjb25kYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3RlcnRpYXJ5JykgdGVydGlhcnk6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsX2NvbnRhaW5lcicsIHtzdGF0aWM6IGZhbHNlfSkgX3Njcm9sbF9jb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY2hhbmdlKGk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXaWR0aCh3aWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuICdjb2wtbGctJyArIHdpZHRoICsgJyBjb2wtbWQtJyArIHdpZHRoICsgJyBjb2wtc20tJyArIHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFwcGVuZFBhZ2UocGFnZUlkOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFwcGVuZFRvKHBhZ2VJZCwgdGhpcy5wYWdlKTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBhcHBlbmRQYXJhZ3JhcGgoaWQ6IG51bWJlcik6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXBwZW5kVG8oaWQsIHRoaXMucGFnZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYXBwZW5kVG8oaWQ6IG51bWJlciwgY29udGVudDogQ2F0YWxvZ1tdKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICBpZiAoaWQgPT09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5hcHBlbmRQYWdlTG9jayA9IHRydWU7XHJcbiAgICAvLyAgICAgY29uc3QgcmVjID0gdGhpcy5yZXBvcnRzU2VydmljZS5nZXRfY29udGVudChpZCwgJ1RydWUnKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnYXBwZW5kJywgaWQsIGNvbnRlbnQpO1xyXG4gICAgLy8gICAgIC8vIHJlYy50aGVuKGpzb24gPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICBmb3IgKGNvbnN0IGVhY2ggb2YganNvbikge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29udGVudC5wdXNoKGVhY2gpO1xyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuYWxyZWFkeUFkZC5wdXNoKGlkKTtcclxuICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vICAgICByZXR1cm4gcmVjO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNldCBmb2N1c0NvbnRlbnRJbmRleCh2YWwpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndmFsIGlzJywgdmFsLCB0aGlzLmNvbnRlbnRzLnRvQXJyYXkoKSk7XHJcbiAgICAvLyAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXggPSB2YWw7XHJcbiAgICAvLyAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwgPSB0aGlzLmNvbnRlbnRzLnRvQXJyYXkoKVt2YWxdLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZvY3VzIGNvbnRlbnQnLCB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0IGZvY3VzQ29udGVudEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9mZnNldENvbnRhaW5lcihjdXJFbGUpIHtcclxuICAgICAgICBsZXQgdG90YWxMZWZ0ID0gbnVsbDtcclxuICAgICAgICBsZXQgdG90YWxUb3AgPSBudWxsO1xyXG4gICAgICAgIGxldCBwYXIgPSBjdXJFbGUub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIC8vIOmmluWFiOWKoOiHquW3seacrOi6q+eahOW3puWBj+enu+WSjOS4iuWBj+enu1xyXG4gICAgICAgIHRvdGFsTGVmdCArPSBjdXJFbGUub2Zmc2V0TGVmdDtcclxuICAgICAgICB0b3RhbFRvcCArPSBjdXJFbGUub2Zmc2V0VG9wO1xyXG4gICAgICAgIHdoaWxlIChwYXIgIT09IHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIC8vIOe0r+WKoOeItue6p+WPgueFp+eJqeacrOi6q+eahOWBj+enu1xyXG4gICAgICAgICAgICB0b3RhbExlZnQgKz0gcGFyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIHRvdGFsVG9wICs9IHBhci5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIHBhciA9IHBhci5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiB0b3RhbExlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG90YWxUb3BcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvKGNvbnRlbnQ6IENhdGFsb2cpIHtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLm9mZnNldENvbnRhaW5lcihjb250ZW50Ll9yZW5kZXIucmVmKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyhvZmZzZXQubGVmdCwgb2Zmc2V0LnRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50b1BhcmFncmFwaChjb250ZW50OiBDYXRhbG9nW10pIHtcclxuICAgICAgICB0aGlzLnNjcm9sbEluLmVtaXQoY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25zY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZVNjcm9sbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiB0aGlzLnNlY29uZGFyeS50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgZWFjaC5vbnNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdGhpcy5maXJzdE9mQWxsLnRvQXJyYXkoKSkge1xyXG4gICAgICAgICAgICBlYWNoLm9uc2Nyb2xsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBwZXJjZW50ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICsgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wIC0gdGhpcy5iZXlvbmRPdmVyV2luZG93O1xyXG4gICAgICAgIC8vIHBlcmNlbnQgLz0gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb2N1c0NvbnRlbnQnLCB0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCwgdGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIHNlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uID0gdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nWzBdO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlY3Rpb24uc3R5bGUuaGVpZ2h0ID0gcGVyY2VudCAqIDEwMCArICclJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGVyY2VudCcsIHBlcmNlbnQsIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXgpO1xyXG4gICAgICAgIC8vIGlmIChwZXJjZW50ID4gMC44KSB7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmFwcGVuZFBhZ2VMb2NrKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IG5leHRQYWdlSWQgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuYWxyZWFkeUFkZC5pbmNsdWRlcyhuZXh0UGFnZUlkKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hcHBlbmRQYWdlKG5leHRQYWdlSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50cy5jaGFuZ2VzLnN1YnNjcmliZShhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHBlcmNlbnQgPiAxKSB7XHJcbiAgICAgICAgLy8gY29uc3QgbmV4dFBhZ2VJZCA9IHRoaXMucmVwb3J0c1NlcnZpY2UubmV4dFBhZ2VJZCgpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQuaW5jbHVkZXMobmV4dFBhZ2VJZCkpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJleW9uZE92ZXJXaW5kb3cgKz0gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZm9jdXNDb250ZW50SW5kZXgrKztcclxuICAgICAgICAvLyAgICAgdGhpcy5mb2N1c0NvbnRlbnRDaGFuZ2UuZW1pdChbdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXhdKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChwZXJjZW50IDwgMCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJleW9uZE92ZXJXaW5kb3cgLT0gdGhpcy5jb250ZW50cy50b0FycmF5KClbdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXggLSAxXVxyXG4gICAgICAgIC8vICAgICAgICAgLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmZvY3VzQ29udGVudEluZGV4LS07XHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRDaGFuZ2UuZW1pdChbdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXhdKTtcclxuICAgICAgICAvLyB0aGlzLmRpc2FibGVTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNhYmxlU2Nyb2xsID0gZmFsc2UsIDEwMDApO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZVxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVwb3J0c1NlcnZpY2UuZ2V0X2pzb25fZGF0YSgnMCcpXHJcbiAgICAgICAgLy8gICAuc3Vic2NyaWJlKGpzb24gPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBhZ2UgPSBqc29uO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIOWmguaenOesrOS4gOeroOiKguS4jei2s+S7pea7muWKqO+8jOWImeWGjea3u+WKoOS4gOeroOiKglxyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50SW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiB0aGlzLmNvbnRlbnRzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJldCA9IHRoaXMuYXBwZW5kUGFnZSh0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXQpIHJldC5zdWJzY3JpYmUoYyA9PiB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9zY3JvbGxfY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc3QgZmlyc3RPZkFsbCA9IHRoaXMuZmlyc3RPZkFsbC50b0FycmF5KCk7XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBlYWNoIG9mIGZpcnN0T2ZBbGwpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5LmNoYW5nZXMuc3Vic2NyaWJlKG4gPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vjb25kYXJ5Jywgbi50b0FycmF5KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnRSYW5kZXIocGFnZTogQ2F0YWxvZywgaW5kZXg6IG51bWJlciwgcmVmKSB7XHJcbiAgICAgICAgcGFnZS5fcmVuZGVyID0ge3JlZiwgaW5kZXh9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==