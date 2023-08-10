import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { Filtered } from './filtered.collection';

export class EntitiesCollection {
  public get entities(): Entity[] {
    return this._entities;
  }

  public get count(): number {
    return this._entities.length;
  }

  protected _entities: Entity[] = [];

  public add(...entities: Entity[]): void {
    this._entities.push(...entities);
    entities.forEach((entity) => {
      entity.collection = this;
      entity.onInit();
    });
  }

  public destroy(entity: Entity): void {
    this._entities = this._entities.filter((e) => e.id !== entity.id);
    entity.onDestroy();
  }

  public get(filter: IComponentFilter): Filtered<Entity> {
    let result: Entity[] = [];
    let index = 0;
    let entity = this._entities[index];

    while (entity) {
      const isActive = entity.visible;
      const isSatisfied = entity.isSatisfiedFilter(filter);

      const condition = filter.withDisabled
        ? isSatisfied
        : isSatisfied && isActive;

      if (condition) result.push(entity);

      index += 1;
      entity = this._entities[index];
    }

    return new Filtered(result);
  }
}
