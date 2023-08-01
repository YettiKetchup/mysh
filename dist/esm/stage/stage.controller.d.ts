import { IStage } from './data/interfaces';
import { StageConstructor } from './data/types';
export declare class StageController {
    private static _stages;
    protected static current: IStage | undefined;
    static register(stage: IStage): void;
    static load(stageType: StageConstructor): Promise<void>;
    static update(dt: number): void;
}
