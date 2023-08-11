import { SystemConstructor } from '../data/types';
import { Lifecycle } from '../data/lifecycle.enum';
export declare function OnHook(hook: Lifecycle): (constructor: SystemConstructor) => void;
