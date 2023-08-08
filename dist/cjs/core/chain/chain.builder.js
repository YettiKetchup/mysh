"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainBuilder = void 0;
const system_1 = require("../system");
const _1 = require(".");
class ChainBuilder {
    constructor() {
        this._chain = new _1.Chain();
    }
    get _current() {
        return this._chain.links.length - 1;
    }
    withSystem(systemConstructor, data) {
        const system = system_1.SystemsCaching.create(systemConstructor);
        if (data)
            this.addData(system, data);
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
    withDelay(delay) {
        this._chain.links[this._current].delay = delay;
        return this;
    }
    build() {
        return this._chain;
    }
    addData(system, data) {
        for (let key in data) {
            Object.defineProperty(system, key, {
                value: data[key],
                writable: false,
            });
        }
    }
}
exports.ChainBuilder = ChainBuilder;
//# sourceMappingURL=chain.builder.js.map