import { IEntity } from "../../entity";
export type EntityIterationCallback<TEntity extends IEntity> = (entity: TEntity, index?: number) => void | Promise<void>;
