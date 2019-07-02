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
    widgetClick(event) {
        this.widgetOnClick.emit(event);
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
        template: "<div style=\"background:white\" class=\"row main\">\r\n        <ngx-cosmetics-outline-bar\r\n                #outline\r\n                class=\"mid-dots-nav\"\r\n                [catalog]=\"reportsService.root_catalog\"\r\n                (pointClick)=\"outlineClick($event)\"\r\n        ></ngx-cosmetics-outline-bar>\r\n    <div class=\"page\">\r\n        <div *ngIf=\"!page\" class=\"innerSpin\">\r\n            <div></div>\r\n        </div>\r\n        <ngx-cosmetics-page *ngIf=\"page\" [Page]=\"page\"\r\n                            (scrollIn)=\"scrollLoad($event)\"\r\n                            (focusContentChange)=\"onContentChange($event)\"\r\n                            (widgetOnClick)=\"widgetClick($event)\"\r\n                            #article\r\n        ></ngx-cosmetics-page>\r\n    </div>\r\n</div>\r\n",
        styles: ["/*!*We 're animating border-color again*!*/.spin:hover{border-top-color:#0077b9;border-bottom-color:#0077b9;-webkit-transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s;transition:border-top-color .15s linear,border-right-color .15s linear .1s,border-bottom-color .15s linear .2s}/*!*Makes border thinner at the edges ? I forgot what I was doing*!*//*!*Shows border *!*//*!*Solid edges, invisible borders *!*//*!*Solid edges, invisible borders *!*//*!*Rotate around circle *!*//*!*Solid edge post-rotation*!*/.main{display:-webkit-box;display:flex;position:relative;height:100%}:host .page{position:relative;height:100%;-webkit-box-flex:1;flex-grow:1}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ReportsService,
        NgZone])
], CosmeticsDetailComponent);
export { CosmeticsDetailComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFL0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFRNUYsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFtRmpDLFlBQ1csY0FBOEIsRUFDOUIsSUFBWTtRQURaLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBM0ViLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUE4RS9ELENBQUM7SUF0RlEsSUFBSSxLQUFLLENBQUMsR0FBYztRQUM3QixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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LFVBQVUsQ0FBQyxJQUFlO1FBQ3RCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7UUFDRCxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBdUI7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVNELFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtJQUNmLENBQUM7Q0FDSixDQUFBO0FBN0ZZO0lBQVIsS0FBSyxFQUFFOzs7cURBT1A7QUFDUztJQUFULE1BQU0sRUFBRTs7K0RBQXNEO0FBS3hCO0lBQXRDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7c0NBQVUsNEJBQTRCO3lEQUFDO0FBQ3RDO0lBQXRDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7c0NBQVUsc0JBQXNCO3lEQUFDO0FBaEI5RCx3QkFBd0I7SUFMcEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixvMEJBQWdEOztLQUVuRCxDQUFDOzZDQXFGNkIsY0FBYztRQUN4QixNQUFNO0dBckZkLHdCQUF3QixDQStGcEM7U0EvRlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uSW5pdCxcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgTmdab25lLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uLy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0Nvc21ldGljc1BhZ2VDb21wb25lbnR9IGZyb20gJy4uL3BhZ2UvY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50fSBmcm9tICcuLi9vdXRsaW5lLWJhci9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtXaWRnZXRDbGlja0V2ZW50fSBmcm9tICcuLi8uLi9fQ2xhc3Nlcy9XaWRnZXRDbGlja0V2ZW50LmNsYXNzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpcHItcmVwb3J0LWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXN0LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgcGFnZXModmFsOiBDYXRhbG9nW10pIHtcclxuICAgICAgICBpZiAoIXZhbCkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZyA9IHZhbDtcclxuICAgICAgICBjb25zb2xlLmxvZygncm9vdF9jYXRhbG9nJywgdmFsKTtcclxuICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2cgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZztcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnNlbGVjdGVkLmNhdGFsb2c7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoWzBdKTtcclxuICAgIH1cclxuICAgIEBPdXRwdXQoKSB3aWRnZXRPbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxXaWRnZXRDbGlja0V2ZW50PigpO1xyXG5cclxuICAgIHBhZ2U6IENhdGFsb2dbXTtcclxuICAgIHByaXZhdGUgcGFnZUlkOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIEBWaWV3Q2hpbGQoJ291dGxpbmUnLCB7c3RhdGljOiBmYWxzZX0pIG91dGxpbmU6IENvc21ldGljc091dGxpbmVCYXJDb21wb25lbnQ7XHJcbiAgICBAVmlld0NoaWxkKCdhcnRpY2xlJywge3N0YXRpYzogZmFsc2V9KSBhcnRpY2xlOiBDb3NtZXRpY3NQYWdlQ29tcG9uZW50O1xyXG5cclxuXHJcbiAgICBjaGFuZ2UoaW5kZXhlc09mUm9vdDogbnVtYmVyW10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlJywgaW5kZXhlc09mUm9vdCk7XHJcbiAgICAgICAgbGV0IGl0ZW06IENhdGFsb2c7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleGVzT2ZSb290W2luZGV4ZXNPZlJvb3QubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgbGV0IGNhdGFsb2cgPSB0aGlzLnJlcG9ydHNTZXJ2aWNlLnJvb3RfY2F0YWxvZztcclxuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgaW5kZXhlc09mUm9vdCkgey8vIDMgMVxyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZyA9IGl0ZW0uY2hpbGRfY2F0YWxvZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgeCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoOyB4IDwgaTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nW3hdLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKDsgeCA8IGNhdGFsb2cubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dbeF0uc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYXRhbG9nW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXhlc09mUm9vdC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRsaW5lLnNlbGVjdGVkID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlSWQgPSBpdGVtLmlkO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IGNhdGFsb2c7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmluZGV4ZXNPZlJvb3QgPSBpbmRleGVzT2ZSb290O1xyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWFjaCBvZiBpdGVtLmNoaWxkX2NhdGFsb2cpIHtcclxuICAgICAgICAgICAgICAgIGVhY2guc3R5bGUuaGVpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UucGFyZW50LmNhdGFsb2cgPSBjYXRhbG9nO1xyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydHNTZXJ2aWNlLnBhcmVudC5pbmRleGVzT2ZSb290LnB1c2goaW5kZXgpOyAvLyDov5nph4xpbmRleGVzT2ZSb2905pyJ6ZSZXHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2Uuc2VsZWN0ZWQuY2F0YWxvZyA9IGl0ZW0uY2hpbGRfY2F0YWxvZztcclxuICAgICAgICAgICAgdGhpcy5yZXBvcnRzU2VydmljZS5zZWxlY3RlZC5pbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMub3V0bGluZS5leHBhbmQoaXRlbSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luZGV4ZXMgb2Ygcm9vdCcsIGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29udGVudENoYW5nZShpbmRleGVzKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UoaW5kZXhlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0bGluZUNsaWNrKGl0ZW06IENhdGFsb2dbXSkgeyAvLyBpdGVt5piv55Sx5YaF5Yiw5aSW55qE5pWw57uE5q+U5aaC6K+0MS4z5pivWzIsIDBdXHJcbiAgICAgICAgY29uc29sZS5sb2coJ291dCBsaW5lIGNsaWNrJywgaXRlbSwgdGhpcy5hcnRpY2xlLmNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FydGljbGUnLCB0aGlzLmFydGljbGUpO1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZS5zY3JvbGxUbyhpdGVtWzBdKTtcclxuICAgICAgICB0aGlzLnNjcm9sbExvYWQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsTG9hZChpdGVtOiBDYXRhbG9nW10pIHtcclxuICAgICAgICBjb25zdCBpbmRleGVzT2ZSb290ID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBlYWNoIG9mIGl0ZW0pIHtcclxuICAgICAgICAgICAgaW5kZXhlc09mUm9vdC5wdXNoKGVhY2guX3JlbmRlci5pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3QucmV2ZXJzZSgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlKGluZGV4ZXNPZlJvb3QpO1xyXG4gICAgICAgIHRoaXMucmVwb3J0c1NlcnZpY2UubG9hZENvbnRlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB3aWRnZXRDbGljayhldmVudDogV2lkZ2V0Q2xpY2tFdmVudCkge1xyXG4gICAgICAgIHRoaXMud2lkZ2V0T25DbGljay5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVwb3J0c1NlcnZpY2U6IFJlcG9ydHNTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB6b25lOiBOZ1pvbmUsXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG59XHJcbiJdfQ==