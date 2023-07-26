import { Component, ComponentType } from '../component';

export class ComponentsCollection {
  public get components(): Component[] {
    return this._components;
  }

  public get count(): number {
    return this._components.length;
  }

  private _components: Component[] = [];

  public add(component: Component): void {
    this._components.push(component);
  }

  public toBeginning(component: Component): void {
    this.components.unshift(component);
  }

  public get<T extends Component>(type: ComponentType<T>): T | null {
    const component = this._components.find(
      (component) => component instanceof type
    );

    return component ? (component as T) : null;
  }

  public remove<T extends Component>(type: ComponentType<T>): T | null {
    const component = this.get(type);

    this._components = this.components.filter(
      (component) => component.constructor !== type
    );

    return component ? (component as T) : null;
  }

  public has<T extends Component>(type: ComponentType<T>): boolean {
    return !!this.get(type);
  }
}
