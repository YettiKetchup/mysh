import { uid } from '../../tools/utils';
import { ComponentsCollection } from '../collections';
import { EntitySubject, ObserverType } from '../observable';
import { ObservableEntity } from './observable.entity';
import { ObservableComponentWrapper, } from '../component';
export class Entity {
    constructor() {
        this._id = uid();
        this._visible = true;
        this._collection = new ComponentsCollection();
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
        return this._collection.components;
    }
    onInit() {
        EntitySubject.instance.notify(ObserverType.INITIALIZED, this);
    }
    onDestroy() {
        EntitySubject.instance.notify(ObserverType.DESTROYED, this);
    }
    add(component) {
        if (this._collection.has(component.constructor)) {
            throw new Error(`Entity already contains ${component.constructor.name}`);
        }
        this._collection.add(component);
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
        return new ObservableEntity(this);
    }
    createObservableComponent(component) {
        return new ObservableComponentWrapper(this, component);
    }
}
//# sourceMappingURL=entity.js.map