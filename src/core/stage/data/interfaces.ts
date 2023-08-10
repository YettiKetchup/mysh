import { IModule } from '../../module';

export interface IPreloadable {
  preload(): Promise<void>;
}

export interface IPreInitable {
  preInit(): void;
}

export interface IStage extends IModule, IPreloadable, IPreInitable {}
