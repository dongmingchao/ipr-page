import { EventEmitter, OnInit } from '@angular/core';
import { Catalog } from '../../_Classes/Catalog.class';
export declare class CosmeticsOutlineBarComponent implements OnInit {
    catalog: Catalog[];
    open: boolean;
    level: number;
    pointClick: EventEmitter<Catalog[]>;
    selected: Catalog;
    isOpen: string;
    nextLevel: {
        selected: Catalog;
    };
    passSelect(item: Catalog[]): void;
    getLevelCss(): string;
    protected onselect(item: Catalog): void;
    clearProgress(item: Catalog): void;
    expand(item: Catalog): void;
    constructor();
    ngOnInit(): void;
}
