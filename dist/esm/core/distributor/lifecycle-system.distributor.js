import { SystemsCaching } from '../cahcing/systems.caching';
export class LifecycleSystemDistributor {
    static { this._systems = new Map(); }
    static add(systemConstructor, lifecycle) {
        const systems = this._systems.get(lifecycle) || [];
        if (this.checkDuplicates(systemConstructor, systems))
            return;
        const system = SystemsCaching.create(systemConstructor);
        systems.push(system);
        this._systems.set(lifecycle, systems);
    }
    static get(systemConstructor, lifecycle) {
        const hoocked = this._systems.get(lifecycle) || [];
        return (hoocked.find((system) => system instanceof systemConstructor) || null);
    }
    static checkDuplicates(systemConstructor, list) {
        return !!list.find((s) => s instanceof systemConstructor);
    }
}
//# sourceMappingURL=lifecycle-system.distributor.js.map