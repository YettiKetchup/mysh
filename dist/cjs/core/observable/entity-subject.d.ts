import { ComponentType } from '../component';
import { Entity } from '../entity';
import { ObserverType } from './data/observer-type.enum';
import { EntityObserver } from './entity-observer';
export declare class EntitySubject {
    static get instance(): EntitySubject;
    private static _instance;
    private _observers;
    register(observer: EntityObserver): void;
    destroy(observer: EntityObserver): void;
    notify(type: ObserverType, entity: Entity, watch?: ComponentType<any>): void;
    private getComponentSubjects;
    private getEntitySubjects;
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
    static onEnable(): EntityObserver;
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
    static onDisable(): EntityObserver;
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
    static onAdd(type: ComponentType<any>): EntityObserver;
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
    static onRemove(type: ComponentType<any>): EntityObserver;
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
    static onChange(type: ComponentType<any>): EntityObserver;
}
