import { RateLimiter as Limiter } from "limiter";

export class RateLimiter {
  private limiters: { [key: number]: Limiter } = {};

  constructor(private amount: number, private interval: number) {}

  /**
   * Takes a token from the rate limiter.
   * @param key A key which identifies the entity being limited (Ex: user ID, chat ID, etc.).
   * @returns Whether this action exceeds the rate limit.
   */
  public async take(key: number): Promise<boolean> {
    let limiter = this.limiters[key];

    if (!limiter) {
      limiter = new Limiter({ interval: this.interval, tokensPerInterval: this.amount });
      this.limiters[key] = limiter;
    }

    if (limiter.getTokensRemaining() < 1) return true;

    await limiter.removeTokens(1);

    return false;
  }
}
