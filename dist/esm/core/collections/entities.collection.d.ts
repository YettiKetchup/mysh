import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { SystemEntitiesCollection } from './system-entities.collection';
export declare class EntitiesCollection {
    get entities(): Entity[];
    get count(): number;
    protected _entities: Entity[];
    add(...entities: Entity[]): void;
    destroy(entity: Entity): void;
    get(filter: IComponentFilter): SystemEntitiesCollection<Entity>;
}
