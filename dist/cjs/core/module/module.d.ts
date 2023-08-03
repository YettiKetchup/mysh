import { IModule } from './data/interfaces';
export declare abstract class Module implements IModule {
    init(): void;
    update(dt: number): void;
    destroy(): void;
}
