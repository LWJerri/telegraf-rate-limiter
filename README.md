# telegraf-rate-limiter

## Description

[![NPM Version](https://img.shields.io/npm/v/@lwjerri/telegraf-rate-limiter.svg?maxAge=3600)](https://www.npmjs.com/package/@lwjerri/telegraf-rate-limiter)
[![Telegraf Version](https://img.shields.io/npm/dependency-version/@lwjerri/telegraf-rate-limiter/telegraf)](https://telegraf.js.org/)
[![Downloads](https://img.shields.io/npm/dt/@lwjerri/telegraf-rate-limiter.svg?maxAge=3600)](https://www.npmjs.com/package/@lwjerri/telegraf-rate-limiter)

Multilingual utilities for [telegraf](https://github.com/telegraf/telegraf/).

## Installation

NPN: `npm i @lwjerri/telegraf-rate-limiter`.

PNPM: `pnpm add @lwjerri/telegraf-rate-limiter`.

YARN: `yarn install @lwjerri/telegraf-rate-limiter`.

## Use

```typescript
import { RateLimiter } from "@lwjerri/telegraf-rate-limiter";
```

```typescript
import { Telegraf } from "telegraf";
// Import RateLimiter package
import { RateLimiter } from "@lwjerri/telegraf-rate-limiter";

// Put your bot token from @BotFather
const bot = new Telegraf("");
// Set 1 message per 2 second
const rateLimiter = new RateLimiter(1, 2000);

bot.on("message", async (ctx) => {
  // Take user ID and check member have rate limit or no
  const limited = await rateLimiter.take(ctx.from.id);

  // Send message if member has limit
  if (limited) return await ctx.reply("Hey! Wait 2 second before send new message!");

  // Doing other if member don't have limits
  await ctx.reply("Hello!");
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
```

## Example

![Example](https://i.imgur.com/kyZqymP.png)

## Contributing

This project opened for contribution! You can create a new `Pull request` with your code changes.

## LICENSE

This code has **MIT** license. See the `LICENSE` file for getting more information.
Ogirinal code take from [discord.js-rate-limiter](https://github.com/KevinNovak/discord.js-Rate-Limiter)
