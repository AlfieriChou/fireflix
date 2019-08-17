import * as IORedis from 'ioredis'

export class RedisStore {
  private readonly redis: IORedis.Redis
  constructor(options: IORedis.RedisOptions) {
    this.redis = new IORedis(options)
  }

  public async incr(key: string, expire?: number): Promise<number> {
    if (expire) {
      const result = await this.redis
        .multi()
        .incr(key)
        .expire(key, expire)
        .exec()
      return result[0][1]
    }
    const result = await this.redis.incr(key)
    return result
  }
}
