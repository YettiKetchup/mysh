export interface IInitable {
  init(): void;
}

export interface IPostInitable {
  postInit(): void;
}

export interface IUpdatable {
  update(dt: number): void;
}

export interface IPostUpdatable {
  postUpdate(): void;
}

export interface IDestroyable {
  destroy(): void;
}

export interface IModule
  extends IInitable,
    IPostInitable,
    IUpdatable,
    IPostUpdatable,
    IDestroyable {}
