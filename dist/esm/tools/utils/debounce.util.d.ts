type Callback = (...args: any[]) => void;
export declare const debounce: (callback: Callback, delay?: number) => Callback;
export {};
