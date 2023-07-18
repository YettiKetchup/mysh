import { EntitiesCollection } from "../collections";
import { IActionPart } from "./data/interfaces";
export declare class Action {
    private _entities;
    private _parts;
    constructor(_entities: EntitiesCollection);
    add(part: IActionPart): void;
    execute(): Promise<void>;
    private executeItem;
    private setupFilterDecorator;
}
