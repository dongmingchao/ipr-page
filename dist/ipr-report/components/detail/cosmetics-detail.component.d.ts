import { OnInit, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportsService } from '../../_Services/reports.service';
import { Catalog } from '../../_Classes/Catalog.class';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
export declare class CosmeticsDetailComponent implements OnInit, OnDestroy, AfterViewInit {
    reportsService: ReportsService;
    zone: NgZone;
    message: any;
    subscription: Subscription;
    private pages;
    page: Catalog[];
    private pageId;
    isOpen: string;
    height: number;
    outline: CosmeticsOutlineBarComponent;
    article: CosmeticsPageComponent;
    Pages: any;
    swithchTo: any;
    readonly M_Pages: any;
    alreadyAdded: {};
    currentIndex: number;
    change(indexesOfRoot: number[]): void;
    onContentChange(indexes: any): void;
    outlineClick(item: Catalog[]): void;
    scrollLoad(item: Catalog[]): void;
    clearToolTip(): void;
    progressHeight(item: Catalog): string;
    /**
     * API: http://47.110.224.71:9100/get_report_catalog/18/3/
     * like: [{
        "id": 1063,
        "catalogType": 0,
        "title": "引言",
        "order": 0,
        "styleID": null,
        "content": "",
        "src": null,
        "reportID": 18,
        "parentID": null,
        "child_catalog": {}
    }]
     */
    getCateLog(): void;
    constructor(reportsService: ReportsService, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
