interface QueueOptions {
  delayUntil?: number;
}

class Queue<T> {
  private list: T[] = [];

  private delayedItems = 0;

  public size(): number {
    return this.list.length + this.delayedItems;
  }

  public push(item: T, options: QueueOptions = {}): void {
    if (options && options.delayUntil && options.delayUntil > Date.now()) {
      this.delayedItems += 1;
      setTimeout(() => {
        this.delayedItems -= 1;
        this.list.push(item);
      }, options.delayUntil - Date.now());
    } else {
      this.list.push(item);
    }
  }

  public shift(): T | undefined {
    return this.list.shift();
  }
}

export default Queue;
