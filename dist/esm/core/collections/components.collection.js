export class ComponentsCollection {
    constructor() {
        this._components = [];
    }
    get items() {
        return this._components;
    }
    get count() {
        return this._components.length;
    }
    add(component) {
        this._components.push(component);
    }
    get(type) {
        const component = this._components.find((component) => component instanceof type);
        return component ? component : null;
    }
    remove(type) {
        const component = this.get(type);
        this._components = this.items.filter((component) => component.constructor !== type);
        return component ? component : null;
    }
    has(type) {
        return !!this.get(type);
    }
}
//# sourceMappingURL=components.collection.js.map