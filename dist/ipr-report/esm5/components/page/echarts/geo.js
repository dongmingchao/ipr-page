import { registerMap } from 'echarts';
import worldMapData from './maps_data/world.json';
registerMap('world', worldMapData);
var WorldChart = /** @class */ (function () {
    function WorldChart(dataset) {
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
    return WorldChart;
}());
export { WorldChart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9lY2hhcnRzL2dlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2xELE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBRWxELFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFbkM7SUFDSSxvQkFBWSxPQUFPO1FBSW5CLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFDRixjQUFTLEdBQUc7WUFDUixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxLQUFLO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2FBQzNDO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE1BQU0sRUFBRTtZQUNKLGVBQWU7WUFDZixnQkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0YsV0FBTSxHQUFHLENBQUM7Z0JBQ04sSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxHQUFHO2dCQUNULE9BQU8sRUFBRTtvQkFDTCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxlQUFlLEVBQUUsSUFBSTtpQkFDeEI7YUFDSixDQUFDLENBQUM7UUFwQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDO0lBb0NMLGlCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RUNoYXJ0T3B0aW9uLCByZWdpc3Rlck1hcH0gZnJvbSAnZWNoYXJ0cyc7XHJcbmltcG9ydCB3b3JsZE1hcERhdGEgZnJvbSAnLi9tYXBzX2RhdGEvd29ybGQuanNvbic7XHJcblxyXG5yZWdpc3Rlck1hcCgnd29ybGQnLCB3b3JsZE1hcERhdGEpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkQ2hhcnQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldC5zb3VyY2UgPSBkYXRhc2V0LmdlbztcclxuICAgIH1cclxuXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnIzQwNGE1OSc7XHJcbiAgICB0aXRsZSA9IHtcclxuICAgICAgICB0ZXh0OiAnJyxcclxuICAgIH07XHJcbiAgICB0b29sdGlwID0ge1xyXG4gICAgICAgIHRyaWdnZXI6ICdpdGVtJ1xyXG4gICAgfTtcclxuICAgIHZpc3VhbE1hcCA9IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgbWF4OiAyMDAwMCxcclxuICAgICAgICBjYWxjdWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIGluUmFuZ2U6IHtcclxuICAgICAgICAgICAgY29sb3I6IFsnIzUwYTNiYScsICcjZWFjNzM2JywgJyNkOTRlNWQnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZGF0YXNldCA9IHtcclxuICAgICAgICBzb3VyY2U6IFtcclxuICAgICAgICAgICAgLy8gWydVUycsIDE1Ml0sXHJcbiAgICAgICAgICAgIC8vIFsnQ04nLCAxMTEyOV1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgc2VyaWVzID0gW3tcclxuICAgICAgICB0eXBlOiAnbWFwJyxcclxuICAgICAgICBtYXBUeXBlOiAnd29ybGQnLFxyXG4gICAgICAgIHJvYW06IHRydWUsXHJcbiAgICAgICAgem9vbTogMS4zLFxyXG4gICAgICAgIG5hbWVNYXA6IHtcclxuICAgICAgICAgICAgQ2hpbmE6ICdDTicsXHJcbiAgICAgICAgICAgICdVbml0ZWQgU3RhdGVzJzogJ1VTJ1xyXG4gICAgICAgIH1cclxuICAgIH1dO1xyXG59XHJcbiJdfQ==