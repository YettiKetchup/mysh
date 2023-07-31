"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
const utils_1 = require("../../tools/utils");
class Chain {
    get links() {
        return this._links;
    }
    constructor(_entities) {
        this._entities = _entities;
        this._links = [];
    }
    add(link) {
        this._links.push(link);
    }
    async execute() {
        for (const link of this._links) {
            await this.executeItem(link);
        }
    }
    async executeItem(link) {
        const { system, includes, excludes, withDisabled } = link;
        const decorator = { includes, excludes, withDisabled };
        if (link.delay) {
            await (0, utils_1.sleep)(link.delay);
        }
        await system.execute(this._entities, decorator);
    }
}
exports.Chain = Chain;
//# sourceMappingURL=chain.js.map