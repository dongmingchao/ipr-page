import { AfterViewInit, ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import { ReportsService } from '../../_Services/reports.service';
import { Catalog } from '../../_Classes/Catalog.class';
import { ParagraphComponent } from './paragraph/paragraph.component';
export declare class CosmeticsPageComponent implements OnInit, AfterViewInit {
    private reportsService;
    page: Catalog[];
    height: number;
    container: HTMLDivElement;
    Page: any;
    swithchTo: any;
    readonly M_Page: Catalog[];
    currentIndex: number;
    disableScroll: boolean;
    appendPageLock: boolean;
    beyondOverWindow: number;
    focusContentChange: EventEmitter<{}>;
    scrollIn: EventEmitter<Catalog[]>;
    firstOfAll: QueryList<ParagraphComponent>;
    secondary: QueryList<ParagraphComponent>;
    tertiary: QueryList<ParagraphComponent>;
    _scroll_container: ElementRef;
    change(i: number): void;
    getWidth(width: number): string;
    readonly focusContentIndex: number;
    private offsetContainer;
    scrollTo(content: Catalog): void;
    scrollIntoParagraph(content: Catalog[]): void;
    onscroll(): Promise<void>;
    constructor(reportsService: ReportsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    contentRander(page: Catalog, index: number, ref: any): void;
}
