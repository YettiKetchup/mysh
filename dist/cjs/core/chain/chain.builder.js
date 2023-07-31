"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainBuilder = void 0;
const _1 = require(".");
class ChainBuilder {
    get _current() {
        return this._chain.links.length - 1;
    }
    constructor(_entities) {
        this._entities = _entities;
        this._chain = new _1.Chain(this._entities);
    }
    withSystem(system) {
        this._chain.add({
            system: system,
        });
        return this;
    }
    withIncludes(...components) {
        this._chain.links[this._current].includes = components;
        return this;
    }
    withExcludes(...components) {
        this._chain.links[this._current].excludes = components;
        return this;
    }
    withDisabled(withDisabled) {
        this._chain.links[this._current].withDisabled = withDisabled;
        return this;
    }
    build() {
        return this._chain;
    }
}
exports.ChainBuilder = ChainBuilder;
//# sourceMappingURL=chain.builder.js.map