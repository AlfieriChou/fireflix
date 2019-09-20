class FifoCache {
  private limit: number;

  private map: Map<string, any>;

  private keys: string[];

  constructor(limit?: number) {
    this.limit = limit || 10;
    this.map = new Map();
    this.keys = [];
  }

  public set(key: string, value: any): void {
    if (!this.map.has(key)) {
      this.keys.push(key);
      if (this.keys.length > this.limit) {
        this.map.delete(this.keys.shift()!);
      }
    }
    this.map.set(key, value);
  }

  public get(key: string): any {
    if (this.map.has(key)) {
      return this.map.get(key);
    }
    return null;
  }

  public delete(key: string): void {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
  }

  public length(): number {
    return this.map.size;
  }
}

export default FifoCache;
