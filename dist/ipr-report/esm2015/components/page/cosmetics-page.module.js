import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmeticsPageComponent } from './cosmetics-page.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbButtonModule, NbTreeGridModule } from '@nebular/theme';
import { TableComponent } from './table/table.component';
import { ParagraphPlaceholderComponent } from './paragraph-placeholder/paragraph-placeholder.component';
let CosmeticsPageModule = class CosmeticsPageModule {
};
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
export { CosmeticsPageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBb0J0RyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUMvQixDQUFBO0FBRFksbUJBQW1CO0lBbEIvQixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDVixrQkFBa0I7WUFDbEIsNkJBQTZCO1lBQzdCLHNCQUFzQjtZQUN0QixjQUFjO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsY0FBYztTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNMLHNCQUFzQjtZQUN0QixjQUFjO1NBQ2pCO0tBQ0osQ0FBQztHQUNXLG1CQUFtQixDQUMvQjtTQURZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtDb3NtZXRpY3NQYWdlQ29tcG9uZW50fSBmcm9tICcuL2Nvc21ldGljcy1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFyYWdyYXBoQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC9wYXJhZ3JhcGguY29tcG9uZW50JztcclxuaW1wb3J0IHtOZ3hFY2hhcnRzTW9kdWxlfSBmcm9tICduZ3gtZWNoYXJ0cyc7XHJcbmltcG9ydCB7TmJCdXR0b25Nb2R1bGUsIE5iVHJlZUdyaWRNb2R1bGV9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhcmFncmFwaFBsYWNlaG9sZGVyQ29tcG9uZW50fSBmcm9tICcuL3BhcmFncmFwaC1wbGFjZWhvbGRlci9wYXJhZ3JhcGgtcGxhY2Vob2xkZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQYXJhZ3JhcGhDb21wb25lbnQsXHJcbiAgICAgICAgUGFyYWdyYXBoUGxhY2Vob2xkZXJDb21wb25lbnQsXHJcbiAgICAgICAgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCxcclxuICAgICAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5neEVjaGFydHNNb2R1bGUsXHJcbiAgICAgICAgTmJUcmVlR3JpZE1vZHVsZSxcclxuICAgICAgICBOYkJ1dHRvbk1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCxcclxuICAgICAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc1BhZ2VNb2R1bGUge1xyXG59XHJcbiJdfQ==