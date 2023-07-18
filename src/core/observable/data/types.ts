import { IEntity } from "../../entity";

export type ObserverSubscribeCallback = (entity: IEntity) => void;

export type ObserverConditionPipe = (entity: IEntity) => boolean;
