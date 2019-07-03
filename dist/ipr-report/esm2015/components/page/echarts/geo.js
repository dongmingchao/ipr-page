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
                // roam: true,
                zoom: 1.3,
                nameMap: {
                    China: 'CN',
                    'United States': 'US'
                }
            }];
        this.dataset.source = dataset.geo;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9lY2hhcnRzL2dlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2xELE9BQU8sWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBRWxELFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFFbkMsTUFBTSxPQUFPLFVBQVU7SUFDbkIsWUFBWSxPQUFPO1FBSW5CLG9CQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzVCLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFDRixjQUFTLEdBQUc7WUFDUixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxLQUFLO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2FBQzNDO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLEtBQUssRUFBRSxNQUFNO2FBQ2hCO1NBQ0osQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE1BQU0sRUFBRTtZQUNKLGVBQWU7WUFDZixnQkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0YsV0FBTSxHQUFHLENBQUM7Z0JBQ04sSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLGNBQWM7Z0JBQ2QsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsT0FBTyxFQUFFO29CQUNMLEtBQUssRUFBRSxJQUFJO29CQUNYLGVBQWUsRUFBRSxJQUFJO2lCQUN4QjthQUNKLENBQUMsQ0FBQztRQXBDQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0lBQ3RDLENBQUM7Q0FvQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VDaGFydE9wdGlvbiwgcmVnaXN0ZXJNYXB9IGZyb20gJ2VjaGFydHMnO1xyXG5pbXBvcnQgd29ybGRNYXBEYXRhIGZyb20gJy4vbWFwc19kYXRhL3dvcmxkLmpzb24nO1xyXG5cclxucmVnaXN0ZXJNYXAoJ3dvcmxkJywgd29ybGRNYXBEYXRhKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZENoYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpIHtcclxuICAgICAgICB0aGlzLmRhdGFzZXQuc291cmNlID0gZGF0YXNldC5nZW87XHJcbiAgICB9XHJcblxyXG4gICAgYmFja2dyb3VuZENvbG9yID0gJyM0MDRhNTknO1xyXG4gICAgdGl0bGUgPSB7XHJcbiAgICAgICAgdGV4dDogJycsXHJcbiAgICB9O1xyXG4gICAgdG9vbHRpcCA9IHtcclxuICAgICAgICB0cmlnZ2VyOiAnaXRlbSdcclxuICAgIH07XHJcbiAgICB2aXN1YWxNYXAgPSB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMjAwMDAsXHJcbiAgICAgICAgY2FsY3VsYWJsZTogdHJ1ZSxcclxuICAgICAgICBpblJhbmdlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBbJyM1MGEzYmEnLCAnI2VhYzczNicsICcjZDk0ZTVkJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgc291cmNlOiBbXHJcbiAgICAgICAgICAgIC8vIFsnVVMnLCAxNTJdLFxyXG4gICAgICAgICAgICAvLyBbJ0NOJywgMTExMjldXHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxuICAgIHNlcmllcyA9IFt7XHJcbiAgICAgICAgdHlwZTogJ21hcCcsXHJcbiAgICAgICAgbWFwVHlwZTogJ3dvcmxkJyxcclxuICAgICAgICAvLyByb2FtOiB0cnVlLFxyXG4gICAgICAgIHpvb206IDEuMyxcclxuICAgICAgICBuYW1lTWFwOiB7XHJcbiAgICAgICAgICAgIENoaW5hOiAnQ04nLFxyXG4gICAgICAgICAgICAnVW5pdGVkIFN0YXRlcyc6ICdVUydcclxuICAgICAgICB9XHJcbiAgICB9XTtcclxufVxyXG4iXX0=