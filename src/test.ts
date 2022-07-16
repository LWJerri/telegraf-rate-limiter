import { Telegraf } from "telegraf";
import { RateLimiter } from "./rate-limiter";

const bot = new Telegraf("");
const rateLimiter = new RateLimiter(1, 2000);

bot.on("message", async (ctx) => {
  const limited = await rateLimiter.take(ctx.from.id);

  if (limited) return await ctx.reply("Hey! Wait 2 second before send new message!");

  await ctx.reply("Hello!");
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
