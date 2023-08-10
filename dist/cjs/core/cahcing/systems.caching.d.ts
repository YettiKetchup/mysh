import { System, SystemConstructor } from '../system';
export declare class SystemsCaching {
    private static _cahce;
    static create(ctor: SystemConstructor): System;
    static get(ctor: SystemConstructor): System | null;
}
