/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, NgZone, ViewChild, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
export class CosmeticsDetailComponent {
    /**
     * @param {?} reportsService
     * @param {?} zone
     */
    constructor(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
    }
    /**
     * @param {?} indexesOfRoot
     * @return {?}
     */
    change(indexesOfRoot) {
        console.log('change', indexesOfRoot);
        /** @type {?} */
        let item;
        /** @type {?} */
        const index = indexesOfRoot[indexesOfRoot.length - 1];
        /** @type {?} */
        let catalog = this.reportsService.root_catalog;
        for (const i of indexesOfRoot) { // 3 1
            if (item) {
                catalog = item.child_catalog;
            }
            /** @type {?} */
            let x = 0;
            for (; x < i; x++) {
                catalog[x].style.height = '100%';
            }
            for (; x < catalog.length; x++) {
                catalog[x].style.height = '0';
            }
            item = catalog[i];
        }
        if (indexesOfRoot.length === 1) {
            this.outline.selected = item;
        }
        this.pageId = item.id;
        this.reportsService.selected.catalog = catalog;
        this.reportsService.selected.index = index;
        this.reportsService.parent.indexesOfRoot = indexesOfRoot;
        if (item.child_catalog) {
            item.style.height = '100%';
            for (const each of item.child_catalog) {
                each.style.height = '0';
            }
            this.reportsService.parent.catalog = catalog;
            this.reportsService.parent.indexesOfRoot.push(index); // 这里indexesOfRoot有错
            this.reportsService.selected.catalog = item.child_catalog;
            this.reportsService.selected.index = 0;
        }
        // this.outline.expand(item);
        // console.log('indexes of root', indexesOfRoot);
    }
    /**
     * @param {?} indexes
     * @return {?}
     */
    onContentChange(indexes) {
        this.change(indexes);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    outlineClick(item) {
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        this.scrollLoad(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    scrollLoad(item) {
        /** @type {?} */
        const indexesOfRoot = [];
        for (const each of item) {
            indexesOfRoot.push(each._render.index);
        }
        indexesOfRoot.reverse();
        this.change(indexesOfRoot);
        this.reportsService.loadContent();
    }
    /**
     * @return {?}
     */
    clearToolTip() {
        /** @type {?} */
        const tooltipContainer = document.getElementsByClassName('cdk-overlay-container')[0];
        for (let i = 1; i < tooltipContainer.childNodes.length; i++) {
            tooltipContainer.removeChild(tooltipContainer.childNodes[i]);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    progressHeight(item) {
        return item.style.height;
    }
    /**
     * @return {?}
     */
    getCateLog() {
        this.reportsService.get_catelog(4, 3)
            .then((/**
         * @param {?} json
         * @return {?}
         */
        json => {
            this.reportsService.root_catalog = json;
            this.reportsService.selected.catalog = this.reportsService.root_catalog;
            this.page = this.reportsService.selected.catalog;
            this.change([0]);
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.getCateLog();
    }
}
CosmeticsDetailComponent.decorators = [
    { type: Component, args: [{
                selector: 'ipr-report-detail',
                template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div>\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
                styles: [".mid-dots-nav{height:640px;width:34px;position:absolute;left:34px;margin-left:-27px;overflow:hidden;z-index:20;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:justify;justify-content:space-between}/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;height:100%}"]
            }] }
];
/** @nocollapse */
CosmeticsDetailComponent.ctorParameters = () => [
    { type: ReportsService },
    { type: NgZone }
];
CosmeticsDetailComponent.propDecorators = {
    outline: [{ type: ViewChild, args: ['outline', { static: false },] }],
    article: [{ type: ViewChild, args: ['article', { static: false },] }]
};
if (false) {
    /** @type {?} */
    CosmeticsDetailComponent.prototype.subscription;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.page;
    /**
     * @type {?}
     * @private
     */
    CosmeticsDetailComponent.prototype.pageId;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.height;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.outline;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.article;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.reportsService;
    /** @type {?} */
    CosmeticsDetailComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBTVQsTUFBTSxFQUNOLFNBQVMsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFPNUYsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUEwRmpDLFlBQ1csY0FBOEIsRUFDOUIsSUFBWTtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO0lBR3ZCLENBQUM7Ozs7O0lBdEZELE1BQU0sQ0FBQyxhQUF1QjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQzs7WUFDakMsSUFBYTs7Y0FDWCxLQUFLLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztZQUNqRCxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO1FBQzlDLEtBQUssTUFBTSxDQUFDLElBQUksYUFBYSxFQUFFLEVBQUMsTUFBTTtZQUNsQyxJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNoQzs7Z0JBQ0csQ0FBQyxHQUFHLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcs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Qjs7SUFDdkIsMENBQWU7O0lBQ2YsMkNBQTZFOztJQUM3RSwyQ0FBdUU7O0lBcUZuRSxrREFBcUM7O0lBQ3JDLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE5nWm9uZSxcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0Nvc21ldGljc1BhZ2VDb21wb25lbnR9IGZyb20gJy4uL3BhZ2UvY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50fSBmcm9tICcuLi9vdXRsaW5lLWJhci9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcmVwb3J0LWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXN0LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBwYWdlOiBDYXRhbG9nW107XHJcbiAgICBwcml2YXRlIHBhZ2VJZDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBAVmlld0NoaWxkKCdvdXRsaW5lJywge3N0YXRpYzogZmFsc2V9KSBvdXRsaW5lOiBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZCgnYXJ0aWNsZScsIHtzdGF0aWM6IGZhbHNlfSkgYXJ0aWNsZTogQ29zbWV0aWNzUGFnZUNvbXBvbmVudDtcclxuXHJcblxyXG4gICAgY2hhbmdlKGluZGV4ZXNPZlJvb3Q6IG51bWJlcltdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZScsIGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgICAgIGxldCBpdGVtOiBDYXRhbG9nO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhlc09mUm9vdFtpbmRleGVzT2ZSb290Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBjYXRhbG9nID0gdGhpcy5yZXBvcnRzU2VydmljZS5yb290X2NhdGFsb2c7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGluZGV4ZXNPZlJvb3QpIHsvLyAzIDFcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2cgPSBpdGVtLmNoaWxkX2NhdGFsb2c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKDsgeCA8IGk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ1t4XS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICg7IHggPCBjYXRhbG9nLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nW3hdLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtID0gY2F0YWxvZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ZXNPZlJvb3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGluZS5zZWxlY3RlZCA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnZUlkID0gaXRlbS5pZDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSBjYXRhbG9nO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5pbmRleGVzT2ZSb290ID0gaW5kZXhlc09mUm9vdDtcclxuICAgICAgICBpZiAoaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBlYWNoLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5jYXRhbG9nID0gY2F0YWxvZztcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuaW5kZXhlc09mUm9vdC5wdXNoKGluZGV4KTsgLy8g6L+Z6YeMaW5kZXhlc09mUm9vdOaciemUmVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSBpdGVtLmNoaWxkX2NhdGFsb2c7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm91dGxpbmUuZXhwYW5kKGl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmRleGVzIG9mIHJvb3QnLCBpbmRleGVzT2ZSb290KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnRlbnRDaGFuZ2UoaW5kZXhlcykge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlKGluZGV4ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG91dGxpbmVDbGljayhpdGVtOiBDYXRhbG9nW10pIHsgLy8gaXRlbeaYr+eUseWGheWIsOWklueahOaVsOe7hOavlOWmguivtDEuM+aYr1syLCAwXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvdXQgbGluZSBjbGljaycsIGl0ZW0sIHRoaXMuYXJ0aWNsZS5jb250YWluZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnRpY2xlJywgdGhpcy5hcnRpY2xlKTtcclxuICAgICAgICB0aGlzLmFydGljbGUuc2Nyb2xsVG8oaXRlbVswXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxMb2FkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbExvYWQoaXRlbTogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlc09mUm9vdCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtKSB7XHJcbiAgICAgICAgICAgIGluZGV4ZXNPZlJvb3QucHVzaChlYWNoLl9yZW5kZXIuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleGVzT2ZSb290LnJldmVyc2UoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZShpbmRleGVzT2ZSb290KTtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmxvYWRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJUb29sVGlwKCkge1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjZGstb3ZlcmxheS1jb250YWluZXInKVswXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRvb2x0aXBDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0b29sdGlwQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvb2x0aXBDb250YWluZXIuY2hpbGROb2Rlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2dyZXNzSGVpZ2h0KGl0ZW06IENhdGFsb2cpIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5zdHlsZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2F0ZUxvZygpIHtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmdldF9jYXRlbG9nKDQsIDMpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5yb290X2NhdGFsb2cgPSBqc29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5jYXRhbG9nID0gdGhpcy5yZXBvcnRzU2VydmljZS5yb290X2NhdGFsb2c7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2c7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZShbMF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdW5zdWJzY3JpYmUgdG8gZW5zdXJlIG5vIG1lbW9yeSBsZWFrc1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0Q2F0ZUxvZygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==