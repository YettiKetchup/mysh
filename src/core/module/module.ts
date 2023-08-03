import { IModule } from './data/interfaces';

export abstract class Module implements IModule {
  public init(): void {}

  public update(dt: number): void {}

  public destroy(): void {}
}
