"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    constructor(_entities) {
        this._entities = _entities;
        this._parts = [];
    }
    add(part) {
        this._parts.push(part);
    }
    async execute() {
        for (const item of this._parts) {
            await this.executeItem(item);
        }
    }
    async executeItem(part) {
        const system = part.system;
        const filter = this.setupFilterDecorator(part);
        const entities = this._entities.get(filter);
        await system.execute(entities);
    }
    setupFilterDecorator(part) {
        let { includes, excludes, withDisabled } = part.system;
        includes = [...includes, ...(part?.includes || [])];
        excludes = [...excludes, ...(part.excludes || [])];
        if (Object.hasOwn(part, "withDisabled")) {
            withDisabled = part.withDisabled;
        }
        return { includes, excludes, withDisabled };
    }
}
exports.Action = Action;
//# sourceMappingURL=action.js.map