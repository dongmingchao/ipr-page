export class TechDivision {
}
class Response {
}
function initArray(array, level) {
    if (array[level] === undefined) {
        array[level] = [];
    }
}
function rollForPieChart(children_label, out, level) {
    initArray(out, level);
    for (const each of children_label) {
        const value = { name: each.label, value: each.count };
        out[level].push(value);
        if (each.children_label.length) {
            rollForPieChart(each.children_label, out, level + 1);
        }
        else {
            initArray(out, level + 1);
            out[level + 1].push(value);
        }
    }
}
function deal_tech_division_req(ret) {
    let final = [];
    rollForPieChart(ret.tech_division_count, final, 0);
    final = final.map(e => {
        const index = final.indexOf(e);
        return {
            type: 'pie',
            data: e
        };
    });
    final.pop();
    return final;
}
export class TechDistribution {
    constructor(dataset) {
        this.legend = {
            type: 'scroll',
        };
        this.tooltip = {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        };
        this.series = [];
        this._flat = deal_tech_division_req(dataset);
        this.setPieSeries([0]);
    }
    setPieSeries(level) {
        const series = [];
        for (const l of level) {
            series.push(this._flat[l]);
        }
        for (let i = 0; i < series.length; i++) {
            series[i].radius = [i * 120, i * 120 + 120];
            // series[i].label = {
            //     normal: {
            //         show: false,
            //         position: 'inner'
            //     }
            // };
            // series[i].labelLine = {
            //     normal: {
            //         show: false
            //     }
            // };
        }
        this.series = series;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9lY2hhcnRzL3BpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sWUFBWTtDQUl4QjtBQUVELE1BQU0sUUFBUTtDQUtiO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBWSxFQUFFLEtBQWE7SUFDMUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDckI7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsY0FBcUIsRUFBRSxHQUFVLEVBQUUsS0FBYTtJQUNyRSxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLEtBQUssTUFBTSxJQUFJLElBQUksY0FBYyxFQUFFO1FBQy9CLE1BQU0sS0FBSyxHQUFRLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDNUIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7S0FDSjtBQUNMLENBQUM7QUFFRCxTQUFTLHNCQUFzQixDQUFDLEdBQWE7SUFDekMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2YsZUFBZSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPO1lBQ0gsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsQ0FBQztTQUNWLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNaLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRCxNQUFNLE9BQU8sZ0JBQWdCO0lBY3pCLFlBQVksT0FBaUI7UUFiN0IsV0FBTSxHQUFHO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FJakIsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxNQUFNO1lBQ2YsU0FBUyxFQUFFLGtCQUFrQjtTQUNoQyxDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUlSLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFZO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDNUMsc0JBQXNCO1lBQ3RCLGdCQUFnQjtZQUNoQix1QkFBdUI7WUFDdkIsNEJBQTRCO1lBQzVCLFFBQVE7WUFDUixLQUFLO1lBQ0wsMEJBQTBCO1lBQzFCLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFDdEIsUUFBUTtZQUNSLEtBQUs7U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RUNoYXJ0T3B0aW9ufSBmcm9tICdlY2hhcnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZWNoRGl2aXNpb24ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBjaGlsZHJlbl9sYWJlbDogVGVjaERpdmlzaW9uW107XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuICAgIHRvdGFsX251bTogbnVtYmVyO1xyXG4gICAgZG9tYWluX2lkOiBudW1iZXI7XHJcbiAgICBkZWVwdGg6IG51bWJlcjtcclxuICAgIHRlY2hfZGl2aXNpb25fY291bnQ6IFRlY2hEaXZpc2lvbltdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QXJyYXkoYXJyYXk6IGFueVtdLCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICBpZiAoYXJyYXlbbGV2ZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBhcnJheVtsZXZlbF0gPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcm9sbEZvclBpZUNoYXJ0KGNoaWxkcmVuX2xhYmVsOiBhbnlbXSwgb3V0OiBhbnlbXSwgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgaW5pdEFycmF5KG91dCwgbGV2ZWwpO1xyXG4gICAgZm9yIChjb25zdCBlYWNoIG9mIGNoaWxkcmVuX2xhYmVsKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHtuYW1lOiBlYWNoLmxhYmVsLCB2YWx1ZTogZWFjaC5jb3VudH07XHJcbiAgICAgICAgb3V0W2xldmVsXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICBpZiAoZWFjaC5jaGlsZHJlbl9sYWJlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm9sbEZvclBpZUNoYXJ0KGVhY2guY2hpbGRyZW5fbGFiZWwsIG91dCwgbGV2ZWwgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbml0QXJyYXkob3V0LCBsZXZlbCArIDEpO1xyXG4gICAgICAgICAgICBvdXRbbGV2ZWwgKyAxXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYWxfdGVjaF9kaXZpc2lvbl9yZXEocmV0OiBSZXNwb25zZSkge1xyXG4gICAgbGV0IGZpbmFsID0gW107XHJcbiAgICByb2xsRm9yUGllQ2hhcnQocmV0LnRlY2hfZGl2aXNpb25fY291bnQsIGZpbmFsLCAwKTtcclxuICAgIGZpbmFsID0gZmluYWwubWFwKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmluYWwuaW5kZXhPZihlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGZpbmFsLnBvcCgpO1xyXG4gICAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVjaERpc3RyaWJ1dGlvbiB7XHJcbiAgICBsZWdlbmQgPSB7XHJcbiAgICAgICAgdHlwZTogJ3Njcm9sbCcsXHJcbiAgICAgICAgLy8gb3JpZW50OiAndmVydGljYWwnLFxyXG4gICAgICAgIC8vIHg6ICdsZWZ0JyxcclxuICAgICAgICAvLyBkYXRhOiBbJ+ebtOaOpeiuv+mXricsICfpgq7ku7bokKXplIAnLCAn6IGU55uf5bm/5ZGKJywgJ+inhumikeW5v+WRiicsICfmkJzntKLlvJXmk44nXVxyXG4gICAgfTtcclxuICAgIHRvb2x0aXAgPSB7XHJcbiAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxyXG4gICAgICAgIGZvcm1hdHRlcjogJ3tifSA6IHtjfSAoe2R9JSknXHJcbiAgICB9O1xyXG4gICAgc2VyaWVzID0gW107XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mbGF0OiBhbnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0OiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuX2ZsYXQgPSBkZWFsX3RlY2hfZGl2aXNpb25fcmVxKGRhdGFzZXQpO1xyXG4gICAgICAgIHRoaXMuc2V0UGllU2VyaWVzKFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGllU2VyaWVzKGxldmVsOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHNlcmllcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbCBvZiBsZXZlbCkge1xyXG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0aGlzLl9mbGF0W2xdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2VyaWVzW2ldLnJhZGl1cyA9IFtpICogMTIwLCBpICogMTIwICsgMTIwXTtcclxuICAgICAgICAgICAgLy8gc2VyaWVzW2ldLmxhYmVsID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246ICdpbm5lcidcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgLy8gc2VyaWVzW2ldLmxhYmVsTGluZSA9IHtcclxuICAgICAgICAgICAgLy8gICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VyaWVzID0gc2VyaWVzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==