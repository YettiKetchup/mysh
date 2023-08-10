import { IModule } from './data/interfaces';
import { EntitiesCollection } from '../collections';
export declare abstract class Module implements IModule {
    private _colelction;
    private _observers;
    private _events;
    private get _providers();
    protected get collection(): EntitiesCollection;
    constructor(collection: string);
    init(): void;
    postInit(): void;
    update(deltaTime: number): void;
    postUpdate(): void;
    destroy(): void;
    private listenEvents;
    private listenEntities;
    private unsubscribe;
    private runSystems;
    private getFilterDecorator;
    private getSystem;
    private setupWatchers;
    private setupEvents;
}
