import { ComponentType } from "../../component";

export function Includes(...includes: ComponentType<any>[]) {
  return function (constructor: Function) {
    constructor.prototype.includes = includes;
  };
}

export function Excludes(...excludes: ComponentType<any>[]) {
  return function (constructor: Function) {
    constructor.prototype.excludes = excludes;
  };
}

export function WithDisabled(withDisabled: boolean) {
  return function (constructor: Function) {
    constructor.prototype.withDisabled = withDisabled;
  };
}
