import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { EntitiesCollection } from './entities.collection';
import { Filtered } from './filtered.collection';
export declare class CombinedEntitiesCollection extends EntitiesCollection {
    private _colelctions;
    constructor(_colelctions: EntitiesCollection[]);
    add(...entities: Entity[]): void;
    destroy(entity: Entity): void;
    get(filter: IComponentFilter): Filtered<Entity>;
    private getCombinedEntities;
    private combineEntities;
}
