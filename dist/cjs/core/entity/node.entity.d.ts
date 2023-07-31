import { PureObject } from '../../data/types';
import { Entity } from './base.entity';
export declare class NodeEntity<T extends PureObject> extends Entity {
    protected _node: T;
    get node(): T;
    constructor(_node: T);
}
