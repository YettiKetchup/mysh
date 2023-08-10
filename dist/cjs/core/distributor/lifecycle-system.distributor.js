"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifecycleSystemDistributor = void 0;
const systems_caching_1 = require("../cahcing/systems.caching");
class LifecycleSystemDistributor {
    static { this._systems = new Map(); }
    static add(systemConstructor, lifecycle) {
        const systems = this._systems.get(lifecycle) || [];
        if (this.checkDuplicates(systemConstructor, systems))
            return;
        const system = systems_caching_1.SystemsCaching.create(systemConstructor);
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
exports.LifecycleSystemDistributor = LifecycleSystemDistributor;
//# sourceMappingURL=lifecycle-system.distributor.js.map