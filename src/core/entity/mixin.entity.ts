import { ComponentsCollection } from "../collections";
import {
  Component,
  IComponentFilter,
  ComponentType,
  ObservableComponent,
  ObservableComponentWrapper,
} from "../component";
import { EntitySubject } from "../observable";
import { IEntity } from "./data/interfaces";
import { MixinConstructor } from "./data/types";
import { ObservableEntity } from "./observable.entity";

export function MixinEntity<T extends MixinConstructor>(Mixin: T) {
  class Entity extends Mixin implements IEntity {
    public get visible(): boolean {
      return this._visible;
    }

    public set visible(value: boolean) {
      this._visible = value;
    }

    public get components(): Component[] {
      return this._collection.components;
    }

    public _visible: boolean = true;
    public _collection: ComponentsCollection = new ComponentsCollection();

    public add(component: Component): void {
      if (this._collection.has(component.constructor)) {
        throw new Error(
          `Entity already contains ${component.constructor.name}`
        );
      }

      this._collection.add(component);
    }

    public get<T extends Component>(
      type: ComponentType<T>,
      isObservable: boolean = false
    ): T | ObservableComponent<T> {
      try {
        const component = this._collection.get(type);
        return isObservable
          ? this.createObservableComponent(component as T)
          : (component as T);
      } catch (e) {
        throw new Error(`${type.name} didn't exist in Entity`);
      }
    }

    public remove<T extends Component>(type: ComponentType<T>): T {
      const component = this._collection.remove(type) as T;

      if (!component) {
        throw new Error(`${type.name} didn't exist in Entity`);
      }

      return component;
    }

    public has(types: ComponentType<any>[]): boolean {
      return types.every((component) => this._collection.has(component));
    }

    public isSatisfiedFilter(filter: IComponentFilter): boolean {
      const includes = filter.includes || [];
      const excludes = filter.excludes || [];

      return this.has(includes) && (!excludes.length || !this.has(excludes));
    }

    public observable(): ObservableEntity {
      return new ObservableEntity(this, EntitySubject.instance);
    }

    public createObservableComponent<T extends Component>(
      component: T
    ): ObservableComponent<T> {
      return new ObservableComponentWrapper(
        EntitySubject.instance,
        this,
        component
      ) as unknown as ObservableComponent<T>;
    }
  }

  return Entity;
}
