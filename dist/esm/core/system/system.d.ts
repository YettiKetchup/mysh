import { EntitiesCollection, Filtered } from '../collections';
import { IComponentFilter } from '../component';
import { Entity } from '../entity';
export declare abstract class System<TData = {}, TEntity extends Entity = Entity> {
    execute(entities: EntitiesCollection, decorator: IComponentFilter, data?: TData): void;
    protected abstract onExecute(entities: Filtered<TEntity>, data?: TData): void;
    private filter;
}
