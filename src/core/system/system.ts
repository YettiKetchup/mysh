import { EntitiesCollection, Filtered } from '../collections';
import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { Excludes, Includes, WithDisabled } from './decorators';

@Includes()
@Excludes()
@WithDisabled(false)
export abstract class System<TData = {}, TEntity extends Entity = Entity> {
  private _collection: EntitiesCollection | null = null;

  protected get collection(): EntitiesCollection {
    return this._collection as EntitiesCollection;
  }

  public execute(
    collection: EntitiesCollection,
    decorator: IComponentFilter,
    data?: TData
  ): void {
    this._collection = (this as any).redefinedCollection || collection;

    const filter = this.filter(decorator);
    const filtered = this.collection.get(filter) as Filtered<TEntity>;

    this.onExecute(filtered, data);
  }

  protected abstract onExecute(filtered: Filtered, data?: TData): void;

  private filter(decorator: IComponentFilter): IComponentFilter {
    let { includes, excludes, withDisabled } = this as any;

    includes = [...includes, ...(decorator.includes || [])];
    excludes = [...excludes, ...(decorator.excludes || [])];

    if (Object.hasOwn(decorator, 'withDisabled')) {
      withDisabled = decorator.withDisabled as boolean;
    }

    return { includes, excludes, withDisabled };
  }
}
