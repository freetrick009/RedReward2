const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "🍫 *Welcome to the Nestlé KitKat Cashback Rewards!* 🎉\n\n🎁 Claim your exclusive cashback in just a few simple steps.\n\n👇 Tap the button below to get started!",
    {
      parse_mode: "Markdown",
      ...Markup.keyboard([
        [
          Markup.button.webApp(
            "🎁 Open Mini App",
            "https://nestle-kitkat-reward.netlify.app"
          )
        ]
      ]).resize()
    }
  );
});

bot.launch();

console.log("✅ Bot is running...");
