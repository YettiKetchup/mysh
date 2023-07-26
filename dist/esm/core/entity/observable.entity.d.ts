import { Component, ComponentType } from '../component';
import { EntitySubject } from '../observable';
import { Entity } from './entity';
export declare class ObservableEntity {
    private _entity;
    private _subject;
    /**
     * If the Entity is not active, it will be ignored by Systems,
     * even if it exists in memory.
     *
     * Observable Entities, when this field changes,
     * fire an Observer Type.ENABLED or ObserverType.DISABLED event,
     * depending on the value passed
     */
    get visible(): boolean;
    set visible(value: boolean);
    constructor(_entity: Entity, _subject: EntitySubject);
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
    add(component: Component): void;
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
    remove<TComponent extends Component>(componentType: ComponentType<TComponent>): TComponent;
}
