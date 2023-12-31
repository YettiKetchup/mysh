import { EntitiesCollection } from '../collections';
export declare class EntityStorage {
    private static _collections;
    static get(key: string): EntitiesCollection;
    static create(key: string): EntitiesCollection;
    static destroy(key: string): void;
    static clearAll(): void;
    static combine(key: string, storageKeys: string[]): EntitiesCollection;
}
