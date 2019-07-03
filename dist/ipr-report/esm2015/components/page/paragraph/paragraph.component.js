import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
import { IprCharts } from '../echarts/ipr-charts';
import { WidgetClickEvent } from '../../../_Classes/WidgetClickEvent.class';
function offset(curEle, parent) {
    let totalLeft = null;
    let totalTop = null;
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
function generateEcharts(widget) {
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
}
let ParagraphComponent = class ParagraphComponent {
    constructor(_el, reportsService, differs) {
        this.reportsService = reportsService;
        this.differs = differs;
        this.scrollIn = new EventEmitter();
        this.widgetOnClick = new EventEmitter();
        this.enter_lock = false;
        this.outer_lock = false;
        this.el = _el.nativeElement;
    }
    updatePercent() {
        const focus = this.el.firstElementChild;
        const innocentOffset = offset(focus, this.container).top;
        this.percent = this.container.clientHeight + this.container.scrollTop - innocentOffset;
        this.percent /= focus.scrollHeight;
    }
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
    scrollIntoView() {
        this.enter_lock = true;
        this.outer_lock = false;
        console.log(this.content, 'scrollIntoView');
        this.scrollIn.emit(this.content);
    }
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
    widgetClick(widgetName, event) {
        const pass = new WidgetClickEvent();
        pass.source_event = event;
        pass.widget_name = widgetName;
        this.widgetOnClick.emit(pass);
    }
    ngOnInit() {
        this.customerDiffer = this.differs.find(this.content).create();
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        // if (changes.container.currentValue) {
        //     // this.onscroll();
        //     if (this.outer_lock) {
        //         console.log('content change 123', changes, this.content);
        //         this.reportsService.loadContent(this.content);
        //     }
        // }
        // if (changes.content.currentValue) {
        //     console.log('current value', changes.content.currentValue);
        //     if (changes.content.currentValue.paragraphs) {
        //     }
        // }
    }
    ngDoCheck() {
        const contentDiffer = this.customerDiffer.diff(this.content);
        if (contentDiffer) {
            contentDiffer.forEachAddedItem(r => {
                if (r.key === 'paragraphs') {
                    for (const ppp of this.content.paragraphs) {
                        if (ppp.hasWidget && ppp.widgetID.widgetType === 4) {
                            ppp.widgetID._render = generateEcharts(ppp.widgetID);
                        }
                    }
                }
            });
        }
    }
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
        template: "<div>\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <div class=\"content\" [ngClass]=\"{row: !ppp.widgetVertical}\" *ngIf=\"ppp.hasWidget\">\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n<!--                    <div>widget id{{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType===0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===4\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID._render\"\r\n                    ></div>\r\n                    <ipr-table *ngIf=\"ppp.widgetID.widgetType===5\"\r\n                               (rowClick)=\"widgetClick('table-row', $event)\"\r\n                               [data]=\"ppp.widgetID.rawData\"></ipr-table>\r\n                </div>\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                    <!--&lt;!&ndash;<div>widget id {{ppp.widgetID.id}}</div>&ndash;&gt;-->\r\n                    <!--<p>{{ppp.content}}</p>-->\r\n                <!--</div>-->\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                    <!--<img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>-->\r\n\r\n                    <!--<div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"-->\r\n                         <!--[options]=\"ppp.widgetID.options\" class=\"echart\"></div>-->\r\n                <!--</div>-->\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
        styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:2rem;overflow-wrap:break-word}:host(ipr-paragraph) .paragraph .row{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        ReportsService,
        KeyValueDiffers])
], ParagraphComponent);
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQWtCLGVBQWUsRUFHdEMsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMs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QUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksYUFBYSxFQUFFO1lBQ2YsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssWUFBWSxFQUFFO29CQUN4QixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO3dCQUN2QyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFOzRCQUNoRCxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUN4RDtxQkFDSjtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0NBRUosQ0FBQTtBQWxIWTtJQUFSLEtBQUssRUFBRTtzQ0FBVSxPQUFPO21EQUFDO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOztpREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3NDQUFZLGNBQWM7cURBQUM7QUFDekI7SUFBVCxNQUFNLEVBQUU7O29EQUF3QztBQUN2QztJQUFULE1BQU0sRUFBRTs7eURBQXNEO0FBTHRELGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QiwreUZBQXlDOztLQUU1QyxDQUFDOzZDQXNFVyxVQUFVO1FBQ1MsY0FBYztRQUNyQixlQUFlO0dBdkUzQixrQkFBa0IsQ0FtSDlCO1NBbkhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LCBEb0NoZWNrLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LCBLZXlWYWx1ZURpZmZlciwgS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJcHJDaGFydHN9IGZyb20gJy4uL2VjaGFydHMvaXByLWNoYXJ0cyc7XHJcbmltcG9ydCB7V2lkZ2V0Q2xpY2tFdmVudH0gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvV2lkZ2V0Q2xpY2tFdmVudC5jbGFzcyc7XHJcblxyXG5mdW5jdGlvbiBvZmZzZXQoY3VyRWxlLCBwYXJlbnQpIHtcclxuICAgIGxldCB0b3RhbExlZnQgPSBudWxsO1xyXG4gICAgbGV0IHRvdGFsVG9wID0gbnVsbDtcclxuICAgIGxldCBwYXIgPSBjdXJFbGUub2Zmc2V0UGFyZW50O1xyXG4gICAgLy8g6aaW5YWI5Yqg6Ieq5bex5pys6Lqr55qE5bem5YGP56e75ZKM5LiK5YGP56e7XHJcbiAgICB0b3RhbExlZnQgKz0gY3VyRWxlLm9mZnNldExlZnQ7XHJcbiAgICB0b3RhbFRvcCArPSBjdXJFbGUub2Zmc2V0VG9wO1xyXG4gICAgd2hpbGUgKHBhciAmJiBwYXIgIT09IHBhcmVudCkge1xyXG4gICAgICAgIC8vIOe0r+WKoOeItue6p+WPgueFp+eJqeacrOi6q+eahOWBj+enu1xyXG4gICAgICAgIHRvdGFsTGVmdCArPSBwYXIub2Zmc2V0TGVmdDtcclxuICAgICAgICB0b3RhbFRvcCArPSBwYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgIHBhciA9IHBhci5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IHRvdGFsTGVmdCxcclxuICAgICAgICB0b3A6IHRvdGFsVG9wLFxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVFY2hhcnRzKHdpZGdldCk6IElwckNoYXJ0cyB7XHJcbiAgICBzd2l0Y2ggKHdpZGdldC50ZW1wbGF0ZSkge1xyXG4gICAgICAgIGNhc2UgJ3RyZW5kJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ3RyZW5kJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgIGNhc2UgJ2dlbyc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCdnZW8nLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgY2FzZSAncmFuayc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCdyYW5rJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgIGNhc2UgJ3RlY2hkaXZpc2lvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCd0ZWNoX2RpdmlzaW9uJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXBhcmFncmFwaCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhcmFncmFwaC5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFyYWdyYXBoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xyXG4gICAgQElucHV0KCkgY29udGVudDogQ2F0YWxvZztcclxuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbEluID0gbmV3IEV2ZW50RW1pdHRlcjxDYXRhbG9nPigpO1xyXG4gICAgQE91dHB1dCgpIHdpZGdldE9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFdpZGdldENsaWNrRXZlbnQ+KCk7XHJcbiAgICBwZXJjZW50OiBudW1iZXI7XHJcbiAgICBlbnRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICBvdXRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1c3RvbWVyRGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIGFueT47XHJcblxyXG4gICAgcHVibGljIGVsOiBFbGVtZW50O1xyXG5cclxuICAgIHVwZGF0ZVBlcmNlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9jdXMgPSB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGlubm9jZW50T2Zmc2V0ID0gb2Zmc2V0KGZvY3VzLCB0aGlzLmNvbnRhaW5lcikudG9wO1xyXG4gICAgICAgIHRoaXMucGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIGlubm9jZW50T2Zmc2V0O1xyXG4gICAgICAgIHRoaXMucGVyY2VudCAvPSBmb2N1cy5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25zY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDAgJiYgdGhpcy5wZXJjZW50IDwgMSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJfbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wZXJjZW50ICogMTAwICsgJyUnO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXMgY2hhbmdlJywgdGhpcy5jb250ZW50LCB0aGlzLnBlcmNlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID4gMSAmJiAhdGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0VmlldygnZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50IDwgMCAmJiB0aGlzLmVudGVyX2xvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxPdXRWaWV3KCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvVmlldygpIHtcclxuICAgICAgICB0aGlzLmVudGVyX2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3V0ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCwgJ3Njcm9sbEludG9WaWV3Jyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsT3V0VmlldyhkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW50ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3V0ZXJfbG9jayA9IHRydWU7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50LCAnc2Nyb2xsT3V0VmlldycpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZGdldENsaWNrKHdpZGdldE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFzcyA9IG5ldyBXaWRnZXRDbGlja0V2ZW50KCk7XHJcbiAgICAgICAgcGFzcy5zb3VyY2VfZXZlbnQgPSBldmVudDtcclxuICAgICAgICBwYXNzLndpZGdldF9uYW1lID0gd2lkZ2V0TmFtZTtcclxuICAgICAgICB0aGlzLndpZGdldE9uQ2xpY2suZW1pdChwYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmVsID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lckRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuY29udGVudCkuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5jb250YWluZXIuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMub25zY3JvbGwoKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlbnQgY2hhbmdlIDEyMycsIGNoYW5nZXMsIHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmxvYWRDb250ZW50KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHZhbHVlJywgY2hhbmdlcy5jb250ZW50LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlLnBhcmFncmFwaHMpIHtcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaWZmZXIgPSB0aGlzLmN1c3RvbWVyRGlmZmVyLmRpZmYodGhpcy5jb250ZW50KTtcclxuICAgICAgICBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hBZGRlZEl0ZW0ociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5rZXkgPT09ICdwYXJhZ3JhcGhzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHBwIG9mIHRoaXMuY29udGVudC5wYXJhZ3JhcGhzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcHAuaGFzV2lkZ2V0ICYmIHBwcC53aWRnZXRJRC53aWRnZXRUeXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcHAud2lkZ2V0SUQuX3JlbmRlciA9IGdlbmVyYXRlRWNoYXJ0cyhwcHAud2lkZ2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==