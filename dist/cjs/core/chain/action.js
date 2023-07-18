"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
class Chain {
    constructor(_entities) {
        this._entities = _entities;
        this._links = [];
    }
    add(part) {
        this._links.push(part);
    }
    async execute() {
        for (const item of this._links) {
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
exports.Chain = Chain;
//# sourceMappingURL=action.js.map