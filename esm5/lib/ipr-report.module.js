import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsOutlineBarComponent } from '../components/outline-bar/cosmetics-outline-bar.component';
import { CosmeticsDetailComponent } from '../components/detail/cosmetics-detail.component';
import { CosmeticsPageModule } from '../components/page/cosmetics-page.module';
import { ReportsService } from '../_Services/reports.service';
import { TableComponent } from '../components/page/table/table.component';
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
            exports: [
                CosmeticsDetailComponent,
                TableComponent,
            ]
        })
    ], IprReportModule);
    return IprReportModule;
}());
export { IprReportModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLXJlcG9ydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsibGliL2lwci1yZXBvcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBaUJ4RTtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQWYzQixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNEJBQTRCO2dCQUM1Qix3QkFBd0I7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixtQkFBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDM0IsT0FBTyxFQUFFO2dCQUNMLHdCQUF3QjtnQkFDeEIsY0FBYzthQUNqQjtTQUNKLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Nvc21ldGljc091dGxpbmVCYXJDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvb3V0bGluZS1iYXIvY29zbWV0aWNzLW91dGxpbmUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL2RldGFpbC9jb3NtZXRpY3MtZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZU1vZHVsZX0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL2Nvc21ldGljcy1wYWdlLm1vZHVsZSc7XHJcbmltcG9ydCB7UmVwb3J0c1NlcnZpY2V9IGZyb20gJy4uL19TZXJ2aWNlcy9yZXBvcnRzLnNlcnZpY2UnO1xyXG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDb3NtZXRpY3NPdXRsaW5lQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIENvc21ldGljc0RldGFpbENvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIENvc21ldGljc1BhZ2VNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbUmVwb3J0c1NlcnZpY2VdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvc21ldGljc0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElwclJlcG9ydE1vZHVsZSB7IH1cclxuIl19