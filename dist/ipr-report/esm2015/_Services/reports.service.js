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
export class ReportsService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
    /**
     * @return {?}
     */
    get section() {
        return this.selected.catalog[this.selected.index];
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    loadContent(item) {
        /** @type {?} */
        let section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then((/**
         * @param {?} json
         * @return {?}
         */
        json => {
            console.log('section content', json[0]);
            if (!section.paragraphs) {
                section.paragraphs = json[0].paragraphs;
            }
        }));
    }
    /**
     * @return {?}
     */
    nextPageId() {
        /** @type {?} */
        let nextIndex = this.selected.index + 1;
        if (nextIndex >= this.selected.catalog.length) {
            this.selected.catalog = this.parent.catalog;
            nextIndex = this.parent.indexesOfRoot.pop() + 1;
        }
        console.log('next index', nextIndex, this.selected.catalog);
        return this.selected.catalog[nextIndex].id;
    }
    /**
     * @return {?}
     */
    nextContentId() {
        return 0;
    }
    /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    get_catelog(id, degree) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let ret = yield this.http.get(this.host + `/get_catalogs/${id}/${degree}/`).toPromise();
            ret = ret.map(rollCatalog);
            return ret;
        });
    }
    /**
     * @param {?} id
     * @param {?} child_content
     * @return {?}
     */
    get_content(id, child_content) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(this.host + `/get_chapter/${id}/${child_content}/`).toPromise();
        });
    }
}
ReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportsService.ctorParameters = () => [
    { type: HttpClient }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbIl9TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRWhELFNBQVMsV0FBVyxDQUFDLElBQUk7SUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxZQUFZLEtBQUssRUFBRTtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBR0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUEwQnZCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUF6QnBDLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztRQUU5QixXQUFNLEdBR0Y7WUFDQSxPQUFPLEVBQUUsRUFBRTtZQUNYLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUdKO1lBQ0EsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixpQkFBWSxHQUdSO1lBQ0EsS0FBSyxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFDRixlQUFVLEdBQWEsRUFBRSxDQUFDO0lBRzFCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBYzs7WUFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzFCLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7YUFDL0IsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRUQsVUFBVTs7WUFDRixTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUN2QyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDNUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFWSxXQUFXLENBQUMsRUFBVSxFQUFFLE1BQWM7OztnQkFDM0MsR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsRUFBRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQ2xHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQztLQUFBOzs7Ozs7SUFFWSxXQUFXLENBQUMsRUFBVSxFQUFFLGFBQXFCOztZQUN0RCxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVksSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUcsQ0FBQztLQUFBOzs7WUF0RUosVUFBVTs7OztZQVRILFVBQVU7Ozs7SUFXZCw4QkFBOEI7O0lBQzlCLHNDQUF3Qjs7SUFDeEIsZ0NBTUU7O0lBQ0Ysa0NBTUU7O0lBQ0Ysc0NBTUU7O0lBQ0Ysb0NBQTBCOzs7OztJQUVkLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2F0YWxvZ30gZnJvbSAnLi4vX0NsYXNzZXMvQ2F0YWxvZy5jbGFzcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZnVuY3Rpb24gcm9sbENhdGFsb2coZWFjaCkge1xyXG4gICAgaWYgKGVhY2guY2hpbGRfY2F0YWxvZyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgZWFjaC5jaGlsZF9jYXRhbG9nID0gZWFjaC5jaGlsZF9jYXRhbG9nLm1hcChyb2xsQ2F0YWxvZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IENhdGFsb2coZWFjaCk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNTZXJ2aWNlIHtcclxuICAgIGhvc3QgPSAnaHR0cDovLzQ3LjExMC4yMjQuNzEnO1xyXG4gICAgcm9vdF9jYXRhbG9nOiBDYXRhbG9nW107XHJcbiAgICBwYXJlbnQ6IHtcclxuICAgICAgICBjYXRhbG9nOiBDYXRhbG9nW10sXHJcbiAgICAgICAgaW5kZXhlc09mUm9vdDogbnVtYmVyW10sXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGNhdGFsb2c6IFtdLFxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3Q6IFswXSwgLy8gc3RhY2sg54i25bGC57qn55u45a+5cm9vdOWxgue6p+eahGluZGV4XHJcbiAgICB9O1xyXG4gICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICBjYXRhbG9nOiBDYXRhbG9nW10sXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgIH0gPSB7XHJcbiAgICAgICAgY2F0YWxvZzogW10sXHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICB9O1xyXG4gICAgZm9jdXNDb250ZW50OiB7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBlbDogSFRNTERpdkVsZW1lbnQsXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIGVsOiBudWxsLFxyXG4gICAgfTtcclxuICAgIGFscmVhZHlBZGQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY3Rpb24oKTogQ2F0YWxvZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQuY2F0YWxvZ1t0aGlzLnNlbGVjdGVkLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ29udGVudChpdGVtPzogQ2F0YWxvZykge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24gPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldF9jb250ZW50KHNlY3Rpb24uaWQsICdUcnVlJylcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VjdGlvbiBjb250ZW50JywganNvblswXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlY3Rpb24ucGFyYWdyYXBocykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ucGFyYWdyYXBocyA9IGpzb25bMF0ucGFyYWdyYXBocztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFBhZ2VJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnNlbGVjdGVkLmluZGV4ICsgMTtcclxuICAgICAgICBpZiAobmV4dEluZGV4ID49IHRoaXMuc2VsZWN0ZWQuY2F0YWxvZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5jYXRhbG9nID0gdGhpcy5wYXJlbnQuY2F0YWxvZztcclxuICAgICAgICAgICAgbmV4dEluZGV4ID0gdGhpcy5wYXJlbnQuaW5kZXhlc09mUm9vdC5wb3AoKSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXh0IGluZGV4JywgbmV4dEluZGV4LCB0aGlzLnNlbGVjdGVkLmNhdGFsb2cpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkLmNhdGFsb2dbbmV4dEluZGV4XS5pZDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0Q29udGVudElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldF9jYXRlbG9nKGlkOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgICAgICBsZXQgcmV0ID0gYXdhaXQgdGhpcy5odHRwLmdldDxDYXRhbG9nW10+KHRoaXMuaG9zdCArIGAvZ2V0X2NhdGFsb2dzLyR7aWR9LyR7ZGVncmVlfS9gKS50b1Byb21pc2UoKTtcclxuICAgICAgICByZXQgPSByZXQubWFwKHJvbGxDYXRhbG9nKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRfY29udGVudChpZDogbnVtYmVyLCBjaGlsZF9jb250ZW50OiBzdHJpbmcpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmh0dHAuZ2V0PENhdGFsb2dbXT4odGhpcy5ob3N0ICsgYC9nZXRfY2hhcHRlci8ke2lkfS8ke2NoaWxkX2NvbnRlbnR9L2ApLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBnZXRfanNvbl9kYXRhKG5hbWU6IHN0cmluZykge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgIC8vICAgICAgICAgLmdldCgnYXNzZXRzL2RhdGEvJyArIG5hbWUgKyAnLmpzb24nKVxyXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGNhdGVsb2dzID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGNhdGVsb2dzO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKCdBcGlTZXJ2aWNlOjpoYW5kbGVFcnJvcicsIGVycm9yKTtcclxuICAgIC8vICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19