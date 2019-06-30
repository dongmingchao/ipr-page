import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
import { IprCharts } from '../echarts/ipr-charts';
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
        if (changes.container.currentValue) {
            this.onscroll();
            if (this.outer_lock) {
                this.reportsService.loadContent(this.content);
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
    return ParagraphComponent;
}());
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRWhELFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQU9EO0lBMkRJLDRCQUNJLEdBQWUsRUFDUCxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF6RGhDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRWpELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQXdEZixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQXJERCwwQ0FBYSxHQUFiO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUN4QyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDdkYsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN6QjtZQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNyRCwyREFBMkQ7U0FDOUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsMkNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFFBQVEsU0FBUyxFQUFFO1lBQ2YsS0FBSyxJQUFJO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDbkMsTUFBTTtTQUNiO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFTRCw0Q0FBZSxHQUFmLFVBQWdCLE1BQU07UUFDbEIsUUFBUSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3JCLEtBQUssT0FBTztnQkFDUixPQUFPLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsS0FBSyxLQUFLO2dCQUNOLE9BQU8sSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELEtBQUssY0FBYztnQkFDZixPQUFPLElBQUksU0FBUyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0Q7SUFDTCxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw0Q0FBZSxHQUFmO0lBQ0EsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRDtTQUNKO0lBQ0wsQ0FBQztJQTNGUTtRQUFSLEtBQUssRUFBRTswQ0FBVSxPQUFPO3VEQUFDO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOztxREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzBDQUFZLGNBQWM7eURBQUM7SUFDekI7UUFBVCxNQUFNLEVBQUU7O3dEQUF3QztJQUp4QyxrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsNG9GQUF5Qzs7U0FFNUMsQ0FBQztpREE2RFcsVUFBVTtZQUNTLGNBQWM7T0E3RGpDLGtCQUFrQixDQThGOUI7SUFBRCx5QkFBQztDQUFBLEFBOUZELElBOEZDO1NBOUZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJcHJDaGFydHN9IGZyb20gJy4uL2VjaGFydHMvaXByLWNoYXJ0cyc7XHJcblxyXG5mdW5jdGlvbiBvZmZzZXQoY3VyRWxlLCBwYXJlbnQpIHtcclxuICAgIGxldCB0b3RhbExlZnQgPSBudWxsO1xyXG4gICAgbGV0IHRvdGFsVG9wID0gbnVsbDtcclxuICAgIGxldCBwYXIgPSBjdXJFbGUub2Zmc2V0UGFyZW50O1xyXG4gICAgLy8g6aaW5YWI5Yqg6Ieq5bex5pys6Lqr55qE5bem5YGP56e75ZKM5LiK5YGP56e7XHJcbiAgICB0b3RhbExlZnQgKz0gY3VyRWxlLm9mZnNldExlZnQ7XHJcbiAgICB0b3RhbFRvcCArPSBjdXJFbGUub2Zmc2V0VG9wO1xyXG4gICAgd2hpbGUgKHBhciAmJiBwYXIgIT09IHBhcmVudCkge1xyXG4gICAgICAgIC8vIOe0r+WKoOeItue6p+WPgueFp+eJqeacrOi6q+eahOWBj+enu1xyXG4gICAgICAgIHRvdGFsTGVmdCArPSBwYXIub2Zmc2V0TGVmdDtcclxuICAgICAgICB0b3RhbFRvcCArPSBwYXIub2Zmc2V0VG9wO1xyXG4gICAgICAgIHBhciA9IHBhci5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IHRvdGFsTGVmdCxcclxuICAgICAgICB0b3A6IHRvdGFsVG9wLFxyXG4gICAgfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci1wYXJhZ3JhcGgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhcmFncmFwaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYXJhZ3JhcGguY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcmFncmFwaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGNvbnRlbnQ6IENhdGFsb2c7XHJcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIEBPdXRwdXQoKSBzY3JvbGxJbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZz4oKTtcclxuICAgIHBlcmNlbnQ6IG51bWJlcjtcclxuICAgIGVudGVyX2xvY2sgPSBmYWxzZTtcclxuICAgIG91dGVyX2xvY2sgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnQ7XHJcblxyXG4gICAgdXBkYXRlUGVyY2VudCgpIHtcclxuICAgICAgICBjb25zdCBmb2N1cyA9IHRoaXMuZWwuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgY29uc3QgaW5ub2NlbnRPZmZzZXQgPSBvZmZzZXQoZm9jdXMsIHRoaXMuY29udGFpbmVyKS50b3A7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0ICsgdGhpcy5jb250YWluZXIuc2Nyb2xsVG9wIC0gaW5ub2NlbnRPZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50IC89IGZvY3VzLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBvbnNjcm9sbCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBlcmNlbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID4gMCAmJiB0aGlzLnBlcmNlbnQgPCAxKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbnRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLnBlcmNlbnQgKiAxMDAgKyAnJSc7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb2N1cyBjaGFuZ2UnLCB0aGlzLmNvbnRlbnQsIHRoaXMucGVyY2VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPiAxICYmICF0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxPdXRWaWV3KCdkb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPCAwICYmIHRoaXMuZW50ZXJfbG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE91dFZpZXcoJ3VwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9WaWV3KCkge1xyXG4gICAgICAgIHRoaXMuZW50ZXJfbG9jayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vdXRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50LCAnc2Nyb2xsSW50b1ZpZXcnKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEluLmVtaXQodGhpcy5jb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxPdXRWaWV3KGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbnRlcl9sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vdXRlcl9sb2NrID0gdHJ1ZTtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlICd1cCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQsICdzY3JvbGxPdXRWaWV3Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IF9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRWNoYXJ0cyh3aWRnZXQpIHtcclxuICAgICAgICBzd2l0Y2ggKHdpZGdldC50ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlICd0cmVuZCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygndHJlbmQnLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dlbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygnZ2VvJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgICAgICBjYXNlICdyYW5rJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCdyYW5rJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgICAgICBjYXNlICd0ZWNoZGl2aXNpb24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ3RlY2hfZGl2aXNpb24nLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY29udGFpbmVyLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uc2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UubG9hZENvbnRlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19