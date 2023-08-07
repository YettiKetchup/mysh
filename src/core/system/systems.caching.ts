import { SystemConstructor } from './data/types';
import { System } from './system';

export class SystemsCaching {
  private static _cahce: System<any>[] = [];

  public static create(ctor: SystemConstructor<any>): System<any> {
    let system = this.get(ctor) || new ctor();
    return system;
  }

  public static get(ctor: SystemConstructor<any>): System<any> | null {
    return this._cahce.find((system) => system instanceof ctor) || null;
  }
}
