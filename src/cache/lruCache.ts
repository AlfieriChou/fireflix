class LruCache<T> {
  private cache: Map<string, T>;

  private capacity: number;

  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  public get(key: string) {
    const temp = this.cache.get(key);
    if (temp) {
      this.cache.delete(key);
      this.cache.set(key, temp);
      return temp;
    }
    return -1;
  }

  put(key: string, value: T) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

export default LruCache;
