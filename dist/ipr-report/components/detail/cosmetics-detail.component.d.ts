import { OnInit, EventEmitter, NgZone, AfterViewInit } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { Catalog } from '../../_Classes/Catalog.class';
import { CosmeticsPageComponent } from '../page/cosmetics-page.component';
import { CosmeticsOutlineBarComponent } from '../outline-bar/cosmetics-outline-bar.component';
import { WidgetClickEvent } from '../../_Classes/WidgetClickEvent.class';
export declare class CosmeticsDetailComponent implements OnInit, AfterViewInit {
    reportsService: ReportsService;
    zone: NgZone;
    pages: Catalog[];
    widgetOnClick: EventEmitter<WidgetClickEvent>;
    page: Catalog[];
    private pageId;
    height: number;
    outline: CosmeticsOutlineBarComponent;
    article: CosmeticsPageComponent;
    change(indexesOfRoot: number[]): void;
    onContentChange(indexes: any): void;
    outlineClick(item: Catalog[]): void;
    scrollLoad(item: Catalog[]): void;
    widgetClick(event: WidgetClickEvent): void;
    constructor(reportsService: ReportsService, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
