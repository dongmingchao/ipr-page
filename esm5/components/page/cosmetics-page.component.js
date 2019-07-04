import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
function calcParagraphSum(t) {
    var e_1, _a;
    var ret = t.length;
    try {
        for (var t_1 = tslib_1.__values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
            var each = t_1_1.value;
            if (each.child_catalog) {
                ret += calcParagraphSum(each.child_catalog);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (t_1_1 && !t_1_1.done && (_a = t_1.return)) _a.call(t_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return ret;
}
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
        this.containerReady = new EventEmitter();
        this.loadingParagraph = new EventEmitter();
        this.process = {
            render: {
                total: 0,
                now: 0,
            }
        };
    }
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
        var e_2, _a, e_3, _b;
        if (this.disableScroll) {
            return;
        }
        try {
            for (var _c = tslib_1.__values(this.secondary.toArray()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var each = _d.value;
                each.onscroll();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _e = tslib_1.__values(this.firstOfAll.toArray()), _f = _e.next(); !_f.done; _f = _e.next()) {
                var each = _f.value;
                each.onscroll();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
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
    };
    CosmeticsPageComponent.prototype.widgetClick = function (catalogs, event) {
        event.catalogs = catalogs;
        this.widgetOnClick.emit(event);
    };
    CosmeticsPageComponent.prototype.contentRander = function (page, index, ref) {
        if (page._render) {
            return;
        }
        page._render = { ref: ref, index: index };
        this.process.render.now += 1;
        this.loadingParagraph.emit({
            process: this.process.render
        });
    };
    CosmeticsPageComponent.prototype.ngOnInit = function () {
    };
    CosmeticsPageComponent.prototype.ngAfterViewInit = function () {
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
    };
    CosmeticsPageComponent.prototype.ngOnChanges = function (changes) {
        if (changes.page.currentValue) {
            this.process.render.total = calcParagraphSum(this.page);
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
    return CosmeticsPageComponent;
}());
export { CosmeticsPageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQU0vRCxTQUFTLGdCQUFnQixDQUFDLENBQVk7O0lBQ2xDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQ25CLEtBQW1CLElBQUEsTUFBQSxpQkFBQSxDQUFDLENBQUEsb0JBQUEsbUNBQUU7WUFBakIsSUFBTSxJQUFJLGNBQUE7WUFDWCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDL0M7U0FDSjs7Ozs7Ozs7O0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBT0Q7SUEwS0ksZ0NBQ1ksY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBcktoQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUN6QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7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bEI7UUFBL0MsU0FBUyxDQUFDLGtCQUFrQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzBDQUFvQixVQUFVO3FFQUFDO0lBbkJyRSxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5Qix1d0NBQThDOztTQUVqRCxDQUFDO2lEQTRLOEIsY0FBYztPQTNLakMsc0JBQXNCLENBc01sQztJQUFELDZCQUFDO0NBQUEsQUF0TUQsSUFzTUM7U0F0TVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIFZpZXdDaGlsZHJlbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UGFyYWdyYXBoQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50JztcclxuaW1wb3J0IHtXaWRnZXRDbGlja0V2ZW50fSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9XaWRnZXRDbGlja0V2ZW50LmNsYXNzJztcclxuXHJcblxyXG5mdW5jdGlvbiBjYWxjUGFyYWdyYXBoU3VtKHQ6IENhdGFsb2dbXSk6IG51bWJlciB7XHJcbiAgICBsZXQgcmV0ID0gdC5sZW5ndGg7XHJcbiAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdCkge1xyXG4gICAgICAgIGlmIChlYWNoLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgcmV0ICs9IGNhbGNQYXJhZ3JhcGhTdW0oZWFjaC5jaGlsZF9jYXRhbG9nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNvc21ldGljcy1wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBASW5wdXQoKSBwYWdlOiBDYXRhbG9nW107XHJcblxyXG4gICAgQE91dHB1dCgpIHdpZGdldE9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY3VycmVudEluZGV4ID0gMDtcclxuICAgIGRpc2FibGVTY3JvbGwgPSBmYWxzZTtcclxuICAgIGFwcGVuZFBhZ2VMb2NrID0gZmFsc2U7XHJcbiAgICBiZXlvbmRPdmVyV2luZG93ID0gMDtcclxuICAgIEBPdXRwdXQoKSBmb2N1c0NvbnRlbnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2dbXT4oKTtcclxuICAgIEBPdXRwdXQoKSBjb250YWluZXJSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBsb2FkaW5nUGFyYWdyYXBoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQFZpZXdDaGlsZHJlbignZmlyc3RPZkFsbCcpIGZpcnN0T2ZBbGw6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZHJlbignc2Vjb25kYXJ5Jykgc2Vjb25kYXJ5OiBRdWVyeUxpc3Q8UGFyYWdyYXBoQ29tcG9uZW50PjtcclxuICAgIEBWaWV3Q2hpbGRyZW4oJ3RlcnRpYXJ5JykgdGVydGlhcnk6IFF1ZXJ5TGlzdDxQYXJhZ3JhcGhDb21wb25lbnQ+O1xyXG4gICAgQFZpZXdDaGlsZCgnc2Nyb2xsX2NvbnRhaW5lcicsIHtzdGF0aWM6IGZhbHNlfSkgX3Njcm9sbF9jb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHJvY2VzcyA9IHtcclxuICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIG5vdzogMCxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoYW5nZShpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgod2lkdGg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAnY29sLWxnLScgKyB3aWR0aCArICcgY29sLW1kLScgKyB3aWR0aCArICcgY29sLXNtLScgKyB3aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcHBlbmRQYWdlKHBhZ2VJZDogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5hcHBlbmRUbyhwYWdlSWQsIHRoaXMucGFnZSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gYXBwZW5kUGFyYWdyYXBoKGlkOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFwcGVuZFRvKGlkLCB0aGlzLnBhZ2UpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGFwcGVuZFRvKGlkOiBudW1iZXIsIGNvbnRlbnQ6IENhdGFsb2dbXSk6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAvLyAgICAgaWYgKGlkID09PSAtMSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvbnN0IHJlYyA9IHRoaXMucmVwb3J0c1NlcnZpY2UuZ2V0X2NvbnRlbnQoaWQsICdUcnVlJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2FwcGVuZCcsIGlkLCBjb250ZW50KTtcclxuICAgIC8vICAgICAvLyByZWMudGhlbihqc29uID0+IHtcclxuICAgIC8vICAgICAvLyAgICAgZm9yIChjb25zdCBlYWNoIG9mIGpzb24pIHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnRlbnQucHVzaChlYWNoKTtcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQucHVzaChpZCk7XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJlYztcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXQgZm9jdXNDb250ZW50SW5kZXgodmFsKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3ZhbCBpcycsIHZhbCwgdGhpcy5jb250ZW50cy50b0FycmF5KCkpO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4ID0gdmFsO1xyXG4gICAgLy8gICAgIHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsID0gdGhpcy5jb250ZW50cy50b0FycmF5KClbdmFsXS5uYXRpdmVFbGVtZW50O1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdmb2N1cyBjb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldCBmb2N1c0NvbnRlbnRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvZmZzZXRDb250YWluZXIoY3VyRWxlKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsTGVmdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHRvdGFsVG9wID0gbnVsbDtcclxuICAgICAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgICAgICAvLyDpppblhYjliqDoh6rlt7HmnKzouqvnmoTlt6blgY/np7vlkozkuIrlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gY3VyRWxlLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgICAgICB3aGlsZSAocGFyICE9PSB0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICAgICAgdG90YWxMZWZ0ICs9IHBhci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB0b3RhbFRvcCArPSBwYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogdG90YWxMZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRvdGFsVG9wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyhjb250ZW50OiBDYXRhbG9nKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXRDb250YWluZXIoY29udGVudC5fcmVuZGVyLnJlZik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2Nyb2xsVG8ob2Zmc2V0LmxlZnQsIG9mZnNldC50b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9QYXJhZ3JhcGgoY29udGVudDogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgdGhpcy5zZWNvbmRhcnkudG9BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGVhY2gub25zY3JvbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIHRoaXMuZmlyc3RPZkFsbC50b0FycmF5KCkpIHtcclxuICAgICAgICAgICAgZWFjaC5vbnNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgcGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIHRoaXMuYmV5b25kT3ZlcldpbmRvdztcclxuICAgICAgICAvLyBwZXJjZW50IC89IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXNDb250ZW50JywgdGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAvLyAgICAgc2VjdGlvbiA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZ1swXTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5yZXBvcnRzU2VydmljZS5zZWN0aW9uLnN0eWxlLmhlaWdodCA9IHBlcmNlbnQgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BlcmNlbnQnLCBwZXJjZW50LCB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmluZGV4KTtcclxuICAgICAgICAvLyBpZiAocGVyY2VudCA+IDAuOCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5hcHBlbmRQYWdlTG9jaykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBuZXh0UGFnZUlkID0gdGhpcy5yZXBvcnRzU2VydmljZS5uZXh0UGFnZUlkKCk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmFscmVhZHlBZGQuaW5jbHVkZXMobmV4dFBhZ2VJZCkpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMuYXBwZW5kUGFnZUxvY2sgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYXBwZW5kUGFnZShuZXh0UGFnZUlkKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY29udGVudHMuY2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5hcHBlbmRQYWdlTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChwZXJjZW50ID4gMSkge1xyXG4gICAgICAgIC8vIGNvbnN0IG5leHRQYWdlSWQgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5hbHJlYWR5QWRkLmluY2x1ZGVzKG5leHRQYWdlSWQpKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnJlcG9ydHNTZXJ2aWNlLmZvY3VzQ29udGVudC5lbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93ICs9IHRoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmVsLnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICB0aGlzLmZvY3VzQ29udGVudEluZGV4Kys7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocGVyY2VudCA8IDApIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZXBvcnRzU2VydmljZS5mb2N1c0NvbnRlbnQuZWwpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5iZXlvbmRPdmVyV2luZG93IC09IHRoaXMuY29udGVudHMudG9BcnJheSgpW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4IC0gMV1cclxuICAgICAgICAvLyAgICAgICAgIC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5mb2N1c0NvbnRlbnRJbmRleC0tO1xyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50Q2hhbmdlLmVtaXQoW3RoaXMucmVwb3J0c1NlcnZpY2UuZm9jdXNDb250ZW50LmluZGV4XSk7XHJcbiAgICAgICAgLy8gdGhpcy5kaXNhYmxlU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGlzYWJsZVNjcm9sbCA9IGZhbHNlLCAxMDAwKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgd2lkZ2V0Q2xpY2soY2F0YWxvZ3M6IENhdGFsb2dbXSwgZXZlbnQ6IFdpZGdldENsaWNrRXZlbnQpIHtcclxuICAgICAgICBldmVudC5jYXRhbG9ncyA9IGNhdGFsb2dzO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0T25DbGljay5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50UmFuZGVyKHBhZ2U6IENhdGFsb2csIGluZGV4OiBudW1iZXIsIHJlZikge1xyXG4gICAgICAgIGlmIChwYWdlLl9yZW5kZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlLl9yZW5kZXIgPSB7cmVmLCBpbmRleH07XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzLnJlbmRlci5ub3cgKz0gMTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdQYXJhZ3JhcGguZW1pdCh7XHJcbiAgICAgICAgICAgIHByb2Nlc3M6IHRoaXMucHJvY2Vzcy5yZW5kZXJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIOWmguaenOesrOS4gOeroOiKguS4jei2s+S7pea7muWKqO+8jOWImeWGjea3u+WKoOS4gOeroOiKglxyXG4gICAgICAgIC8vIHRoaXMuZm9jdXNDb250ZW50SW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiB0aGlzLmNvbnRlbnRzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJldCA9IHRoaXMuYXBwZW5kUGFnZSh0aGlzLnJlcG9ydHNTZXJ2aWNlLm5leHRQYWdlSWQoKSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChyZXQpIHJldC5zdWJzY3JpYmUoYyA9PiB0aGlzLmFwcGVuZFBhZ2VMb2NrID0gZmFsc2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuX3Njcm9sbF9jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lclJlYWR5LmVtaXQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIC8vIGNvbnN0IGZpcnN0T2ZBbGwgPSB0aGlzLmZpcnN0T2ZBbGwudG9BcnJheSgpO1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgZWFjaCBvZiBmaXJzdE9mQWxsKSB7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMucGFnZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzLnJlbmRlci50b3RhbCA9IGNhbGNQYXJhZ3JhcGhTdW0odGhpcy5wYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19