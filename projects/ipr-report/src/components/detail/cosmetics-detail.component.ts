import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnDestroy,
    NgZone,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';
import {ReportsService} from '../../_Services/reports.service';
import {Catalog} from '../../_Classes/Catalog.class';
import {CosmeticsPageComponent} from '../page/cosmetics-page.component';
import {CosmeticsOutlineBarComponent} from '../outline-bar/cosmetics-outline-bar.component';

@Component({
    selector: 'ipr-report-detail',
    templateUrl: './cosmetics-detail.component.html',
    styleUrls: ['./test.css'],
})
export class CosmeticsDetailComponent implements OnInit, AfterViewInit {

    @Input() set pages(val: Catalog[]) {
        if (!val) { return; }
        this.reportsService.root_catalog = val;
        console.log('root_catalog', val);
        this.reportsService.selected.catalog = this.reportsService.root_catalog;
        this.page = this.reportsService.selected.catalog;
        this.change([0]);
    }

    page: Catalog[];
    private pageId: number;
    height: number;
    @ViewChild('outline', {static: false}) outline: CosmeticsOutlineBarComponent;
    @ViewChild('article', {static: false}) article: CosmeticsPageComponent;


    change(indexesOfRoot: number[]) {
        console.log('change', indexesOfRoot);
        let item: Catalog;
        const index = indexesOfRoot[indexesOfRoot.length - 1];
        let catalog = this.reportsService.root_catalog;
        for (const i of indexesOfRoot) {// 3 1
            if (item) {
                catalog = item.child_catalog;
            }
            let x = 0;
            for (; x < i; x++) {
                catalog[x].style.height = '100%';
            }
            for (; x < catalog.length; x++) {
                catalog[x].style.height = '0';
            }
            item = catalog[i];
        }
        if (indexesOfRoot.length === 1) {
            this.outline.selected = item;
        }
        this.pageId = item.id;
        this.reportsService.selected.catalog = catalog;
        this.reportsService.selected.index = index;
        this.reportsService.parent.indexesOfRoot = indexesOfRoot;
        if (item.child_catalog) {
            item.style.height = '100%';
            for (const each of item.child_catalog) {
                each.style.height = '0';
            }
            this.reportsService.parent.catalog = catalog;
            this.reportsService.parent.indexesOfRoot.push(index); // 这里indexesOfRoot有错
            this.reportsService.selected.catalog = item.child_catalog;
            this.reportsService.selected.index = 0;
        }
        // this.outline.expand(item);
        // console.log('indexes of root', indexesOfRoot);
    }

    onContentChange(indexes) {
        this.change(indexes);
    }

    outlineClick(item: Catalog[]) { // item是由内到外的数组比如说1.3是[2, 0]
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        this.scrollLoad(item);
    }

    scrollLoad(item: Catalog[]) {
        const indexesOfRoot = [];
        for (const each of item) {
            indexesOfRoot.push(each._render.index);
        }
        indexesOfRoot.reverse();
        this.change(indexesOfRoot);
        this.reportsService.loadContent();
    }

    constructor(
        public reportsService: ReportsService,
        public zone: NgZone,
    ) {

    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }
}
