import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
import { IprCharts } from '../echarts/ipr-charts';
import { WidgetClickEvent } from '../../../_Classes/WidgetClickEvent.class';
function offset(curEle, parent) {
    var totalLeft = null;
    var totalTop = null;
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
        this.widgetOnClick = new EventEmitter();
        this.enter_lock = false;
        this.outer_lock = false;
        this.el = _el.nativeElement;
    }
    ParagraphComponent.prototype.updatePercent = function () {
        var focus = this.el.firstElementChild;
        var innocentOffset = offset(focus, this.container).top;
        this.percent = this.container.clientHeight + this.container.scrollTop - innocentOffset;
        this.percent /= focus.scrollHeight;
    };
    ParagraphComponent.prototype.onscroll = function () {
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
    ParagraphComponent.prototype.scrollIntoView = function () {
        this.enter_lock = true;
        this.outer_lock = false;
        console.log(this.content, 'scrollIntoView');
        this.scrollIn.emit(this.content);
    };
    ParagraphComponent.prototype.scrollOutView = function (direction) {
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
    ParagraphComponent.prototype.widgetClick = function (widgetName, event) {
        var pass = new WidgetClickEvent();
        pass.source_event = event;
        pass.widget_name = widgetName;
        this.widgetOnClick.emit(pass);
    };
    ParagraphComponent.prototype.generateEcharts = function (widget) {
        switch (widget.template) {
            case 'trend':
                return new IprCharts('trend', widget.rawData);
            case 'geo':
                return new IprCharts('geo', widget.rawData);
            case 'rank':
                return new IprCharts('rank', widget.rawData);
            case 'techdivision':
                return new IprCharts('tech_division', widget.rawData);
        }
    };
    ParagraphComponent.prototype.ngOnInit = function () {
    };
    ParagraphComponent.prototype.ngAfterViewInit = function () {
    };
    ParagraphComponent.prototype.ngOnChanges = function (changes) {
        // if (changes.container.currentValue) {
        //     // this.onscroll();
        //     if (this.outer_lock) {
        //         console.log('content change 123', changes, this.content);
        //         this.reportsService.loadContent(this.content);
        //     }
        // }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Catalog)
    ], ParagraphComponent.prototype, "content", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ParagraphComponent.prototype, "index", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLDivElement)
    ], ParagraphComponent.prototype, "container", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ParagraphComponent.prototype, "scrollIn", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ParagraphComponent.prototype, "widgetOnClick", void 0);
    ParagraphComponent = tslib_1.__decorate([
        Component({
            selector: 'ipr-paragraph',
            template: "<div>\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <div class=\"content\" [ngClass]=\"{row: !ppp.widgetVertical}\" *ngIf=\"ppp.hasWidget\">\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n<!--                    <div>widget id{{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType===0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===4\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"generateEcharts(ppp.widgetID)\"\r\n                    ></div>\r\n                    <ipr-table *ngIf=\"ppp.widgetID.widgetType===5\"\r\n                               (rowClick)=\"widgetClick('table-row', $event)\"\r\n                               [data]=\"ppp.widgetID.rawData\"></ipr-table>\r\n                </div>\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                    <!--&lt;!&ndash;<div>widget id {{ppp.widgetID.id}}</div>&ndash;&gt;-->\r\n                    <!--<p>{{ppp.content}}</p>-->\r\n                <!--</div>-->\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                    <!--<img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>-->\r\n\r\n                    <!--<div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"-->\r\n                         <!--[options]=\"ppp.widgetID.options\" class=\"echart\"></div>-->\r\n                <!--</div>-->\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
            styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:2rem;overflow-wrap:break-word}:host(ipr-paragraph) .paragraph .row{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            ReportsService])
    ], ParagraphComponent);
    return ParagraphComponent;
}());
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQU9EO0lBbUVJLDRCQUNJLEdBQWUs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QUM7aURBcUVXLFVBQVU7WUFDUyxjQUFjO09BckVqQyxrQkFBa0IsQ0F1RzlCO0lBQUQseUJBQUM7Q0FBQSxBQXZHRCxJQXVHQztTQXZHWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7SXByQ2hhcnRzfSBmcm9tICcuLi9lY2hhcnRzL2lwci1jaGFydHMnO1xyXG5pbXBvcnQge1dpZGdldENsaWNrRXZlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1dpZGdldENsaWNrRXZlbnQuY2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gb2Zmc2V0KGN1ckVsZSwgcGFyZW50KSB7XHJcbiAgICBsZXQgdG90YWxMZWZ0ID0gbnVsbDtcclxuICAgIGxldCB0b3RhbFRvcCA9IG51bGw7XHJcbiAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgIC8vIOmmluWFiOWKoOiHquW3seacrOi6q+eahOW3puWBj+enu+WSjOS4iuWBj+enu1xyXG4gICAgdG90YWxMZWZ0ICs9IGN1ckVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgIHdoaWxlIChwYXIgJiYgcGFyICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gcGFyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gcGFyLm9mZnNldFRvcDtcclxuICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiB0b3RhbExlZnQsXHJcbiAgICAgICAgdG9wOiB0b3RhbFRvcCxcclxuICAgIH07XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcGFyYWdyYXBoJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXJhZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJhZ3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBjb250ZW50OiBDYXRhbG9nO1xyXG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2c+KCk7XHJcbiAgICBAT3V0cHV0KCkgd2lkZ2V0T25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8V2lkZ2V0Q2xpY2tFdmVudD4oKTtcclxuICAgIHBlcmNlbnQ6IG51bWJlcjtcclxuICAgIGVudGVyX2xvY2sgPSBmYWxzZTtcclxuICAgIG91dGVyX2xvY2sgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnQ7XHJcblxyXG4gICAgdXBkYXRlUGVyY2VudCgpIHtcclxuICAgICAgICBjb25zdCBmb2N1cyA9IHRoaXMuZWwuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgY29uc3QgaW5ub2NlbnRPZmZzZXQgPSBvZmZzZXQoZm9jdXMsIHRoaXMuY29udGFpbmVyKS50b3A7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICsgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wIC0gaW5ub2NlbnRPZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50IC89IGZvY3VzLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBvbnNjcm9sbCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID4gMCAmJiB0aGlzLnBlcmNlbnQgPCAxKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbnRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLnBlcmNlbnQgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb2N1cyBjaGFuZ2UnLCB0aGlzLmNvbnRlbnQsIHRoaXMucGVyY2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPiAxICYmICF0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxPdXRWaWV3KCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPCAwICYmIHRoaXMuZW50ZXJfbG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE91dFZpZXcoJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9WaWV3KCkge1xyXG4gICAgICAgIHRoaXMuZW50ZXJfbG9jayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vdXRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50LCAnc2Nyb2xsSW50b1ZpZXcnKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEluLmVtaXQodGhpcy5jb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxPdXRWaWV3KGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbnRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vdXRlcl9sb2NrID0gdHJ1ZTtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQsICdzY3JvbGxPdXRWaWV3Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2lkZ2V0Q2xpY2sod2lkZ2V0TmFtZSwgZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBwYXNzID0gbmV3IFdpZGdldENsaWNrRXZlbnQoKTtcclxuICAgICAgICBwYXNzLnNvdXJjZV9ldmVudCA9IGV2ZW50O1xyXG4gICAgICAgIHBhc3Mud2lkZ2V0X25hbWUgPSB3aWRnZXROYW1lO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0T25DbGljay5lbWl0KHBhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIF9lbDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBfZWwubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUVjaGFydHMod2lkZ2V0KSB7XHJcbiAgICAgICAgc3dpdGNoICh3aWRnZXQudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAndHJlbmQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ3RyZW5kJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgICAgICBjYXNlICdnZW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ2dlbycsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICAgICAgY2FzZSAncmFuayc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygncmFuaycsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICAgICAgY2FzZSAndGVjaGRpdmlzaW9uJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCd0ZWNoX2RpdmlzaW9uJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmNvbnRhaW5lci5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5vbnNjcm9sbCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY29udGVudCBjaGFuZ2UgMTIzJywgY2hhbmdlcywgdGhpcy5jb250ZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UubG9hZENvbnRlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19