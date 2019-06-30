var Rank = /** @class */ (function () {
    function Rank(dataset) {
        this.dataset = {
            source: [
            // ['amount', 'product'],
            // [58212, 'Matcha Latte'],
            // [78254, 'Milk Tea'],
            // [41032, 'Cheese Cocoa'],
            // [12755, 'Cheese Brownie'],
            // [20145, 'Matcha Cocoa'],
            // [79146, 'Tea'],
            // [91852, 'Orange Juice'],
            // [101852, 'Lemon Juice'],
            // [20112, 'Walnut Brownie']
            ]
        };
        // grid: {containLabel: true},
        this.xAxis = { name: '' };
        this.yAxis = {
            type: 'category',
        };
        this.series = [{
                type: 'bar',
                encode: {
                    x: 'count',
                    y: 'name'
                },
            }];
        this.dataset.source = dataset.result;
    }
    return Rank;
}());
export { Rank };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvZWNoYXJ0cy9yYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBQ0ksY0FBWSxPQUFPO1FBSW5CLFlBQU8sR0FBRztZQUNOLE1BQU0sRUFBRTtZQUNKLHlCQUF5QjtZQUN6QiwyQkFBMkI7WUFDM0IsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQiw2QkFBNkI7WUFDN0IsMkJBQTJCO1lBQzNCLGtCQUFrQjtZQUNsQiwyQkFBMkI7WUFDM0IsMkJBQTJCO1lBQzNCLDRCQUE0QjthQUMvQjtTQUNKLENBQUM7UUFDRiw4QkFBOEI7UUFDOUIsVUFBSyxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQ25CLFVBQUssR0FBRztZQUNKLElBQUksRUFBRSxVQUFVO1NBUW5CLENBQUM7UUFDRixXQUFNLEdBQUcsQ0FBQztnQkFDTixJQUFJLEVBQUUsS0FBSztnQkFDWCxNQUFNLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLE9BQU87b0JBQ1YsQ0FBQyxFQUFFLE1BQU07aUJBQ1o7YUFDSixDQUFDLENBQUM7UUFuQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBbUNMLFdBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFQ2hhcnRPcHRpb259IGZyb20gJ2VjaGFydHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmsge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YXNldCkge1xyXG4gICAgICAgIHRoaXMuZGF0YXNldC5zb3VyY2UgPSBkYXRhc2V0LnJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhc2V0ID0ge1xyXG4gICAgICAgIHNvdXJjZTogW1xyXG4gICAgICAgICAgICAvLyBbJ2Ftb3VudCcsICdwcm9kdWN0J10sXHJcbiAgICAgICAgICAgIC8vIFs1ODIxMiwgJ01hdGNoYSBMYXR0ZSddLFxyXG4gICAgICAgICAgICAvLyBbNzgyNTQsICdNaWxrIFRlYSddLFxyXG4gICAgICAgICAgICAvLyBbNDEwMzIsICdDaGVlc2UgQ29jb2EnXSxcclxuICAgICAgICAgICAgLy8gWzEyNzU1LCAnQ2hlZXNlIEJyb3duaWUnXSxcclxuICAgICAgICAgICAgLy8gWzIwMTQ1LCAnTWF0Y2hhIENvY29hJ10sXHJcbiAgICAgICAgICAgIC8vIFs3OTE0NiwgJ1RlYSddLFxyXG4gICAgICAgICAgICAvLyBbOTE4NTIsICdPcmFuZ2UgSnVpY2UnXSxcclxuICAgICAgICAgICAgLy8gWzEwMTg1MiwgJ0xlbW9uIEp1aWNlJ10sXHJcbiAgICAgICAgICAgIC8vIFsyMDExMiwgJ1dhbG51dCBCcm93bmllJ11cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG4gICAgLy8gZ3JpZDoge2NvbnRhaW5MYWJlbDogdHJ1ZX0sXHJcbiAgICB4QXhpcyA9IHtuYW1lOiAnJ307XHJcbiAgICB5QXhpcyA9IHtcclxuICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgICAgIC8vIGF4aXNMYWJlbDoge1xyXG4gICAgICAgIC8vICAgICBpbnNpZGU6IHRydWUsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyB6OiAzLFxyXG4gICAgICAgIC8vIGF4aXNUaWNrOiB7XHJcbiAgICAgICAgLy8gICAgIGluc2lkZTogdHJ1ZVxyXG4gICAgICAgIC8vIH1cclxuICAgIH07XHJcbiAgICBzZXJpZXMgPSBbe1xyXG4gICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgIGVuY29kZToge1xyXG4gICAgICAgICAgICB4OiAnY291bnQnLFxyXG4gICAgICAgICAgICB5OiAnbmFtZSdcclxuICAgICAgICB9LFxyXG4gICAgfV07XHJcbn1cclxuIl19