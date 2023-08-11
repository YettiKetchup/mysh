import { ComponentType } from '../component';
import { Entity } from '../entity';
import { WatchFor } from './data/watch-for.enum';
import { ObserverConditionPipe, ObserverSubscribeCallback } from './data/types';
export declare class EntityObserver {
    private _type;
    private _watch?;
    get type(): WatchFor;
    get watch(): ComponentType<any> | undefined;
    private _pipes;
    private _callback;
    constructor(_type: WatchFor, _watch?: ComponentType<any> | undefined);
    pipe(condition: ObserverConditionPipe): EntityObserver;
    subscribe(callback: ObserverSubscribeCallback): void;
    unsubscribe(): void;
    execute(entity: Entity): void;
    private isCanExecute;
}
