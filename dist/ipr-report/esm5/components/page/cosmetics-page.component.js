import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
var CosmeticsPageComponent = /** @class */ (function () {
    function CosmeticsPageComponent(reportsService) {
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
    CosmeticsPageComponent.prototype.widgetClick = function (catalogs, event) {
        event.catalogs = catalogs;
        this.widgetOnClick.emit(event);
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
    return CosmeticsPageComponent;
}());
export { CosmeticsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQVcvRDtJQStKSSxnQ0FDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqSmhDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3QyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDWCx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBNkkvQyx5Q0FBeUM7UUFDekMseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixRQUFRO0lBQ1osQ0FBQztJQWxLYyxzQkFBSSx3Q0FBSTthQUFSLFVBQVMsS0FBSztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVRLHNCQUFJLDZDQUFTO2FBQWIsVUFBYyxLQUFLO1lBQ3hCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNMLENBQUM7OztPQUFBO0lBZUQsdUNBQU0sR0FBTixVQUFP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QUFDOzBDQUFvQixVQUFVO3FFQUFDO0lBMUJyRSxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qix1d0NBQThDOztTQUVqRCxDQUFDO2lEQWlLOEIsY0FBYztPQWhLakMsc0JBQXNCLENBa01sQztJQUFELDZCQUFDO0NBQUEsQUFsTUQsSUFrTUM7U0FsTVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBWaWV3Q2hpbGRyZW4sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge1BhcmFncmFwaENvbXBvbmVudH0gZnJvbSAnLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V2lkZ2V0Q2xpY2tFdmVudH0gZnJvbSAnLi4vLi4vX0NsYXNzZXMvV2lkZ2V0Q2xpY2tFdmVudC5jbGFzcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1jb3NtZXRpY3MtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc1BhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgcGFnZTogQ2F0YWxvZ1tdO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIEBJbnB1dCgnUGFnZScpIHNldCBQYWdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHN3aXRoY2hUbyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIHdpZGdldE9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGRpc2FibGVTY3JvbGwgPSBmYWxzZTtcclxuICAgIGFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICBiZXlvbmRPdmVyV2luZG93ID0gMDtcclxuICAgIEBPdXRwdXQoKSBmb2N1c0NvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2dbXT4oKTtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ2ZpcnN0T2ZBbGwnKSBmaXJzdE9mQWxsOiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3NlY29uZGFyeScpIHNlY29uZGFyeTogUXVlcnlMaXN0PFBhcmFncmFwaENvbXBvbmVudD47XHJcbiAgICBAVmlld0NoaWxkcmVuKCd0ZXJ0aWFyeScpIHRlcnRpYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbF9jb250YWluZXInLCB7c3RhdGljOiBmYWxzZX0pIF9zY3JvbGxfY29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNoYW5nZShpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAnY29sLWxnLScgKyB3aWR0aCArICcgY29sLW1kLScgKyB3aWR0aCArICcgY29sLXNtLScgKyB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcHBlbmRQYWdlKHBhZ2VJZDogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcHBlbmRUbyhwYWdlSWQsIHRoaXMucGFnZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYXBwZW5kUGFyYWdyYXBoKGlkOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFwcGVuZFRvKGlkLCB0aGlzLnBhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFwcGVuZFRvKGlkOiBudW1iZXIsIGNvbnRlbnQ6IENhdGFsb2dbXSk6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgaWYgKGlkID09PSAtMSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlYyA9IHRoaXMucmVwb3J0c1NlcnZpY2UuZ2V0X2NvbnRlbnQoaWQsICdUcnVlJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2FwcGVuZCcsIGlkLCBjb250ZW50KTtcclxuICAgIC8vICAgICAvLyByZWMudGhlbihqc29uID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgZm9yIChjb25zdCBlYWNoIG9mIGpzb24pIHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnRlbnQucHVzaChlYWNoKTtcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQucHVzaChpZCk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJlYztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXQgZm9jdXNDb250ZW50SW5kZXgodmFsKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhbCBpcycsIHZhbCwgdGhpcy5jb250ZW50cy50b0FycmF5KCkpO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4ID0gdmFsO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsID0gdGhpcy5jb250ZW50cy50b0FycmF5KClbdmFsXS5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdmb2N1cyBjb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldCBmb2N1c0NvbnRlbnRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvZmZzZXRDb250YWluZXIoY3VyRWxlKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsTGVmdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRvdGFsVG9wID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgICAgICAvLyDpppblhYjliqDoh6rlt7HmnKzouqvnmoTlt6blgY/np7vlkozkuIrlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gY3VyRWxlLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgICAgICB3aGlsZSAocGFyICE9PSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICAgICAgdG90YWxMZWZ0ICs9IHBhci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB0b3RhbFRvcCArPSBwYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogdG90YWxMZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRvdGFsVG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyhjb250ZW50OiBDYXRhbG9nKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXRDb250YWluZXIoY29udGVudC5fcmVuZGVyLnJlZik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8ob2Zmc2V0LmxlZnQsIG9mZnNldC50b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9QYXJhZ3JhcGgoY29udGVudDogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdGhpcy5zZWNvbmRhcnkudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGVhY2gub25zY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRoaXMuZmlyc3RPZkFsbC50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgZWFjaC5vbnNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgcGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIHRoaXMuYmV5b25kT3ZlcldpbmRvdztcclxuICAgICAgICAvLyBwZXJjZW50IC89IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXNDb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAvLyAgICAgc2VjdGlvbiA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZ1swXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5yZXBvcnRzU2VydmljZS5zZWN0aW9uLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BlcmNlbnQnLCBwZXJjZW50LCB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4KTtcclxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDAuOCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5hcHBlbmRQYWdlTG9jaykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBuZXh0UGFnZUlkID0gdGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQuaW5jbHVkZXMobmV4dFBhZ2VJZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYXBwZW5kUGFnZShuZXh0UGFnZUlkKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGVudHMuY2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChwZXJjZW50ID4gMSkge1xyXG4gICAgICAgIC8vIGNvbnN0IG5leHRQYWdlSWQgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLmluY2x1ZGVzKG5leHRQYWdlSWQpKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93ICs9IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmZvY3VzQ29udGVudEluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocGVyY2VudCA8IDApIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93IC09IHRoaXMuY29udGVudHMudG9BcnJheSgpW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4IC0gMV1cclxuICAgICAgICAvLyAgICAgICAgIC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRJbmRleC0tO1xyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzYWJsZVNjcm9sbCA9IGZhbHNlLCAxMDAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgd2lkZ2V0Q2xpY2soY2F0YWxvZ3M6IENhdGFsb2dbXSwgZXZlbnQ6IFdpZGdldENsaWNrRXZlbnQpIHtcclxuICAgICAgICBldmVudC5jYXRhbG9ncyA9IGNhdGFsb2dzO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0T25DbGljay5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZVxyXG4gICAgKSB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucmVwb3J0c1NlcnZpY2UuZ2V0X2pzb25fZGF0YSgnMCcpXHJcbiAgICAgICAgLy8gICAuc3Vic2NyaWJlKGpzb24gPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBhZ2UgPSBqc29uO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIOWmguaenOesrOS4gOeroOiKguS4jei2s+S7pea7muWKqO+8jOWImeWGjea3u+WKoOS4gOeroOiKglxyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50SW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiB0aGlzLmNvbnRlbnRzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJldCA9IHRoaXMuYXBwZW5kUGFnZSh0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXQpIHJldC5zdWJzY3JpYmUoYyA9PiB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9zY3JvbGxfY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc3QgZmlyc3RPZkFsbCA9IHRoaXMuZmlyc3RPZkFsbC50b0FycmF5KCk7XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCBlYWNoIG9mIGZpcnN0T2ZBbGwpIHtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5LmNoYW5nZXMuc3Vic2NyaWJlKG4gPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vjb25kYXJ5Jywgbi50b0FycmF5KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnRSYW5kZXIocGFnZTogQ2F0YWxvZywgaW5kZXg6IG51bWJlciwgcmVmKSB7XHJcbiAgICAgICAgcGFnZS5fcmVuZGVyID0ge3JlZiwgaW5kZXh9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==