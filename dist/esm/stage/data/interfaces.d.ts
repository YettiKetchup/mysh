import { IModule } from '../../core/module';
export interface IPreloadable {
    preload(): Promise<void>;
}
export interface IStage extends IModule, IPreloadable {
}
