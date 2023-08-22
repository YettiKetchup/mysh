type Callback = (...args: any[]) => void;

type DebounceCallback = (delay: number, ...args: any[]) => void;

export const debounce = (callback: Callback): DebounceCallback => {
  let timer: ReturnType<typeof setTimeout>;

  return (delay: number = 0, ...args: any[]) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
