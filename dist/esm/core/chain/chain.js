export class Chain {
    get links() {
        return this._links;
    }
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
        const { system, includes, excludes, withDisabled } = part;
        const decorator = { includes, excludes, withDisabled };
        await system.execute(this._entities, decorator);
    }
}
//# sourceMappingURL=chain.js.map