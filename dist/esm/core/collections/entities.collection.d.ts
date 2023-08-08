import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { Filtered } from './filtered.collection';
export declare class EntitiesCollection {
    get entities(): Entity[];
    get count(): number;
    protected _entities: Entity[];
    add(...entities: Entity[]): void;
    destroy(entity: Entity): void;
    get(filter: IComponentFilter): Filtered<Entity>;
}
