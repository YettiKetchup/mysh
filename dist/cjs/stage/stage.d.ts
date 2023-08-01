import { IStage } from './data/interfaces';
export declare abstract class Stage implements IStage {
    private _createdModules;
    init(): void;
    update(dt: number): void;
    destroy(): void;
    abstract preload(): Promise<void>;
}
