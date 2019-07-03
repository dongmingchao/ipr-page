import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsPageComponent } from './cosmetics-page.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbTreeGridModule } from '@nebular/theme';
import { TableComponent } from './table/table.component';
let CosmeticsPageModule = class CosmeticsPageModule {
};
CosmeticsPageModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ParagraphComponent,
            CosmeticsPageComponent,
            TableComponent,
        ],
        imports: [
            CommonModule,
            NgxEchartsModule,
            NbTreeGridModule,
        ],
        exports: [CosmeticsPageComponent]
    })
], CosmeticsPageModule);
export { CosmeticsPageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFldkQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FDL0IsQ0FBQTtBQURZLG1CQUFtQjtJQWIvQixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixrQkFBa0I7WUFDbEIsc0JBQXNCO1lBQ3RCLGNBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGdCQUFnQjtTQUNuQjtRQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7R0FDVyxtQkFBbUIsQ0FDL0I7U0FEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Q29zbWV0aWNzUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9jb3NtZXRpY3MtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhcmFncmFwaENvbXBvbmVudH0gZnJvbSAnLi9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tmd4RWNoYXJ0c01vZHVsZX0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQge05iVHJlZUdyaWRNb2R1bGV9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBhcmFncmFwaENvbXBvbmVudCxcclxuICAgICAgICBDb3NtZXRpY3NQYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIFRhYmxlQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmd4RWNoYXJ0c01vZHVsZSxcclxuICAgICAgICBOYlRyZWVHcmlkTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtDb3NtZXRpY3NQYWdlQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29zbWV0aWNzUGFnZU1vZHVsZSB7XHJcbn1cclxuIl19