import { System } from '../system';

export type SystemConstructor<T extends System<any>> = new () => T;
