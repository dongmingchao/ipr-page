/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsOutlineBarComponent } from '../components/outline-bar/cosmetics-outline-bar.component';
import { CosmeticsDetailComponent } from '../components/detail/cosmetics-detail.component';
import { CosmeticsPageModule } from '../components/page/cosmetics-page.module';
import { ReportsService } from '../_Services/reports.service';
import { HttpClientModule } from '@angular/common/http';
var IprReportModule = /** @class */ (function () {
    function IprReportModule() {
    }
    IprReportModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CosmeticsOutlineBarComponent,
                        CosmeticsDetailComponent,
                    ],
                    imports: [
                        CommonModule,
                        CosmeticsPageModule,
                        HttpClientModule,
                    ],
                    providers: [ReportsService],
                    exports: [CosmeticsDetailComponent]
                },] }
    ];
    return IprReportModule;
}());
export { IprReportModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFBQTtJQWErQixDQUFDOztnQkFiL0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViw0QkFBNEI7d0JBQzVCLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOztJQUM4QixzQkFBQztDQUFBLEFBYmhDLElBYWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Nvc21ldGljc091dGxpbmVCYXJDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0bGluZS1iYXIvY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2RldGFpbC9jb3NtZXRpY3MtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZU1vZHVsZX0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL2Nvc21ldGljcy1wYWdlLm1vZHVsZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIENvc21ldGljc0RldGFpbENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIENvc21ldGljc1BhZ2VNb2R1bGUsXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtSZXBvcnRzU2VydmljZV0sXHJcbiAgICBleHBvcnRzOiBbQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXByUmVwb3J0TW9kdWxlIHsgfVxyXG4iXX0=