import { EntitiesCollection } from '../collections';
import { IChainLink } from './data/interfaces';
export declare class Chain {
    private _entities;
    private _links;
    get links(): IChainLink[];
    constructor(_entities: EntitiesCollection);
    add(link: IChainLink): void;
    execute(): Promise<void>;
    destroy(): Promise<void>;
    private executeItem;
}
