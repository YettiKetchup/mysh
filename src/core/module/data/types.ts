import { SystemConstructor, WithDisabled } from '../../system';
import { Module } from '..';
import { ComponentType } from '../../component';

export type SystemProvider = {
  provide: SystemConstructor;
  includes?: ComponentType<any>[];
  excludes?: ComponentType<any>[];
  withDisabled?: boolean;
};

export type ModuleWithRegistered = Module & { providers: SystemProvider[] };
