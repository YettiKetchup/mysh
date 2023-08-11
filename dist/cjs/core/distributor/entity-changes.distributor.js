"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityChangesDistributor = void 0;
const systems_caching_1 = require("../cahcing/systems.caching");
class EntityChangesDistributor {
    static { this._observers = []; }
    static add(observer, systemConstructor) {
        const system = systems_caching_1.SystemsCaching.create(systemConstructor);
        this._observers.push({ observer, system });
    }
    static get(systemConstructor) {
        return (this._observers.find((observer) => observer.system instanceof systemConstructor) || null);
    }
}
exports.EntityChangesDistributor = EntityChangesDistributor;
//# sourceMappingURL=entity-changes.distributor.js.map