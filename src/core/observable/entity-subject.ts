import { ComponentType } from '../component';
import { Entity } from '../entity';
import { ObserverType } from './data/observer-type.enum';
import { EntityObserver } from './entity-observer';

export class EntitySubject {
  private static _observers: EntityObserver[] = [];

  public static register(observer: EntityObserver): void {
    this._observers.push(observer);
  }

  public static destroy(observer: EntityObserver): void {
    this._observers = this._observers.filter((item) => item !== observer);
  }

  public static notify(
    type: ObserverType,
    entity: Entity,
    watch?: ComponentType<any>
  ): void {
    const observers = watch
      ? this.getComponentSubjects(type, watch)
      : this.getEntitySubjects(type);

    observers.forEach((observer) => observer.execute(entity));
  }

  private static getComponentSubjects(
    type: ObserverType,
    watch: ComponentType<any>
  ): EntityObserver[] {
    return this._observers.filter(
      (observer) => observer.type === type && observer.watch === watch
    );
  }

  private static getEntitySubjects(type: ObserverType): EntityObserver[] {
    return this._observers.filter((observer) => observer.type === type);
  }

  /**
   * Creates an Observer that watches the addition
   * of the Entity to the Collection
   *
   * @returns
   * Returns an instance of an EntityObserver that watches all
   * events of type ObserverType.INITIALIZED
   *
   * @example
   * const observer$: EntityObserver = EntitySubject.onInitialize();
   *
   * const collection = EntityStorage.create('game');
   * const entity = new Entity();
   * collection.add(entity); // fires the event
   */
  public static onInitialize(): EntityObserver {
    return new EntityObserver(ObserverType.INITIALIZED);
  }

  /**
   * Creates an Observer that monitors the removal
   * of the Entity from the Collection
   *
   * @returns
   * Returns an instance of an EntityObserver that watches all
   * events of type ObserverType.REMOVED
   *
   * @example
   * const observer$: EntityObserver = EntitySubject.onDestroy();
   *
   * collection.destroy(entity); // fires the event
   */
  public static onDestroy(): EntityObserver {
    return new EntityObserver(ObserverType.DESTROYED);
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
  public static onEnable(): EntityObserver {
    return new EntityObserver(ObserverType.ENABLED);
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
  public static onDisable(): EntityObserver {
    return new EntityObserver(ObserverType.DISABLED);
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
  public static onAdd(type: ComponentType<any>): EntityObserver {
    return new EntityObserver(ObserverType.ADDED, type);
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
  public static onRemove(type: ComponentType<any>): EntityObserver {
    return new EntityObserver(ObserverType.REMOVED, type);
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
  public static onChange(type: ComponentType<any>): EntityObserver {
    return new EntityObserver(ObserverType.CHANGED, type);
  }
}
