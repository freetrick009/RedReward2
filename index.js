const { Telegraf, Markup } = require("telegraf");
const path = require("path");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  const imagePath = path.join(__dirname, "assets", "welcome.jpg");

  // Send welcome image
  await ctx.replyWithPhoto(
    { source: imagePath },
    {
      caption:
        "🍫 *Welcome to the Nestlé KitKat Cashback Rewards!* 🎉\n\n🎁 Claim your exclusive cashback in just a few simple steps.\n\n👇 Tap the Claim button below to get started!",
      parse_mode: "Markdown",
    }
  );

  // Send Mini App button
  await ctx.reply(
    "
    Markup.keyboard([
      [
        Markup.button.webApp(
          "🎁 Open Mini App",
          "https://nestle-kitkat-reward.netlify.app"
        ),
      ],
    ])
      .resize()
      .oneTime()
  );
});

bot.launch();

console.log("✅ Bot is running...");
