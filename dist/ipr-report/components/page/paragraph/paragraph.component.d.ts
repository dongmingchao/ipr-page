import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Catalog } from '../../../_Classes/Catalog.class';
import { ReportsService } from '../../../_Services/reports.service';
import { IprCharts } from '../echarts/ipr-charts';
import { WidgetClickEvent } from '../../../_Classes/WidgetClickEvent.class';
export declare class ParagraphComponent implements OnInit, AfterViewInit, OnChanges {
    private reportsService;
    content: Catalog;
    index: number;
    container: HTMLDivElement;
    scrollIn: EventEmitter<Catalog>;
    widgetOnClick: EventEmitter<WidgetClickEvent>;
    percent: number;
    enter_lock: boolean;
    outer_lock: boolean;
    el: Element;
    updatePercent(): void;
    onscroll(): void;
    scrollIntoView(): void;
    scrollOutView(direction: string): void;
    widgetClick(widgetName: any, event: any): void;
    constructor(_el: ElementRef, reportsService: ReportsService);
    generateEcharts(widget: any): IprCharts;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
