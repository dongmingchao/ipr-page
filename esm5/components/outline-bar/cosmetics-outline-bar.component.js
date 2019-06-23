/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { openClose } from './animations';
var CosmeticsOutlineBarComponent = /** @class */ (function () {
    function CosmeticsOutlineBarComponent() {
        this.open = true;
        this.pointClick = new EventEmitter();
        this.nextLevel = {
            selected: null,
        };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.passSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        console.log('next level select', item);
        this.nextLevel.selected = item[0];
        item.push(this.selected);
        this.pointClick.emit(item);
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.onselect = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.clearProgress = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
    /**
     * @param {?} item
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.expand = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onselect(item);
    };
    /**
     * @return {?}
     */
    CosmeticsOutlineBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.open) {
            this.isOpen = 'open';
        }
        else {
            this.isOpen = 'closed';
        }
        setTimeout((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            console.log('catalogs', _this.catalog);
        }), 1000);
    };
    CosmeticsOutlineBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-cosmetics-outline-bar',
                    template: "<ng-container *ngIf=\"catalog;\">\r\n    <ng-container *ngFor=\"let item of catalog;index as n\">\r\n        <button (click)=\"expand(item)\" class=\"circle spin circle_b\"></button>\r\n        <div class=\"botLine\">\r\n            <div></div>\r\n            <div class=\"progress\" [style.height]=\"item.style.height\"></div></div>\r\n        <ngx-cosmetics-outline-bar\r\n                [@openClose]=\"isOpen\"\r\n                *ngIf=\"item === selected && item.child_catalog\"\r\n                (pointClick)=\"passSelect($event)\"\r\n                [catalog]=\"item.child_catalog\" ></ngx-cosmetics-outline-bar>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!--nbTooltip=\"{{item.title}}\" nbTooltipPlacement=\"right\"-->\r\n",
                    animations: openClose,
                    styles: [":host{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}button.circle{background-color:#0077b9;border:3px solid #acacac;border-radius:100%;width:24px;height:24px;margin:auto;z-index:1}.botLine{-webkit-box-flex:1;flex-grow:1;position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.botLine div{width:5px;height:calc(100% + 10px);position:relative;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.botLine.active div{background:#0077b9}.botLine .progress{position:absolute;background-color:red;-ms-grid-row-align:start;align-self:start}:host(ngx-cosmetics-outline-barngx-cosmetics-outline-bar) button.circle.spin{background-color:#00d77f;width:15px;height:18px;border:3px solid #acacac}:host(ngx-cosmetics-outline-barngx-cosmetics-outline-barngx-cosmetics-outline-bar) button.circle.spin{background-color:#a1a1e5;width:12px;height:16px;border:2px solid #acacac}"]
                }] }
    ];
    /** @nocollapse */
    CosmeticsOutlineBarComponent.ctorParameters = function () { return []; };
    CosmeticsOutlineBarComponent.propDecorators = {
        catalog: [{ type: Input }],
        open: [{ type: Input }],
        pointClick: [{ type: Output }]
    };
    return CosmeticsOutlineBarComponent;
}());
export { CosmeticsOutlineBarComponent };
if (false) {
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.catalog;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.open;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.pointClick;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.selected;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.isOpen;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.nextLevel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFdkM7SUFvREk7UUEzQ1MsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNYLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSXJELGNBQVMsR0FFTDtZQUNBLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFtQ0YsQ0FBQzs7Ozs7SUFqQ0QsaURBQVU7Ozs7SUFBVixVQUFXLElBQWU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRVMsK0NBQVE7Ozs7O0lBQWxCLFVBQW1CLElBQWE7UUFDNUIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3Qix3Q0FBd0M7UUFDeEMsa0RBQWtEO1FBQ2xELG9DQUFvQztRQUNwQyxnREFBZ0Q7UUFDaEQsSUFBSTtRQUNKLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsbURBQW1EO0lBQ3ZELENBQUM7Ozs7O0lBRUQsb0RBQWE7Ozs7SUFBYixVQUFjLElBQWE7OztZQUN2QixLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEMsSUFBTSxJQUFJLFdBQUE7Z0JBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2FBQzNCOzs7Ozs7Ozs7SUFDTCxDQUFDOzs7OztJQUVNLDZDQUFNOzs7O0lBQWIsVUFBYyxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUtELCtDQUFROzs7SUFBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FBRTthQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FBRTtRQUN6RSxVQUFVOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7O2dCQTVESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsOHVCQUFxRDtvQkFFckQsVUFBVSxFQUFFLFNBQVM7O2lCQUN4Qjs7Ozs7MEJBR0ksS0FBSzt1QkFDTCxLQUFLOzZCQUNMLE1BQU07O0lBbURYLG1DQUFDO0NBQUEsQUE3REQsSUE2REM7U0F0RFksNEJBQTRCOzs7SUFDckMsK0NBQTRCOztJQUM1Qiw0Q0FBcUI7O0lBQ3JCLGtEQUFxRDs7SUFFckQsZ0RBQWtCOztJQUNsQiw4Q0FBZTs7SUFDZixpREFJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7b3BlbkNsb3NlfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1jb3NtZXRpY3Mtb3V0bGluZS1iYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgYW5pbWF0aW9uczogb3BlbkNsb3NlLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvc21ldGljc091dGxpbmVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgY2F0YWxvZzogQ2F0YWxvZ1tdO1xyXG4gICAgQElucHV0KCkgb3BlbiA9IHRydWU7XHJcbiAgICBAT3V0cHV0KCkgcG9pbnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZ1tdPigpO1xyXG5cclxuICAgIHNlbGVjdGVkOiBDYXRhbG9nO1xyXG4gICAgaXNPcGVuOiBzdHJpbmc7XHJcbiAgICBuZXh0TGV2ZWw6IHtcclxuICAgICAgICBzZWxlY3RlZDogQ2F0YWxvZyxcclxuICAgIH0gPSB7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIHBhc3NTZWxlY3QoaXRlbTogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25leHQgbGV2ZWwgc2VsZWN0JywgaXRlbSk7XHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWwuc2VsZWN0ZWQgPSBpdGVtWzBdO1xyXG4gICAgICAgIGl0ZW0ucHVzaCh0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLnBvaW50Q2xpY2suZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25zZWxlY3QoaXRlbTogQ2F0YWxvZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbiBzZWxlY3QnLCBpdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9ICdvcGVuJztcclxuICAgICAgICB0aGlzLnBvaW50Q2xpY2suZW1pdChbaXRlbV0pO1xyXG4gICAgICAgIC8vIGNvbnN0IGkgPSB0aGlzLmNhdGFsb2cuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0YWxvZy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBlYWNoID0gdGhpcy5jYXRhbG9nW2pdO1xyXG4gICAgICAgIC8vICAgICBlYWNoLnN0eWxlLmhlaWdodCA9IGogPCBpID8gJzEwMCUnIDogJzAnO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmNsZWFyUHJvZ3Jlc3MoaXRlbSk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubmV4dExldmVsLnNlbGVjdGVkKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3ModGhpcy5uZXh0TGV2ZWwuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyUHJvZ3Jlc3MoaXRlbTogQ2F0YWxvZykge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgZWFjaC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBhbmQoaXRlbTogQ2F0YWxvZykge1xyXG4gICAgICAgIHRoaXMub25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3BlbikgeyB0aGlzLmlzT3BlbiA9ICdvcGVuJzsgfSBlbHNlIHsgdGhpcy5pc09wZW4gPSAnY2xvc2VkJzsgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXRhbG9ncycsIHRoaXMuY2F0YWxvZyk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl19