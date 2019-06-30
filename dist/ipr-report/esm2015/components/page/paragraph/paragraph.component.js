import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
import { IprCharts } from '../echarts/ipr-charts';
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
let ParagraphComponent = class ParagraphComponent {
    constructor(_el, reportsService) {
        this.reportsService = reportsService;
        this.scrollIn = new EventEmitter();
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
    generateEcharts(widget) {
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
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes.container.currentValue) {
            this.onscroll();
            if (this.outer_lock) {
                this.reportsService.loadContent(this.content);
            }
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
ParagraphComponent = tslib_1.__decorate([
    Component({
        selector: 'ipr-paragraph',
        template: "<div>\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <div class=\"row content\" *ngIf=\"ppp.hasWidget\">\r\n                <div *ngIf=\"!ppp.widgetVertical\" class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n<!--                    <div>widget id{{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div *ngIf=\"!ppp.widgetVertical\" class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType===0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===4\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"generateEcharts(ppp.widgetID)\"\r\n                    ></div>\r\n                    <ipr-table *ngIf=\"ppp.widgetID.widgetType===5\" [data]=\"ppp.widgetID.rawData\"></ipr-table>\r\n                </div>\r\n                <div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <!--<div>widget id {{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\" class=\"echart\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
        styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:3rem;overflow-wrap:break-word}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        ReportsService])
], ParagraphComponent);
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRWhELFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQU9ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBMkQzQixZQUNJLEdBQWUsRUFDUCxjQUE4QjtRQUE5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TUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsS0FBSyxjQUFjO2dCQUNmLE9BQU8sSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pEO1NBQ0o7SUFDTCxDQUFDO0NBRUosQ0FBQTtBQTdGWTtJQUFSLEtBQUssRUFBRTtzQ0FBVSxPQUFPO21EQUFDO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOztpREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3NDQUFZLGNBQWM7cURBQUM7QUFDekI7SUFBVCxNQUFNLEVBQUU7O29EQUF3QztBQUp4QyxrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsNG9GQUF5Qzs7S0FFNUMsQ0FBQzs2Q0E2RFcsVUFBVTtRQUNTLGNBQWM7R0E3RGpDLGtCQUFrQixDQThGOUI7U0E5Rlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0lwckNoYXJ0c30gZnJvbSAnLi4vZWNoYXJ0cy9pcHItY2hhcnRzJztcclxuXHJcbmZ1bmN0aW9uIG9mZnNldChjdXJFbGUsIHBhcmVudCkge1xyXG4gICAgbGV0IHRvdGFsTGVmdCA9IG51bGw7XHJcbiAgICBsZXQgdG90YWxUb3AgPSBudWxsO1xyXG4gICAgbGV0IHBhciA9IGN1ckVsZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAvLyDpppblhYjliqDoh6rlt7HmnKzouqvnmoTlt6blgY/np7vlkozkuIrlgY/np7tcclxuICAgIHRvdGFsTGVmdCArPSBjdXJFbGUub2Zmc2V0TGVmdDtcclxuICAgIHRvdGFsVG9wICs9IGN1ckVsZS5vZmZzZXRUb3A7XHJcbiAgICB3aGlsZSAocGFyICYmIHBhciAhPT0gcGFyZW50KSB7XHJcbiAgICAgICAgLy8g57Sv5Yqg54i257qn5Y+C54Wn54mp5pys6Lqr55qE5YGP56e7XHJcbiAgICAgICAgdG90YWxMZWZ0ICs9IHBhci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvdGFsVG9wICs9IHBhci5vZmZzZXRUb3A7XHJcbiAgICAgICAgcGFyID0gcGFyLm9mZnNldFBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogdG90YWxMZWZ0LFxyXG4gICAgICAgIHRvcDogdG90YWxUb3AsXHJcbiAgICB9O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaXByLXBhcmFncmFwaCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhcmFncmFwaC5jb21wb25lbnQuc3R5bCddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFyYWdyYXBoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgY29udGVudDogQ2F0YWxvZztcclxuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgQE91dHB1dCgpIHNjcm9sbEluID0gbmV3IEV2ZW50RW1pdHRlcjxDYXRhbG9nPigpO1xyXG4gICAgcGVyY2VudDogbnVtYmVyO1xyXG4gICAgZW50ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgb3V0ZXJfbG9jayA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBlbDogRWxlbWVudDtcclxuXHJcbiAgICB1cGRhdGVQZXJjZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzID0gdGhpcy5lbC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBjb25zdCBpbm5vY2VudE9mZnNldCA9IG9mZnNldChmb2N1cywgdGhpcy5jb250YWluZXIpLnRvcDtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgLSBpbm5vY2VudE9mZnNldDtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgLz0gZm9jdXMuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPiAwICYmIHRoaXMucGVyY2VudCA8IDEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9IHRoaXMucGVyY2VudCAqIDEwMCArICclJztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzIGNoYW5nZScsIHRoaXMuY29udGVudCwgdGhpcy5wZXJjZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDEgJiYgIXRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE91dFZpZXcoJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA8IDAgJiYgdGhpcy5lbnRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0VmlldygndXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbnRlcl9sb2NrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm91dGVyX2xvY2sgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQsICdzY3JvbGxJbnRvVmlldycpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSW4uZW1pdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbE91dFZpZXcoZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVudGVyX2xvY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm91dGVyX2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCwgJ3Njcm9sbE91dFZpZXcnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmVsID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVFY2hhcnRzKHdpZGdldCkge1xyXG4gICAgICAgIHN3aXRjaCAod2lkZ2V0LnRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RyZW5kJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCd0cmVuZCcsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICAgICAgY2FzZSAnZ2VvJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCdnZW8nLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JhbmsnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ3JhbmsnLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RlY2hkaXZpc2lvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygndGVjaF9kaXZpc2lvbicsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5jb250YWluZXIuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25zY3JvbGwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5sb2FkQ29udGVudCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=