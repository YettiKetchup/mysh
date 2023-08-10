import { SystemsCaching } from '../cahcing';
export class EventDistributor {
    static { this._events = []; }
    static add(event, systemConstructor) {
        const system = SystemsCaching.create(systemConstructor);
        this._events.push({ event, system });
    }
    static get(systemConstructor) {
        return (this._events.find((event) => event.system instanceof systemConstructor) ||
            null);
    }
}
//# sourceMappingURL=event.distributor.js.map