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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQ7SUFBQTtJQWErQixDQUFDOztnQkFiL0IsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViw0QkFBNEI7d0JBQzVCLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ25CO29CQUNELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOztJQUM4QixzQkFBQztDQUFBLEFBYmhDLElBYWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9vdXRsaW5lLWJhci9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7Q29zbWV0aWNzRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2RldGFpbC9jb3NtZXRpY3MtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Nvc21ldGljc1BhZ2VNb2R1bGV9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudCxcbiAgICAgICAgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIENvc21ldGljc1BhZ2VNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtSZXBvcnRzU2VydmljZV0sXG4gICAgZXhwb3J0czogW0Nvc21ldGljc0RldGFpbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSXByUmVwb3J0TW9kdWxlIHsgfVxuIl19