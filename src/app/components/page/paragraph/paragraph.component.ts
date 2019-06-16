import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Catalog} from '../../_Classes/Catalog.class';

function offset(curEle, parent) {
    let totalLeft = null, totalTop = null, par = curEle.offsetParent;
    // 首先加自己本身的左偏移和上偏移
    totalLeft += curEle.offsetLeft;
    totalTop += curEle.offsetTop;
    while (par !== parent) {
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
    selector: 'ngx-paragraph',
    templateUrl: './paragraph.component.html',
    styleUrls: ['./paragraph.component.css'],
})
export class ParagraphComponent implements OnInit {
    @Input() content: Catalog;
    @Input() index: number;
    public el: Element;
    onscroll(container: HTMLDivElement) {
        const focus = this.el;
        const innocentOffset = offset(focus, container).top;
        let percent = container.clientHeight + container.scrollTop - innocentOffset;
        percent /= focus.scrollHeight;
        if (percent > 0) console.log('focus change', this.index, percent);
    }
    constructor(_el: ElementRef) {
        this.el = _el.nativeElement;
    }

    ngOnInit() {
    }

}
