import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsPageComponent } from './cosmetics-page.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbTreeGridModule } from '@nebular/theme';
import { TableComponent } from './table/table.component';
import { ParagraphPlaceholderComponent } from './paragraph-placeholder/paragraph-placeholder.component';
var CosmeticsPageModule = /** @class */ (function () {
    function CosmeticsPageModule() {
    }
    CosmeticsPageModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ParagraphComponent,
                ParagraphPlaceholderComponent,
                CosmeticsPageComponent,
                TableComponent,
            ],
            imports: [
                CommonModule,
                NgxEchartsModule,
                NbTreeGridModule,
            ],
            exports: [
                CosmeticsPageComponent,
                TableComponent,
            ]
        })
    ], CosmeticsPageModule);
    return CosmeticsPageModule;
}());
export { CosmeticsPageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0seURBQXlELENBQUM7QUFtQnRHO0lBQUE7SUFDQSxDQUFDO0lBRFksbUJBQW1CO1FBakIvQixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1Ysa0JBQWtCO2dCQUNsQiw2QkFBNkI7Z0JBQzdCLHNCQUFzQjtnQkFDdEIsY0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsZ0JBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHNCQUFzQjtnQkFDdEIsY0FBYzthQUNqQjtTQUNKLENBQUM7T0FDVyxtQkFBbUIsQ0FDL0I7SUFBRCwwQkFBQztDQUFBLEFBREQsSUFDQztTQURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtDb3NtZXRpY3NQYWdlQ29tcG9uZW50fSBmcm9tICcuL2Nvc21ldGljcy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFyYWdyYXBoQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50JztcclxuaW1wb3J0IHtOZ3hFY2hhcnRzTW9kdWxlfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcbmltcG9ydCB7TmJUcmVlR3JpZE1vZHVsZX0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xyXG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFyYWdyYXBoUGxhY2Vob2xkZXJDb21wb25lbnR9IGZyb20gJy4vcGFyYWdyYXBoLXBsYWNlaG9sZGVyL3BhcmFncmFwaC1wbGFjZWhvbGRlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBhcmFncmFwaENvbXBvbmVudCxcclxuICAgICAgICBQYXJhZ3JhcGhQbGFjZWhvbGRlckNvbXBvbmVudCxcclxuICAgICAgICBDb3NtZXRpY3NQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmd4RWNoYXJ0c01vZHVsZSxcclxuICAgICAgICBOYlRyZWVHcmlkTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBDb3NtZXRpY3NQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzUGFnZU1vZHVsZSB7XHJcbn1cclxuIl19