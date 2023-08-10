import { Disposable, Listener } from './data/interfaces';
export declare class Event<T> {
    private _listeners;
    on(listener: Listener<T>): Disposable;
    off(): void;
    emit(event: T): void;
}
