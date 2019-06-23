import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Catalog} from 'src/app/_Classes/Catalog.class';

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
export class ParagraphComponent implements OnInit, AfterViewInit {
    @Input() content: Catalog;
    @Input() index: number;
    @Input() container: HTMLDivElement;
    @Output() scrollIn = new EventEmitter<Catalog>();
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

    constructor(_el: ElementRef) {
        this.el = _el.nativeElement;
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.onscroll();
    }

}
