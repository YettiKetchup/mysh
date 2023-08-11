import { uid } from '../../tools/utils';
import { ComponentsCollection } from '../collections';
import { EntitySubject, WatchFor } from '../observable';
import { ObservableEntity } from './observable.entity';
import { ObservableComponentWrapper, } from '../component';
export class Entity {
    constructor() {
        this._id = uid();
        this._visible = true;
        this._components = new ComponentsCollection();
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
        EntitySubject.notify(WatchFor.Initialized, this);
    }
    onDestroy() {
        EntitySubject.notify(WatchFor.Destroyed, this);
    }
    add(component) {
        if (this._components.has(component.constructor)) {
            throw new Error(`Entity already contains ${component.constructor.name}`);
        }
        this._components.add(component);
        if (this._components.count == 1) {
            EntitySubject.notify(WatchFor.ReadyToWork, this);
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
        return new ObservableEntity(this);
    }
    destroy() {
        this.collection.destroy(this);
    }
    createObservableComponent(component) {
        return new ObservableComponentWrapper(this, component);
    }
}
//# sourceMappingURL=entity.js.map