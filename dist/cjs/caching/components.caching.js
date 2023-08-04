"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCaching = void 0;
class ComponentsCaching {
    static { this._cached = new Map(); }
    static cache(entity, componentType, isObservable = false) {
        const remove = isObservable ? entity.observable().remove : entity.remove;
        const component = remove(componentType);
        const cache = this._cached.get(entity.id) || [];
        cache.push(component);
        this._cached.set(entity.id, cache);
    }
    static from(entity, componentType, isObservable = false) {
        if (!this._cached.has(entity.id))
            return null;
        const add = isObservable ? entity.observable().add : entity.add;
        const cache = this._cached.get(entity.id) || [];
        const component = this.find(componentType, cache);
        if (component) {
            add(component);
            const newCache = cache.filter((c) => c !== component);
            this._cached.set(entity.id, newCache);
            return component;
        }
        return null;
    }
    static clear(entity) {
        this._cached.set(entity.id, []);
    }
    static find(componentType, components) {
        return (components.find((component) => component instanceof componentType) || null);
    }
}
exports.ComponentsCaching = ComponentsCaching;
//# sourceMappingURL=components.caching.js.map