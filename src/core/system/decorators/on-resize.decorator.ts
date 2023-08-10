import { SystemsCaching } from '../../cahcing';
import { EntityStorage } from '../../storage';
import { SystemConstructor } from '../data/types';

export function OnResize(key: string) {
  return function (constructor: SystemConstructor) {
    const system = SystemsCaching.create(constructor);
    const collection = EntityStorage.get(key);

    new ResizeObserver(() => {
      system.execute(collection, {});
    }).observe(document.body);
  };
}
