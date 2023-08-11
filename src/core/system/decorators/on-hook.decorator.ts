import { SystemConstructor } from '../data/types';
import { LifecycleSystemDistributor } from '../../distributor';
import { Lifecycle } from '../data/lifecycle.enum';

export function OnHook(hook: Lifecycle) {
  return function (constructor: SystemConstructor) {
    LifecycleSystemDistributor.add(constructor, hook);
  };
}
