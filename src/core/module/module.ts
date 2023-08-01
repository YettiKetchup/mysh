import { IModule } from './data/interfaces';

export abstract class Module implements IModule {
  public abstract init(): void;

  public abstract update(dt: number): void;

  public abstract destroy(): void;
}
