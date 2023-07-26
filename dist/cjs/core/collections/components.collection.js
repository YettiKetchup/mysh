"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCollection = void 0;
class ComponentsCollection {
    constructor() {
        this._components = [];
    }
    get components() {
        return this._components;
    }
    get count() {
        return this._components.length;
    }
    add(component) {
        this._components.push(component);
    }
    toBeginning(component) {
        this.components.unshift(component);
    }
    get(type) {
        const component = this._components.find((component) => component instanceof type);
        return component ? component : null;
    }
    remove(type) {
        const component = this.get(type);
        this._components = this.components.filter((component) => component.constructor !== type);
        return component ? component : null;
    }
    has(type) {
        return !!this.get(type);
    }
}
exports.ComponentsCollection = ComponentsCollection;
//# sourceMappingURL=components.collection.js.map