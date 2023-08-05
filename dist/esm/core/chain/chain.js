import { sleep } from '../../tools/utils';
export class Chain {
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
    async destroy() {
        for (const link of this._links) {
            await link.system.destroy();
        }
    }
    async executeItem(link) {
        const { system, includes, excludes, withDisabled } = link;
        const decorator = { includes, excludes, withDisabled };
        if (link.delay) {
            await sleep(link.delay);
        }
        await system.execute(this._entities, decorator);
    }
}
//# sourceMappingURL=chain.js.map