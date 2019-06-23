/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
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
export { ParagraphComponent };
if (false) {
    /** @type {?} */
    ParagraphComponent.prototype.content;
    /** @type {?} */
    ParagraphComponent.prototype.index;
    /** @type {?} */
    ParagraphComponent.prototype.container;
    /** @type {?} */
    ParagraphComponent.prototype.scrollIn;
    /** @type {?} */
    ParagraphComponent.prototype.percent;
    /** @type {?} */
    ParagraphComponent.prototype.enter_lock;
    /** @type {?} */
    ParagraphComponent.prototype.outer_lock;
    /** @type {?} */
    ParagraphComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ParagraphComponent.prototype.reportsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7Ozs7OztBQUVsRSxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTTs7UUFDdEIsU0FBUyxHQUFHLElBQUk7O1FBQ2hCLFFBQVEsR0FBRyxJQUFJOztRQUNmLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWTtJQUM3QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQUVEO0lBZ0VJLDRCQUNJLEdBQWUsRUFDUCxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF6RGhDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWpELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIs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LE9BQU8sQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7SUFDTCxDQUFDOztnQkFwRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw4dEVBQXlDOztpQkFFNUM7Ozs7Z0JBbENHLFVBQVU7Z0JBU04sY0FBYzs7OzBCQTJCakIsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsTUFBTTs7SUE2RVgseUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQWpGWSxrQkFBa0I7OztJQUMzQixxQ0FBMEI7O0lBQzFCLG1DQUF1Qjs7SUFDdkIsdUNBQW1DOztJQUNuQyxzQ0FBaUQ7O0lBQ2pELHFDQUFnQjs7SUFDaEIsd0NBQW1COztJQUNuQix3Q0FBbUI7O0lBRW5CLGdDQUFtQjs7Ozs7SUFvRGYsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gb2Zmc2V0KGN1ckVsZSwgcGFyZW50KSB7XHJcbiAgICBsZXQgdG90YWxMZWZ0ID0gbnVsbDtcclxuICAgIGxldCB0b3RhbFRvcCA9IG51bGw7XHJcbiAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgIC8vIOmmluWFiOWKoOiHquW3seacrOi6q+eahOW3puWBj+enu+WSjOS4iuWBj+enu1xyXG4gICAgdG90YWxMZWZ0ICs9IGN1ckVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgIHdoaWxlIChwYXIgJiYgcGFyICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gcGFyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gcGFyLm9mZnNldFRvcDtcclxuICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiB0b3RhbExlZnQsXHJcbiAgICAgICAgdG9wOiB0b3RhbFRvcCxcclxuICAgIH07XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcGFyYWdyYXBoJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXJhZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJhZ3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjb250ZW50OiBDYXRhbG9nO1xyXG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2c+KCk7XHJcbiAgICBwZXJjZW50OiBudW1iZXI7XHJcbiAgICBlbnRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICBvdXRlcl9sb2NrID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGVsOiBFbGVtZW50O1xyXG5cclxuICAgIHVwZGF0ZVBlcmNlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9jdXMgPSB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGlubm9jZW50T2Zmc2V0ID0gb2Zmc2V0KGZvY3VzLCB0aGlzLmNvbnRhaW5lcikudG9wO1xyXG4gICAgICAgIHRoaXMucGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIGlubm9jZW50T2Zmc2V0O1xyXG4gICAgICAgIHRoaXMucGVyY2VudCAvPSBmb2N1cy5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25zY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDAgJiYgdGhpcy5wZXJjZW50IDwgMSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJfbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wZXJjZW50ICogMTAwICsgJyUnO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXMgY2hhbmdlJywgdGhpcy5jb250ZW50LCB0aGlzLnBlcmNlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID4gMSAmJiAhdGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0VmlldygnZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50IDwgMCAmJiB0aGlzLmVudGVyX2xvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxPdXRWaWV3KCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvVmlldygpIHtcclxuICAgICAgICB0aGlzLmVudGVyX2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3V0ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCwgJ3Njcm9sbEludG9WaWV3Jyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsT3V0VmlldyhkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW50ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3V0ZXJfbG9jayA9IHRydWU7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50LCAnc2Nyb2xsT3V0VmlldycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIF9lbDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBfZWwubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmNvbnRhaW5lci5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbnNjcm9sbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmxvYWRDb250ZW50KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==