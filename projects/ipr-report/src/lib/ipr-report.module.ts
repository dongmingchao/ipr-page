import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CosmeticsOutlineBarComponent} from '../components/outline-bar/cosmetics-outline-bar.component';
import {CosmeticsDetailComponent} from '../components/detail/cosmetics-detail.component';
import {CosmeticsPageModule} from '../components/page/cosmetics-page.module';
import {ReportsService} from '../_Services/reports.service';

@NgModule({
    declarations: [
        CosmeticsOutlineBarComponent,
        CosmeticsDetailComponent,
    ],
    imports: [
        CommonModule,
        CosmeticsPageModule,
    ],
    providers: [ReportsService],
    exports: [CosmeticsDetailComponent]
})
export class IprReportModule { }
