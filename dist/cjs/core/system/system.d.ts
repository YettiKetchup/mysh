import { EntitiesCollection, Filtered } from '../collections';
import { IComponentFilter } from '../component';
import { Entity } from '../entity';
export declare abstract class System<TData = {}, TEntity extends Entity = Entity> {
    private _collection;
    protected get collection(): EntitiesCollection;
    execute(collection: EntitiesCollection, decorator: IComponentFilter, data?: TData): void;
    protected abstract onExecute(filtered: Filtered, data?: TData): void;
    private filter;
}
