"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainBuilder = void 0;
const chain_1 = require("./chain");
class ChainBuilder {
    get _cerrunt() {
        return this._chain.links.length - 1;
    }
    constructor(_entities) {
        this._entities = _entities;
        this._chain = new chain_1.Chain(this._entities);
    }
    withSystem(system) {
        this._chain.add({
            system: system,
        });
        return this;
    }
    withIncludes(...components) {
        this._chain.links[this._cerrunt].includes = components;
        return this;
    }
    withExcludes(...components) {
        this._chain.links[this._cerrunt].excludes = components;
        return this;
    }
    withDisabled(withDisabled) {
        this._chain.links[this._cerrunt].withDisabled = withDisabled;
        return this;
    }
    build() {
        return this._chain;
    }
}
exports.ChainBuilder = ChainBuilder;
//# sourceMappingURL=chain-builder.js.map