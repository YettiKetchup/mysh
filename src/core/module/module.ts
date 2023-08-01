import { IDestroyable, IInitable, IUpdatable } from './data/interfaces';

export interface IModule extends IInitable, IUpdatable, IDestroyable {}
