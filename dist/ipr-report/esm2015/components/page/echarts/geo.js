import { registerMap } from 'echarts';
import worldMapData from './maps_data/world.json';
registerMap('world', worldMapData);
export class WorldChart {
    constructor(dataset) {
        this.backgroundColor = '#404a59';
        this.title = {
            text: '',
        };
        this.tooltip = {
            trigger: 'item'
        };
        this.visualMap = {
            min: 0,
            max: 20000,
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
                color: '#fff'
            }
        };
        this.dataset = {
            source: [
            // ['US', 152],
            // ['CN', 11129]
            ]
        };
        this.series = [{
                type: 'map',
                mapType: 'world',
                roam: true,
                zoom: 1.3,
                nameMap: {
                    China: 'CN',
                    'United States': 'US'
                }
            }];
        this.dataset.source = dataset.geo;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9lY2hhcnRzL2dlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2xELE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBRWxELFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFbkMsTUFBTSxPQUFPLFVBQVU7SUFDbkIsWUFBWSxPQUFPO1FBSW5CLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFDRixjQUFTLEdBQUc7WUFDUixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxLQUFLO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2FBQzNDO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE1BQU0sRUFBRTtZQUNKLGVBQWU7WUFDZixnQkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0YsV0FBTSxHQUFHLENBQUM7Z0JBQ04sSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxHQUFHO2dCQUNULE9BQU8sRUFBRTtvQkFDTCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxlQUFlLEVBQUUsSUFBSTtpQkFDeEI7YUFDSixDQUFDLENBQUM7UUFwQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0NBb0NKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFQ2hhcnRPcHRpb24sIHJlZ2lzdGVyTWFwfSBmcm9tICdlY2hhcnRzJztcclxuaW1wb3J0IHdvcmxkTWFwRGF0YSBmcm9tICcuL21hcHNfZGF0YS93b3JsZC5qc29uJztcclxuXHJcbnJlZ2lzdGVyTWFwKCd3b3JsZCcsIHdvcmxkTWFwRGF0YSk7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGRDaGFydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhc2V0LnNvdXJjZSA9IGRhdGFzZXQuZ2VvO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tncm91bmRDb2xvciA9ICcjNDA0YTU5JztcclxuICAgIHRpdGxlID0ge1xyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgfTtcclxuICAgIHRvb2x0aXAgPSB7XHJcbiAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nXHJcbiAgICB9O1xyXG4gICAgdmlzdWFsTWFwID0ge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDIwMDAwLFxyXG4gICAgICAgIGNhbGN1bGFibGU6IHRydWUsXHJcbiAgICAgICAgaW5SYW5nZToge1xyXG4gICAgICAgICAgICBjb2xvcjogWycjNTBhM2JhJywgJyNlYWM3MzYnLCAnI2Q5NGU1ZCddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkYXRhc2V0ID0ge1xyXG4gICAgICAgIHNvdXJjZTogW1xyXG4gICAgICAgICAgICAvLyBbJ1VTJywgMTUyXSxcclxuICAgICAgICAgICAgLy8gWydDTicsIDExMTI5XVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbiAgICBzZXJpZXMgPSBbe1xyXG4gICAgICAgIHR5cGU6ICdtYXAnLFxyXG4gICAgICAgIG1hcFR5cGU6ICd3b3JsZCcsXHJcbiAgICAgICAgcm9hbTogdHJ1ZSxcclxuICAgICAgICB6b29tOiAxLjMsXHJcbiAgICAgICAgbmFtZU1hcDoge1xyXG4gICAgICAgICAgICBDaGluYTogJ0NOJyxcclxuICAgICAgICAgICAgJ1VuaXRlZCBTdGF0ZXMnOiAnVVMnXHJcbiAgICAgICAgfVxyXG4gICAgfV07XHJcbn1cclxuIl19