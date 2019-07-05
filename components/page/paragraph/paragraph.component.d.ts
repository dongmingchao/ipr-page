import { AfterViewInit, DoCheck, ElementRef, EventEmitter, KeyValueDiffers, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
import { WidgetClickEvent } from '../../../_Classes/WidgetClickEvent.class';
export declare class ParagraphComponent implements OnInit, AfterViewInit, OnChanges, DoCheck {
    private reportsService;
    private differs;
    content: Catalog;
    index: number;
    container: HTMLDivElement;
    scrollIn: EventEmitter<Catalog>;
    widgetOnClick: EventEmitter<WidgetClickEvent>;
    percent: number;
    enter_lock: boolean;
    outer_lock: boolean;
    private customerDiffer;
    el: Element;
    tableMap: {
        publication_number: string;
        title: string;
        standard_applicant_str: string;
        application_date: string;
        status: string;
        importance_reason: string;
    };
    updatePercent(): void;
    onscroll(): void;
    scrollIntoView(): void;
    scrollOutView(direction: string): void;
    widgetClick(widgetName: any, event: any): void;
    tableFinalPage(): void;
    tableSwitchPage(): void;
    constructor(_el: ElementRef, reportsService: ReportsService, differs: KeyValueDiffers);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
}
