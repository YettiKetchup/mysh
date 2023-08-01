import { IStage } from './data/interfaces';
export declare abstract class Stage implements IStage {
    private _createdModules;
    init(): void;
    update(dt: number): void;
    destroy(): void;
    /**
     * Use to preload assets or data.
     *
     * @example
     * public async preload(): Promise<void> {
     *  const data = await fetch(api);
     *  // ...do something.
     * }
     */
    abstract preload(): Promise<void>;
}
