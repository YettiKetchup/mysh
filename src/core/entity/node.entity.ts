import { PureObject } from '../../data/types';
import { Entity } from './base.entity';

export class NodeEntity<T extends PureObject> extends Entity {
  public get node(): T {
    return this._node;
  }

  constructor(protected _node: T) {
    super();
  }
}
