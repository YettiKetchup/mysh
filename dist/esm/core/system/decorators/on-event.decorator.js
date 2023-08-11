import { EventDistributor } from '../../distributor/event.distributor';
export function OnEvent(event) {
    return function (constructor) {
        EventDistributor.add(event, constructor);
    };
}
//# sourceMappingURL=on-event.decorator.js.map