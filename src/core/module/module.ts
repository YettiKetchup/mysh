export interface IModule {
  init(): void;
  update(deltaTime?: number): void;
  destroy(): void;
}
