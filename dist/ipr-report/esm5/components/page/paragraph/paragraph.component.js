import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, KeyValueDiffers, Output } from '@angular/core';
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
var ParagraphComponent = /** @class */ (function () {
    function ParagraphComponent(_el, reportsService, differs) {
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
    ParagraphComponent.prototype.tableFinalPage = function () {
        // console.log('表格到了最后一页！！');
    };
    ParagraphComponent.prototype.tableSwitchPage = function () {
        var os = offset(this.content._render.ref, this.container);
        this.container.scrollTo(os.left, os.top);
    };
    ParagraphComponent.prototype.ngOnInit = function () {
        this.customerDiffer = this.differs.find(this.content).create();
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
        // if (changes.content.currentValue) {
        //     console.log('current value', changes.content.currentValue);
        //     if (changes.content.currentValue.paragraphs) {
        //     }
        // }
    };
    ParagraphComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var contentDiffer = this.customerDiffer.diff(this.content);
        if (contentDiffer) {
            contentDiffer.forEachAddedItem(function (r) {
                var e_1, _a;
                if (r.key === 'paragraphs') {
                    try {
                        for (var _b = tslib_1.__values(_this.content.paragraphs), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var ppp = _c.value;
                            if (ppp.hasWidget && ppp.widgetID.widgetType === 4) {
                                ppp.widgetID._render = generateEcharts(ppp.widgetID);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            });
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
    return ParagraphComponent;
}());
export { ParagraphComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQWtCLGVBQWUsRUFHdEMsTUFBTSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNO0lBQzFCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztJQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUM5QixrQkFBa0I7SUFDbEIsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDL0IsUUFBUSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDN0IsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtRQUMxQixlQUFlO1FBQ2YsU0FBUyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDNUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7S0FDMUI7SUFDRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVM7UUFDZixHQUFHLEVBQUUsUUFBUTtLQUNoQixDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMs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QUFPO3VEQUFDO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOztxREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzBDQUFZLGNBQWM7eURBQUM7SUFDekI7UUFBVCxNQUFNLEVBQUU7O3dEQUF3QztJQUN2QztRQUFULE1BQU0sRUFBRTs7NkRBQXNEO0lBTHRELGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6Qix5ckdBQXlDOztTQUU1QyxDQUFDO2lEQXdGVyxVQUFVO1lBQ1MsY0FBYztZQUNyQixlQUFlO09BekYzQixrQkFBa0IsQ0FxSTlCO0lBQUQseUJBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQXJJWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIENvbXBvbmVudCwgRG9DaGVjayxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycyxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7SXByQ2hhcnRzfSBmcm9tICcuLi9lY2hhcnRzL2lwci1jaGFydHMnO1xyXG5pbXBvcnQge1dpZGdldENsaWNrRXZlbnR9IGZyb20gJy4uLy4uLy4uL19DbGFzc2VzL1dpZGdldENsaWNrRXZlbnQuY2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gb2Zmc2V0KGN1ckVsZSwgcGFyZW50KSB7XHJcbiAgICBsZXQgdG90YWxMZWZ0ID0gbnVsbDtcclxuICAgIGxldCB0b3RhbFRvcCA9IG51bGw7XHJcbiAgICBsZXQgcGFyID0gY3VyRWxlLm9mZnNldFBhcmVudDtcclxuICAgIC8vIOmmluWFiOWKoOiHquW3seacrOi6q+eahOW3puWBj+enu+WSjOS4iuWBj+enu1xyXG4gICAgdG90YWxMZWZ0ICs9IGN1ckVsZS5vZmZzZXRMZWZ0O1xyXG4gICAgdG90YWxUb3AgKz0gY3VyRWxlLm9mZnNldFRvcDtcclxuICAgIHdoaWxlIChwYXIgJiYgcGFyICE9PSBwYXJlbnQpIHtcclxuICAgICAgICAvLyDntK/liqDniLbnuqflj4LnhafnianmnKzouqvnmoTlgY/np7tcclxuICAgICAgICB0b3RhbExlZnQgKz0gcGFyLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG90YWxUb3AgKz0gcGFyLm9mZnNldFRvcDtcclxuICAgICAgICBwYXIgPSBwYXIub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiB0b3RhbExlZnQsXHJcbiAgICAgICAgdG9wOiB0b3RhbFRvcCxcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRWNoYXJ0cyh3aWRnZXQpOiBJcHJDaGFydHMge1xyXG4gICAgc3dpdGNoICh3aWRnZXQudGVtcGxhdGUpIHtcclxuICAgICAgICBjYXNlICd0cmVuZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSXByQ2hhcnRzKCd0cmVuZCcsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICBjYXNlICdnZW8nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygnZ2VvJywgd2lkZ2V0LnJhd0RhdGEpO1xyXG4gICAgICAgIGNhc2UgJ3JhbmsnOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygncmFuaycsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgICAgICBjYXNlICd0ZWNoZGl2aXNpb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IElwckNoYXJ0cygndGVjaF9kaXZpc2lvbicsIHdpZGdldC5yYXdEYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2lwci1wYXJhZ3JhcGgnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhcmFncmFwaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYXJhZ3JhcGguY29tcG9uZW50LnN0eWwnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcmFncmFwaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrIHtcclxuICAgIEBJbnB1dCgpIGNvbnRlbnQ6IENhdGFsb2c7XHJcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIEBPdXRwdXQoKSBzY3JvbGxJbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZz4oKTtcclxuICAgIEBPdXRwdXQoKSB3aWRnZXRPbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxXaWRnZXRDbGlja0V2ZW50PigpO1xyXG4gICAgcGVyY2VudDogbnVtYmVyO1xyXG4gICAgZW50ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgb3V0ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXN0b21lckRpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBhbnk+O1xyXG5cclxuICAgIHB1YmxpYyBlbDogRWxlbWVudDtcclxuXHJcbiAgICB0YWJsZU1hcCA9IHtcclxuICAgICAgICBwdWJsaWNhdGlvbl9udW1iZXI6ICfkuJPliKnlj7cnLFxyXG4gICAgICAgIHRpdGxlOiAn5LiT5Yip5ZCNJyxcclxuICAgICAgICBzdGFuZGFyZF9hcHBsaWNhbnRfc3RyOiAn55Sz6K+35Lq6JyxcclxuICAgICAgICBhcHBsaWNhdGlvbl9kYXRlOiAn55Sz6K+35pel5pyfJyxcclxuICAgICAgICBjdXJyZW50X2xlZ2FsX3N0YXR1czogJ+eKtuaAgScsXHJcbiAgICAgICAgaW1wb3J0YW5jZV9yZWFzb246ICfph43opoHljp/lm6AnXHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZVBlcmNlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgZm9jdXMgPSB0aGlzLmVsLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIGNvbnN0IGlubm9jZW50T2Zmc2V0ID0gb2Zmc2V0KGZvY3VzLCB0aGlzLmNvbnRhaW5lcikudG9wO1xyXG4gICAgICAgIHRoaXMucGVyY2VudCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCArIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvcCAtIGlubm9jZW50T2Zmc2V0O1xyXG4gICAgICAgIHRoaXMucGVyY2VudCAvPSBmb2N1cy5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25zY3JvbGwoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQZXJjZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDAgJiYgdGhpcy5wZXJjZW50IDwgMSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW50ZXJfbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wZXJjZW50ICogMTAwICsgJyUnO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXMgY2hhbmdlJywgdGhpcy5jb250ZW50LCB0aGlzLnBlcmNlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50ID4gMSAmJiAhdGhpcy5vdXRlcl9sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0VmlldygnZG93bicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZXJjZW50IDwgMCAmJiB0aGlzLmVudGVyX2xvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxPdXRWaWV3KCd1cCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxJbnRvVmlldygpIHtcclxuICAgICAgICB0aGlzLmVudGVyX2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3V0ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGVudCwgJ3Njcm9sbEludG9WaWV3Jyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbi5lbWl0KHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsT3V0VmlldyhkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZW50ZXJfbG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3V0ZXJfbG9jayA9IHRydWU7XHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZW50LCAnc2Nyb2xsT3V0VmlldycpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZGdldENsaWNrKHdpZGdldE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcGFzcyA9IG5ldyBXaWRnZXRDbGlja0V2ZW50KCk7XHJcbiAgICAgICAgcGFzcy5zb3VyY2VfZXZlbnQgPSBldmVudDtcclxuICAgICAgICBwYXNzLndpZGdldF9uYW1lID0gd2lkZ2V0TmFtZTtcclxuICAgICAgICB0aGlzLndpZGdldE9uQ2xpY2suZW1pdChwYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZUZpbmFsUGFnZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn6KGo5qC85Yiw5LqG5pyA5ZCO5LiA6aG177yB77yBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGVTd2l0Y2hQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IG9zID0gb2Zmc2V0KHRoaXMuY29udGVudC5fcmVuZGVyLnJlZiwgdGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNjcm9sbFRvKG9zLmxlZnQsIG9zLnRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbCA9IF9lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJEaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh0aGlzLmNvbnRlbnQpLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgKGNoYW5nZXMuY29udGFpbmVyLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm9uc2Nyb2xsKCk7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLm91dGVyX2xvY2spIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdjb250ZW50IGNoYW5nZSAxMjMnLCBjaGFuZ2VzLCB0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5sb2FkQ29udGVudCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5jb250ZW50LmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY3VycmVudCB2YWx1ZScsIGNoYW5nZXMuY29udGVudC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2hhbmdlcy5jb250ZW50LmN1cnJlbnRWYWx1ZS5wYXJhZ3JhcGhzKSB7XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjb250ZW50RGlmZmVyID0gdGhpcy5jdXN0b21lckRpZmZlci5kaWZmKHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnREaWZmZXIpIHtcclxuICAgICAgICAgICAgY29udGVudERpZmZlci5mb3JFYWNoQWRkZWRJdGVtKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIua2V5ID09PSAncGFyYWdyYXBocycpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBwcCBvZiB0aGlzLmNvbnRlbnQucGFyYWdyYXBocykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHBwLmhhc1dpZGdldCAmJiBwcHAud2lkZ2V0SUQud2lkZ2V0VHlwZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHBwLndpZGdldElELl9yZW5kZXIgPSBnZW5lcmF0ZUVjaGFydHMocHBwLndpZGdldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=