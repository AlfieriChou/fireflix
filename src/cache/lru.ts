export class LRU {
  private cache: Map<string, any>
  private capacity: number
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }

  public get(key: string) {
    let temp = this.cache.get(key)
    if (temp) {
      this.cache.delete(key)
      this.cache.set(key, temp)
      return temp
    }
    return -1
  }

  put(key: string, value: any) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }
}
