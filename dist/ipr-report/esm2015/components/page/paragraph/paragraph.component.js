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
        this.tableMap = {
            publication_number: '专利号',
            title: '专利名',
            standard_applicant_str: '申请人',
            application_date: '申请日期',
            status: '状态',
            importance_reason: '重要原因'
        };
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
    tableFinalPage() {
        // console.log('表格到了最后一页！！');
    }
    tableSwitchPage() {
        const os = offset(this.content._render.ref, this.container);
        this.container.scrollTo(os.left, os.top);
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
        template: "<div style=\"width: 95%\">\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <ipr-paragraph-placeholder *ngIf=\"!content.paragraphs\"></ipr-paragraph-placeholder>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <div class=\"content\" [ngClass]=\"{row: !ppp.widgetVertical}\" *ngIf=\"ppp.hasWidget\">\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n<!--                    <div>widget id{{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType===0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===4\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID._render\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===5\">\r\n                        <ipr-table\r\n                                [tableHeaderMap]=\"tableMap\"\r\n                                (rowClick)=\"widgetClick('table-row', $event)\"\r\n                                (whenFinalPage)=\"tableFinalPage()\"\r\n                                (whenSwitchPage)=\"tableSwitchPage()\"\r\n                                [data]=\"ppp.widgetID.rawData\"></ipr-table>\r\n                    </div>\r\n                </div>\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                    <!--&lt;!&ndash;<div>widget id {{ppp.widgetID.id}}</div>&ndash;&gt;-->\r\n                    <!--<p>{{ppp.content}}</p>-->\r\n                <!--</div>-->\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                    <!--<img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>-->\r\n\r\n                    <!--<div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"-->\r\n                         <!--[options]=\"ppp.widgetID.options\" class=\"echart\"></div>-->\r\n                <!--</div>-->\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
        styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:2rem;overflow-wrap:break-word}:host(ipr-paragraph) .paragraph .row{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        ReportsService,
        KeyValueDiffers])
], ParagraphComponent);
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQWtCLGVBQWUsRUFHdEMsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMs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O0lBQVQsTUFBTSxFQUFFOztvREFBd0M7QUFDdkM7SUFBVCxNQUFNLEVBQUU7O3lEQUFzRDtBQUx0RCxrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIseXJHQUF5Qzs7S0FFNUMsQ0FBQzs2Q0F3RlcsVUFBVTtRQUNTLGNBQWM7UUFDckIsZUFBZTtHQXpGM0Isa0JBQWtCLENBcUk5QjtTQXJJWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCwgRG9DaGVjayxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycyxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7SXByQ2hhcnRzfSBmcm9tICcuLi9lY2hhcnRzL2lwci1jaGFydHMnO1xyXG5pbXBvcnQge1dpZGdldENsaWNrRXZlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1dpZGdldENsaWNrRXZlbnQuY2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gb2Zmc2V0KGN1ckVsZSwgcGFyZW50KSB7XHJcbiAgICBsZXQgdG90YWxMZWZ0ID0gbnVsbDtcclxuICAgIGxldCB0b3RhbFRvcCA9IG51bGw7XHJcbiAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgIC8vIOmmluWFiOWKoOiHquW3seacrOi6q+eahOW3puWBj+enu+WSjOS4iuWBj+enu1xyXG4gICAgdG90YWxMZWZ0ICs9IGN1ckVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgIHdoaWxlIChwYXIgJiYgcGFyICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gcGFyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gcGFyLm9mZnNldFRvcDtcclxuICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiB0b3RhbExlZnQsXHJcbiAgICAgICAgdG9wOiB0b3RhbFRvcCxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRWNoYXJ0cyh3aWRnZXQpOiBJcHJDaGFydHMge1xyXG4gICAgc3dpdGNoICh3aWRnZXQudGVtcGxhdGUpIHtcclxuICAgICAgICBjYXNlICd0cmVuZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCd0cmVuZCcsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICBjYXNlICdnZW8nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygnZ2VvJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgIGNhc2UgJ3JhbmsnOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygncmFuaycsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICBjYXNlICd0ZWNoZGl2aXNpb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygndGVjaF9kaXZpc2lvbicsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci1wYXJhZ3JhcGgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhcmFncmFwaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYXJhZ3JhcGguY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcmFncmFwaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIEBJbnB1dCgpIGNvbnRlbnQ6IENhdGFsb2c7XHJcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIEBPdXRwdXQoKSBzY3JvbGxJbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZz4oKTtcclxuICAgIEBPdXRwdXQoKSB3aWRnZXRPbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxXaWRnZXRDbGlja0V2ZW50PigpO1xyXG4gICAgcGVyY2VudDogbnVtYmVyO1xyXG4gICAgZW50ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgb3V0ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXN0b21lckRpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBlbDogRWxlbWVudDtcclxuXHJcbiAgICB0YWJsZU1hcCA9IHtcclxuICAgICAgICBwdWJsaWNhdGlvbl9udW1iZXI6ICfkuJPliKnlj7cnLFxyXG4gICAgICAgIHRpdGxlOiAn5LiT5Yip5ZCNJyxcclxuICAgICAgICBzdGFuZGFyZF9hcHBsaWNhbnRfc3RyOiAn55Sz6K+35Lq6JyxcclxuICAgICAgICBhcHBsaWNhdGlvbl9kYXRlOiAn55Sz6K+35pel5pyfJyxcclxuICAgICAgICBzdGF0dXM6ICfnirbmgIEnLFxyXG4gICAgICAgIGltcG9ydGFuY2VfcmVhc29uOiAn6YeN6KaB5Y6f5ZugJ1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVQZXJjZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzID0gdGhpcy5lbC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBjb25zdCBpbm5vY2VudE9mZnNldCA9IG9mZnNldChmb2N1cywgdGhpcy5jb250YWluZXIpLnRvcDtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgLSBpbm5vY2VudE9mZnNldDtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgLz0gZm9jdXMuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPiAwICYmIHRoaXMucGVyY2VudCA8IDEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9IHRoaXMucGVyY2VudCAqIDEwMCArICclJztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzIGNoYW5nZScsIHRoaXMuY29udGVudCwgdGhpcy5wZXJjZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDEgJiYgIXRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE91dFZpZXcoJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA8IDAgJiYgdGhpcy5lbnRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0VmlldygndXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbnRlcl9sb2NrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm91dGVyX2xvY2sgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQsICdzY3JvbGxJbnRvVmlldycpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSW4uZW1pdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbE91dFZpZXcoZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVudGVyX2xvY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm91dGVyX2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCwgJ3Njcm9sbE91dFZpZXcnKTtcclxuICAgIH1cclxuXHJcbiAgICB3aWRnZXRDbGljayh3aWRnZXROYW1lLCBldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhc3MgPSBuZXcgV2lkZ2V0Q2xpY2tFdmVudCgpO1xyXG4gICAgICAgIHBhc3Muc291cmNlX2V2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgcGFzcy53aWRnZXRfbmFtZSA9IHdpZGdldE5hbWU7XHJcbiAgICAgICAgdGhpcy53aWRnZXRPbkNsaWNrLmVtaXQocGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVGaW5hbFBhZ2UoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+ihqOagvOWIsOS6huacgOWQjuS4gOmhte+8ge+8gScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlU3dpdGNoUGFnZSgpIHtcclxuICAgICAgICBjb25zdCBvcyA9IG9mZnNldCh0aGlzLmNvbnRlbnQuX3JlbmRlci5yZWYsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyhvcy5sZWZ0LCBvcy50b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIF9lbDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycyxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZWwgPSBfZWwubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb250ZW50KS5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmNvbnRhaW5lci5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5vbnNjcm9sbCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnY29udGVudCBjaGFuZ2UgMTIzJywgY2hhbmdlcywgdGhpcy5jb250ZW50KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UubG9hZENvbnRlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGNoYW5nZXMuY29udGVudC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnQgdmFsdWUnLCBjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyAgICAgaWYgKGNoYW5nZXMuY29udGVudC5jdXJyZW50VmFsdWUucGFyYWdyYXBocykge1xyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29udGVudERpZmZlciA9IHRoaXMuY3VzdG9tZXJEaWZmZXIuZGlmZih0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIGlmIChjb250ZW50RGlmZmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnREaWZmZXIuZm9yRWFjaEFkZGVkSXRlbShyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmtleSA9PT0gJ3BhcmFncmFwaHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcHAgb2YgdGhpcy5jb250ZW50LnBhcmFncmFwaHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBwcC5oYXNXaWRnZXQgJiYgcHBwLndpZGdldElELndpZGdldFR5cGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBwcC53aWRnZXRJRC5fcmVuZGVyID0gZ2VuZXJhdGVFY2hhcnRzKHBwcC53aWRnZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19