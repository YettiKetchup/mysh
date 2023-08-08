"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chain = void 0;
const utils_1 = require("../../tools/utils");
class Chain {
    constructor() {
        this._links = [];
    }
    get links() {
        return this._links;
    }
    add(link) {
        this._links.push(link);
    }
    async execute(entities) {
        for (const link of this._links) {
            await this.executeItem(link, entities);
        }
    }
    async destroy() {
        for (const link of this._links) {
            await link.system.destroy();
        }
    }
    async executeItem(link, entities) {
        const { system, includes, excludes, withDisabled } = link;
        const decorator = { includes, excludes, withDisabled };
        if (link.delay) {
            await (0, utils_1.sleep)(link.delay);
        }
        await system.execute(entities, decorator);
    }
}
exports.Chain = Chain;
//# sourceMappingURL=chain.js.map