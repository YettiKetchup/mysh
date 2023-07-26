import { ComponentType } from "../component";
import { IEntity } from "../entity";
import { ObserverType } from "./data/observer-type.enum";
import { ObserverConditionPipe, ObserverSubscribeCallback } from "./data/types";
import { EntitySubject } from "./entity-subject";

export class EntityObserver {
  public get type(): ObserverType {
    return this._type;
  }

  public get watch(): ComponentType<any> | undefined {
    return this._watch;
  }

  private _pipes: ObserverConditionPipe[] = [];
  private _callback: ObserverSubscribeCallback = () => {};

  constructor(
    private _subject: EntitySubject,
    private _type: ObserverType,
    private _watch?: ComponentType<any>
  ) {}

  public pipe(condition: ObserverConditionPipe): EntityObserver {
    this._pipes.push(condition);
    return this;
  }

  public subscribe(callback: ObserverSubscribeCallback): void {
    this._callback = callback;
    this._subject.register(this);
  }

  public unsubscribe(): void {
    this._subject.destroy(this);
  }

  public execute(entity: IEntity): void {
    if (this.isCanExecute(entity)) {
      this._callback(entity);
    }
  }

  private isCanExecute(entity: IEntity): boolean {
    for (let i = 0; i < this._pipes.length; i++) {
      const isCan = this._pipes[i](entity);
      if (!isCan) return false;
    }

    return true;
  }
}