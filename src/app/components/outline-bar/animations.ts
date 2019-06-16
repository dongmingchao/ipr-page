import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state, keyframes,
} from '@angular/animations';

export const openClose = [
    trigger('openClose', [
        state('open', style({
            flexGrow: 1,
            height: '50%',
        })),
        state('closed', style({
            flexGrow: 0,
            height: '0',
        })),
        transition('open => closed', [
            // style({
            //     transition: 'flex-grow 0.5s ease'
            // }),
            animate('0.5s'),
        ]),
        transition('closed => open', [
            // style({
            //     transition: 'flex-grow 0.5s ease'
            // }),
            animate('0.5s'),
        ]),
        transition('void => *', [
            animate('200ms', keyframes([
                style({
                    flexGrow: 0,
                    height: '0',
                }),
                style({
                    flexGrow: 1,
                    height: '50%',
                }),
            ])),
        ]),
        transition('* => void', [
            animate('200ms', keyframes([
                style({
                    flexGrow: 0,
                    height: '0',
                }),
            ])),
        ]),
    ]),
];
