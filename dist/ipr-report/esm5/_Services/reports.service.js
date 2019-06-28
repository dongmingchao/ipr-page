/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Catalog } from '../_Classes/Catalog.class';
import { IprReportBackend } from '../_Interface/backend.service';
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
    function ReportsService(bes) {
        this.bes = bes;
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
            console.log('section content', json);
            if (!section.paragraphs) {
                section.paragraphs = json.paragraphs;
            }
        }));
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
                    case 0: return [4 /*yield*/, this.bes.get_catelog(id, degree)];
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
                return [2 /*return*/, this.bes.get_content(id, child_content)];
            });
        });
    };
    ReportsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ReportsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [IprReportBackend,] }] }
    ]; };
    return ReportsService;
}());
export { ReportsService };
if (false) {
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
    ReportsService.prototype.bes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbIl9TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFpQixnQkFBZ0IsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQUUvRSxTQUFTLFdBQVcsQ0FBQyxJQUFJO0lBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLEVBQUU7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1RDtJQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVEO0lBMEJJLHdCQUE4QyxHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQXZCakUsV0FBTSxHQUdGO1lBQ0EsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckIsQ0FBQztRQUNGLGFBQVEsR0FHSjtZQUNBLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsaUJBQVksR0FHUjtZQUNBLEtBQUssRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBQ0YsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQUcxQixDQUFDO0lBRUQsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTs7Ozs7SUFFRCxvQ0FBVzs7OztJQUFYLFVBQVksSUFBYzs7WUFDbEIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1FBQzFCLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7YUFDL0IsSUFBSTs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7O0lBRVksb0NBQVc7Ozs7O0lBQXhCLFVBQXlCLEVBQVUsRUFBRSxNQUFjOzs7Ozs0QkFDckMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNoRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDM0Isc0JBQU8sR0FBRyxFQUFDOzs7O0tBQ2Q7Ozs7OztJQUVZLG9DQUFXOzs7OztJQUF4QixVQUF5QixFQUFVLEVBQUUsYUFBcUI7OztnQkFDdEQsc0JBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFDOzs7S0FDbEQ7O2dCQXZESixVQUFVOzs7O2dEQTBCTSxNQUFNLFNBQUMsZ0JBQWdCOztJQThCeEMscUJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXZEWSxjQUFjOzs7SUFDdkIsc0NBQXdCOztJQUN4QixnQ0FNRTs7SUFDRixrQ0FNRTs7SUFDRixzQ0FNRTs7SUFDRixvQ0FBMEI7Ozs7O0lBRWQsNkJBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBJcHJSZXBvcnRCYWNrZW5kfSBmcm9tICcuLi9fSW50ZXJmYWNlL2JhY2tlbmQuc2VydmljZSc7XHJcblxyXG5mdW5jdGlvbiByb2xsQ2F0YWxvZyhlYWNoKSB7XHJcbiAgICBpZiAoZWFjaC5jaGlsZF9jYXRhbG9nIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBlYWNoLmNoaWxkX2NhdGFsb2cgPSBlYWNoLmNoaWxkX2NhdGFsb2cubWFwKHJvbGxDYXRhbG9nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQ2F0YWxvZyhlYWNoKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0c1NlcnZpY2Uge1xyXG4gICAgcm9vdF9jYXRhbG9nOiBDYXRhbG9nW107XHJcbiAgICBwYXJlbnQ6IHtcclxuICAgICAgICBjYXRhbG9nOiBDYXRhbG9nW10sXHJcbiAgICAgICAgaW5kZXhlc09mUm9vdDogbnVtYmVyW10sXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGNhdGFsb2c6IFtdLFxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3Q6IFswXSwgLy8gc3RhY2sg54i25bGC57qn55u45a+5cm9vdOWxgue6p+eahGluZGV4XHJcbiAgICB9O1xyXG4gICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICBjYXRhbG9nOiBDYXRhbG9nW10sXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgIH0gPSB7XHJcbiAgICAgICAgY2F0YWxvZzogW10sXHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICB9O1xyXG4gICAgZm9jdXNDb250ZW50OiB7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBlbDogSFRNTERpdkVsZW1lbnQsXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIGVsOiBudWxsLFxyXG4gICAgfTtcclxuICAgIGFscmVhZHlBZGQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChJcHJSZXBvcnRCYWNrZW5kKSBwcml2YXRlIGJlczogQmFja2VuZFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VjdGlvbigpOiBDYXRhbG9nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZC5jYXRhbG9nW3RoaXMuc2VsZWN0ZWQuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDb250ZW50KGl0ZW0/OiBDYXRhbG9nKSB7XHJcbiAgICAgICAgbGV0IHNlY3Rpb24gPSB0aGlzLnNlY3Rpb247XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgc2VjdGlvbiA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0X2NvbnRlbnQoc2VjdGlvbi5pZCwgJ1RydWUnKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWN0aW9uIGNvbnRlbnQnLCBqc29uKTtcclxuICAgICAgICAgICAgICAgIGlmICghc2VjdGlvbi5wYXJhZ3JhcGhzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5wYXJhZ3JhcGhzID0ganNvbi5wYXJhZ3JhcGhzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2NhdGVsb2coaWQ6IG51bWJlciwgZGVncmVlOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgICAgIGxldCByZXQgPSBhd2FpdCB0aGlzLmJlcy5nZXRfY2F0ZWxvZyhpZCwgZGVncmVlKTtcclxuICAgICAgICByZXQgPSByZXQubWFwKHJvbGxDYXRhbG9nKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRfY29udGVudChpZDogbnVtYmVyLCBjaGlsZF9jb250ZW50OiBzdHJpbmcpOiBQcm9taXNlPENhdGFsb2c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iZXMuZ2V0X2NvbnRlbnQoaWQsIGNoaWxkX2NvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==