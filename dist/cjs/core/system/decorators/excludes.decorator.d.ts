import { ComponentType } from '../../component';
export declare function Excludes(...excludes: ComponentType<any>[]): (constructor: Function) => void;
