import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CosmeticsPageComponent} from './cosmetics-page.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {NbButtonModule, NbTreeGridModule} from '@nebular/theme';
import {TableComponent} from './table/table.component';
import {ParagraphPlaceholderComponent} from './paragraph-placeholder/paragraph-placeholder.component';

@NgModule({
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
export class CosmeticsPageModule {
}
