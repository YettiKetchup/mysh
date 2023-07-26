import { EntitiesCollection } from "../core/collections";
export declare class EntityStorage {
    private _collections;
    get(key: string): EntitiesCollection;
    create(key: string): EntitiesCollection;
    destroy(key: string): void;
    clearAll(): void;
    combine(key: string, storages: EntitiesCollection[]): EntitiesCollection;
}
