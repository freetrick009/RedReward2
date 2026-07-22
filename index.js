const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.replyWithPhoto(
    {
      url: "https://nestle-kitkat-reward.netlify.app/assets/welcome.jpg"
    },
    {
      caption: "🎉 Welcome!\n\nTap the button below to open the Mini App."
    }
  );

  await ctx.reply(
    "👇 Continue",
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
