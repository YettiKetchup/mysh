import { SystemsCaching } from '../cahcing/systems.caching';
export class EntityChangesDistributor {
    static { this._observers = []; }
    static add(observer, systemConstructor) {
        const system = SystemsCaching.create(systemConstructor);
        this._observers.push({ observer, system });
    }
    static get(systemConstructor) {
        return (this._observers.find((observer) => observer.system instanceof systemConstructor) || null);
    }
}
//# sourceMappingURL=entity-changes.distributor.js.map