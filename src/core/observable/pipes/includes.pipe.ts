import { ComponentType } from "../../component";
import { IEntity } from "../../entity";
import { ObserverConditionPipe } from "../data/types";

export function includes(
  ...types: ComponentType<any>[]
): ObserverConditionPipe {
  return (entity: IEntity) => entity.has(types);
}
