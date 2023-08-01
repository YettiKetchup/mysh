import { IModule } from '../../core/module';
import { IStage } from './interfaces';
export type ModuleConstructor = new () => IModule;
export type StageConstructor = new (...data: any[]) => IStage;
