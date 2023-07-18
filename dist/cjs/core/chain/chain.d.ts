import { EntitiesCollection } from "../collections";
import { IChainLink } from "./data/interfaces";
export declare class Chain {
    private _entities;
    private _links;
    get links(): IChainLink[];
    constructor(_entities: EntitiesCollection);
    add(part: IChainLink): void;
    execute(): Promise<void>;
    private executeItem;
}
