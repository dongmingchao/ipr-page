export class TrendChart {
    constructor(dataset) {
        this.title = {
            text: '行业专利动态数据'
        };
        this.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        };
        this.legend = {
            data: ['专利', '申请人', '发明人']
        };
        this.toolbox = {
            show: true,
            feature: {
                saveAsImage: {}
            }
        };
        this.dataZoom = {
            show: false,
            start: 0,
            end: 100
        };
        this.dataset = {
            source: []
        };
        this.xAxis = [
            {
                type: 'category',
                boundaryGap: true,
            }
        ];
        this.yAxis = [
            {
                type: 'value',
                scale: true,
                name: '总量',
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ];
        this.series = [
            {
                name: '申请人',
                type: 'line',
            },
            {
                name: '发明人',
                type: 'line',
            },
            {
                name: '专利',
                type: 'bar',
            },
        ];
        this.dataset.source = dataset.dataset;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdlL2VjaGFydHMvdHJlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLFVBQVU7SUFDbkIsWUFBWSxPQUFPO1FBR25CLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7UUFDRixZQUFPLEdBQUc7WUFDTixPQUFPLEVBQUUsTUFBTTtZQUNmLFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUU7b0JBQ0gsZUFBZSxFQUFFLFNBQVM7aUJBQzdCO2FBQ0o7U0FDSixDQUFDO1FBQ0YsV0FBTSxHQUFHO1lBQ0wsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDN0IsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxFQUFFO2FBQ2xCO1NBQ0osQ0FBQztRQUNGLGFBQVEsR0FBRztZQUNQLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUM7UUFDRixZQUFPLEdBQUc7WUFDTixNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixVQUFLLEdBQUc7WUFDSjtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLElBQUk7YUFDcEI7U0FDSixDQUFDO1FBQ0YsVUFBSyxHQUFHO1lBQ0o7Z0JBQ0ksSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUMxQjtTQUNKLENBQUM7UUFDRixXQUFNLEdBQUc7WUFDTDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNJLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSixDQUFDO1FBM0RFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQztDQTJESiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RUNoYXJ0T3B0aW9ufSBmcm9tICdlY2hhcnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVuZENoYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXQpIHtcclxuICAgICAgICB0aGlzLmRhdGFzZXQuc291cmNlID0gZGF0YXNldC5kYXRhc2V0O1xyXG4gICAgfVxyXG4gICAgdGl0bGUgPSB7XHJcbiAgICAgICAgdGV4dDogJ+ihjOS4muS4k+WIqeWKqOaAgeaVsOaNridcclxuICAgIH07XHJcbiAgICB0b29sdGlwID0ge1xyXG4gICAgICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiAnY3Jvc3MnLFxyXG4gICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI4M2I1NidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZWdlbmQgPSB7XHJcbiAgICAgICAgZGF0YTogWyfkuJPliKknLCAn55Sz6K+35Lq6JywgJ+WPkeaYjuS6uiddXHJcbiAgICB9O1xyXG4gICAgdG9vbGJveCA9IHtcclxuICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgIGZlYXR1cmU6IHtcclxuICAgICAgICAgICAgc2F2ZUFzSW1hZ2U6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRhdGFab29tID0ge1xyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICAgIGVuZDogMTAwXHJcbiAgICB9O1xyXG4gICAgZGF0YXNldCA9IHtcclxuICAgICAgICBzb3VyY2U6IFtdXHJcbiAgICB9O1xyXG4gICAgeEF4aXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICBib3VuZGFyeUdhcDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgeUF4aXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICAgICAgICBzY2FsZTogdHJ1ZSxcclxuICAgICAgICAgICAgbmFtZTogJ+aAu+mHjycsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgYm91bmRhcnlHYXA6IFswLjIsIDAuMl1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgc2VyaWVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ+eUs+ivt+S6uicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ+WPkeaYjuS6uicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ+S4k+WIqScsXHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG59XHJcbiJdfQ==