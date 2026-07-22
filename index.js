const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "🎉 Welcome!\n\nTap the button below to open the Mini App.",
    Markup.keyboard([
      [
        Markup.button.webApp(
          "🎁 Open Mini App",
          "https://nestle-kitkat-reward.netlify.app"
        )
      ]
    ]).resize()
  );
});

bot.launch();

console.log("✅ Bot is running...");
