import * as tslib_1 from "tslib";
var TechDivision = /** @class */ (function () {
    function TechDivision() {
    }
    return TechDivision;
}());
export { TechDivision };
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());
function initArray(array, level) {
    if (array[level] === undefined) {
        array[level] = [];
    }
}
function rollForPieChart(children_label, out, level) {
    var e_1, _a;
    initArray(out, level);
    try {
        for (var children_label_1 = tslib_1.__values(children_label), children_label_1_1 = children_label_1.next(); !children_label_1_1.done; children_label_1_1 = children_label_1.next()) {
            var each = children_label_1_1.value;
            var value = { name: each.label, value: each.count };
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
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (children_label_1_1 && !children_label_1_1.done && (_a = children_label_1.return)) _a.call(children_label_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function deal_tech_division_req(ret) {
    var final = [];
    rollForPieChart(ret.tech_division_count, final, 0);
    final = final.map(function (e) {
        var index = final.indexOf(e);
        return {
            type: 'pie',
            data: e
        };
    });
    final.pop();
    return final;
}
var TechDistribution = /** @class */ (function () {
    function TechDistribution(dataset) {
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
    TechDistribution.prototype.setPieSeries = function (level) {
        var e_2, _a;
        var series = [];
        try {
            for (var level_1 = tslib_1.__values(level), level_1_1 = level_1.next(); !level_1_1.done; level_1_1 = level_1.next()) {
                var l = level_1_1.value;
                series.push(this._flat[l]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (level_1_1 && !level_1_1.done && (_a = level_1.return)) _a.call(level_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        for (var i = 0; i < series.length; i++) {
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
    };
    return TechDistribution;
}());
export { TechDistribution };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaXByLXJlcG9ydC8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS9lY2hhcnRzL3BpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFBQTtJQUlBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVEO0lBQUE7SUFLQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBWSxFQUFFLEtBQWE7SUFDMUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUyxFQUFFO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDckI7QUFDTCxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsY0FBcUIsRUFBRSxHQUFVLEVBQUUsS0FBYTs7SUFDckUsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFDdEIsS0FBbUIsSUFBQSxtQkFBQSxpQkFBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7WUFBOUIsSUFBTSxJQUFJLDJCQUFBO1lBQ1gsSUFBTSxLQUFLLEdBQVEsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDO1lBQ3pELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDSCxTQUFTLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDSjs7Ozs7Ozs7O0FBQ0wsQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUMsR0FBYTtJQUN6QyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDZixlQUFlLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7UUFDZixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU87WUFDSCxJQUFJLEVBQUUsS0FBSztZQUNYLElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ1osT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVEO0lBY0ksMEJBQVksT0FBaUI7UUFiN0IsV0FBTSxHQUFHO1lBQ0wsSUFBSSxFQUFFLFFBQVE7U0FJakIsQ0FBQztRQUNGLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxNQUFNO1lBQ2YsU0FBUyxFQUFFLGtCQUFrQjtTQUNoQyxDQUFDO1FBQ0YsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUlSLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHVDQUFZLEdBQVosVUFBYSxLQUFZOztRQUNyQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7O1lBQ2xCLEtBQWdCLElBQUEsVUFBQSxpQkFBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQWxCLElBQU0sQ0FBQyxrQkFBQTtnQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5Qjs7Ozs7Ozs7O1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM1QyxzQkFBc0I7WUFDdEIsZ0JBQWdCO1lBQ2hCLHVCQUF1QjtZQUN2Qiw0QkFBNEI7WUFDNUIsUUFBUTtZQUNSLEtBQUs7WUFDTCwwQkFBMEI7WUFDMUIsZ0JBQWdCO1lBQ2hCLHNCQUFzQjtZQUN0QixRQUFRO1lBQ1IsS0FBSztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RUNoYXJ0T3B0aW9ufSBmcm9tICdlY2hhcnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZWNoRGl2aXNpb24ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBjaGlsZHJlbl9sYWJlbDogVGVjaERpdmlzaW9uW107XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuICAgIHRvdGFsX251bTogbnVtYmVyO1xyXG4gICAgZG9tYWluX2lkOiBudW1iZXI7XHJcbiAgICBkZWVwdGg6IG51bWJlcjtcclxuICAgIHRlY2hfZGl2aXNpb25fY291bnQ6IFRlY2hEaXZpc2lvbltdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QXJyYXkoYXJyYXk6IGFueVtdLCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICBpZiAoYXJyYXlbbGV2ZWxdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBhcnJheVtsZXZlbF0gPSBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcm9sbEZvclBpZUNoYXJ0KGNoaWxkcmVuX2xhYmVsOiBhbnlbXSwgb3V0OiBhbnlbXSwgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgaW5pdEFycmF5KG91dCwgbGV2ZWwpO1xyXG4gICAgZm9yIChjb25zdCBlYWNoIG9mIGNoaWxkcmVuX2xhYmVsKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IHtuYW1lOiBlYWNoLmxhYmVsLCB2YWx1ZTogZWFjaC5jb3VudH07XHJcbiAgICAgICAgb3V0W2xldmVsXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICBpZiAoZWFjaC5jaGlsZHJlbl9sYWJlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm9sbEZvclBpZUNoYXJ0KGVhY2guY2hpbGRyZW5fbGFiZWwsIG91dCwgbGV2ZWwgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbml0QXJyYXkob3V0LCBsZXZlbCArIDEpO1xyXG4gICAgICAgICAgICBvdXRbbGV2ZWwgKyAxXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYWxfdGVjaF9kaXZpc2lvbl9yZXEocmV0OiBSZXNwb25zZSkge1xyXG4gICAgbGV0IGZpbmFsID0gW107XHJcbiAgICByb2xsRm9yUGllQ2hhcnQocmV0LnRlY2hfZGl2aXNpb25fY291bnQsIGZpbmFsLCAwKTtcclxuICAgIGZpbmFsID0gZmluYWwubWFwKGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmluYWwuaW5kZXhPZihlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgICAgZGF0YTogZVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGZpbmFsLnBvcCgpO1xyXG4gICAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVjaERpc3RyaWJ1dGlvbiB7XHJcbiAgICBsZWdlbmQgPSB7XHJcbiAgICAgICAgdHlwZTogJ3Njcm9sbCcsXHJcbiAgICAgICAgLy8gb3JpZW50OiAndmVydGljYWwnLFxyXG4gICAgICAgIC8vIHg6ICdsZWZ0JyxcclxuICAgICAgICAvLyBkYXRhOiBbJ+ebtOaOpeiuv+mXricsICfpgq7ku7bokKXplIAnLCAn6IGU55uf5bm/5ZGKJywgJ+inhumikeW5v+WRiicsICfmkJzntKLlvJXmk44nXVxyXG4gICAgfTtcclxuICAgIHRvb2x0aXAgPSB7XHJcbiAgICAgICAgdHJpZ2dlcjogJ2l0ZW0nLFxyXG4gICAgICAgIGZvcm1hdHRlcjogJ3tifSA6IHtjfSAoe2R9JSknXHJcbiAgICB9O1xyXG4gICAgc2VyaWVzID0gW107XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9mbGF0OiBhbnlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0OiBSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuX2ZsYXQgPSBkZWFsX3RlY2hfZGl2aXNpb25fcmVxKGRhdGFzZXQpO1xyXG4gICAgICAgIHRoaXMuc2V0UGllU2VyaWVzKFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGllU2VyaWVzKGxldmVsOiBhbnlbXSkge1xyXG4gICAgICAgIGNvbnN0IHNlcmllcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbCBvZiBsZXZlbCkge1xyXG4gICAgICAgICAgICBzZXJpZXMucHVzaCh0aGlzLl9mbGF0W2xdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2VyaWVzW2ldLnJhZGl1cyA9IFtpICogMTIwLCBpICogMTIwICsgMTIwXTtcclxuICAgICAgICAgICAgLy8gc2VyaWVzW2ldLmxhYmVsID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246ICdpbm5lcidcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgLy8gc2VyaWVzW2ldLmxhYmVsTGluZSA9IHtcclxuICAgICAgICAgICAgLy8gICAgIG5vcm1hbDoge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VyaWVzID0gc2VyaWVzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==