import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input, OnChanges,
    OnInit,
    Output,
    QueryList, SimpleChanges,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {ReportsService} from '../../_Services/reports.service';
import {Catalog} from '../../_Classes/Catalog.class';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {WidgetClickEvent} from '../../_Classes/WidgetClickEvent.class';


function calcParagraphSum(t: Catalog[]): number {
    let ret = t.length;
    for (const each of t) {
        if (each.child_catalog) {
            ret += calcParagraphSum(each.child_catalog);
        }
    }
    return ret;
}

@Component({
    selector: 'ngx-cosmetics-page',
    templateUrl: './cosmetics-page.component.html',
    styleUrls: ['./cosmetics-page.component.styl'],
})
export class CosmeticsPageComponent implements OnInit, AfterViewInit, OnChanges {
    height: number;
    container: HTMLDivElement;

    @Input() page: Catalog[];

    @Output() widgetOnClick = new EventEmitter();

    currentIndex = 0;
    disableScroll = false;
    appendPageLock = false;
    beyondOverWindow = 0;
    @Output() focusContentChange = new EventEmitter();
    @Output() scrollIn = new EventEmitter<Catalog[]>();
    @Output() containerReady = new EventEmitter<Element>();
    @Output() loadingParagraph = new EventEmitter();
    @ViewChildren('firstOfAll') firstOfAll: QueryList<ParagraphComponent>;
    @ViewChildren('secondary') secondary: QueryList<ParagraphComponent>;
    @ViewChildren('tertiary') tertiary: QueryList<ParagraphComponent>;
    @ViewChild('scroll_container', {static: false}) _scroll_container: ElementRef;

    process = {
        render: {
            total: 0,
            now: 0,
        }
    };

    change(i: number) {
        this.currentIndex = i;
    }

    getWidth(width: number) {
        return 'col-lg-' + width + ' col-md-' + width + ' col-sm-' + width;
    }

    // appendPage(pageId: number): Promise<Catalog[]> {
    //     return this.appendTo(pageId, this.page);
    // }
    //
    // appendParagraph(id: number): Promise<Catalog[]> {
    //     return this.appendTo(id, this.page);
    // }
    //
    // appendTo(id: number, content: Catalog[]): Promise<Catalog[]> {
    //     if (id === -1) {
    //         return;
    //     }
    //     this.appendPageLock = true;
    //     const rec = this.reportsService.get_content(id, 'True');
    //     console.log('append', id, content);
    //     // rec.then(json => {
    //     //     for (const each of json) {
    //     //         content.push(each);
    //     //     }
    //     //     this.reportsService.alreadyAdd.push(id);
    //     // });
    //     return rec;
    // }

    // set focusContentIndex(val) {
    //     console.log('val is', val, this.contents.toArray());
    //     this.reportsService.focusContent.index = val;
    //     this.reportsService.focusContent.el = this.contents.toArray()[val].nativeElement;
    //     console.log('focus content', this.reportsService.focusContent.el);
    // }

    get focusContentIndex() {
        return this.reportsService.focusContent.index;
    }

    private offsetContainer(curEle) {
        let totalLeft = null;
        let totalTop = null;
        let par = curEle.offsetParent;
        // 首先加自己本身的左偏移和上偏移
        totalLeft += curEle.offsetLeft;
        totalTop += curEle.offsetTop;
        while (par !== this.container) {
            // 累加父级参照物本身的偏移
            totalLeft += par.offsetLeft;
            totalTop += par.offsetTop;
            par = par.offsetParent;
        }

        return {
            left: totalLeft,
            top: totalTop
        };
    }

    scrollTo(content: Catalog) {
        const offset = this.offsetContainer(content._render.ref);
        this.container.scrollTo(offset.left, offset.top);
    }

    scrollIntoParagraph(content: Catalog[]) {
        this.scrollIn.emit(content);
    }

    onscroll() {
        if (this.disableScroll) {
            return;
        }
        for (const each of this.secondary.toArray()) {
            each.onscroll();
        }
        for (const each of this.firstOfAll.toArray()) {
            each.onscroll();
        }
        // let percent = this.container.clientHeight + this.container.scrollTop - this.beyondOverWindow;
        // percent /= this.reportsService.focusContent.el.scrollHeight;
        // console.log('focusContent', this.reportsService.focusContent.el, this.container);
        // if (this.reportsService.selected.catalog.length) {
        //     section.style.height = '100%';
        //     section = this.reportsService.selected.catalog[0];
        // }
        // this.reportsService.section.style.height = percent * 100 + '%';
        // console.log('percent', percent, this.reportsService.selected.index);
        // if (percent > 0.8) {
        // if (!this.appendPageLock) {
        //     const nextPageId = this.reportsService.nextPageId();
        //     if (this.reportsService.alreadyAdd.includes(nextPageId)) {
        //         // this.appendPageLock = false;
        //     } else {
        //         this.appendPage(nextPageId);
        //         this.contents.changes.subscribe(a => {
        //             this.appendPageLock = false;
        //         });
        //     }
        // }
        // }
        // if (percent > 1) {
        // const nextPageId = this.reportsService.nextPageId();
        // if (this.reportsService.alreadyAdd.includes(nextPageId)) {
        //     if (this.reportsService.focusContent.el) {
        //         this.beyondOverWindow += this.reportsService.focusContent.el.scrollHeight;
        //     }
        //     this.focusContentIndex++;
        //     this.focusContentChange.emit([this.reportsService.focusContent.index]);
        // }
        // }
        // if (percent < 0) {
        // if (this.reportsService.focusContent.el) {
        //     this.beyondOverWindow -= this.contents.toArray()[this.reportsService.focusContent.index - 1]
        //         .nativeElement.scrollHeight;
        // }
        // this.focusContentIndex--;
        // this.focusContentChange.emit([this.reportsService.focusContent.index]);
        // this.disableScroll = true;
        // setTimeout(() => this.disableScroll = false, 1000);
        // }
    }

    widgetClick(catalogs: Catalog[], event: WidgetClickEvent) {
        event.catalogs = catalogs;
        this.widgetOnClick.emit(event);
    }

    contentRander(page: Catalog, index: number, ref) {
        if (page._render) {
            return;
        }
        page._render = {ref, index};
        this.process.render.now += 1;
        this.loadingParagraph.emit({
            process: this.process.render
        });
    }

    constructor(
        private reportsService: ReportsService
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // 如果第一章节不足以滚动，则再添加一章节
        // this.focusContentIndex = 0;
        // if (this.container.scrollHeight > this.contents.first.nativeElement.scrollHeight) {
        //     const ret = this.appendPage(this.reportsService.nextPageId());
        //     if (ret) ret.subscribe(c => this.appendPageLock = false);
        // }
        this.container = this._scroll_container.nativeElement;
        this.containerReady.emit(this.container);
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {

        // }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.page.currentValue) {
            this.process.render.total = calcParagraphSum(this.page);
        }
    }
}
