import { System, SystemConstructor } from '../system';

export class SystemsCaching {
  private static _cahce: System[] = [];

  public static create(ctor: SystemConstructor): System {
    let system = this.get(ctor) || new ctor();
    return system;
  }

  public static get(ctor: SystemConstructor): System | null {
    return this._cahce.find((system) => system instanceof ctor) || null;
  }
}
