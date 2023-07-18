import { ComponentType } from "./types";

export interface IObservableComponent {}

/**
 * Filter object. Required to determine the Entities
 * required for the System.
 */
export type IComponentFilter = {
  includes?: ComponentType<any>[];
  excludes?: ComponentType<any>[];
  withDisabled?: boolean;
};
