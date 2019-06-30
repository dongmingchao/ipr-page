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
let ReportsService = class ReportsService {
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
    get section() {
        return this.selected.catalog[this.selected.index];
    }
    loadContent(item) {
        let section = this.section;
        if (item) {
            section = item;
        }
        this.get_content(section.id, 'True')
            .then(json => {
            console.log('section content', json);
            if (!section.paragraphs) {
                section.paragraphs = json.paragraphs;
            }
        });
    }
    get_catelog(id, degree) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let ret = yield this.bes.get_catelog(id, degree);
            ret = ret.map(rollCatalog);
            return ret;
        });
    }
    get_content(id, child_content) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.bes.get_content(id, child_content);
        });
    }
};
ReportsService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(0, Inject(IprReportBackend)),
    tslib_1.__metadata("design:paramtypes", [Object])
], ReportsService);
export { ReportsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbIl9TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQWlCLGdCQUFnQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFL0UsU0FBUyxXQUFXLENBQUMsSUFBSTtJQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLFlBQVksS0FBSyxFQUFFO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDNUQ7SUFDRCxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFHRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBeUJ2QixZQUE4QyxHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQXZCakUsV0FBTSxHQUdGO1lBQ0EsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckIsQ0FBQztRQUNGLGFBQVEsR0FHSjtZQUNBLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsaUJBQVksR0FHUjtZQUNBLEtBQUssRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLElBQUk7U0FDWCxDQUFDO1FBQ0YsZUFBVSxHQUFhLEVBQUUsQ0FBQztJQUcxQixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1AsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYztRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7YUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRVksV0FBVyxDQUFDLEVBQVUsRUFBRSxNQUFjOztZQUMvQyxJQUFJLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxFQUFVLEVBQUUsYUFBcUI7O1lBQ3RELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtDQUNKLENBQUE7QUF2RFksY0FBYztJQUQxQixVQUFVLEVBQUU7SUEwQkksbUJBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7O0dBekI1QixjQUFjLENBdUQxQjtTQXZEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NhdGFsb2d9IGZyb20gJy4uL19DbGFzc2VzL0NhdGFsb2cuY2xhc3MnO1xyXG5pbXBvcnQge0JhY2tlbmRTZXJ2aWNlLCBJcHJSZXBvcnRCYWNrZW5kfSBmcm9tICcuLi9fSW50ZXJmYWNlL2JhY2tlbmQuc2VydmljZSc7XHJcblxyXG5mdW5jdGlvbiByb2xsQ2F0YWxvZyhlYWNoKSB7XHJcbiAgICBpZiAoZWFjaC5jaGlsZF9jYXRhbG9nIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBlYWNoLmNoaWxkX2NhdGFsb2cgPSBlYWNoLmNoaWxkX2NhdGFsb2cubWFwKHJvbGxDYXRhbG9nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgQ2F0YWxvZyhlYWNoKTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0c1NlcnZpY2Uge1xyXG4gICAgcm9vdF9jYXRhbG9nOiBDYXRhbG9nW107XHJcbiAgICBwYXJlbnQ6IHtcclxuICAgICAgICBjYXRhbG9nOiBDYXRhbG9nW10sXHJcbiAgICAgICAgaW5kZXhlc09mUm9vdDogbnVtYmVyW10sXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGNhdGFsb2c6IFtdLFxyXG4gICAgICAgIGluZGV4ZXNPZlJvb3Q6IFswXSwgLy8gc3RhY2sg54i25bGC57qn55u45a+5cm9vdOWxgue6p+eahGluZGV4XHJcbiAgICB9O1xyXG4gICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICBjYXRhbG9nOiBDYXRhbG9nW10sXHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgIH0gPSB7XHJcbiAgICAgICAgY2F0YWxvZzogW10sXHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICB9O1xyXG4gICAgZm9jdXNDb250ZW50OiB7XHJcbiAgICAgICAgaW5kZXg6IG51bWJlcixcclxuICAgICAgICBlbDogSFRNTERpdkVsZW1lbnQsXHJcbiAgICB9ID0ge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIGVsOiBudWxsLFxyXG4gICAgfTtcclxuICAgIGFscmVhZHlBZGQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChJcHJSZXBvcnRCYWNrZW5kKSBwcml2YXRlIGJlczogQmFja2VuZFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VjdGlvbigpOiBDYXRhbG9nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZC5jYXRhbG9nW3RoaXMuc2VsZWN0ZWQuaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDb250ZW50KGl0ZW0/OiBDYXRhbG9nKSB7XHJcbiAgICAgICAgbGV0IHNlY3Rpb24gPSB0aGlzLnNlY3Rpb247XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgc2VjdGlvbiA9IGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0X2NvbnRlbnQoc2VjdGlvbi5pZCwgJ1RydWUnKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWN0aW9uIGNvbnRlbnQnLCBqc29uKTtcclxuICAgICAgICAgICAgICAgIGlmICghc2VjdGlvbi5wYXJhZ3JhcGhzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbi5wYXJhZ3JhcGhzID0ganNvbi5wYXJhZ3JhcGhzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2NhdGVsb2coaWQ6IG51bWJlciwgZGVncmVlOiBudW1iZXIpOiBQcm9taXNlPENhdGFsb2dbXT4ge1xyXG4gICAgICAgIGxldCByZXQgPSBhd2FpdCB0aGlzLmJlcy5nZXRfY2F0ZWxvZyhpZCwgZGVncmVlKTtcclxuICAgICAgICByZXQgPSByZXQubWFwKHJvbGxDYXRhbG9nKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRfY29udGVudChpZDogbnVtYmVyLCBjaGlsZF9jb250ZW50OiBzdHJpbmcpOiBQcm9taXNlPENhdGFsb2c+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iZXMuZ2V0X2NvbnRlbnQoaWQsIGNoaWxkX2NvbnRlbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==