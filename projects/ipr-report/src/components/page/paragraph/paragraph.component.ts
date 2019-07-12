import {
    AfterViewInit,
    Component, DoCheck,
    ElementRef,
    EventEmitter,
    Input, KeyValueDiffer, KeyValueDiffers,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {Catalog} from '../../../_Classes/Catalog.class';
import {ReportsService} from '../../../_Services/reports.service';
import {IprCharts} from '../echarts/ipr-charts';
import {WidgetClickEvent} from '../../../_Classes/WidgetClickEvent.class';
import {TableComponent} from '../table/table.component';

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

function generateEcharts(widget): IprCharts {
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

@Component({
    selector: 'ipr-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.styl'],
})
export class ParagraphComponent implements OnInit, AfterViewInit, OnChanges, DoCheck {
    @Input() content: Catalog;
    @Input() index: number;
    @Input() container: HTMLDivElement;
    @Output() scrollIn = new EventEmitter<Catalog>();
    @Output() widgetOnClick = new EventEmitter<WidgetClickEvent>();
    percent: number;
    enter_lock = false;
    outer_lock = false;
    private customerDiffer: KeyValueDiffer<string, any>;

    public el: Element;

    tableMap = {
        publication_number: '专利号',
        title: '专利名',
        standard_applicant_str: '申请人',
        application_date: '申请日期',
        current_legal_status: '状态',
        importance_reason: '重要原因'
    };

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

    tableFinalPage() {
        // console.log('表格到了最后一页！！');
    }

    tableSwitchPage() {
        const os = offset(this.content._render.ref, this.container);
        this.container.scrollTo(os.left, os.top);
    }

    tableSort(table: TableComponent) {
        table.updateShow();
        table.setPage(0);
    }

    tableFilter(table: TableComponent) {
        table.updateShow();
        table.setPage(0);
    }

    constructor(
        _el: ElementRef,
        private reportsService: ReportsService,
        private differs: KeyValueDiffers,
    ) {
        this.el = _el.nativeElement;
    }

    ngOnInit() {
        this.customerDiffer = this.differs.find(this.content).create();
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

        // if (changes.content.currentValue) {
        //     console.log('current value', changes.content.currentValue);
        //     if (changes.content.currentValue.paragraphs) {

        //     }
        // }
    }

    ngDoCheck(): void {
        const contentDiffer = this.customerDiffer.diff(this.content);
        if (contentDiffer) {
            contentDiffer.forEachAddedItem(r => {
                if (r.key === 'paragraphs') {
                    for (const ppp of this.content.paragraphs) {
                        if (ppp.hasWidget && ppp.widgetID.widgetType === 4) {
                            ppp.widgetID._render = generateEcharts(ppp.widgetID);
                        }
                    }
                }
            });
        }
    }

}
