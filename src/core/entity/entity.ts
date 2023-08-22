import { uid } from '../../tools/utils';
import { ComponentsCollection, EntitiesCollection } from '../collections';
import { EntitySubject, WatchFor } from '../observable';
import { ObservableEntity } from './observable.entity';
import {
  Component,
  IComponentFilter,
  ComponentType,
  ObservableComponent,
  ObservableComponentWrapper,
} from '../component';

export class Entity {
  public get id(): string {
    return this._id;
  }

  public get visible(): boolean {
    return this._visible;
  }

  public set visible(value: boolean) {
    this._visible = value;
  }

  public get components(): Component[] {
    return this._components.items;
  }

  public get collection(): EntitiesCollection {
    return this._entityCollection as EntitiesCollection;
  }

  public set collection(value: EntitiesCollection) {
    this._entityCollection = value;
  }

  private _id: string = uid();
  private _visible: boolean = true;
  private _components: ComponentsCollection = new ComponentsCollection();
  private _entityCollection: EntitiesCollection | null = null;
  private _observable: ObservableEntity = new ObservableEntity(this);

  public onInit(): void {
    EntitySubject.notify(WatchFor.Initialized, this);
  }

  public onDestroy(): void {
    EntitySubject.notify(WatchFor.Destroyed, this);
  }

  public add(component: Component): void {
    if (this._components.has(component.constructor)) {
      throw new Error(`Entity already contains ${component.constructor.name}`);
    }

    this._components.add(component);

    if (this._components.count == 1) {
      EntitySubject.notify(WatchFor.ReadyToWork, this);
    }
  }

  public get<T extends Component>(
    type: ComponentType<T>,
    isObservable: boolean = false
  ): T | ObservableComponent<T> {
    try {
      const component = this._components.get(type);
      return isObservable
        ? this.createObservableComponent(component as T)
        : (component as T);
    } catch (e) {
      throw new Error(`${type.name} didn't exist in Entity`);
    }
  }

  public remove<T extends Component>(type: ComponentType<T>): T {
    const component = this._components.remove(type) as T;

    if (!component) {
      throw new Error(`${type.name} didn't exist in Entity`);
    }

    return component;
  }

  public has(types: ComponentType<any>[]): boolean {
    return types.every((component) => this._components.has(component));
  }

  public isSatisfiedFilter(filter: IComponentFilter): boolean {
    const includes = filter.includes || [];
    const excludes = filter.excludes || [];

    return this.has(includes) && (!excludes.length || !this.has(excludes));
  }

  public observable(): ObservableEntity {
    return this._observable;
  }

  public destroy(): void {
    this.collection.destroy(this);
  }

  private createObservableComponent<T extends Component>(
    component: T
  ): ObservableComponent<T> {
    return new ObservableComponentWrapper(
      this,
      component
    ) as unknown as ObservableComponent<T>;
  }
}
