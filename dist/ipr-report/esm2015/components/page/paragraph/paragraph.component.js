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
            current_legal_status: '状态',
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
    tableSort(table) {
        table.updateShow();
        table.setPage(0);
    }
    tableFilter(table) {
        table.updateShow();
        table.setPage(0);
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
        template: "<div style=\"width: 95%\">\r\n    <div [attr.id]=\"'widget' + content.id\" class=\"paragraph\">\r\n        <div class=\"subtitle\">\r\n            <h5>{{content.title}}</h5>\r\n        </div>\r\n        <ipr-paragraph-placeholder *ngIf=\"!content.paragraphs\"></ipr-paragraph-placeholder>\r\n        <div [attr.id]=\"'widget' + ppp.id\" *ngFor=\"let ppp of content.paragraphs;\">\r\n            <div class=\"content\" [ngClass]=\"{row: !ppp.widgetVertical}\" *ngIf=\"ppp.hasWidget\">\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\"> <!-- \u6C34\u5E73\u6392\u5217 -->\r\n                    <!--                    <div>widget id{{ppp.widgetID.id}}</div>-->\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n                <div class=\"col-md-6 col-lg-6 col-sm-6\">\r\n                    <img *ngIf=\"ppp.widgetID.widgetType===0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType==1\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID.options\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===4\"\r\n                         style=\"width:100%;height:500px\"\r\n                         class=\"echart\"\r\n                         echarts\r\n                         [theme]=\"'walden'\"\r\n                         [options]=\"ppp.widgetID._render\"\r\n                    ></div>\r\n                    <div *ngIf=\"ppp.widgetID.widgetType===5\">\r\n                        <ipr-table #patTable\r\n                                   [tableHeaderMap]=\"tableMap\"\r\n                                   (rowClick)=\"widgetClick('table-row', $event)\"\r\n                                   (whenFinalPage)=\"tableFinalPage()\"\r\n                                   (whenSwitchPage)=\"tableSwitchPage()\"\r\n                                   (whenSorted)=\"tableSort(patTable)\"\r\n                                   (whenFiltered)=\"tableFilter(patTable)\"\r\n                                   [data]=\"ppp.widgetID.rawData\"></ipr-table>\r\n                    </div>\r\n                </div>\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                <!--&lt;!&ndash;<div>widget id {{ppp.widgetID.id}}</div>&ndash;&gt;-->\r\n                <!--<p>{{ppp.content}}</p>-->\r\n                <!--</div>-->\r\n                <!--<div *ngIf=\"ppp.widgetVertical\" class=\"col-md-12 col-lg-12 col-sm-12\">-->\r\n                <!--<img *ngIf=\"ppp.widgetID.widgetType==0\" style=\"width:100%\" [src]=\"ppp.widgetID.imageUrl\"/>-->\r\n\r\n                <!--<div *ngIf=\"ppp.widgetID.widgetType==1\" style=\"width:100%;height:500px\" echarts [theme]=\"'walden'\"-->\r\n                <!--[options]=\"ppp.widgetID.options\" class=\"echart\"></div>-->\r\n                <!--</div>-->\r\n            </div>\r\n            <div class=\"row content\" *ngIf=\"!ppp.hasWidget\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                    <p>{{ppp.content}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</div>\r\n",
        styles: [".subtitle{margin-bottom:1rem;font-weight:600;font-family:noto sans-serif;padding-top:1rem}:host(ipr-paragraph) .paragraph{margin-left:2rem;overflow-wrap:break-word}:host(ipr-paragraph) .paragraph .row{display:-webkit-box;display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}:host(ipr-paragraph) .subtitle h5{font-size:1.5rem;color:#0077b9;font-weight:600}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle{margin-bottom:0;font-weight:400}:host(ipr-paragraph) :host-context(ngx-cosmetics-pageipr-paragraph) .subtitle h5{font-size:1rem}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        ReportsService,
        KeyValueDiffers])
], ParagraphComponent);
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQWtCLGVBQWUsRUFHdEMsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRzFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMs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QUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3hEO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Q0FFSixDQUFBO0FBOUlZO0lBQVIsS0FBSyxFQUFFO3NDQUFVLE9BQU87bURBQUM7QUFDakI7SUFBUixLQUFLLEVBQUU7O2lEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7c0NBQVksY0FBYztxREFBQztBQUN6QjtJQUFULE1BQU0sRUFBRTs7b0RBQXdDO0FBQ3ZDO0lBQVQsTUFBTSxFQUFFOzt5REFBc0Q7QUFMdEQsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHUyR0FBeUM7O0tBRTVDLENBQUM7NkNBa0dXLFVBQVU7UUFDUyxjQUFjO1FBQ3JCLGVBQWU7R0FuRzNCLGtCQUFrQixDQStJOUI7U0EvSVksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDb21wb25lbnQsIERvQ2hlY2ssXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0lwckNoYXJ0c30gZnJvbSAnLi4vZWNoYXJ0cy9pcHItY2hhcnRzJztcclxuaW1wb3J0IHtXaWRnZXRDbGlja0V2ZW50fSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9XaWRnZXRDbGlja0V2ZW50LmNsYXNzJztcclxuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbmZ1bmN0aW9uIG9mZnNldChjdXJFbGUsIHBhcmVudCkge1xyXG4gICAgbGV0IHRvdGFsTGVmdCA9IG51bGw7XHJcbiAgICBsZXQgdG90YWxUb3AgPSBudWxsO1xyXG4gICAgbGV0IHBhciA9IGN1ckVsZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAvLyDpppblhYjliqDoh6rlt7HmnKzouqvnmoTlt6blgY/np7vlkozkuIrlgY/np7tcclxuICAgIHRvdGFsTGVmdCArPSBjdXJFbGUub2Zmc2V0TGVmdDtcclxuICAgIHRvdGFsVG9wICs9IGN1ckVsZS5vZmZzZXRUb3A7XHJcbiAgICB3aGlsZSAocGFyICYmIHBhciAhPT0gcGFyZW50KSB7XHJcbiAgICAgICAgLy8g57Sv5Yqg54i257qn5Y+C54Wn54mp5pys6Lqr55qE5YGP56e7XHJcbiAgICAgICAgdG90YWxMZWZ0ICs9IHBhci5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvdGFsVG9wICs9IHBhci5vZmZzZXRUb3A7XHJcbiAgICAgICAgcGFyID0gcGFyLm9mZnNldFBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogdG90YWxMZWZ0LFxyXG4gICAgICAgIHRvcDogdG90YWxUb3AsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUVjaGFydHMod2lkZ2V0KTogSXByQ2hhcnRzIHtcclxuICAgIHN3aXRjaCAod2lkZ2V0LnRlbXBsYXRlKSB7XHJcbiAgICAgICAgY2FzZSAndHJlbmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygndHJlbmQnLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgY2FzZSAnZ2VvJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ2dlbycsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICBjYXNlICdyYW5rJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ3JhbmsnLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICAgICAgY2FzZSAndGVjaGRpdmlzaW9uJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJcHJDaGFydHMoJ3RlY2hfZGl2aXNpb24nLCB3aWRnZXQucmF3RGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcGFyYWdyYXBoJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXJhZ3JhcGguY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcGFyYWdyYXBoLmNvbXBvbmVudC5zdHlsJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJhZ3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgRG9DaGVjayB7XHJcbiAgICBASW5wdXQoKSBjb250ZW50OiBDYXRhbG9nO1xyXG4gICAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBAT3V0cHV0KCkgc2Nyb2xsSW4gPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2c+KCk7XHJcbiAgICBAT3V0cHV0KCkgd2lkZ2V0T25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8V2lkZ2V0Q2xpY2tFdmVudD4oKTtcclxuICAgIHBlcmNlbnQ6IG51bWJlcjtcclxuICAgIGVudGVyX2xvY2sgPSBmYWxzZTtcclxuICAgIG91dGVyX2xvY2sgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VzdG9tZXJEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgYW55PjtcclxuXHJcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnQ7XHJcblxyXG4gICAgdGFibGVNYXAgPSB7XHJcbiAgICAgICAgcHVibGljYXRpb25fbnVtYmVyOiAn5LiT5Yip5Y+3JyxcclxuICAgICAgICB0aXRsZTogJ+S4k+WIqeWQjScsXHJcbiAgICAgICAgc3RhbmRhcmRfYXBwbGljYW50X3N0cjogJ+eUs+ivt+S6uicsXHJcbiAgICAgICAgYXBwbGljYXRpb25fZGF0ZTogJ+eUs+ivt+aXpeacnycsXHJcbiAgICAgICAgY3VycmVudF9sZWdhbF9zdGF0dXM6ICfnirbmgIEnLFxyXG4gICAgICAgIGltcG9ydGFuY2VfcmVhc29uOiAn6YeN6KaB5Y6f5ZugJ1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVQZXJjZW50KCkge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzID0gdGhpcy5lbC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICBjb25zdCBpbm5vY2VudE9mZnNldCA9IG9mZnNldChmb2N1cywgdGhpcy5jb250YWluZXIpLnRvcDtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQgKyB0aGlzLmNvbnRhaW5lci5zY3JvbGxUb3AgLSBpbm5vY2VudE9mZnNldDtcclxuICAgICAgICB0aGlzLnBlcmNlbnQgLz0gZm9jdXMuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uc2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGVyY2VudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlcmNlbnQgPiAwICYmIHRoaXMucGVyY2VudCA8IDEpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVudGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9IHRoaXMucGVyY2VudCAqIDEwMCArICclJztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzIGNoYW5nZScsIHRoaXMuY29udGVudCwgdGhpcy5wZXJjZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDEgJiYgIXRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE91dFZpZXcoJ2Rvd24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA8IDAgJiYgdGhpcy5lbnRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0VmlldygndXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbnRlcl9sb2NrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm91dGVyX2xvY2sgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRlbnQsICdzY3JvbGxJbnRvVmlldycpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsSW4uZW1pdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbE91dFZpZXcoZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmVudGVyX2xvY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm91dGVyX2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCwgJ3Njcm9sbE91dFZpZXcnKTtcclxuICAgIH1cclxuXHJcbiAgICB3aWRnZXRDbGljayh3aWRnZXROYW1lLCBldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhc3MgPSBuZXcgV2lkZ2V0Q2xpY2tFdmVudCgpO1xyXG4gICAgICAgIHBhc3Muc291cmNlX2V2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgcGFzcy53aWRnZXRfbmFtZSA9IHdpZGdldE5hbWU7XHJcbiAgICAgICAgdGhpcy53aWRnZXRPbkNsaWNrLmVtaXQocGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVGaW5hbFBhZ2UoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+ihqOagvOWIsOS6huacgOWQjuS4gOmhte+8ge+8gScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlU3dpdGNoUGFnZSgpIHtcclxuICAgICAgICBjb25zdCBvcyA9IG9mZnNldCh0aGlzLmNvbnRlbnQuX3JlbmRlci5yZWYsIHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zY3JvbGxUbyhvcy5sZWZ0LCBvcy50b3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYmxlU29ydCh0YWJsZTogVGFibGVDb21wb25lbnQpIHtcclxuICAgICAgICB0YWJsZS51cGRhdGVTaG93KCk7XHJcbiAgICAgICAgdGFibGUuc2V0UGFnZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZUZpbHRlcih0YWJsZTogVGFibGVDb21wb25lbnQpIHtcclxuICAgICAgICB0YWJsZS51cGRhdGVTaG93KCk7XHJcbiAgICAgICAgdGFibGUuc2V0UGFnZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBfZWw6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXBvcnRzU2VydmljZTogUmVwb3J0c1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmVsID0gX2VsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21lckRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMuY29udGVudCkuY3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5jb250YWluZXIuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMub25zY3JvbGwoKTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMub3V0ZXJfbG9jaykge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlbnQgY2hhbmdlIDEyMycsIGNoYW5nZXMsIHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmxvYWRDb250ZW50KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHZhbHVlJywgY2hhbmdlcy5jb250ZW50LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlLnBhcmFncmFwaHMpIHtcclxuXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnREaWZmZXIgPSB0aGlzLmN1c3RvbWVyRGlmZmVyLmRpZmYodGhpcy5jb250ZW50KTtcclxuICAgICAgICBpZiAoY29udGVudERpZmZlcikge1xyXG4gICAgICAgICAgICBjb250ZW50RGlmZmVyLmZvckVhY2hBZGRlZEl0ZW0ociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5rZXkgPT09ICdwYXJhZ3JhcGhzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHBwIG9mIHRoaXMuY29udGVudC5wYXJhZ3JhcGhzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcHAuaGFzV2lkZ2V0ICYmIHBwcC53aWRnZXRJRC53aWRnZXRUeXBlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcHAud2lkZ2V0SUQuX3JlbmRlciA9IGdlbmVyYXRlRWNoYXJ0cyhwcHAud2lkZ2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==