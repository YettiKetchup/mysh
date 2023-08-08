import { SystemsCaching } from '../system';
import { Chain } from '.';
export class ChainBuilder {
    constructor() {
        this._chain = new Chain();
    }
    get _current() {
        return this._chain.links.length - 1;
    }
    withSystem(systemConstructor, data) {
        const system = SystemsCaching.create(systemConstructor);
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
//# sourceMappingURL=chain.builder.js.map