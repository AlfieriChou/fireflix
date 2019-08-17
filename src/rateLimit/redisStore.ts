import * as IORedis from 'ioredis'

export class RedisStore {
  private readonly redis: IORedis.Redis
  private readonly expire: number | undefined
  constructor(options: IORedis.RedisOptions, expire?: number) {
    this.redis = new IORedis(options)
    this.expire = expire
  }

  public async incr(key: string): Promise<number> {
    if (this.expire) {
      const result = await this.redis
        .multi()
        .incr(key)
        .expire(key, this.expire)
        .exec()
      return result[0][1]
    }
    const result = await this.redis.incr(key)
    return result
  }
}
