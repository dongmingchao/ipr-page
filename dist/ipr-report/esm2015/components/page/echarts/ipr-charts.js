import { TrendChart } from './trend';
import { WorldChart } from './geo';
import { Rank } from './rank';
import { TechDistribution } from './pie';
export class IprCharts {
    constructor(type, dataset) {
        this.types = {
            trend: TrendChart,
            geo: WorldChart,
            rank: Rank,
            tech_division: TechDistribution
        };
        Object.assign(this, new this.types[type](dataset));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXByLWNoYXJ0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lwci1yZXBvcnQvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UvZWNoYXJ0cy9pcHItY2hhcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDbkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUNqQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUV2QyxNQUFNLE9BQU8sU0FBUztJQUVsQixZQUFZLElBQUksRUFBRSxPQUFPO1FBSXpCLFVBQUssR0FBRztZQUNKLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixhQUFhLEVBQUUsZ0JBQWdCO1NBQ2xDLENBQUM7UUFSRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBUUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZW5kQ2hhcnR9IGZyb20gJy4vdHJlbmQnO1xyXG5pbXBvcnQge1dvcmxkQ2hhcnR9IGZyb20gJy4vZ2VvJztcclxuaW1wb3J0IHtSYW5rfSBmcm9tICcuL3JhbmsnO1xyXG5pbXBvcnQge1RlY2hEaXN0cmlidXRpb259IGZyb20gJy4vcGllJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJcHJDaGFydHMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGRhdGFzZXQpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG5ldyB0aGlzLnR5cGVzW3R5cGVdKGRhdGFzZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlcyA9IHtcclxuICAgICAgICB0cmVuZDogVHJlbmRDaGFydCxcclxuICAgICAgICBnZW86IFdvcmxkQ2hhcnQsXHJcbiAgICAgICAgcmFuazogUmFuayxcclxuICAgICAgICB0ZWNoX2RpdmlzaW9uOiBUZWNoRGlzdHJpYnV0aW9uXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==