import { EntitiesCollection } from "../collections";
export declare abstract class Entry {
    protected entities: EntitiesCollection;
    constructor(entities: EntitiesCollection);
    init(): void;
    update(deltaTime?: number): void;
    destroy(): void;
}
