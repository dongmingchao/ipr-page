import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsPageComponent } from './cosmetics-page.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbButtonModule, NbTreeGridModule } from '@nebular/theme';
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
                NbButtonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBb0J0RztJQUFBO0lBQ0EsQ0FBQztJQURZLG1CQUFtQjtRQWxCL0IsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGtCQUFrQjtnQkFDbEIsNkJBQTZCO2dCQUM3QixzQkFBc0I7Z0JBQ3RCLGNBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtnQkFDaEIsY0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxzQkFBc0I7Z0JBQ3RCLGNBQWM7YUFDakI7U0FDSixDQUFDO09BQ1csbUJBQW1CLENBQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhcmFncmFwaENvbXBvbmVudH0gZnJvbSAnLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tmd4RWNoYXJ0c01vZHVsZX0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQge05iQnV0dG9uTW9kdWxlLCBOYlRyZWVHcmlkTW9kdWxlfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtQYXJhZ3JhcGhQbGFjZWhvbGRlckNvbXBvbmVudH0gZnJvbSAnLi9wYXJhZ3JhcGgtcGxhY2Vob2xkZXIvcGFyYWdyYXBoLXBsYWNlaG9sZGVyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUGFyYWdyYXBoQ29tcG9uZW50LFxyXG4gICAgICAgIFBhcmFncmFwaFBsYWNlaG9sZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIENvc21ldGljc1BhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOZ3hFY2hhcnRzTW9kdWxlLFxyXG4gICAgICAgIE5iVHJlZUdyaWRNb2R1bGUsXHJcbiAgICAgICAgTmJCdXR0b25Nb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIENvc21ldGljc1BhZ2VDb21wb25lbnQsXHJcbiAgICAgICAgVGFibGVDb21wb25lbnQsXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3NtZXRpY3NQYWdlTW9kdWxlIHtcclxufVxyXG4iXX0=