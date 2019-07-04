import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsOutlineBarComponent } from '../components/outline-bar/cosmetics-outline-bar.component';
import { CosmeticsDetailComponent } from '../components/detail/cosmetics-detail.component';
import { CosmeticsPageModule } from '../components/page/cosmetics-page.module';
import { ReportsService } from '../_Services/reports.service';
import { TableComponent } from '../components/page/table/table.component';
let IprReportModule = class IprReportModule {
};
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
        exports: [
            CosmeticsDetailComponent,
            TableComponent,
        ]
    })
], IprReportModule);
export { IprReportModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBaUJ4RSxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUksQ0FBQTtBQUFuQixlQUFlO0lBZjNCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUE0QjtZQUM1Qix3QkFBd0I7U0FDM0I7UUFDRCxPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzNCLE9BQU8sRUFBRTtZQUNMLHdCQUF3QjtZQUN4QixjQUFjO1NBQ2pCO0tBQ0osQ0FBQztHQUNXLGVBQWUsQ0FBSTtTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL291dGxpbmUtYmFyL2Nvc21ldGljcy1vdXRsaW5lLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nvc21ldGljc0RldGFpbENvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9kZXRhaWwvY29zbWV0aWNzLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nvc21ldGljc1BhZ2VNb2R1bGV9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUnO1xyXG5pbXBvcnQge1JlcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi9fU2VydmljZXMvcmVwb3J0cy5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29zbWV0aWNzT3V0bGluZUJhckNvbXBvbmVudCxcclxuICAgICAgICBDb3NtZXRpY3NEZXRhaWxDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDb3NtZXRpY3NQYWdlTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1JlcG9ydHNTZXJ2aWNlXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBDb3NtZXRpY3NEZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJcHJSZXBvcnRNb2R1bGUgeyB9XHJcbiJdfQ==