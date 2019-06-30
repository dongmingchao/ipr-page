import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsOutlineBarComponent } from '../components/outline-bar/cosmetics-outline-bar.component';
import { CosmeticsDetailComponent } from '../components/detail/cosmetics-detail.component';
import { CosmeticsPageModule } from '../components/page/cosmetics-page.module';
import { ReportsService } from '../_Services/reports.service';
var IprReportModule = /** @class */ (function () {
    function IprReportModule() {
    }
    IprReportModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CosmeticsOutlineBarComponent,
                CosmeticsDetailComponent,
            ],
            imports: [
                CommonModule,
                CosmeticsPageModule,
            ],
            providers: [ReportsService],
            exports: [CosmeticsDetailComponent]
        })
    ], IprReportModule);
    return IprReportModule;
}());
export { IprReportModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFjNUQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFaM0IsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDRCQUE0QjtnQkFDNUIsd0JBQXdCO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osbUJBQW1CO2FBQ3RCO1lBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Nvc21ldGljc091dGxpbmVCYXJDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0bGluZS1iYXIvY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2RldGFpbC9jb3NtZXRpY3MtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZU1vZHVsZX0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL2Nvc21ldGljcy1wYWdlLm1vZHVsZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENvc21ldGljc091dGxpbmVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQ29zbWV0aWNzUGFnZU1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtSZXBvcnRzU2VydmljZV0sXHJcbiAgICBleHBvcnRzOiBbQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXByUmVwb3J0TW9kdWxlIHsgfVxyXG4iXX0=