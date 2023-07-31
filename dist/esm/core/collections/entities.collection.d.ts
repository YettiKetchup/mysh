import { IComponentFilter } from '../component';
import { Entity } from '../entity';
import { SystemEntitiesCollection } from './system-entities.collection';
export declare class EntitiesCollection {
    get entities(): Entity[];
    get count(): number;
    private _entities;
    add(...entities: Entity[]): void;
    destroy(entity: Entity): void;
    get(filter: IComponentFilter): SystemEntitiesCollection<Entity>;
}
