import { Event } from '../../event';
import { SystemConstructor } from '../data/types';
export declare function OnEvent(event: Event<any>): (constructor: SystemConstructor) => void;
