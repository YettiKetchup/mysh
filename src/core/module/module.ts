import { Lifecycle, System } from '../system';
import { IModule } from './data/interfaces';
import { ModuleWithRegistered, SystemProvider } from './data/types';
import { EntitiesCollection } from '../collections';
import { EntityStorage } from '../storage';
import { IComponentFilter } from '../component';
import { Entity } from '../entity';

import {
  DecorableReactiveSystem,
  DecorableEventSystem,
  EntityChangesDistributor,
  LifecycleSystemDistributor,
  EventDistributor,
} from '../distributor';

export abstract class Module implements IModule {
  private _colelction: EntitiesCollection | null = null;
  private _observers: DecorableReactiveSystem[] = [];
  private _events: DecorableEventSystem[] = [];

  private get _providers(): SystemProvider[] {
    return (this as unknown as ModuleWithRegistered).providers;
  }

  protected get collection(): EntitiesCollection {
    return this._colelction as EntitiesCollection;
  }

  constructor(private _key: string) {}

  public init(): void {
    this._colelction = EntityStorage.get(this._key);
    this.listenEntities();
    this.listenEvents();
    this.runSystems(Lifecycle.Init);
  }

  public postInit(): void {
    this.runSystems(Lifecycle.PostInit);
  }

  public update(deltaTime: number): void {
    this.runSystems(Lifecycle.Update, deltaTime);
  }

  public postUpdate(): void {
    this.runSystems(Lifecycle.PostUpdate);
  }

  public destroy(): void {
    this.runSystems(Lifecycle.Destroy);
    this.unsubscribe();
  }

  private listenEvents(): void {
    if (!this._providers) return;

    this._providers.forEach((provider) => {
      this.setupEvents(provider);
    });

    this._events.forEach((item) => {
      const { event, system, filterDecorator } = item;
      event.on((data: any) => {
        system.execute(this.collection, filterDecorator, data);
      });
    });
  }

  private listenEntities(): void {
    if (!this._providers) return;

    this._providers.forEach((provider) => {
      this.setupWatchers(provider);
    });

    this._observers.forEach((item) => {
      const { observer, system, filterDecorator } = item;
      observer.subscribe((entity: Entity) => {
        system.execute(this.collection, filterDecorator, entity);
      });
    });
  }

  private unsubscribe(): void {
    this._observers.forEach((item) => {
      const { observer } = item;
      observer.unsubscribe();
    });

    this._events.forEach((item) => {
      const { event } = item;
      event.off();
    });
  }

  private runSystems(lifecycle: Lifecycle, deltaTime?: number): void {
    if (!this._providers) return;

    this._providers.forEach((provider) => {
      let filterDecorator = this.getFilterDecorator(provider);
      const system = this.getSystem(provider, lifecycle);

      if (system) {
        system.execute(this.collection, filterDecorator, deltaTime);
      }
    });
  }

  private getFilterDecorator(provider: SystemProvider): IComponentFilter {
    const { includes, excludes } = provider;
    let filterDecorator = null;

    if (Object.hasOwn(provider, 'withDisabled')) {
      filterDecorator = {
        includes,
        excludes,
        withDisabled: provider.withDisabled,
      };
    } else {
      filterDecorator = { includes, excludes };
    }
    return filterDecorator;
  }

  private getSystem(
    provider: SystemProvider,
    lifecycle: Lifecycle
  ): System | null {
    return LifecycleSystemDistributor.get(provider.provide, lifecycle);
  }

  private setupWatchers(provider: SystemProvider): void {
    const watchers = EntityChangesDistributor.get(provider.provide);

    if (watchers) {
      const reactiveSystem: DecorableReactiveSystem = {
        observer: watchers.observer,
        system: watchers.system,
        filterDecorator: this.getFilterDecorator(provider),
      };
      this._observers.push(reactiveSystem);
    }
  }

  private setupEvents(provider: SystemProvider): void {
    const watchers = EventDistributor.get(provider.provide);

    if (watchers) {
      const eventSystem: DecorableEventSystem = {
        event: watchers.event,
        system: watchers.system,
        filterDecorator: this.getFilterDecorator(provider),
      };

      this._events.push(eventSystem);
    }
  }
}
