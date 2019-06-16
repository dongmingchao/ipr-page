import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Catalog} from '../_Classes/Catalog.class';
import {openClose} from './animations';

@Component({
    selector: 'ngx-cosmetics-outline-bar',
    templateUrl: './cosmetics-outline-bar.component.html',
    styleUrls: ['./cosmetics-outline-bar.component.css'],
    animations: openClose,
})

export class CosmeticsOutlineBarComponent implements OnInit {
    @Input() catalog: Catalog[];
    @Input() open: boolean = true;
    @Output() pointClick = new EventEmitter();

    selected: Catalog;
    isOpen: string;
    nextLevel: {
        selected: Catalog,
    } = {
        selected: null,
    };

    passSelect(item: Catalog) {
        console.log('next level select', item);
        this.nextLevel.selected = item;
        this.pointClick.emit(this.selected);
    }

    protected onselect(item: Catalog) {
        // console.log('on select', item);
        this.selected = item;
        this.isOpen = 'open';
        this.pointClick.emit(item);
        // const i = this.catalog.indexOf(item);
        // for (let j = 0; j < this.catalog.length; j++) {
        //     const each = this.catalog[j];
        //     each.style.height = j < i ? '100%' : '0';
        // }
        // this.clearProgress(item);
        // if (this.nextLevel.selected)
        //     this.clearProgress(this.nextLevel.selected);
    }

    clearProgress(item: Catalog) {
        for (const each of item.child_catalog) {
            each.style.height = '0';
        }
    }

    public expand(item: Catalog) {
        this.onselect(item);
    }

    constructor() {
    }

    ngOnInit() {
        if (this.open) this.isOpen = 'open';
        else this.isOpen = 'closed';
    }
}
