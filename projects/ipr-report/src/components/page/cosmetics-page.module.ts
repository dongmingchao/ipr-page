import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CosmeticsPageComponent} from './cosmetics-page.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {NbTreeGridModule} from '@nebular/theme';
import {TableComponent} from './table/table.component';

@NgModule({
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
export class CosmeticsPageModule {
}
