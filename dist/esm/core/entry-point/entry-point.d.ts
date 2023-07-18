import { EntitiesCollection } from "../collections";
export declare abstract class EntryPoint {
    protected entities: EntitiesCollection;
    constructor(entities: EntitiesCollection);
    init(): void;
    update(deltaTime?: number): void;
    destroy(): void;
}
