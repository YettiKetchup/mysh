import { ComponentType } from "../component";
import { IEntity } from "../entity";
import { ObserverType } from "./data/observer-type.enum";
import { ObserverConditionPipe, ObserverSubscribeCallback } from "./data/types";
import { EntitySubject } from "./entity-subject";
export declare class EntityObserver {
    private _subject;
    private _type;
    private _watch?;
    get type(): ObserverType;
    get watch(): ComponentType<any> | undefined;
    private _pipes;
    private _callback;
    constructor(_subject: EntitySubject, _type: ObserverType, _watch?: ComponentType<any> | undefined);
    pipe(condition: ObserverConditionPipe): EntityObserver;
    subscribe(callback: ObserverSubscribeCallback): void;
    unsubscribe(): void;
    execute(entity: IEntity): void;
    private isCanExecute;
}
