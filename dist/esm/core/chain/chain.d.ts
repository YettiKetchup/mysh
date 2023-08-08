import { EntitiesCollection } from '../collections';
import { IChainLink } from './data/interfaces';
export declare class Chain {
    private _links;
    get links(): IChainLink[];
    add(link: IChainLink): void;
    execute(entities: EntitiesCollection): Promise<void>;
    destroy(): Promise<void>;
    private executeItem;
}
