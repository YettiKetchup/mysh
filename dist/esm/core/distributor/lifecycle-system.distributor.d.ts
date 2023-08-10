import { Lifecycle, System, SystemConstructor } from '../system';
export declare class LifecycleSystemDistributor {
    static _systems: Map<Lifecycle, System[]>;
    static add(systemConstructor: SystemConstructor, lifecycle: Lifecycle): void;
    static get(systemConstructor: SystemConstructor, lifecycle: Lifecycle): System | null;
    private static checkDuplicates;
}
