import { EntityObserver } from '../observable';
import { SystemConstructor } from '../system';
import { ReactiveSystem } from './data/types';
export declare class EntityChangesDistributor {
    private static _observers;
    static add(observer: EntityObserver, systemConstructor: SystemConstructor): void;
    static get(systemConstructor: SystemConstructor): ReactiveSystem | null;
}
