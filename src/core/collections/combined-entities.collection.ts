import { Entity } from '../entity';
import { EntitiesCollection } from './entities.collection';

export class CombinedEntitiesCollection extends EntitiesCollection {
  public get entities(): Entity[] {
    const groupedEntities: Entity[][] = this._colelctions.map(
      (collection) => collection.entities
    );

    const empty: Entity[] = [];
    const entities: Entity[] = empty.concat(...groupedEntities);

    return [...this._entities, ...entities];
  }

  constructor(private _colelctions: EntitiesCollection[]) {
    super();
  }
}
