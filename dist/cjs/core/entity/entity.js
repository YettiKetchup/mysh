"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const utils_1 = require("../../tools/utils");
const collections_1 = require("../collections");
const observable_1 = require("../observable");
const observable_entity_1 = require("./observable.entity");
const component_1 = require("../component");
class Entity {
    constructor() {
        this._id = (0, utils_1.uid)();
        this._visible = true;
        this._components = new collections_1.ComponentsCollection();
        this._entityCollection = null;
    }
    get id() {
        return this._id;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
    }
    get components() {
        return this._components.items;
    }
    get collection() {
        return this._entityCollection;
    }
    set collection(value) {
        this._entityCollection = value;
    }
    onInit() {
        observable_1.EntitySubject.notify(observable_1.WatchFor.Initialized, this);
    }
    onDestroy() {
        observable_1.EntitySubject.notify(observable_1.WatchFor.Destroyed, this);
    }
    add(component) {
        if (this._components.has(component.constructor)) {
            throw new Error(`Entity already contains ${component.constructor.name}`);
        }
        this._components.add(component);
        if (this._components.count == 1) {
            observable_1.EntitySubject.notify(observable_1.WatchFor.ReadyToWork, this);
        }
    }
    get(type, isObservable = false) {
        try {
            const component = this._components.get(type);
            return isObservable
                ? this.createObservableComponent(component)
                : component;
        }
        catch (e) {
            throw new Error(`${type.name} didn't exist in Entity`);
        }
    }
    remove(type) {
        const component = this._components.remove(type);
        if (!component) {
            throw new Error(`${type.name} didn't exist in Entity`);
        }
        return component;
    }
    has(types) {
        return types.every((component) => this._components.has(component));
    }
    isSatisfiedFilter(filter) {
        const includes = filter.includes || [];
        const excludes = filter.excludes || [];
        return this.has(includes) && (!excludes.length || !this.has(excludes));
    }
    observable() {
        return new observable_entity_1.ObservableEntity(this);
    }
    destroy() {
        this.collection.destroy(this);
    }
    createObservableComponent(component) {
        return new component_1.ObservableComponentWrapper(this, component);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map