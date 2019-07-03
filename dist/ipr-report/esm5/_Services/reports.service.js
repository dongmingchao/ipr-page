import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Catalog } from '../_Classes/Catalog.class';
import { IprReportBackend } from '../_Interface/backend.service';
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
        get: function () {
            return this.selected.catalog[this.selected.index];
        },
        enumerable: true,
        configurable: true
    });
    ReportsService.prototype.loadContent = function (item) {
        var section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then(function (json) {
            console.log('section content', json);
            if (!section.paragraphs) {
                section.paragraphs = json.paragraphs;
            }
        });
    };
    ReportsService.prototype.get_catelog = function (id, degree) {
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
    ReportsService.prototype.get_content = function (id, child_content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bes.get_content(id, child_content)];
            });
        });
    };
    ReportsService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(IprReportBackend)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], ReportsService);
    return ReportsService;
}());
export { ReportsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbIl9TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQWlCLGdCQUFnQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFL0UsU0FBUyxXQUFXLENBQUMsSUFBSTtJQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLFlBQVksS0FBSyxFQUFFO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUQ7SUFDRCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFHRDtJQXlCSSx3QkFBOEMsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUF2QmpFLFdBQU0sR0FHRjtZQUNBLE9BQU8sRUFBRSxFQUFFO1lBQ1gsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JCLENBQUM7UUFDRixhQUFRLEdBR0o7WUFDQSxPQUFPLEVBQUUsRUFBRTtZQUNYLEtBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUNGLGlCQUFZLEdBR1I7WUFDQSxLQUFLLEVBQUUsQ0FBQztZQUNSLEVBQUUsRUFBRSxJQUFJO1NBQ1gsQ0FBQztRQUNGLGVBQVUsR0FBYSxFQUFFLENBQUM7SUFHMUIsQ0FBQztJQUVELHNCQUFJLG1DQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBYztRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVZLG9DQUFXLEdBQXhCLFVBQXlCLEVBQVUsRUFBRSxNQUFjOzs7Ozs0QkFDckMscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNoRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDM0Isc0JBQU8sR0FBRyxFQUFDOzs7O0tBQ2Q7SUFFWSxvQ0FBVyxHQUF4QixVQUF5QixFQUFVLEVBQUUsYUFBcUI7OztnQkFDdEQsc0JBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxFQUFDOzs7S0FDbEQ7SUF0RFEsY0FBYztRQUQxQixVQUFVLEVBQUU7UUEwQkksbUJBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7O09BekI1QixjQUFjLENBdUQxQjtJQUFELHFCQUFDO0NBQUEsQUF2REQsSUF1REM7U0F2RFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYXRhbG9nfSBmcm9tICcuLi9fQ2xhc3Nlcy9DYXRhbG9nLmNsYXNzJztcclxuaW1wb3J0IHtCYWNrZW5kU2VydmljZSwgSXByUmVwb3J0QmFja2VuZH0gZnJvbSAnLi4vX0ludGVyZmFjZS9iYWNrZW5kLnNlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gcm9sbENhdGFsb2coZWFjaCkge1xyXG4gICAgaWYgKGVhY2guY2hpbGRfY2F0YWxvZyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgZWFjaC5jaGlsZF9jYXRhbG9nID0gZWFjaC5jaGlsZF9jYXRhbG9nLm1hcChyb2xsQ2F0YWxvZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IENhdGFsb2coZWFjaCk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcG9ydHNTZXJ2aWNlIHtcclxuICAgIHJvb3RfY2F0YWxvZzogQ2F0YWxvZ1tdO1xyXG4gICAgcGFyZW50OiB7XHJcbiAgICAgICAgY2F0YWxvZzogQ2F0YWxvZ1tdLFxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3Q6IG51bWJlcltdLFxyXG4gICAgfSA9IHtcclxuICAgICAgICBjYXRhbG9nOiBbXSxcclxuICAgICAgICBpbmRleGVzT2ZSb290OiBbMF0sIC8vIHN0YWNrIOeItuWxgue6p+ebuOWvuXJvb3TlsYLnuqfnmoRpbmRleFxyXG4gICAgfTtcclxuICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgY2F0YWxvZzogQ2F0YWxvZ1tdLFxyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGNhdGFsb2c6IFtdLFxyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgfTtcclxuICAgIGZvY3VzQ29udGVudDoge1xyXG4gICAgICAgIGluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgZWw6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgfSA9IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICBlbDogbnVsbCxcclxuICAgIH07XHJcbiAgICBhbHJlYWR5QWRkOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSXByUmVwb3J0QmFja2VuZCkgcHJpdmF0ZSBiZXM6IEJhY2tlbmRTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY3Rpb24oKTogQ2F0YWxvZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQuY2F0YWxvZ1t0aGlzLnNlbGVjdGVkLmluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ29udGVudChpdGVtPzogQ2F0YWxvZykge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gdGhpcy5zZWN0aW9uO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24gPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldF9jb250ZW50KHNlY3Rpb24uaWQsICdUcnVlJylcclxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VjdGlvbiBjb250ZW50JywganNvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlY3Rpb24ucGFyYWdyYXBocykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ucGFyYWdyYXBocyA9IGpzb24ucGFyYWdyYXBocztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGdldF9jYXRlbG9nKGlkOiBudW1iZXIsIGRlZ3JlZTogbnVtYmVyKTogUHJvbWlzZTxDYXRhbG9nW10+IHtcclxuICAgICAgICBsZXQgcmV0ID0gYXdhaXQgdGhpcy5iZXMuZ2V0X2NhdGVsb2coaWQsIGRlZ3JlZSk7XHJcbiAgICAgICAgcmV0ID0gcmV0Lm1hcChyb2xsQ2F0YWxvZyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2NvbnRlbnQoaWQ6IG51bWJlciwgY2hpbGRfY29udGVudDogc3RyaW5nKTogUHJvbWlzZTxDYXRhbG9nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVzLmdldF9jb250ZW50KGlkLCBjaGlsZF9jb250ZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=