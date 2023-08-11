import { SystemsCaching } from '../../cahcing';
import { EntityStorage } from '../../storage';
import { SystemConstructor } from '../data/types';
import { System } from '../system';

let mainKey: string = '';

const systems: System[] = [];

new ResizeObserver(() => {
  const collection = EntityStorage.get(mainKey);
  systems.forEach((system) => system.execute(collection, {}));
}).observe(document.body);

export function OnResize(key: string) {
  return function (constructor: SystemConstructor) {
    const system = SystemsCaching.create(constructor);
    systems.push(system);
    mainKey = key;
  };
}
