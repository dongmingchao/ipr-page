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
        exports: [
            CosmeticsPageComponent,
            TableComponent,
        ]
    })
], CosmeticsPageModule);
export { CosmeticsPageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWV0aWNzLXBhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9jb3NtZXRpY3MtcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFrQnZELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBQy9CLENBQUE7QUFEWSxtQkFBbUI7SUFoQi9CLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLGtCQUFrQjtZQUNsQixzQkFBc0I7WUFDdEIsY0FBYztTQUNqQjtRQUNELE9BQU8sRUFBRTtZQUNMLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsc0JBQXNCO1lBQ3RCLGNBQWM7U0FDakI7S0FDSixDQUFDO0dBQ1csbUJBQW1CLENBQy9CO1NBRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0Nvc21ldGljc1BhZ2VDb21wb25lbnR9IGZyb20gJy4vY29zbWV0aWNzLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtQYXJhZ3JhcGhDb21wb25lbnR9IGZyb20gJy4vcGFyYWdyYXBoL3BhcmFncmFwaC5jb21wb25lbnQnO1xyXG5pbXBvcnQge05neEVjaGFydHNNb2R1bGV9IGZyb20gJ25neC1lY2hhcnRzJztcclxuaW1wb3J0IHtOYlRyZWVHcmlkTW9kdWxlfSBmcm9tICdAbmVidWxhci90aGVtZSc7XHJcbmltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQYXJhZ3JhcGhDb21wb25lbnQsXHJcbiAgICAgICAgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCxcclxuICAgICAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5neEVjaGFydHNNb2R1bGUsXHJcbiAgICAgICAgTmJUcmVlR3JpZE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgQ29zbWV0aWNzUGFnZUNvbXBvbmVudCxcclxuICAgICAgICBUYWJsZUNvbXBvbmVudCxcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvc21ldGljc1BhZ2VNb2R1bGUge1xyXG59XHJcbiJdfQ==