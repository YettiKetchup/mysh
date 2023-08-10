import { SystemConstructor } from '../data/types';
import { WatchFor } from '../../observable';
import { ComponentType } from '../../component';
import { ObserverConditionPipe } from '../../observable/data/types';
export declare function OnChanges(hook: WatchFor, component: ComponentType<any>, pipe?: ObserverConditionPipe): (constructor: SystemConstructor) => void;
