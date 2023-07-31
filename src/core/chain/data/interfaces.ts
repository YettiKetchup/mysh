import { ComponentType } from '../../component';
import { System } from '../../system/system';

export interface IChainLink {
  system: System<any>;
  includes?: ComponentType<any>[];
  excludes?: ComponentType<any>[];
  withDisabled?: boolean;
  delay?: number;
}
