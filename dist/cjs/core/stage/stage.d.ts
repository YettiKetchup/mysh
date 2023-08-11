import { IStage } from './data/interfaces';
export declare abstract class Stage implements IStage {
    preInit(): void;
    init(): void;
    postInit(): void;
    update(dt: number): void;
    postUpdate(): void;
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
    private getModules;
}
