import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, NgZone, ViewChild, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
let CosmeticsDetailComponent = class CosmeticsDetailComponent {
    constructor(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
        this.widgetOnClick = new EventEmitter();
    }
    set pages(val) {
        if (!val) {
            return;
        }
        this.reportsService.root_catalog = val;
        this.reportsService.selected.catalog = this.reportsService.root_catalog;
        this.page = this.reportsService.selected.catalog;
    }
    change(indexesOfRoot) {
        console.log('change', indexesOfRoot);
        let item;
        const index = indexesOfRoot[indexesOfRoot.length - 1];
        let catalog = this.reportsService.root_catalog;
        for (const i of indexesOfRoot) { // 3 1
            if (item) {
                catalog = item.child_catalog;
            }
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
    onContentChange(indexes) {
        this.change(indexes);
    }
    outlineClick(item) {
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        this.scrollLoad(item);
    }
    scrollLoad(item) {
        const indexesOfRoot = [];
        for (const each of item) {
            indexesOfRoot.push(each._render.index);
        }
        indexesOfRoot.reverse();
        this.change(indexesOfRoot);
        this.reportsService.loadContent();
    }
    widgetClick(event) {
        this.widgetOnClick.emit(event);
    }
    appendChapterFullScreen() {
        this.outlineClick([this.page[0]]);
    }
    onLoading({ process }) {
        if (process.now === 1) {
            this.appendChapterFullScreen();
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngAfterViewChecked() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], CosmeticsDetailComponent.prototype, "pages", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CosmeticsDetailComponent.prototype, "widgetOnClick", void 0);
tslib_1.__decorate([
    ViewChild('outline', { static: false }),
    tslib_1.__metadata("design:type", CosmeticsOutlineBarComponent)
], CosmeticsDetailComponent.prototype, "outline", void 0);
tslib_1.__decorate([
    ViewChild('article', { static: false }),
    tslib_1.__metadata("design:type", CosmeticsPageComponent)
], CosmeticsDetailComponent.prototype, "article", void 0);
CosmeticsDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'ipr-report-detail',
        template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div class=\"page\">\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page [page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            (widgetOnClick)=\"widgetClick($event)\"\r\n                            (loadingParagraph)=\"onLoading($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
        styles: ["/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;position:relative;height:100%}:host .page{position:relative;height:100%;-webkit-box-flex:1;flex-grow:1}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ReportsService,
        NgZone])
], CosmeticsDetailComponent);
export { CosmeticsDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFRNUYsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUE4RmpDLFlBQ1csY0FBOEIsRUFDOUIsSUFBWTtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBckZiLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUF3Ri9ELENBQUM7SUFqR1EsSUFBSSxLQUFLLENBQUMsR0FBYztRQUM3QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUNyRCxDQUFDO0lBV0QsTUFBTSxDQUFDLGFBQXVCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uSW5pdCxcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgTmdab25lLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0Nvc21ldGljc1BhZ2VDb21wb25lbnR9IGZyb20gJy4uL3BhZ2UvY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50fSBmcm9tICcuLi9vdXRsaW5lLWJhci9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaWRnZXRDbGlja0V2ZW50fSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9XaWRnZXRDbGlja0V2ZW50LmNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcmVwb3J0LWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXN0LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIHtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgcGFnZXModmFsOiBDYXRhbG9nW10pIHtcclxuICAgICAgICBpZiAoIXZhbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nID0gdmFsO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IHRoaXMucmVwb3J0c1NlcnZpY2Uucm9vdF9jYXRhbG9nO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZztcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgd2lkZ2V0T25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8V2lkZ2V0Q2xpY2tFdmVudD4oKTtcclxuXHJcbiAgICBwYWdlOiBDYXRhbG9nW107XHJcbiAgICBwcml2YXRlIHBhZ2VJZDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBAVmlld0NoaWxkKCdvdXRsaW5lJywge3N0YXRpYzogZmFsc2V9KSBvdXRsaW5lOiBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZCgnYXJ0aWNsZScsIHtzdGF0aWM6IGZhbHNlfSkgYXJ0aWNsZTogQ29zbWV0aWNzUGFnZUNvbXBvbmVudDtcclxuXHJcblxyXG4gICAgY2hhbmdlKGluZGV4ZXNPZlJvb3Q6IG51bWJlcltdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZScsIGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgICAgIGxldCBpdGVtOiBDYXRhbG9nO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhlc09mUm9vdFtpbmRleGVzT2ZSb290Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBjYXRhbG9nID0gdGhpcy5yZXBvcnRzU2VydmljZS5yb290X2NhdGFsb2c7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGluZGV4ZXNPZlJvb3QpIHsvLyAzIDFcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2cgPSBpdGVtLmNoaWxkX2NhdGFsb2c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKDsgeCA8IGk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ1t4XS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICg7IHggPCBjYXRhbG9nLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nW3hdLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtID0gY2F0YWxvZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ZXNPZlJvb3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGluZS5zZWxlY3RlZCA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnZUlkID0gaXRlbS5pZDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSBjYXRhbG9nO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5pbmRleGVzT2ZSb290ID0gaW5kZXhlc09mUm9vdDtcclxuICAgICAgICBpZiAoaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBlYWNoLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5jYXRhbG9nID0gY2F0YWxvZztcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuaW5kZXhlc09mUm9vdC5wdXNoKGluZGV4KTsgLy8g6L+Z6YeMaW5kZXhlc09mUm9vdOaciemUmVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSBpdGVtLmNoaWxkX2NhdGFsb2c7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm91dGxpbmUuZXhwYW5kKGl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmRleGVzIG9mIHJvb3QnLCBpbmRleGVzT2ZSb290KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnRlbnRDaGFuZ2UoaW5kZXhlcykge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlKGluZGV4ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG91dGxpbmVDbGljayhpdGVtOiBDYXRhbG9nW10pIHsgLy8gaXRlbeaYr+eUseWGheWIsOWklueahOaVsOe7hOavlOWmguivtDEuM+aYr1syLCAwXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvdXQgbGluZSBjbGljaycsIGl0ZW0sIHRoaXMuYXJ0aWNsZS5jb250YWluZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnRpY2xlJywgdGhpcy5hcnRpY2xlKTtcclxuICAgICAgICB0aGlzLmFydGljbGUuc2Nyb2xsVG8oaXRlbVswXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxMb2FkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbExvYWQoaXRlbTogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlc09mUm9vdCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtKSB7XHJcbiAgICAgICAgICAgIGluZGV4ZXNPZlJvb3QucHVzaChlYWNoLl9yZW5kZXIuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleGVzT2ZSb290LnJldmVyc2UoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZShpbmRleGVzT2ZSb290KTtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmxvYWRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2lkZ2V0Q2xpY2soZXZlbnQ6IFdpZGdldENsaWNrRXZlbnQpIHtcclxuICAgICAgICB0aGlzLndpZGdldE9uQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hhcHRlckZ1bGxTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQ2xpY2soW3RoaXMucGFnZVswXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGluZyh7cHJvY2Vzc30pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5ub3cgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGFwdGVyRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIl19