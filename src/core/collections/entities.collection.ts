import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { SystemEntitiesCollection } from './system-entities.collection';

export class EntitiesCollection {
  public get entities(): Entity[] {
    return this._entities;
  }

  public get count(): number {
    return this._entities.length;
  }

  private _entities: Entity[] = [];

  public add(...entities: Entity[]): void {
    this._entities.push(...entities);
  }

  public remove(entity: Entity): void {
    this._entities = this._entities.filter((e) => e.id !== entity.id);
    entity.onDestroy();
  }

  public get(filter: IComponentFilter): SystemEntitiesCollection<Entity> {
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

    return new SystemEntitiesCollection(result);
  }
}
