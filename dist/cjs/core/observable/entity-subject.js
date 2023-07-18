"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySubject = void 0;
const observer_type_enum_1 = require("./data/observer-type.enum");
const entity_observer_1 = require("./entity-observer");
class EntitySubject {
    constructor() {
        this._observers = [];
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new EntitySubject();
        }
        return this._instance;
    }
    static { this._instance = null; }
    register(observer) {
        this._observers.push(observer);
    }
    destroy(observer) {
        this._observers = this._observers.filter((item) => item !== observer);
    }
    notify(type, entity, watch) {
        const observers = watch
            ? this.getComponentSubjects(type, watch)
            : this.getEntitySubjects(type);
        observers.forEach((observer) => observer.execute(entity));
    }
    getComponentSubjects(type, watch) {
        return this._observers.filter((observer) => observer.type === type && observer.watch === watch);
    }
    getEntitySubjects(type) {
        return this._observers.filter((observer) => observer.type === type);
    }
    /**
     * Creating an observer that watches for changes to ObservableEntity.
     *
     * @returns
     * Returns an instance of an EntityObserver that watches all
     * events of type ObserverType.ENABLED
     *
     * @example
     * const observer$: EntityObserver = Entity.onEnable();
     * observer$.subscribe(entity => {
     *  // ...do something
     * });
     *
     * const entity$ = entity.observable();
     * entity$.active = true;
     */
    static onEnable() {
        return new entity_observer_1.EntityObserver(this.instance, observer_type_enum_1.ObserverType.ENABLED);
    }
    /**
     * Creating an observer that watches for changes to ObservableEntity.
     *
     * @returns
     * Returns an instance of an EntityObserver that watches all
     * events of type ObserverType.DISABLED
     *
     * @example
     * const observer$: EntityObserver = Entity.onDisable();
     * observer$.subscribe(entity => {
     *  // ...do something
     * });
     *
     * const entity$ = entity.observable();
     * entity$.active = false;
     */
    static onDisable() {
        return new entity_observer_1.EntityObserver(this.instance, observer_type_enum_1.ObserverType.DISABLED);
    }
    /**
     * Creating an observer that watches for changes to ObservableEntity.
     *
     * @param type
     * The type of the Component that the EntityObserver should watch
     * for when added.
     *
     * @returns
     * Returns an instance of an EntityObserver that watches all
     * events of type ObserverType.ADDED
     *
     * @example
     * const observer$: EntityObserver = Entity.onAdd(StaminaComponent);
     * observer$.subscribe(entity => {
     *  // ...do something
     * });
     *
     * const entity$ = entity.observable();
     * entity$.add(new StaminaComponent(100));
     */
    static onAdd(type) {
        return new entity_observer_1.EntityObserver(this.instance, observer_type_enum_1.ObserverType.ADDED, type);
    }
    /**
     * Creating an observer that watches for changes to ObservableEntity.
     *
     * @param type
     * The type of the Component that the EntityObserver should watch
     * for when removed.
     *
     * @returns
     * Returns an instance of an EntityObserver that watches all
     * events of type ObserverType.REMOVED
     *
     * @example
     * const observer$: EntityObserver = Entity.onRemove(StaminaComponent);
     * observer$.subscribe(entity => {
     *  // ...do something
     * });
     *
     * const entity$ = entity.observable();
     * entity$.remove(StaminaComponent);
     */
    static onRemove(type) {
        return new entity_observer_1.EntityObserver(this.instance, observer_type_enum_1.ObserverType.REMOVED, type);
    }
    /**
     * Creating an observer that watches for changes to ObservableEntity.
     *
     * @param type
     * The type of the Component that the EntityObserver should watch
     * for when changed.
     *
     * @returns
     * Returns an instance of an EntityObserver that watches all
     * events of type ObserverType.CHANGE
     *
     * @example
     *
     * const observer$: EntityObserver = Entity.onChange(StaminaComponent);
     * observer$.subscribe(entity => {
     *  // ...do something
     * });
     *
     * const stamina$ = entity.get(StaminaComponent, true);
     * stamina.value += 10;
     */
    static onChange(type) {
        return new entity_observer_1.EntityObserver(this.instance, observer_type_enum_1.ObserverType.CHANGED, type);
    }
}
exports.EntitySubject = EntitySubject;
//# sourceMappingURL=entity-subject.js.map