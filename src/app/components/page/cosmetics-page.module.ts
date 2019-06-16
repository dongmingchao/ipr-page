import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CosmeticsPageComponent} from './cosmetics-page.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
    declarations: [
        ParagraphComponent,
        CosmeticsPageComponent,
    ],
    imports: [
        CommonModule,
        NgxEchartsModule,
    ],
    exports: [CosmeticsPageComponent]
})
export class CosmeticsPageModule {
}
