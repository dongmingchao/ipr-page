var TrendChart = /** @class */ (function () {
    function TrendChart(dataset) {
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
    return TrendChart;
}());
export { TrendChart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pcHItcmVwb3J0LyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdlL2VjaGFydHMvdHJlbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFDSSxvQkFBWSxPQUFPO1FBR25CLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7UUFDRixZQUFPLEdBQUc7WUFDTixPQUFPLEVBQUUsTUFBTTtZQUNmLFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUU7b0JBQ0gsZUFBZSxFQUFFLFNBQVM7aUJBQzdCO2FBQ0o7U0FDSixDQUFDO1FBQ0YsV0FBTSxHQUFHO1lBQ0wsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDN0IsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFO2dCQUNMLFdBQVcsRUFBRSxFQUFFO2FBQ2xCO1NBQ0osQ0FBQztRQUNGLGFBQVEsR0FBRztZQUNQLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLENBQUM7WUFDUixHQUFHLEVBQUUsR0FBRztTQUNYLENBQUM7UUFDRixZQUFPLEdBQUc7WUFDTixNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixVQUFLLEdBQUc7WUFDSjtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsV0FBVyxFQUFFLElBQUk7YUFDcEI7U0FDSixDQUFDO1FBQ0YsVUFBSyxHQUFHO1lBQ0o7Z0JBQ0ksSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUMxQjtTQUNKLENBQUM7UUFDRixXQUFNLEdBQUc7WUFDTDtnQkFDSSxJQUFJLEVBQUUsS0FBSztnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNJLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxLQUFLO2FBQ2Q7U0FDSixDQUFDO1FBM0RFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQztJQTJETCxpQkFBQztBQUFELENBQUMsQUE5REQsSUE4REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VDaGFydE9wdGlvbn0gZnJvbSAnZWNoYXJ0cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlbmRDaGFydCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhc2V0LnNvdXJjZSA9IGRhdGFzZXQuZGF0YXNldDtcclxuICAgIH1cclxuICAgIHRpdGxlID0ge1xyXG4gICAgICAgIHRleHQ6ICfooYzkuJrkuJPliKnliqjmgIHmlbDmja4nXHJcbiAgICB9O1xyXG4gICAgdG9vbHRpcCA9IHtcclxuICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXHJcbiAgICAgICAgYXhpc1BvaW50ZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2Nyb3NzJyxcclxuICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyODNiNTYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGVnZW5kID0ge1xyXG4gICAgICAgIGRhdGE6IFsn5LiT5YipJywgJ+eUs+ivt+S6uicsICflj5HmmI7kuronXVxyXG4gICAgfTtcclxuICAgIHRvb2xib3ggPSB7XHJcbiAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICBmZWF0dXJlOiB7XHJcbiAgICAgICAgICAgIHNhdmVBc0ltYWdlOiB7fVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkYXRhWm9vbSA9IHtcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBzdGFydDogMCxcclxuICAgICAgICBlbmQ6IDEwMFxyXG4gICAgfTtcclxuICAgIGRhdGFzZXQgPSB7XHJcbiAgICAgICAgc291cmNlOiBbXVxyXG4gICAgfTtcclxuICAgIHhBeGlzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgYm91bmRhcnlHYXA6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHlBeGlzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgc2NhbGU6IHRydWUsXHJcbiAgICAgICAgICAgIG5hbWU6ICfmgLvph48nLFxyXG4gICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgIGJvdW5kYXJ5R2FwOiBbMC4yLCAwLjJdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHNlcmllcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfnlLPor7fkuronLFxyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICflj5HmmI7kuronLFxyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfkuJPliKknLFxyXG4gICAgICAgICAgICB0eXBlOiAnYmFyJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxufVxyXG4iXX0=