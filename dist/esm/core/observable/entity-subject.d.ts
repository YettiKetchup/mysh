import { ComponentType } from '../component';
import { Entity } from '../entity';
import { WatchFor } from './data/watch-for.enum';
import { EntityObserver } from './entity-observer';
export declare class EntitySubject {
    private static _observers;
    static register(observer: EntityObserver): void;
    static destroy(observer: EntityObserver): void;
    static notify(type: WatchFor, entity: Entity, watch?: ComponentType<any>): void;
    private static getComponentSubjects;
    private static getEntitySubjects;
    static on(watch: WatchFor, component?: ComponentType<any>): EntityObserver;
}
