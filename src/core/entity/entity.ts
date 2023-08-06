import { uid } from '../../tools/utils';
import { ComponentsCollection } from '../collections';
import { EntitySubject, ObserverType } from '../observable';
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
    return this._collection.components;
  }

  private _id: string = uid();
  private _visible: boolean = true;
  private _collection: ComponentsCollection = new ComponentsCollection();

  public onInit(): void {
    EntitySubject.notify(ObserverType.INITIALIZED, this);
  }

  public onDestroy(): void {
    EntitySubject.notify(ObserverType.DESTROYED, this);
  }

  public add(component: Component): void {
    if (this._collection.has(component.constructor)) {
      throw new Error(`Entity already contains ${component.constructor.name}`);
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
    return new ObservableEntity(this);
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
