import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { EntitiesCollection } from './entities.collection';
import { Filtered } from './filtered.collection';

export class CombinedEntitiesCollection extends EntitiesCollection {
  constructor(private _colelctions: EntitiesCollection[]) {
    super();
  }

  public override add(...entities: Entity[]): void {
    this._entities = this.getCombinedEntities();
    super.add(...entities);
  }

  public override destroy(entity: Entity): void {
    const collection = this._colelctions.find((collection) =>
      collection.entities.find((e) => e.id === entity.id)
    );

    if (collection) {
      collection.destroy(entity);
      this._entities = this._entities.filter((e) => e.id !== entity.id);
      this._entities = this.getCombinedEntities();
    } else {
      super.destroy(entity);
      this._entities = this.getCombinedEntities();
    }
  }

  public override get(filter: IComponentFilter): Filtered<Entity> {
    this._entities = this.getCombinedEntities();
    return super.get(filter);
  }

  private getCombinedEntities(): Entity[] {
    const unique = new Set([...this.entities, ...this.combineEntities()]);
    return [...unique];
  }

  private combineEntities(): Entity[] {
    const groupedEntities: Entity[][] = this._colelctions.map(
      (collection) => collection.entities
    );

    const empty: Entity[] = [];
    return empty.concat(...groupedEntities);
  }
}
