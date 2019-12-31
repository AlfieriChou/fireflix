declare class Limit {
  public clear(key: string): void

  public clearAll(): void

  public getValue(key: string): void | any

  public length(): number

  public execute(key: string, fn: Function): Promise<any>
}

export default class CustomLimit implements Limit {
  private cache: Map<string, any>;

  constructor() {
    this.cache = new Map();
  }

  public clear(key: string) {
    this.cache.delete(key);
  }

  public clearAll() {
    this.cache.clear();
  }

  // eslint-disable-next-line consistent-return
  public getValue(key: string) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
  }

  public length() {
    return this.cache.size;
  }

  public async execute(key: string, fn: Function) {
    const value = this.cache.get(key);
    if (value) {
      return value;
    }
    this.clearAll();
    const ret = fn();
    this.cache.set(key, ret);
    return ret;
  }
}
