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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFldEQsTUFBTSxPQUFPLGVBQWU7OztZQWIzQixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLDRCQUE0QjtvQkFDNUIsd0JBQXdCO2lCQUMzQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Q29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9vdXRsaW5lLWJhci9jb3NtZXRpY3Mtb3V0bGluZS1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3NtZXRpY3NEZXRhaWxDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvZGV0YWlsL2Nvc21ldGljcy1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3NtZXRpY3NQYWdlTW9kdWxlfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UvY29zbWV0aWNzLXBhZ2UubW9kdWxlJztcclxuaW1wb3J0IHtSZXBvcnRzU2VydmljZX0gZnJvbSAnLi4vX1NlcnZpY2VzL3JlcG9ydHMuc2VydmljZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENvc21ldGljc091dGxpbmVCYXJDb21wb25lbnQsXHJcbiAgICAgICAgQ29zbWV0aWNzRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQ29zbWV0aWNzUGFnZU1vZHVsZSxcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1JlcG9ydHNTZXJ2aWNlXSxcclxuICAgIGV4cG9ydHM6IFtDb3NtZXRpY3NEZXRhaWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJcHJSZXBvcnRNb2R1bGUgeyB9XHJcbiJdfQ==