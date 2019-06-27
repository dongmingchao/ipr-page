import { OnInit, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from '../../_Services/reports.service';
import { Catalog } from '../../_Classes/Catalog.class';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
export declare class CosmeticsDetailComponent implements OnInit, OnDestroy, AfterViewInit {
    reportsService: ReportsService;
    zone: NgZone;
    subscription: Subscription;
    pages: Catalog[];
    page: Catalog[];
    private pageId;
    height: number;
    outline: CosmeticsOutlineBarComponent;
    article: CosmeticsPageComponent;
    change(indexesOfRoot: number[]): void;
    onContentChange(indexes: any): void;
    outlineClick(item: Catalog[]): void;
    scrollLoad(item: Catalog[]): void;
    clearToolTip(): void;
    progressHeight(item: Catalog): string;
    getCateLog(): void;
    constructor(reportsService: ReportsService, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
