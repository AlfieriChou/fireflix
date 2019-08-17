import * as IORedis from 'ioredis'

export class RedisStore {
  private readonly redis: IORedis.Redis
  private readonly key: string
  private readonly expire: number | undefined
  constructor(options: IORedis.RedisOptions, key: string, expire?: number) {
    this.redis = new IORedis(options)
    this.key = key
    this.expire = expire
  }

  public async incr(): Promise<number> {
    if (this.expire) {
      const result = await this.redis
        .multi()
        .incr(this.key)
        .expire(this.key, this.expire)
        .exec()
      return result[0][1]
    }
    const result = await this.redis.incr(this.key)
    return result
  }
}
