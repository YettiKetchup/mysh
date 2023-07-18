import { Component } from "../core/component";
import { EntityConstructor, MixedEntity } from "../core/entity";
import { IEntityBuilder } from "./data/interfaces";

export class EntityBuilder<T> implements IEntityBuilder<T> {
  protected _entity: MixedEntity<T> | null = null;

  private get _currentEntity(): MixedEntity<T> {
    return this._entity as MixedEntity<T>;
  }

  constructor(Entity: EntityConstructor<T>) {
    this._entity = new Entity();
  }

  public withComponent(component: Component): IEntityBuilder<T> {
    this._currentEntity.add(component);
    return this;
  }

  public isVisible(): IEntityBuilder<T> {
    this._currentEntity.visible = true;
    return this;
  }

  public build(): MixedEntity<T> {
    return this._currentEntity;
  }
}
