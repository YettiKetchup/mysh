import { EntitySubject, WatchFor } from '../observable';
export class ObservableEntity {
    /**
     * If the Entity is not active, it will be ignored by Systems,
     * even if it exists in memory.
     *
     * Observable Entities, when this field changes,
     * fire an Observer Type.ENABLED or ObserverType.DISABLED event,
     * depending on the value passed
     */
    get visible() {
        return this._entity.visible;
    }
    set visible(value) {
        this._entity.visible = value;
        const event = value ? WatchFor.Enabled : WatchFor.Disabled;
        EntitySubject.notify(event, this._entity);
    }
    get subject() {
        return EntitySubject;
    }
    /**
     * Returns an instance of the Entity
     * from which the ObservableEntity was retrieved.
     */
    get instance() {
        return this._entity;
    }
    constructor(_entity) {
        this._entity = _entity;
    }
    /**
     * Adds a new component to the Entity and fire ObserverType.ADDED event.
     * The component must be of a unique type.
     * If the Entity already has a component of that type,
     * an error will be thrown.
     *
     * @param component
     * Instance of Component.
     *
     * @example
     *
     * // Tracking the addition of a Component to Entity.
     * const observer$: EntityObserver = Entity.onRemove(HealthComponent);
     * observer$.subscribe(entity => {
     *  // ...do something
     * });
     *
     * // Add Component to Entity.
     * const health = new HealthComponent(100);
     * entity$.add(health);
     *
     * // If we try to add a component of type HealthComponent again,
     * // an error will be thrown.
     * const secondHealth = new HealthComponent(200);
     * entity$.add(secondHealth); // secondHealth is of the same type as health, an error will be thrown.
     */
    add(component) {
        this._entity.add(component);
        const event = WatchFor.Added;
        const componentType = component.constructor;
        EntitySubject.notify(event, this._entity, componentType);
    }
    /**
     * Removes and returns a component of the specified type.
     * Fires the ObserverTyte.REMOVED event.
     * If the Component was not found, it will throw an error.
     *
     * @param type
     * Concrete Component type.
     *
     * @returns
     * Instance of removed Component.
     *
     * @example
     *
     * // Add Component to Entity.
     * const health = new HealthComponent(100);
     * entity$.add(health);
     *
     * // If we try to add a component of type HealthComponent again,
     * // an error will be thrown.
     * const secondHealth = new HealthComponent(200);
     * entity$.add(secondHealth); // secondHealth is of the same type as health, an error will be thrown.
     */
    remove(componentType) {
        const component = this._entity.remove(componentType);
        const event = WatchFor.Removed;
        EntitySubject.notify(event, this._entity, componentType);
        return component;
    }
}
//# sourceMappingURL=observable.entity.js.map