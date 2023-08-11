export class SystemsCaching {
    static { this._cahce = []; }
    static create(ctor) {
        let system = this.get(ctor) || new ctor();
        return system;
    }
    static get(ctor) {
        return this._cahce.find((system) => system instanceof ctor) || null;
    }
}
//# sourceMappingURL=systems.caching.js.map