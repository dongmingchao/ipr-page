/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { openClose } from './animations';
export class CosmeticsOutlineBarComponent {
    constructor() {
        this.open = true;
        this.level = 0;
        this.pointClick = new EventEmitter();
        this.nextLevel = {
            selected: null,
        };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    passSelect(item) {
        console.log('next level select', item);
        this.nextLevel.selected = item[0];
        item.push(this.selected);
        this.pointClick.emit(item);
    }
    /**
     * @return {?}
     */
    getLevelCss() {
        return `level-${this.level}`;
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    onselect(item) {
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
    }
    /**
     * @param {?} item
     * @return {?}
     */
    clearProgress(item) {
        for (const each of item.child_catalog) {
            each.style.height = '0';
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    expand(item) {
        this.onselect(item);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        e => {
            console.log('catalogs', this.catalog);
        }), 1000);
    }
}
CosmeticsOutlineBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-cosmetics-outline-bar',
                template: "<ng-container *ngIf=\"catalog;\">\r\n    <ng-container *ngFor=\"let item of catalog;index as n\">\r\n        <button (click)=\"expand(item)\"\r\n                [ngClass]=\"getLevelCss()\"\r\n                class=\"circle spin circle_b\"></button>\r\n        <div class=\"botLine\">\r\n            <div></div>\r\n            <div class=\"progress\" [style.height]=\"item.style.height\"></div>\r\n        </div>\r\n        <ngx-cosmetics-outline-bar\r\n                [@openClose]=\"isOpen\"\r\n                [level]=\"level+1\"\r\n                *ngIf=\"item === selected && item.child_catalog\"\r\n                (pointClick)=\"passSelect($event)\"\r\n                [catalog]=\"item.child_catalog\"></ngx-cosmetics-outline-bar>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!--nbTooltip=\"{{item.title}}\" nbTooltipPlacement=\"right\"-->\r\n",
                animations: openClose,
                styles: [":host{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}button.circle{background-color:#0077b9;border:3px solid #acacac;border-radius:100%;width:24px;height:24px;margin:auto;z-index:1}.botLine{-webkit-box-flex:1;flex-grow:1;position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.botLine div{width:.9rem;height:calc(100% + 10px);position:relative;background:#e6e7e8;border-left:3.5px solid #acacac;border-right:3.5px solid #acacac}.botLine.active div{background:#0077b9}.botLine .progress{position:absolute;background-color:red;-ms-grid-row-align:start;align-self:start}:host button.circle.spin.level-1{background-color:#00d77f;width:15px;height:18px;border:3px solid #acacac}:host button.circle.spin.level-2{background-color:#a1a1e5;width:12px;height:16px;border:2px solid #acacac}"]
            }] }
];
/** @nocollapse */
CosmeticsOutlineBarComponent.ctorParameters = () => [];
CosmeticsOutlineBarComponent.propDecorators = {
    catalog: [{ type: Input }],
    open: [{ type: Input }],
    level: [{ type: Input }],
    pointClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.catalog;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.open;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.level;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.pointClick;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.selected;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.isOpen;
    /** @type {?} */
    CosmeticsOutlineBarComponent.prototype.nextLevel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVN2QyxNQUFNLE9BQU8sNEJBQTRCO0lBa0RyQztRQWhEUyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNULGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSXJELGNBQVMsR0FFTDtZQUNBLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUF1Q0YsQ0FBQzs7Ozs7SUFyQ0QsVUFBVSxDQUFDLElBQWU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxPQUFPLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVTLFFBQVEsQ0FBQyxJQUFhO1FBQzVCLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0Isd0NBQXdDO1FBQ3hDLGtEQUFrRDtRQUNsRCxvQ0FBb0M7UUFDcEMsZ0RBQWdEO1FBQ2hELElBQUk7UUFDSiw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLG1EQUFtRDtJQUN2RCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFhO1FBQ3ZCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDM0I7SUFDTCxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUtELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO2FBQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUFFO1FBQ3pFLFVBQVU7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDOzs7WUFqRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGsyQkFBcUQ7Z0JBRXJELFVBQVUsRUFBRSxTQUFTOzthQUN4Qjs7Ozs7c0JBR0ksS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsTUFBTTs7OztJQUhQLCtDQUE0Qjs7SUFDNUIsNENBQXFCOztJQUNyQiw2Q0FBbUI7O0lBQ25CLGtEQUFxRDs7SUFFckQsZ0RBQWtCOztJQUNsQiw4Q0FBZTs7SUFDZixpREFJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7b3BlbkNsb3NlfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1jb3NtZXRpY3Mtb3V0bGluZS1iYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgYW5pbWF0aW9uczogb3BlbkNsb3NlLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvc21ldGljc091dGxpbmVCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgY2F0YWxvZzogQ2F0YWxvZ1tdO1xyXG4gICAgQElucHV0KCkgb3BlbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBsZXZlbCA9IDA7XHJcbiAgICBAT3V0cHV0KCkgcG9pbnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2F0YWxvZ1tdPigpO1xyXG5cclxuICAgIHNlbGVjdGVkOiBDYXRhbG9nO1xyXG4gICAgaXNPcGVuOiBzdHJpbmc7XHJcbiAgICBuZXh0TGV2ZWw6IHtcclxuICAgICAgICBzZWxlY3RlZDogQ2F0YWxvZyxcclxuICAgIH0gPSB7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIHBhc3NTZWxlY3QoaXRlbTogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25leHQgbGV2ZWwgc2VsZWN0JywgaXRlbSk7XHJcbiAgICAgICAgdGhpcy5uZXh0TGV2ZWwuc2VsZWN0ZWQgPSBpdGVtWzBdO1xyXG4gICAgICAgIGl0ZW0ucHVzaCh0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLnBvaW50Q2xpY2suZW1pdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZXZlbENzcygpIHtcclxuICAgICAgICByZXR1cm4gYGxldmVsLSR7dGhpcy5sZXZlbH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbnNlbGVjdChpdGVtOiBDYXRhbG9nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uIHNlbGVjdCcsIGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gJ29wZW4nO1xyXG4gICAgICAgIHRoaXMucG9pbnRDbGljay5lbWl0KFtpdGVtXSk7XHJcbiAgICAgICAgLy8gY29uc3QgaSA9IHRoaXMuY2F0YWxvZy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jYXRhbG9nLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGVhY2ggPSB0aGlzLmNhdGFsb2dbal07XHJcbiAgICAgICAgLy8gICAgIGVhY2guc3R5bGUuaGVpZ2h0ID0gaiA8IGkgPyAnMTAwJScgOiAnMCc7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuY2xlYXJQcm9ncmVzcyhpdGVtKTtcclxuICAgICAgICAvLyBpZiAodGhpcy5uZXh0TGV2ZWwuc2VsZWN0ZWQpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2xlYXJQcm9ncmVzcyh0aGlzLm5leHRMZXZlbC5zZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJQcm9ncmVzcyhpdGVtOiBDYXRhbG9nKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGl0ZW0uY2hpbGRfY2F0YWxvZykge1xyXG4gICAgICAgICAgICBlYWNoLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4cGFuZChpdGVtOiBDYXRhbG9nKSB7XHJcbiAgICAgICAgdGhpcy5vbnNlbGVjdChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcGVuKSB7IHRoaXMuaXNPcGVuID0gJ29wZW4nOyB9IGVsc2UgeyB0aGlzLmlzT3BlbiA9ICdjbG9zZWQnOyB9XHJcbiAgICAgICAgc2V0VGltZW91dChlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhdGFsb2dzJywgdGhpcy5jYXRhbG9nKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=