const { Telegraf } = require("telegraf");
const path = require("path");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  try {
    const imagePath = path.join(__dirname, "assets", "welcome.jpg");

    await ctx.replyWithPhoto(
      { source: imagePath },
      {
        caption:
          "🍫 *Welcome to the Nestlé KitKat Cashback Rewards!* 🎉\n\n🎁 Claim your exclusive cashback in just a few simple steps.\n\n👇 Tap the button below to get started!",
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🎁 Open Mini App",
                web_app: {
                  url: "https://nestle-kitkat-reward.netlify.app"
                }
              }
            ]
          ]
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
});

bot.launch();

console.log("✅ Bot is running...");
