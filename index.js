const { Telegraf, Markup } = require("telegraf");
const path = require("path");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  try {
    const imagePath = path.join(__dirname, "assets", "welcome.jpg");

    // Send welcome image
    await ctx.replyWithPhoto(
      { source: imagePath },
      {
        caption:
          "🍫 *Welcome to the Nestlé KitKat Cashback Rewards!* 🎉\n\n🎁 Claim your exclusive cashback in just a few simple steps.\n\n👇 Tap the button below to get started!",
        parse_mode: "Markdown",
      }
    );

    // Send Web App button
    await ctx.reply(
      " ",
      Markup.keyboard([
        [
          Markup.button.webApp(
            "🎁 Open Mini App",
            "https://nestle-kitkat-reward.netlify.app"
          ),
        ],
      ]).resize()
    );
  } catch (err) {
    console.error(err);
    ctx.reply("❌ Something went wrong.");
  }
});

bot.launch();

console.log("✅ Bot is running...");
