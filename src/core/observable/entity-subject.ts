import { ComponentType } from "../component";
import { IEntity } from "../entity";
import { ObserverType } from "./data/observer-type.enum";
import { EntityObserver } from "./entity-observer";

export class EntitySubject {
  public static get instance(): EntitySubject {
    if (!this._instance) {
      this._instance = new EntitySubject();
    }

    return this._instance;
  }

  private static _instance: EntitySubject | null = null;
  private _observers: EntityObserver[] = [];

  public register(observer: EntityObserver): void {
    this._observers.push(observer);
  }

  public destroy(observer: EntityObserver): void {
    this._observers = this._observers.filter((item) => item !== observer);
  }

  public notify(
    type: ObserverType,
    entity: IEntity,
    watch?: ComponentType<any>
  ): void {
    const observers = watch
      ? this.getComponentSubjects(type, watch)
      : this.getEntitySubjects(type);

    observers.forEach((observer) => observer.execute(entity));
  }

  private getComponentSubjects(
    type: ObserverType,
    watch: ComponentType<any>
  ): EntityObserver[] {
    return this._observers.filter(
      (observer) => observer.type === type && observer.watch === watch
    );
  }

  private getEntitySubjects(type: ObserverType): EntityObserver[] {
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
  public static onEnable(): EntityObserver {
    return new EntityObserver(this.instance, ObserverType.ENABLED);
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
    return new EntityObserver(this.instance, ObserverType.DISABLED);
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
    return new EntityObserver(this.instance, ObserverType.ADDED, type);
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
    return new EntityObserver(this.instance, ObserverType.REMOVED, type);
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
    return new EntityObserver(this.instance, ObserverType.CHANGED, type);
  }
}