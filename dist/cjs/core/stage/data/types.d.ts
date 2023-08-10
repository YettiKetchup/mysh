import { IStage } from './interfaces';
export type StageConstructor = new (...data: any[]) => IStage;
