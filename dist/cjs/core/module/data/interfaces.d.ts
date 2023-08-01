export interface IInitable {
    init(): void;
}
export interface IUpdatable {
    update(dt: number): void;
}
export interface IDestroyable {
    destroy(): void;
}
export interface IModule extends IInitable, IUpdatable, IDestroyable {
}
