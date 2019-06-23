/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Catalog } from '../_Classes/Catalog.class';
import { HttpClient } from '@angular/common/http';
/**
 * @param {?} each
 * @return {?}
 */
function rollCatalog(each) {
    if (each.child_catalog instanceof Array) {
        each.child_catalog = each.child_catalog.map(rollCatalog);
    }
    return new Catalog(each);
}
var ReportsService = /** @class */ (function () {
    function ReportsService(http) {
        this.http = http;
        this.host = 'http://47.110.224.71';
        this.parent = {
            catalog: [],
            indexesOfRoot: [0],
        };
        this.selected = {
            catalog: [],
            index: 0,
        };
        this.focusContent = {
            index: 0,
            el: null,
        };
        this.alreadyAdd = [];
    }
    Object.defineProperty(ReportsService.prototype, "section", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selected.catalog[this.selected.index];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} item
     * @return {?}
     */
    ReportsService.prototype.loadContent = /**
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then((/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            console.log('section content', json[0]);
            if (!section.paragraphs) {
                section.paragraphs = json[0].paragraphs;
            }
        }));
    };
    /**
     * @return {?}
     */
    ReportsService.prototype.nextPageId = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.selected.index + 1;
        if (nextIndex >= this.selected.catalog.length) {
            this.selected.catalog = this.parent.catalog;
            nextIndex = this.parent.indexesOfRoot.pop() + 1;
        }
        console.log('next index', nextIndex, this.selected.catalog);
        return this.selected.catalog[nextIndex].id;
    };
    /**
     * @return {?}
     */
    ReportsService.prototype.nextContentId = /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    ReportsService.prototype.get_catelog = /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    function (id, degree) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.host + ("/get_catalogs/" + id + "/" + degree + "/")).toPromise()];
                    case 1:
                        ret = _a.sent();
                        ret = ret.map(rollCatalog);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * @param {?} id
     * @param {?} child_content
     * @return {?}
     */
    ReportsService.prototype.get_content = /**
     * @param {?} id
     * @param {?} child_content
     * @return {?}
     */
    function (id, child_content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.host + ("/get_chapter/" + id + "/" + child_content + "/")).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReportsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReportsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return ReportsService;
}());
export { ReportsService };
if (false) {
    /** @type {?} */
    ReportsService.prototype.host;
    /** @type {?} */
    ReportsService.prototype.root_catalog;
    /** @type {?} */
    ReportsService.prototype.parent;
    /** @type {?} */
    ReportsService.prototype.selected;
    /** @type {?} */
    ReportsService.prototype.focusContent;
    /** @type {?} */
    ReportsService.prototype.alreadyAdd;
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbIl9TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRWhELFNBQVMsV0FBVyxDQUFDLElBQUk7SUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxZQUFZLEtBQUssRUFBRTtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQ7SUEyQkksd0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUF6QnBDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztRQUU5QixXQUFNLEdBR0Y7WUFDQSxPQUFPLEVBQUUsRUFBRTtZQUNYLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUdKO1lBQ0EsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixpQkFBWSxHQUdSO1lBQ0EsS0FBSyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFDRixlQUFVLEdBQWEsRUFBRSxDQUFDO0lBRzFCLENBQUM7SUFFRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELENBQUM7OztPQUFBOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxJQUFjOztZQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87UUFDMUIsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQzthQUMvQixJQUFJOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsbUNBQVU7OztJQUFWOztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3ZDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM1QyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELHNDQUFhOzs7SUFBYjtRQUNJLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7O0lBRVksb0NBQVc7Ozs7O0lBQXhCLFVBQXlCLEVBQVUsRUFBRSxNQUFjOzs7Ozs0QkFDckMscUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLElBQUksSUFBRyxtQkFBaUIsRUFBRSxTQUFJLE1BQU0sTUFBRyxDQUFBLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTlGLEdBQUcsR0FBRyxTQUF3Rjt3QkFDbEcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzNCLHNCQUFPLEdBQUcsRUFBQzs7OztLQUNkOzs7Ozs7SUFFWSxvQ0FBVzs7Ozs7SUFBeEIsVUFBeUIsRUFBVSxFQUFFLGFBQXFCOzs7OzRCQUMvQyxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBWSxJQUFJLENBQUMsSUFBSSxJQUFHLGtCQUFnQixFQUFFLFNBQUksYUFBYSxNQUFHLENBQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzRCQUFyRyxzQkFBTyxTQUE4RixFQUFDOzs7O0tBQ3pHOztnQkF0RUosVUFBVTs7OztnQkFUSCxVQUFVOztJQStGbEIscUJBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXJGWSxjQUFjOzs7SUFDdkIsOEJBQThCOztJQUM5QixzQ0FBd0I7O0lBQ3hCLGdDQU1FOztJQUNGLGtDQU1FOztJQUNGLHNDQU1FOztJQUNGLG9DQUEwQjs7Ozs7SUFFZCw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmZ1bmN0aW9uIHJvbGxDYXRhbG9nKGVhY2gpIHtcclxuICAgIGlmIChlYWNoLmNoaWxkX2NhdGFsb2cgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGVhY2guY2hpbGRfY2F0YWxvZyA9IGVhY2guY2hpbGRfY2F0YWxvZy5tYXAocm9sbENhdGFsb2cpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBDYXRhbG9nKGVhY2gpO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRzU2VydmljZSB7XHJcbiAgICBob3N0ID0gJ2h0dHA6Ly80Ny4xMTAuMjI0LjcxJztcclxuICAgIHJvb3RfY2F0YWxvZzogQ2F0YWxvZ1tdO1xyXG4gICAgcGFyZW50OiB7XHJcbiAgICAgICAgY2F0YWxvZzogQ2F0YWxvZ1tdLFxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3Q6IG51bWJlcltdLFxyXG4gICAgfSA9IHtcclxuICAgICAgICBjYXRhbG9nOiBbXSxcclxuICAgICAgICBpbmRleGVzT2ZSb290OiBbMF0sIC8vIHN0YWNrIOeItuWxgue6p+ebuOWvuXJvb3TlsYLnuqfnmoRpbmRleFxyXG4gICAgfTtcclxuICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgY2F0YWxvZzogQ2F0YWxvZ1tdLFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGNhdGFsb2c6IFtdLFxyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgfTtcclxuICAgIGZvY3VzQ29udGVudDoge1xyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZWw6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgfSA9IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgIH07XHJcbiAgICBhbHJlYWR5QWRkOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWN0aW9uKCk6IENhdGFsb2cge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkLmNhdGFsb2dbdGhpcy5zZWxlY3RlZC5pbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENvbnRlbnQoaXRlbT86IENhdGFsb2cpIHtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9IHRoaXMuc2VjdGlvbjtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBzZWN0aW9uID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRfY29udGVudChzZWN0aW9uLmlkLCAnVHJ1ZScpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlY3Rpb24gY29udGVudCcsIGpzb25bMF0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWN0aW9uLnBhcmFncmFwaHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLnBhcmFncmFwaHMgPSBqc29uWzBdLnBhcmFncmFwaHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRQYWdlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5zZWxlY3RlZC5pbmRleCArIDE7XHJcbiAgICAgICAgaWYgKG5leHRJbmRleCA+PSB0aGlzLnNlbGVjdGVkLmNhdGFsb2cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuY2F0YWxvZyA9IHRoaXMucGFyZW50LmNhdGFsb2c7XHJcbiAgICAgICAgICAgIG5leHRJbmRleCA9IHRoaXMucGFyZW50LmluZGV4ZXNPZlJvb3QucG9wKCkgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnbmV4dCBpbmRleCcsIG5leHRJbmRleCwgdGhpcy5zZWxlY3RlZC5jYXRhbG9nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZC5jYXRhbG9nW25leHRJbmRleF0uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dENvbnRlbnRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRfY2F0ZWxvZyhpZDogbnVtYmVyLCBkZWdyZWU6IG51bWJlcik6IFByb21pc2U8Q2F0YWxvZ1tdPiB7XHJcbiAgICAgICAgbGV0IHJldCA9IGF3YWl0IHRoaXMuaHR0cC5nZXQ8Q2F0YWxvZ1tdPih0aGlzLmhvc3QgKyBgL2dldF9jYXRhbG9ncy8ke2lkfS8ke2RlZ3JlZX0vYCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgcmV0ID0gcmV0Lm1hcChyb2xsQ2F0YWxvZyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2NvbnRlbnQoaWQ6IG51bWJlciwgY2hpbGRfY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwLmdldDxDYXRhbG9nW10+KHRoaXMuaG9zdCArIGAvZ2V0X2NoYXB0ZXIvJHtpZH0vJHtjaGlsZF9jb250ZW50fS9gKS50b1Byb21pc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZ2V0X2pzb25fZGF0YShuYW1lOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAvLyAgICAgICAgIC5nZXQoJ2Fzc2V0cy9kYXRhLycgKyBuYW1lICsgJy5qc29uJylcclxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBjYXRlbG9ncyA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBjYXRlbG9ncztcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcignQXBpU2VydmljZTo6aGFuZGxlRXJyb3InLCBlcnJvcik7XHJcbiAgICAvLyAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==