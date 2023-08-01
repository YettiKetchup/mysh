import { ModuleConstructor } from '../data/types';
export declare function Modules(...moduleTypes: ModuleConstructor[]): (constructor: Function) => void;
