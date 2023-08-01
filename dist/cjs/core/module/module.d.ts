import { IModule } from './data/interfaces';
export declare abstract class Module implements IModule {
    abstract init(): void;
    abstract update(dt: number): void;
    abstract destroy(): void;
}
