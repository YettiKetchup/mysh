import { SystemConstructor } from './data/types';
import { System } from './system';
export declare class SystemsCaching {
    private static _cahce;
    static create(ctor: SystemConstructor<any>): System<any>;
    static get(ctor: SystemConstructor<any>): System<any> | null;
}
