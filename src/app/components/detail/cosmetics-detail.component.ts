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
import {Subscription} from 'rxjs';
import {ReportsService} from 'src/app/_Services/reports.service';
import {Catalog} from 'src/app/_Classes/Catalog.class';
import {CosmeticsPageComponent} from '../page/cosmetics-page.component';
import {CosmeticsOutlineBarComponent} from '../outline-bar/cosmetics-outline-bar.component';

@Component({
    selector: 'ipr-report-detail',
    templateUrl: './cosmetics-detail.component.html',
    styleUrls: ['./test.css'],
    providers: [ReportsService],
})
export class CosmeticsDetailComponent implements OnInit, OnDestroy, AfterViewInit {
    message: any;
    subscription: Subscription;
    private pages: any;
    page: Catalog[];
    private pageId: number;
    isOpen = 'closed';
    height: number;
    @ViewChild('outline', {static: false}) outline: CosmeticsOutlineBarComponent;
    @ViewChild('article', {static: false}) article: CosmeticsPageComponent;


    @Input('Pages') set Pages(value) {
        this.pages = value;
    }

    @Input() set swithchTo(value) {
        if (value !== undefined && value != null) {
            this.currentIndex = value;

        }
    }


    @Output() get M_Pages() {
        return this.pages;
    }

    // @Output() get Catelog(){
    //   this.height = 100/this.pages.length;
    //   return this.catelog;
    // }

    alreadyAdded = {};

    currentIndex = -1;


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
            this.reportsService.parent.indexesOfRoot.push(index);
            this.reportsService.selected.catalog = item.child_catalog;
            this.reportsService.selected.index = 0;
        }
        // this.outline.expand(item);
    }

    onContentChange(indexes) {
        this.change(indexes);
    }

    outlineClick(item: Catalog[]) {
        console.log('out line click', item, this.article.container);
        console.log('article', this.article);
        this.article.scrollTo(item[0]);
        const indexesOfRoot = [];
        for (const each of item) {
            indexesOfRoot.push(each._render.index);
        }
        indexesOfRoot.reverse();
        this.change(indexesOfRoot);
        this.reportsService.loadContent();
    }

    clearToolTip() {
        const tooltipContainer = document.getElementsByClassName('cdk-overlay-container')[0];
        for (let i = 1; i < tooltipContainer.childNodes.length; i++) {
            tooltipContainer.removeChild(tooltipContainer.childNodes[i]);
        }
    }

    progressHeight(item: Catalog) {
        return item.style.height;
    }

    /**
     * API: http://47.110.224.71:9100/get_report_catalog/18/3/
     * like: [{
        "id": 1063,
        "catalogType": 0,
        "title": "引言",
        "order": 0,
        "styleID": null,
        "content": "",
        "src": null,
        "reportID": 18,
        "parentID": null,
        "child_catalog": {}
    }]
     */
    getCateLog() {
        this.reportsService.get_catelog(4, 3)
            .then(json => {
                this.reportsService.root_catalog = json;
                this.reportsService.selected.catalog = this.reportsService.root_catalog;
                this.page = this.reportsService.selected.catalog;
                this.change([0]);
            });
    }

    constructor(
        protected reportsService: ReportsService,
        public zone: NgZone,
    ) {

    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.getCateLog();
    }
}
