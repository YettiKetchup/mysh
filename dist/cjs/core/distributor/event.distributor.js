"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDistributor = void 0;
const cahcing_1 = require("../cahcing");
class EventDistributor {
    static { this._events = []; }
    static add(event, systemConstructor) {
        const system = cahcing_1.SystemsCaching.create(systemConstructor);
        this._events.push({ event, system });
    }
    static get(systemConstructor) {
        return (this._events.find((event) => event.system instanceof systemConstructor) ||
            null);
    }
}
exports.EventDistributor = EventDistributor;
//# sourceMappingURL=event.distributor.js.map