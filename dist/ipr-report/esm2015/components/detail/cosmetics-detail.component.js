import * as tslib_1 from "tslib";
import { Component, Input, NgZone, ViewChild, } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
let CosmeticsDetailComponent = class CosmeticsDetailComponent {
    constructor(reportsService, zone) {
        this.reportsService = reportsService;
        this.zone = zone;
    }
    set pages(val) {
        if (!val) {
            return;
        }
        this.reportsService.root_catalog = val;
        console.log('root_catalog', val);
        this.reportsService.selected.catalog = this.reportsService.root_catalog;
        this.page = this.reportsService.selected.catalog;
        this.change([0]);
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
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], CosmeticsDetailComponent.prototype, "pages", null);
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
        template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div class=\"page\">\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
        styles: ["/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;position:relative;height:100%}:host .page{position:relative;height:100%;-webkit-box-flex:1;flex-grow:1}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ReportsService,
        NgZone])
], CosmeticsDetailComponent);
export { CosmeticsDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBRS9ELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBTzVGLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBOEVqQyxZQUNXLGNBQThCLEVBQzlCLElBQVk7UUFEWixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUd2QixDQUFDO0lBakZRLElBQUksS0FBSyxDQUFDLEdBQWM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFTRCxNQUFNLENBQUMsYUFBdUI7UUFDMUIsT0FB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QUFNLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDckIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBU0QsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO0lBQ2YsQ0FBQztDQUNKLENBQUE7QUF4Rlk7SUFBUixLQUFLLEVBQUU7OztxREFPUDtBQUtzQztJQUF0QyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3NDQUFVLDRCQUE0Qjt5REFBQztBQUN0QztJQUF0QyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3NDQUFVLHNCQUFzQjt5REFBQztBQWY5RCx3QkFBd0I7SUFMcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw2dkJBQWdEOztLQUVuRCxDQUFDOzZDQWdGNkIsY0FBYztRQUN4QixNQUFNO0dBaEZkLHdCQUF3QixDQTBGcEM7U0ExRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uSW5pdCxcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgTmdab25lLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0Nvc21ldGljc1BhZ2VDb21wb25lbnR9IGZyb20gJy4uL3BhZ2UvY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50fSBmcm9tICcuLi9vdXRsaW5lLWJhci9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcmVwb3J0LWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXN0LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgcGFnZXModmFsOiBDYXRhbG9nW10pIHtcclxuICAgICAgICBpZiAoIXZhbCkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZyA9IHZhbDtcclxuICAgICAgICBjb25zb2xlLmxvZygncm9vdF9jYXRhbG9nJywgdmFsKTtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZztcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2c7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdlOiBDYXRhbG9nW107XHJcbiAgICBwcml2YXRlIHBhZ2VJZDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBAVmlld0NoaWxkKCdvdXRsaW5lJywge3N0YXRpYzogZmFsc2V9KSBvdXRsaW5lOiBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZCgnYXJ0aWNsZScsIHtzdGF0aWM6IGZhbHNlfSkgYXJ0aWNsZTogQ29zbWV0aWNzUGFnZUNvbXBvbmVudDtcclxuXHJcblxyXG4gICAgY2hhbmdlKGluZGV4ZXNPZlJvb3Q6IG51bWJlcltdKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZScsIGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgICAgIGxldCBpdGVtOiBDYXRhbG9nO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhlc09mUm9vdFtpbmRleGVzT2ZSb290Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBjYXRhbG9nID0gdGhpcy5yZXBvcnRzU2VydmljZS5yb290X2NhdGFsb2c7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGluZGV4ZXNPZlJvb3QpIHsvLyAzIDFcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2cgPSBpdGVtLmNoaWxkX2NhdGFsb2c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKDsgeCA8IGk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZ1t4XS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICg7IHggPCBjYXRhbG9nLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nW3hdLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtID0gY2F0YWxvZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZGV4ZXNPZlJvb3QubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGluZS5zZWxlY3RlZCA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnZUlkID0gaXRlbS5pZDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSBjYXRhbG9nO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5pbmRleGVzT2ZSb290ID0gaW5kZXhlc09mUm9vdDtcclxuICAgICAgICBpZiAoaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVhY2ggb2YgaXRlbS5jaGlsZF9jYXRhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBlYWNoLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5jYXRhbG9nID0gY2F0YWxvZztcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5wYXJlbnQuaW5kZXhlc09mUm9vdC5wdXNoKGluZGV4KTsgLy8g6L+Z6YeMaW5kZXhlc09mUm9vdOaciemUmVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSBpdGVtLmNoaWxkX2NhdGFsb2c7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLm91dGxpbmUuZXhwYW5kKGl0ZW0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmRleGVzIG9mIHJvb3QnLCBpbmRleGVzT2ZSb290KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbnRlbnRDaGFuZ2UoaW5kZXhlcykge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlKGluZGV4ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG91dGxpbmVDbGljayhpdGVtOiBDYXRhbG9nW10pIHsgLy8gaXRlbeaYr+eUseWGheWIsOWklueahOaVsOe7hOavlOWmguivtDEuM+aYr1syLCAwXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvdXQgbGluZSBjbGljaycsIGl0ZW0sIHRoaXMuYXJ0aWNsZS5jb250YWluZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnRpY2xlJywgdGhpcy5hcnRpY2xlKTtcclxuICAgICAgICB0aGlzLmFydGljbGUuc2Nyb2xsVG8oaXRlbVswXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxMb2FkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbExvYWQoaXRlbTogQ2F0YWxvZ1tdKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlc09mUm9vdCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtKSB7XHJcbiAgICAgICAgICAgIGluZGV4ZXNPZlJvb3QucHVzaChlYWNoLl9yZW5kZXIuaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleGVzT2ZSb290LnJldmVyc2UoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZShpbmRleGVzT2ZSb290KTtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLmxvYWRDb250ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlcG9ydHNTZXJ2aWNlOiBSZXBvcnRzU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgem9uZTogTmdab25lLFxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxufVxyXG4iXX0=