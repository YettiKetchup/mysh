import { EntitiesCollection, Filtered } from '../collections';
import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { Excludes, Includes, WithDisabled } from './decorators';

@Includes()
@Excludes()
@WithDisabled(false)
export abstract class System<TData = {}, TEntity extends Entity = Entity> {
  public execute(
    entities: EntitiesCollection,
    decorator: IComponentFilter,
    data?: TData
  ): void {
    const filter = this.filter(decorator);
    const filtered = entities.get(filter) as Filtered<TEntity>;

    this.onExecute(filtered, data);
  }

  protected abstract onExecute(entities: Filtered<TEntity>, data?: TData): void;

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
