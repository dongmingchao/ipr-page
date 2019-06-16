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
    selector: 'app-detail',
    templateUrl: './cosmetics-detail.component.html',
    styleUrls: ['./test.css'],
    providers: [ReportsService],
})
export class CosmeticsDetailComponent implements OnInit, OnDestroy, AfterViewInit {
    message: any;
    subscription: Subscription;
    private pages: any;
    private page: Catalog[];
    private pageId: number;
    isOpen = 'closed';
    height: number;
    @ViewChild('outline') outline: CosmeticsOutlineBarComponent;
    @ViewChild('article') article: CosmeticsPageComponent;


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


    async change(indexesOfRoot: number[]) {
        console.log('change', indexesOfRoot);
        let item: Catalog;
        const index = indexesOfRoot[indexesOfRoot.length - 1];
        let catalog = this.reportsService.root_catalog;
        if (catalog.length === 0) return ;
        for (const i of indexesOfRoot) {
            if (item) {
                catalog = item.child_catalog;
            }
            item = catalog[i];
        }
        console.log('123', item, catalog);
        this.pageId = item.id;
        this.reportsService.selected.catalog = catalog;
        this.reportsService.selected.index = index;
        this.reportsService.parent.indexesOfRoot = indexesOfRoot;
        if (item.child_catalog.length) {
            item.style.height = '100%';
            this.reportsService.parent.catalog = catalog;
            this.reportsService.parent.indexesOfRoot.push(index);
            this.reportsService.selected.catalog = item.child_catalog;
            this.reportsService.selected.index = 0;
        }
        this.reportsService.section = this.reportsService.selected.catalog[this.reportsService.selected.index];
        const json = await this.reportsService.get_content(this.reportsService.section.id, 'True');
        console.log('section content', json[0]);
        this.reportsService.section.paragraphs = json[0].paragraphs;
        this.outline.expand(item);
    }

    onContentChange(indexes) {
        this.change(indexes);
    }

    outlineClick(item) {
        console.log('out line click', item);
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

    scrollPage(event: Event, container: HTMLDivElement) {
        this.article.onscroll(container);
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
    async getCateLog() {
        // this.catalog = [
        //     {
        //         "id": 1063,
        //         "catalogType": 0,
        //         "title": "引言",
        //         "order": 0,
        //         "styleID": null,
        //         "content": "",
        //         "src": null,
        //         "reportID": 18,
        //         "parentID": null,
        //         "child_catalog": [
        //             {id: 1004, isSmall: false, title: '1.1日化用品的介绍'},
        //             {id: 1011, isSmall: false, title: '2.1 产业链分析'},
        //             {id: 1023, isSmall: false, title: '3.1 孕婴童护肤类专利分析'},
        //         ]
        //     },
        //     {id: 1004, isSmall: false, title: '1.1日化用品的介绍'},
        //     {id: 1011, isSmall: false, title: '2.1 产业链分析'},
        //     {id: 1023, isSmall: false, title: '3.1 孕婴童护肤类专利分析'},
        //     {id: 1053, isSmall: false, title: '4.1 漳州日化产业发展路径导航'},
        // ];
        // this.reportsService.selected.catalog = this.catalog;
        const rec = await this.reportsService.get_catelog(18, 3);
        this.reportsService.root_catalog = rec;
        this.reportsService.selected.catalog = this.reportsService.root_catalog;
        this.page = this.reportsService.selected.catalog;
        this.change([0]);
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
