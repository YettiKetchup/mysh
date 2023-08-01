export interface IModule {
    init(): void;
    update(dt: number): void;
    destroy(): void;
}
