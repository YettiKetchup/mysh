import { IComponentFilter } from "../component";
import { IEntity } from "../entity";
import { SystemEntitiesCollection } from "./system-entities.collection";
export declare class EntitiesCollection {
    get entities(): IEntity[];
    get count(): number;
    private _entities;
    add(...entities: IEntity[]): void;
    remove(entity: IEntity): void;
    get(filter: IComponentFilter): SystemEntitiesCollection<IEntity>;
}
