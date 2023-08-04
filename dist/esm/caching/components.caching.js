export class ComponentsCaching {
    static { this._cached = new Map(); }
    static cache(entity, componentType, isObservable = false) {
        const remove = this.getMethod(entity, 'remove', isObservable);
        const component = remove(componentType);
        const cache = this._cached.get(entity.id) || [];
        cache.push(component);
        this._cached.set(entity.id, cache);
    }
    static from(entity, componentType, isObservable = false) {
        if (!this._cached.has(entity.id))
            return null;
        const add = this.getMethod(entity, 'add', isObservable);
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
    static has(entity, componentType) {
        const cache = this._cached.get(entity.id) || [];
        return !!this.find(componentType, cache);
    }
    static clear(entity) {
        this._cached.set(entity.id, []);
    }
    static getMethod(entity, type, isObservable) {
        let method = entity[type].bind(entity);
        if (isObservable) {
            const entity$ = entity.observable();
            method = entity$[type].bind(this);
        }
        return method;
    }
    static find(componentType, components) {
        return (components.find((component) => component instanceof componentType) || null);
    }
}
//# sourceMappingURL=components.caching.js.map