declare class Limit<T> {
  public clear(key: string): void;

  public clearAll(): void;

  public getValue(key: string): T | undefined;

  public length(): number;

  // eslint-disable-next-line @typescript-eslint/ban-types
  public execute(key: string, fn: Function): Promise<T>;
}

export default class CustomLimit<T> implements Limit<T> {
  private cache: Map<string, T>;

  constructor() {
    this.cache = new Map();
  }

  public clear(key: string) {
    this.cache.delete(key);
  }

  public clearAll() {
    this.cache.clear();
  }

  public getValue(key: string) {
    return this.cache.get(key);
  }

  public length() {
    return this.cache.size;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public async execute(key: string, fn: Function) {
    const value = this.cache.get(key);
    if (value) {
      return value;
    }
    this.clearAll();
    const ret: T = fn();
    this.cache.set(key, ret);
    return ret;
  }
}
