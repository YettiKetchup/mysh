import { Component, ComponentType } from '../core/component';
import { Entity } from '../core/entity';

export class ComponentsCaching {
  private static _cached: Map<string, Component[]> = new Map();

  public static cache<T extends Component>(
    entity: Entity,
    componentType: ComponentType<T>,
    isObservable: boolean = false
  ): void {
    const remove = this.getMethod(
      entity,
      'remove',
      isObservable
    ) as typeof entity.remove;

    const component: T = remove(componentType);
    const cache = this._cached.get(entity.id) || [];

    cache.push(component);
    this._cached.set(entity.id, cache);
  }

  public static from<T extends Component>(
    entity: Entity,
    componentType: ComponentType<T>,
    isObservable: boolean = false
  ): T | null {
    if (!this._cached.has(entity.id)) return null;

    const add = this.getMethod(
      entity,
      'add',
      isObservable
    ) as typeof entity.add;

    const cache = this._cached.get(entity.id) || [];
    const component = this.find(componentType, cache);

    if (component) {
      add(component);
      const newCache = cache.filter((c) => c !== component);
      this._cached.set(entity.id, newCache);
      return component as T;
    }

    return null;
  }

  public static clear(entity: Entity): void {
    this._cached.set(entity.id, []);
  }

  private static getMethod(
    entity: Entity,
    type: 'remove' | 'add',
    isObservable: boolean
  ) {
    let method = entity[type].bind(entity);

    if (isObservable) {
      const entity$ = entity.observable();
      method = entity$[type].bind(this);
    }

    return method;
  }

  private static find<T extends Component>(
    componentType: ComponentType<T>,
    components: Component[]
  ): T | null {
    return (
      (components.find(
        (component) => component instanceof componentType
      ) as T) || null
    );
  }
}
