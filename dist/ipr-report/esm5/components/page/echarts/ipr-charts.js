import { TrendChart } from './trend';
import { WorldChart } from './geo';
import { Rank } from './rank';
import { TechDistribution } from './pie';
var IprCharts = /** @class */ (function () {
    function IprCharts(type, dataset) {
        this.types = {
            trend: TrendChart,
            geo: WorldChart,
            rank: Rank,
            tech_division: TechDistribution
        };
        Object.assign(this, new this.types[type](dataset));
    }
    return IprCharts;
}());
export { IprCharts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLWNoYXJ0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvZWNoYXJ0cy9pcHItY2hhcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUV2QztJQUVJLG1CQUFZLElBQUksRUFBRSxPQUFPO1FBSXpCLFVBQUssR0FBRztZQUNKLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixhQUFhLEVBQUUsZ0JBQWdCO1NBQ2xDLENBQUM7UUFSRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBUUwsZ0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHJlbmRDaGFydH0gZnJvbSAnLi90cmVuZCc7XHJcbmltcG9ydCB7V29ybGRDaGFydH0gZnJvbSAnLi9nZW8nO1xyXG5pbXBvcnQge1Jhbmt9IGZyb20gJy4vcmFuayc7XHJcbmltcG9ydCB7VGVjaERpc3RyaWJ1dGlvbn0gZnJvbSAnLi9waWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElwckNoYXJ0cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgZGF0YXNldCkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgbmV3IHRoaXMudHlwZXNbdHlwZV0oZGF0YXNldCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGVzID0ge1xyXG4gICAgICAgIHRyZW5kOiBUcmVuZENoYXJ0LFxyXG4gICAgICAgIGdlbzogV29ybGRDaGFydCxcclxuICAgICAgICByYW5rOiBSYW5rLFxyXG4gICAgICAgIHRlY2hfZGl2aXNpb246IFRlY2hEaXN0cmlidXRpb25cclxuICAgIH07XHJcbn1cclxuIl19