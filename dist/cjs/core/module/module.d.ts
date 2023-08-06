import { IModule } from './data/interfaces';
export declare abstract class Module implements IModule {
    preInit(): void;
    init(): void;
    postInit(): void;
    update(dt: number): void;
    postUpdate(): void;
    destroy(): void;
}
