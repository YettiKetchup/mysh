export interface IInitable {
    init(): void;
}
export interface IUpdatable {
    update(dt: number): void;
}
export interface IDestroyable {
    destroy(): void;
}
