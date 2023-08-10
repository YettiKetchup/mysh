import { Module } from '../../module';

export function Modules(...modules: Module[]) {
  return function (constructor: Function) {
    constructor.prototype.modules = modules;
  };
}
