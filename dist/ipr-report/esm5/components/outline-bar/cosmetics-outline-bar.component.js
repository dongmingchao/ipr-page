import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { openClose } from './animations';
var CosmeticsOutlineBarComponent = /** @class */ (function () {
    function CosmeticsOutlineBarComponent() {
        this.open = true;
        this.level = 0;
        this.pointClick = new EventEmitter();
        this.nextLevel = {
            selected: null,
        };
    }
    CosmeticsOutlineBarComponent.prototype.passSelect = function (item) {
        console.log('next level select', item);
        this.nextLevel.selected = item[0];
        item.push(this.selected);
        this.pointClick.emit(item);
    };
    CosmeticsOutlineBarComponent.prototype.getLevelCss = function () {
        return "level-" + this.level;
    };
    CosmeticsOutlineBarComponent.prototype.onselect = function (item) {
        // console.log('on select', item);
        this.selected = item;
        this.isOpen = 'open';
        this.pointClick.emit([item]);
        // const i = this.catalog.indexOf(item);
        // for (let j = 0; j < this.catalog.length; j++) {
        //     const each = this.catalog[j];
        //     each.style.height = j < i ? '100%' : '0';
        // }
        // this.clearProgress(item);
        // if (this.nextLevel.selected)
        //     this.clearProgress(this.nextLevel.selected);
    };
    CosmeticsOutlineBarComponent.prototype.clearProgress = function (item) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(item.child_catalog), _c = _b.next(); !_c.done; _c = _b.next()) {
                var each = _c.value;
                each.style.height = '0';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    CosmeticsOutlineBarComponent.prototype.expand = function (item) {
        this.onselect(item);
    };
    CosmeticsOutlineBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.open) {
            this.isOpen = 'open';
        }
        else {
            this.isOpen = 'closed';
        }
        setTimeout(function (e) {
            console.log('catalogs', _this.catalog);
        }, 1000);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CosmeticsOutlineBarComponent.prototype, "catalog", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CosmeticsOutlineBarComponent.prototype, "open", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CosmeticsOutlineBarComponent.prototype, "level", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CosmeticsOutlineBarComponent.prototype, "pointClick", void 0);
    CosmeticsOutlineBarComponent = tslib_1.__decorate([
        Component({
            selector: 'ngx-cosmetics-outline-bar',
            template: "<div *ngIf=\"catalog;\" class=\"cover\">\r\n    <ng-container *ngFor=\"let item of catalog;index as n\">\r\n        <button (click)=\"expand(item)\"\r\n                [ngClass]=\"getLevelCss()\"\r\n                class=\"circle spin circle_b\"></button>\r\n        <div class=\"botLine\">\r\n            <div></div>\r\n            <div class=\"progress\" [style.height]=\"item.style.height\"></div>\r\n        </div>\r\n        <ngx-cosmetics-outline-bar\r\n                [@openClose]=\"isOpen\"\r\n                [level]=\"level+1\"\r\n                *ngIf=\"item === selected && item.child_catalog\"\r\n                (pointClick)=\"passSelect($event)\"\r\n                [catalog]=\"item.child_catalog\"></ngx-cosmetics-outline-bar>\r\n    </ng-container>\r\n</div>\r\n\r\n<!--nbTooltip=\"{{item.title}}\" nbTooltipPlacement=\"right\"-->\r\n",
            animations: openClose,
            styles: [":host{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around;height:100%;margin:0 .5rem}.cover{-webkit-box-flex:.5;flex-grow:.5;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}button.circle{background-color:#0077b9;border:3px solid #acacac;border-radius:100%;width:24px;height:24px;margin:auto;z-index:1}.botLine{-webkit-box-flex:1;flex-grow:1;position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.botLine div{width:.9rem;height:calc(100% + 10px);position:relative;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.botLine.active div{background:#0077b9}.botLine .progress{position:absolute;background-color:red;-ms-grid-row-align:start;align-self:start}:host button.circle.spin.level-1{background-color:#00d77f;width:15px;height:18px;border:3px solid #acacac}:host button.circle.spin.level-2{background-color:#a1a1e5;width:12px;height:16px;border:2px solid #acacac}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CosmeticsOutlineBarComponent);
    return CosmeticsOutlineBarComponent;
}());
export { CosmeticsOutlineBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVN2QztJQWtESTtRQWhEUyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSXJELGNBQVMsR0FFTDtZQUNBLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUF1Q0YsQ0FBQztJQXJDRCxpREFBVSxHQUFWLFVBQVcsSUFBZTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNJLE9BQU8sV0FBUyxJQUFJLENBQUMsS0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFUywrQ0FBUSxHQUFsQixVQUFtQixJQUFhO1FBQzVCLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0Isd0NBQXdDO1FBQ3hDLGtEQUFrRDtRQUNsRCxvQ0FBb0M7UUFDcEMsZ0RBQWdEO1FBQ2hELElBQUk7UUFDSiw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLG1EQUFtRDtJQUN2RCxDQUFDO0lBRUQsb0RBQWEsR0FBYixVQUFjLElBQWE7OztZQUN2QixLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQzNCOzs7Ozs7Ozs7SUFDTCxDQUFDO0lBRU0sNkNBQU0sR0FBYixVQUFjLElBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBS0QsK0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FBRTthQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RSxVQUFVLENBQUMsVUFBQSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUF6RFE7UUFBUixLQUFLLEVBQUU7O2lFQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs7OERBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTs7K0RBQVc7SUFDVDtRQUFULE1BQU0sRUFBRTs7b0VBQTRDO0lBSjVDLDRCQUE0QjtRQVB4QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLGcyQkFBcUQ7WUFFckQsVUFBVSxFQUFFLFNBQVM7O1NBQ3hCLENBQUM7O09BRVcsNEJBQTRCLENBMkR4QztJQUFELG1DQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtvcGVuQ2xvc2V9IGZyb20gJy4vYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWNvc21ldGljcy1vdXRsaW5lLWJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBvcGVuQ2xvc2UsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBjYXRhbG9nOiBDYXRhbG9nW107XHJcbiAgICBASW5wdXQoKSBvcGVuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxldmVsID0gMDtcclxuICAgIEBPdXRwdXQoKSBwb2ludENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDYXRhbG9nW10+KCk7XHJcblxyXG4gICAgc2VsZWN0ZWQ6IENhdGFsb2c7XHJcbiAgICBpc09wZW46IHN0cmluZztcclxuICAgIG5leHRMZXZlbDoge1xyXG4gICAgICAgIHNlbGVjdGVkOiBDYXRhbG9nLFxyXG4gICAgfSA9IHtcclxuICAgICAgICBzZWxlY3RlZDogbnVsbCxcclxuICAgIH07XHJcblxyXG4gICAgcGFzc1NlbGVjdChpdGVtOiBDYXRhbG9nW10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmV4dCBsZXZlbCBzZWxlY3QnLCBpdGVtKTtcclxuICAgICAgICB0aGlzLm5leHRMZXZlbC5zZWxlY3RlZCA9IGl0ZW1bMF07XHJcbiAgICAgICAgaXRlbS5wdXNoKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMucG9pbnRDbGljay5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExldmVsQ3NzKCkge1xyXG4gICAgICAgIHJldHVybiBgbGV2ZWwtJHt0aGlzLmxldmVsfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uc2VsZWN0KGl0ZW06IENhdGFsb2cpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb24gc2VsZWN0JywgaXRlbSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5pc09wZW4gPSAnb3Blbic7XHJcbiAgICAgICAgdGhpcy5wb2ludENsaWNrLmVtaXQoW2l0ZW1dKTtcclxuICAgICAgICAvLyBjb25zdCBpID0gdGhpcy5jYXRhbG9nLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNhdGFsb2cubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgZWFjaCA9IHRoaXMuY2F0YWxvZ1tqXTtcclxuICAgICAgICAvLyAgICAgZWFjaC5zdHlsZS5oZWlnaHQgPSBqIDwgaSA/ICcxMDAlJyA6ICcwJztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5jbGVhclByb2dyZXNzKGl0ZW0pO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm5leHRMZXZlbC5zZWxlY3RlZClcclxuICAgICAgICAvLyAgICAgdGhpcy5jbGVhclByb2dyZXNzKHRoaXMubmV4dExldmVsLnNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclByb2dyZXNzKGl0ZW06IENhdGFsb2cpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgIGVhY2guc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhwYW5kKGl0ZW06IENhdGFsb2cpIHtcclxuICAgICAgICB0aGlzLm9uc2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHsgdGhpcy5pc09wZW4gPSAnb3Blbic7IH0gZWxzZSB7IHRoaXMuaXNPcGVuID0gJ2Nsb3NlZCc7IH1cclxuICAgICAgICBzZXRUaW1lb3V0KGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2F0YWxvZ3MnLCB0aGlzLmNhdGFsb2cpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==