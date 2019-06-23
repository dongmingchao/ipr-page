import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {ReportsService} from '../../_Services/reports.service';
import {Catalog} from '../../_Classes/Catalog.class';
import {ParagraphComponent} from './paragraph/paragraph.component';


@Component({
    selector: 'ngx-cosmetics-page',
    templateUrl: './cosmetics-page.component.html',
    styleUrls: ['./cosmetics-page.component.styl'],
})
export class CosmeticsPageComponent implements OnInit, AfterViewInit {
    page: Catalog[];
    height: number;
    container: HTMLDivElement;

    @Input('Page') set Page(value) {
        this.page = value;
    }

    @Input() set swithchTo(value) {
        if (value !== undefined && value != null) {
            this.currentIndex = value;
        }
    }


    @Output() get M_Page() {
        this.height = 100 / this.page.length;
        return this.page;
    }

    currentIndex = 0;
    disableScroll = false;
    appendPageLock = false;
    beyondOverWindow = 0;
    @Output() focusContentChange = new EventEmitter();
    @Output() scrollIn = new EventEmitter<Catalog[]>();
    @ViewChildren('firstOfAll') firstOfAll: QueryList<ParagraphComponent>;
    @ViewChildren('secondary') secondary: QueryList<ParagraphComponent>;
    @ViewChildren('tertiary') tertiary: QueryList<ParagraphComponent>;
    @ViewChild('scroll_container', {static: false}) _scroll_container: ElementRef;

    change(i: number) {
        this.currentIndex = i;
    }

    getWidth(width: number) {
        return 'col-lg-' + width + ' col-md-' + width + ' col-sm-' + width;
    }

    appendPage(pageId: number): Promise<Catalog[]> {
        return this.appendTo(pageId, this.page);
    }

    appendParagraph(id: number): Promise<Catalog[]> {
        return this.appendTo(id, this.page);
    }

    appendTo(id: number, content: Catalog[]): Promise<Catalog[]> {
        if (id === -1) {
            return;
        }
        this.appendPageLock = true;
        const rec = this.reportsService.get_content(id, 'True');
        console.log('append', id, content);
        // rec.then(json => {
        //     for (const each of json) {
        //         content.push(each);
        //     }
        //     this.reportsService.alreadyAdd.push(id);
        // });
        return rec;
    }

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

    async onscroll() {
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

    constructor(
        private reportsService: ReportsService
    ) {

        // this.reportsService.get_json_data('0')
        //   .subscribe(json => {
        //     this.page = json;
        //   });
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
        setTimeout(() => {
            this.container = this._scroll_container.nativeElement;
        });
        // const firstOfAll = this.firstOfAll.toArray();
        // for (const each of firstOfAll) {

        // }
        this.secondary.changes.subscribe(n => {
            console.log('secondary', n.toArray());
        });
    }

    contentRander(page: Catalog, index: number, ref) {
        page._render = {ref, index};
    }
}
