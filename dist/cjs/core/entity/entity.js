"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const collections_1 = require("../collections");
const component_1 = require("../component");
const observable_1 = require("../observable");
const observable_entity_1 = require("./observable.entity");
class Entity {
    constructor() {
        this._visible = true;
        this._collection = new collections_1.ComponentsCollection();
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
    }
    get components() {
        return this._collection.components;
    }
    add(component, unshift = false) {
        if (this._collection.has(component.constructor)) {
            throw new Error(`Entity already contains ${component.constructor.name}`);
        }
        unshift
            ? this._collection.toBeginning(component)
            : this._collection.add(component);
    }
    get(type, isObservable = false) {
        try {
            const component = this._collection.get(type);
            return isObservable
                ? this.createObservableComponent(component)
                : component;
        }
        catch (e) {
            throw new Error(`${type.name} didn't exist in Entity`);
        }
    }
    remove(type) {
        const component = this._collection.remove(type);
        if (!component) {
            throw new Error(`${type.name} didn't exist in Entity`);
        }
        return component;
    }
    has(types) {
        return types.every((component) => this._collection.has(component));
    }
    isSatisfiedFilter(filter) {
        const includes = filter.includes || [];
        const excludes = filter.excludes || [];
        return this.has(includes) && (!excludes.length || !this.has(excludes));
    }
    observable() {
        return new observable_entity_1.ObservableEntity(this, observable_1.EntitySubject.instance);
    }
    createObservableComponent(component) {
        return new component_1.ObservableComponentWrapper(observable_1.EntitySubject.instance, this, component);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map