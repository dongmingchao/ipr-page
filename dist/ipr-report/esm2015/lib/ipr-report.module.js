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
export class IprReportModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFldEQsTUFBTSxPQUFPLGVBQWU7OztZQWIzQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLDRCQUE0QjtvQkFDNUIsd0JBQXdCO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtDb3NtZXRpY3NEZXRhaWxDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV0YWlsL2Nvc21ldGljcy1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7Q29zbWV0aWNzUGFnZU1vZHVsZX0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL2Nvc21ldGljcy1wYWdlLm1vZHVsZSc7XG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50LFxuICAgICAgICBDb3NtZXRpY3NEZXRhaWxDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29zbWV0aWNzUGFnZU1vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1JlcG9ydHNTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJcHJSZXBvcnRNb2R1bGUgeyB9XG4iXX0=