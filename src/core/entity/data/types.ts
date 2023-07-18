import { IEntity } from "./interfaces";

export type MixinConstructor = new (...args: any[]) => any;

export type EntityConstructor<T> = new (...args: any[]) => IEntity & T;

export type MixedEntity<T> = IEntity & T;
