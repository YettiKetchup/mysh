import { Event } from '../event';
import { SystemConstructor } from '../system';
import { EventSystem } from './data/types';
export declare class EventDistributor {
    private static _events;
    static add(event: Event<any>, systemConstructor: SystemConstructor): void;
    static get(systemConstructor: SystemConstructor): EventSystem | null;
}
