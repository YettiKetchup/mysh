import { SystemEntitiesCollection } from "../../core/collections";
import { Entity } from "../../core/entity";
import { System } from "../../core/system";
export declare class HealSystem extends System<Entity> {
    private _value;
    constructor(_value: number);
    execute(entities: SystemEntitiesCollection<Entity>): void;
}
