import { ComponentType } from '../../component';
export declare function Includes(...includes: ComponentType<any>[]): (constructor: Function) => void;
export declare function Excludes(...excludes: ComponentType<any>[]): (constructor: Function) => void;
export declare function WithDisabled(withDisabled: boolean): (constructor: Function) => void;
