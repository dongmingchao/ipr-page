import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { Catalog } from '../../_Classes/Catalog.class';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { WidgetClickEvent } from '../../_Classes/WidgetClickEvent.class';
export declare class CosmeticsPageComponent implements OnInit, AfterViewInit, OnChanges {
    private reportsService;
    height: number;
    container: HTMLDivElement;
    page: Catalog[];
    widgetOnClick: EventEmitter<{}>;
    currentIndex: number;
    disableScroll: boolean;
    appendPageLock: boolean;
    beyondOverWindow: number;
    focusContentChange: EventEmitter<{}>;
    scrollIn: EventEmitter<Catalog[]>;
    containerReady: EventEmitter<Element>;
    loadingParagraph: EventEmitter<{}>;
    firstOfAll: QueryList<ParagraphComponent>;
    secondary: QueryList<ParagraphComponent>;
    tertiary: QueryList<ParagraphComponent>;
    _scroll_container: ElementRef;
    process: {
        render: {
            total: number;
            now: number;
        };
    };
    change(i: number): void;
    getWidth(width: number): string;
    readonly focusContentIndex: number;
    private offsetContainer;
    scrollTo(content: Catalog): void;
    scrollIntoParagraph(content: Catalog[]): void;
    onscroll(): void;
    widgetClick(catalogs: Catalog[], event: WidgetClickEvent): void;
    contentRander(page: Catalog, index: number, ref: any): void;
    constructor(reportsService: ReportsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
