import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {Catalog} from '../../../_Classes/Catalog.class';
import {ReportsService} from '../../../_Services/reports.service';
import {IprCharts} from '../echarts/ipr-charts';
import {WidgetClickEvent} from '../../../_Classes/WidgetClickEvent.class';

function offset(curEle, parent) {
    let totalLeft = null;
    let totalTop = null;
    let par = curEle.offsetParent;
    // 首先加自己本身的左偏移和上偏移
    totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop;
    while (par && par !== parent) {
        // 累加父级参照物本身的偏移
        totalLeft += par.offsetLeft;
        totalTop += par.offsetTop;
        par = par.offsetParent;
    }
    return {
        left: totalLeft,
        top: totalTop,
    };
}

@Component({
    selector: 'ipr-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.styl'],
})
export class ParagraphComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() content: Catalog;
    @Input() index: number;
    @Input() container: HTMLDivElement;
    @Output() scrollIn = new EventEmitter<Catalog>();
    @Output() widgetOnClick = new EventEmitter<WidgetClickEvent>();
    percent: number;
    enter_lock = false;
    outer_lock = false;

    public el: Element;

    updatePercent() {
        const focus = this.el.firstElementChild;
        const innocentOffset = offset(focus, this.container).top;
        this.percent = this.container.clientHeight + this.container.scrollTop - innocentOffset;
        this.percent /= focus.scrollHeight;
    }

    onscroll() {
        this.updatePercent();
        if (this.percent > 0 && this.percent < 1) {
            if (!this.enter_lock) {
                this.scrollIntoView();
            }
            if (this.outer_lock) {
                this.scrollIntoView();
            }
            this.content.style.height = this.percent * 100 + '%';
            // console.log('focus change', this.content, this.percent);
        }
        if (this.percent > 1 && !this.outer_lock) {
            this.scrollOutView('down');
        }
        if (this.percent < 0 && this.enter_lock) {
            this.scrollOutView('up');
        }
    }

    scrollIntoView() {
        this.enter_lock = true;
        this.outer_lock = false;
        console.log(this.content, 'scrollIntoView');
        this.scrollIn.emit(this.content);
    }

    scrollOutView(direction: string) {
        this.enter_lock = false;
        this.outer_lock = true;
        switch (direction) {
            case 'up':
                this.content.style.height = '0';
                break;
            case 'down':
                this.content.style.height = '100%';
                break;
        }
        console.log(this.content, 'scrollOutView');
    }

    widgetClick(widgetName, event) {
        const pass = new WidgetClickEvent();
        pass.source_event = event;
        pass.widget_name = widgetName;
        this.widgetOnClick.emit(pass);
    }

    constructor(
        _el: ElementRef,
        private reportsService: ReportsService,
    ) {
        this.el = _el.nativeElement;
    }

    generateEcharts(widget) {
        switch (widget.template) {
            case 'trend':
                return new IprCharts('trend', widget.rawData);
            case 'geo':
                return new IprCharts('geo', widget.rawData);
            case 'rank':
                return new IprCharts('rank', widget.rawData);
            case 'techdivision':
                return new IprCharts('tech_division', widget.rawData);
        }
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        // if (changes.container.currentValue) {
        //     // this.onscroll();
        //     if (this.outer_lock) {
        //         console.log('content change 123', changes, this.content);
        //         this.reportsService.loadContent(this.content);
        //     }
        // }
    }

}
