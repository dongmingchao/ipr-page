import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { openClose } from './animations';
let CosmeticsOutlineBarComponent = class CosmeticsOutlineBarComponent {
    constructor() {
        this.open = true;
        this.level = 0;
        this.pointClick = new EventEmitter();
        this.nextLevel = {
            selected: null,
        };
    }
    passSelect(item) {
        console.log('next level select', item);
        this.nextLevel.selected = item[0];
        item.push(this.selected);
        this.pointClick.emit(item);
    }
    getLevelCss() {
        return `level-${this.level}`;
    }
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
    clearProgress(item) {
        for (const each of item.child_catalog) {
            each.style.height = '0';
        }
    }
    expand(item) {
        this.onselect(item);
    }
    ngOnInit() {
        if (this.open) {
            this.isOpen = 'open';
        }
        else {
            this.isOpen = 'closed';
        }
    }
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
export { CosmeticsOutlineBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVN2QyxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQWtEckM7UUFoRFMsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUlyRCxjQUFTLEdBRUw7WUFDQSxRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO0lBdUNGLENBQUM7SUFyQ0QsVUFBVSxDQUFDLElBQWU7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFUyxRQUFRLENBQUMsSUFBYTtRQUM1QixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLHdDQUF3QztRQUN4QyxrREFBa0Q7UUFDbEQsb0NBQW9DO1FBQ3BDLGdEQUFnRDtRQUNoRCxJQUFJO1FBQ0osNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQixtREFBbUQ7SUFDdkQsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFhO1FBQ3ZCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBS0QsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQUU7YUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQUU7SUFDN0UsQ0FBQztDQUNKLENBQUE7QUF2RFk7SUFBUixLQUFLLEVBQUU7OzZEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7MERBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTs7MkRBQVc7QUFDVDtJQUFULE1BQU0sRUFBRTs7Z0VBQTRDO0FBSjVDLDRCQUE0QjtJQVB4QyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLGcyQkFBcUQ7UUFFckQsVUFBVSxFQUFFLFNBQVM7O0tBQ3hCLENBQUM7O0dBRVcsNEJBQTRCLENBd0R4QztTQXhEWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge29wZW5DbG9zZX0gZnJvbSAnLi9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtY29zbWV0aWNzLW91dGxpbmUtYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IG9wZW5DbG9zZSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGNhdGFsb2c6IENhdGFsb2dbXTtcclxuICAgIEBJbnB1dCgpIG9wZW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbGV2ZWwgPSAwO1xyXG4gICAgQE91dHB1dCgpIHBvaW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENhdGFsb2dbXT4oKTtcclxuXHJcbiAgICBzZWxlY3RlZDogQ2F0YWxvZztcclxuICAgIGlzT3Blbjogc3RyaW5nO1xyXG4gICAgbmV4dExldmVsOiB7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IENhdGFsb2csXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBwYXNzU2VsZWN0KGl0ZW06IENhdGFsb2dbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXh0IGxldmVsIHNlbGVjdCcsIGl0ZW0pO1xyXG4gICAgICAgIHRoaXMubmV4dExldmVsLnNlbGVjdGVkID0gaXRlbVswXTtcclxuICAgICAgICBpdGVtLnB1c2godGhpcy5zZWxlY3RlZCk7XHJcbiAgICAgICAgdGhpcy5wb2ludENsaWNrLmVtaXQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGV2ZWxDc3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBsZXZlbC0ke3RoaXMubGV2ZWx9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25zZWxlY3QoaXRlbTogQ2F0YWxvZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbiBzZWxlY3QnLCBpdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaXRlbTtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9ICdvcGVuJztcclxuICAgICAgICB0aGlzLnBvaW50Q2xpY2suZW1pdChbaXRlbV0pO1xyXG4gICAgICAgIC8vIGNvbnN0IGkgPSB0aGlzLmNhdGFsb2cuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2F0YWxvZy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBlYWNoID0gdGhpcy5jYXRhbG9nW2pdO1xyXG4gICAgICAgIC8vICAgICBlYWNoLnN0eWxlLmhlaWdodCA9IGogPCBpID8gJzEwMCUnIDogJzAnO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmNsZWFyUHJvZ3Jlc3MoaXRlbSk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubmV4dExldmVsLnNlbGVjdGVkKVxyXG4gICAgICAgIC8vICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3ModGhpcy5uZXh0TGV2ZWwuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyUHJvZ3Jlc3MoaXRlbTogQ2F0YWxvZykge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgZWFjaC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBhbmQoaXRlbTogQ2F0YWxvZykge1xyXG4gICAgICAgIHRoaXMub25zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3BlbikgeyB0aGlzLmlzT3BlbiA9ICdvcGVuJzsgfSBlbHNlIHsgdGhpcy5pc09wZW4gPSAnY2xvc2VkJzsgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==