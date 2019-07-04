import { trigger, transition, animate, style, state, keyframes, } from '@angular/animations';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL291dGxpbmUtYmFyL2FuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNRLE9BQU8sRUFDbEIsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQVMsS0FBSyxFQUFFLFNBQVMsR0FDdEQsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUc7SUFDckIsT0FBTyxDQUFDLFdBQVcsRUFBRTtRQUNqQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUNoQixRQUFRLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsTUFBTSxFQUFFLEdBQUc7U0FDZCxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsVUFBVTtZQUNWLHdDQUF3QztZQUN4QyxNQUFNO1lBQ04sT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUNsQixDQUFDO1FBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFVBQVU7WUFDVix3Q0FBd0M7WUFDeEMsTUFBTTtZQUNOLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDbEIsQ0FBQztRQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDcEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQztvQkFDRixRQUFRLEVBQUUsQ0FBQztvQkFDWCxNQUFNLEVBQUUsR0FBRztpQkFDZCxDQUFDO2dCQUNGLEtBQUssQ0FBQztvQkFDRixRQUFRLEVBQUUsQ0FBQztvQkFDWCxNQUFNLEVBQUUsS0FBSztpQkFDaEIsQ0FBQzthQUNMLENBQUMsQ0FBQztTQUNOLENBQUM7UUFDRixVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO2dCQUN2QixLQUFLLENBQUM7b0JBQ0YsUUFBUSxFQUFFLENBQUM7b0JBQ1gsTUFBTSxFQUFFLEdBQUc7aUJBQ2QsQ0FBQzthQUNMLENBQUMsQ0FBQztTQUNOLENBQUM7S0FDTCxDQUFDO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBhbmltYXRpb24sIHRyaWdnZXIsIGFuaW1hdGVDaGlsZCwgZ3JvdXAsXHJcbiAgICB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSwgcXVlcnksIHN0YXRlLCBrZXlmcmFtZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlbkNsb3NlID0gW1xyXG4gICAgdHJpZ2dlcignb3BlbkNsb3NlJywgW1xyXG4gICAgICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoe1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgICB9KSksXHJcbiAgICAgICAgc3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzAnLFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICB0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcclxuICAgICAgICAgICAgLy8gc3R5bGUoe1xyXG4gICAgICAgICAgICAvLyAgICAgdHJhbnNpdGlvbjogJ2ZsZXgtZ3JvdyAwLjVzIGVhc2UnXHJcbiAgICAgICAgICAgIC8vIH0pLFxyXG4gICAgICAgICAgICBhbmltYXRlKCcwLjVzJyksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXHJcbiAgICAgICAgICAgIC8vIHN0eWxlKHtcclxuICAgICAgICAgICAgLy8gICAgIHRyYW5zaXRpb246ICdmbGV4LWdyb3cgMC41cyBlYXNlJ1xyXG4gICAgICAgICAgICAvLyB9KSxcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMC41cycpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgICAgICAgYW5pbWF0ZSgnMjAwbXMnLCBrZXlmcmFtZXMoW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzAnLFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdKSksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgICAgICBhbmltYXRlKCcyMDBtcycsIGtleWZyYW1lcyhbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgXSkpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgXSksXHJcbl07XHJcbiJdfQ==