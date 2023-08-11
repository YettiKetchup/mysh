import { IComponentFilter } from '../../component';
import { Event } from '../../event';
import { EntityObserver } from '../../observable';
import { Lifecycle, System } from '../../system';

export type Decorable = {
  filterDecorator: IComponentFilter;
};

export type RegisteredSystem = {
  system: System;
  hooks: Lifecycle[];
};

export type ReactiveSystem = {
  observer: EntityObserver;
  system: System;
};

export type DecorableReactiveSystem = ReactiveSystem & Decorable;

export type EventSystem = {
  event: Event<any>;
  system: System;
};

export type DecorableEventSystem = EventSystem & Decorable;
