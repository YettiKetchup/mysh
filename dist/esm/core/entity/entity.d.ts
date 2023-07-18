declare class Blank {
}
export declare const Entity: {
    new (...args: any[]): {
        visible: boolean;
        readonly components: import("../component").Component[];
        _visible: boolean;
        _collection: import("../collections").ComponentsCollection;
        add(component: import("../component").Component): void;
        get<T extends import("../component").Component>(type: import("../component").ComponentType<T>, isObservable?: boolean): T | import("../component").ObservableComponent<T>;
        remove<T_1 extends import("../component").Component>(type: import("../component").ComponentType<T_1>): T_1;
        has(types: import("../component").ComponentType<any>[]): boolean;
        isSatisfiedFilter(filter: import("../component").IComponentFilter): boolean;
        observable(): import("./observable.entity").ObservableEntity;
        createObservableComponent<T_2 extends import("../component").Component>(component: T_2): import("../component").ObservableComponent<T_2>;
    };
} & typeof Blank;
export {};
