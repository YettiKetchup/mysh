import { IModule } from '../../module';
export interface IPreloadable {
    preload(): Promise<void>;
}
export interface IStage extends IModule, IPreloadable {
}
