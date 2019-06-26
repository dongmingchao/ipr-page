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
export class ReportsService {
    /**
     * @param {?} bes
     */
    constructor(bes) {
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
            console.log('section content', json);
            if (!section.paragraphs) {
                section.paragraphs = json.paragraphs;
            }
        }));
    }
    /**
     * @param {?} id
     * @param {?} degree
     * @return {?}
     */
    get_catelog(id, degree) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let ret = yield this.bes.get_catelog(id, degree);
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
            return this.bes.get_content(id, child_content);
        });
    }
}
ReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [IprReportBackend,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbIl9TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFpQixnQkFBZ0IsRUFBQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQUUvRSxTQUFTLFdBQVcsQ0FBQyxJQUFJO0lBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLEVBQUU7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1RDtJQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUdELE1BQU0sT0FBTyxjQUFjOzs7O0lBeUJ2QixZQUE4QyxHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQXZCakUsV0FBTSxHQUdGO1lBQ0EsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckIsQ0FBQztRQUNGLGFBQVEsR0FHSjtZQUNBLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsaUJBQVksR0FHUjtZQUNBLEtBQUssRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBQ0YsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQUcxQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQWM7O1lBQ2xCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztRQUMxQixJQUFJLElBQUksRUFBRTtZQUNOLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQy9CLElBQUk7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4QztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7O0lBRVksV0FBVyxDQUFDLEVBQVUsRUFBRSxNQUFjOzs7Z0JBQzNDLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7WUFDaEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDO0tBQUE7Ozs7OztJQUVZLFdBQVcsQ0FBQyxFQUFVLEVBQUUsYUFBcUI7O1lBQ3RELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTs7O1lBdkRKLFVBQVU7Ozs7NENBMEJNLE1BQU0sU0FBQyxnQkFBZ0I7Ozs7SUF4QnBDLHNDQUF3Qjs7SUFDeEIsZ0NBTUU7O0lBQ0Ysa0NBTUU7O0lBQ0Ysc0NBTUU7O0lBQ0Ysb0NBQTBCOzs7OztJQUVkLDZCQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtCYWNrZW5kU2VydmljZSwgSXByUmVwb3J0QmFja2VuZH0gZnJvbSAnLi4vX0ludGVyZmFjZS9iYWNrZW5kLnNlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gcm9sbENhdGFsb2coZWFjaCkge1xyXG4gICAgaWYgKGVhY2guY2hpbGRfY2F0YWxvZyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgZWFjaC5jaGlsZF9jYXRhbG9nID0gZWFjaC5jaGlsZF9jYXRhbG9nLm1hcChyb2xsQ2F0YWxvZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IENhdGFsb2coZWFjaCk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNTZXJ2aWNlIHtcclxuICAgIHJvb3RfY2F0YWxvZzogQ2F0YWxvZ1tdO1xyXG4gICAgcGFyZW50OiB7XHJcbiAgICAgICAgY2F0YWxvZzogQ2F0YWxvZ1tdLFxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3Q6IG51bWJlcltdLFxyXG4gICAgfSA9IHtcclxuICAgICAgICBjYXRhbG9nOiBbXSxcclxuICAgICAgICBpbmRleGVzT2ZSb290OiBbMF0sIC8vIHN0YWNrIOeItuWxgue6p+ebuOWvuXJvb3TlsYLnuqfnmoRpbmRleFxyXG4gICAgfTtcclxuICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgY2F0YWxvZzogQ2F0YWxvZ1tdLFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGNhdGFsb2c6IFtdLFxyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgfTtcclxuICAgIGZvY3VzQ29udGVudDoge1xyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZWw6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgfSA9IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgIH07XHJcbiAgICBhbHJlYWR5QWRkOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSXByUmVwb3J0QmFja2VuZCkgcHJpdmF0ZSBiZXM6IEJhY2tlbmRTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY3Rpb24oKTogQ2F0YWxvZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQuY2F0YWxvZ1t0aGlzLnNlbGVjdGVkLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ29udGVudChpdGVtPzogQ2F0YWxvZykge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24gPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldF9jb250ZW50KHNlY3Rpb24uaWQsICdUcnVlJylcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VjdGlvbiBjb250ZW50JywganNvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlY3Rpb24ucGFyYWdyYXBocykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ucGFyYWdyYXBocyA9IGpzb24ucGFyYWdyYXBocztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldF9jYXRlbG9nKGlkOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgICAgICBsZXQgcmV0ID0gYXdhaXQgdGhpcy5iZXMuZ2V0X2NhdGVsb2coaWQsIGRlZ3JlZSk7XHJcbiAgICAgICAgcmV0ID0gcmV0Lm1hcChyb2xsQ2F0YWxvZyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2NvbnRlbnQoaWQ6IG51bWJlciwgY2hpbGRfY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxDYXRhbG9nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVzLmdldF9jb250ZW50KGlkLCBjaGlsZF9jb250ZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=