import { ModuleConstructor } from '../data/types';

export function Modules(...moduleTypes: ModuleConstructor[]) {
  return function (constructor: Function) {
    constructor.prototype.modules = moduleTypes;
  };
}
