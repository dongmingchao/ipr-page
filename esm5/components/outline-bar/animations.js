/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, transition, animate, style, state, keyframes, } from '@angular/animations';
/** @type {?} */
export var openClose = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL291dGxpbmUtYmFyL2FuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDUSxPQUFPLEVBQ2xCLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFTLEtBQUssRUFBRSxTQUFTLEdBQ3RELE1BQU0scUJBQXFCLENBQUM7O0FBRTdCLE1BQU0sS0FBTyxTQUFTLEdBQUc7SUFDckIsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUNqQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsVUFBVTtZQUNWLHdDQUF3QztZQUN4QyxNQUFNO1lBQ04sT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUNsQixDQUFDO1FBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFVBQVU7WUFDVix3Q0FBd0M7WUFDeEMsTUFBTTtZQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDbEIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQztvQkFDRixRQUFRLEVBQUUsQ0FBQztvQkFDWCxNQUFNLEVBQUUsR0FBRztpQkFDZCxDQUFDO2dCQUNGLEtBQUssQ0FBQztvQkFDRixRQUFRLEVBQUUsQ0FBQztvQkFDWCxNQUFNLEVBQUUsS0FBSztpQkFDaEIsQ0FBQzthQUNMLENBQUMsQ0FBQztTQUNOLENBQUM7UUFDRixVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO2dCQUN2QixLQUFLLENBQUM7b0JBQ0YsUUFBUSxFQUFFLENBQUM7b0JBQ1gsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQzthQUNMLENBQUMsQ0FBQztTQUNOLENBQUM7S0FDTCxDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgYW5pbWF0aW9uLCB0cmlnZ2VyLCBhbmltYXRlQ2hpbGQsIGdyb3VwLFxyXG4gICAgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUsIHF1ZXJ5LCBzdGF0ZSwga2V5ZnJhbWVzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5DbG9zZSA9IFtcclxuICAgIHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcclxuICAgICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzUwJScsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcwJyxcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXHJcbiAgICAgICAgICAgIC8vIHN0eWxlKHtcclxuICAgICAgICAgICAgLy8gICAgIHRyYW5zaXRpb246ICdmbGV4LWdyb3cgMC41cyBlYXNlJ1xyXG4gICAgICAgICAgICAvLyB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC41cycpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xyXG4gICAgICAgICAgICAvLyBzdHlsZSh7XHJcbiAgICAgICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiAnZmxleC1ncm93IDAuNXMgZWFzZSdcclxuICAgICAgICAgICAgLy8gfSksXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzAuNXMnKSxcclxuICAgICAgICBdKSxcclxuICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgICAgIGFuaW1hdGUoJzIwMG1zJywga2V5ZnJhbWVzKFtcclxuICAgICAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwJyxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgXSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMjAwbXMnLCBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIF0pKSxcclxuICAgICAgICBdKSxcclxuICAgIF0pLFxyXG5dO1xyXG4iXX0=