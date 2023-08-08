export type SystemData<T, K extends keyof T> = {
    [P in K]: T[K];
};
